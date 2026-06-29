#!/usr/bin/env python

import os
import pandas as pd
from natsort import natsorted
import re
import numpy as np

fmriprep_dir = '../derivatives/fmriprep/'
tedana_dir = '../derivatives/tedana/'

metric_files = natsorted([os.path.join(root, f) for root, dirs, files in os.walk(
    tedana_dir) for f in files if f.endswith("tedana_metrics.tsv")])
subs = set([re.search(r"(sub-[^/]+)", file).group(1) for file in metric_files])

for file in metric_files:
    # Read in the directory, sub-num, ses-num, and run-num
    base = re.search("(.*)tedana_metrics", file).group(1)
    run = re.search(r"run-(\w+)_desc-tedana", file).group(1)
    sub = re.search(r"(sub-[^/]+)", file).group(1)
    task = re.search(r"_task-(.*?)_", file).group(1)

    ses_match = re.search(r"(ses-[^/]+)", file)
    ses = ses_match.group(1) if ses_match else None

    # Build paths with or without session
    if ses:
        tedana_confounds_fname = (
            f"{tedana_dir}{sub}/{ses}/"
            f"{sub}_{ses}_task-{task}_run-{run}_desc-confounds_timeseries.tsv"
        )
        fmriprep_fname = (
            f"{fmriprep_dir}{sub}/{ses}/func/"
            f"{sub}_{ses}_task-{task}_run-{run}_part-mag_desc-confounds_timeseries.tsv"
        )
        outfname = (
            f"{tedana_dir}../fsl/confounds_tedana/{sub}/{ses}/"
            f"{sub}_{ses}_task-{task}_run-{run}_desc-TedanaPlusConfounds.tsv"
        )
        outdir = f"{tedana_dir}../fsl/confounds_tedana/{sub}/{ses}"
        ses_label = ses
    else:
        tedana_confounds_fname = (
            f"{tedana_dir}{sub}/"
            f"{sub}_task-{task}_run-{run}_desc-confounds_timeseries.tsv"
        )
        fmriprep_fname = (
            f"{fmriprep_dir}{sub}/func/"
            f"{sub}_task-{task}_run-{run}_part-mag_desc-confounds_timeseries.tsv"
        )
        outfname = (
            f"{tedana_dir}../fsl/confounds_tedana/{sub}/"
            f"{sub}_task-{task}_run-{run}_desc-TedanaPlusConfounds.tsv"
        )
        outdir = f"{tedana_dir}../fsl/confounds_tedana/{sub}"
        ses_label = "no-session"

    print(f"base: {base}")
    print(f"tedana_confounds_fname: {tedana_confounds_fname}")
    print(f"fmriprep_fname: {fmriprep_fname}")

    tedana_exists = os.path.exists(tedana_confounds_fname)
    fmriprep_exists = os.path.exists(fmriprep_fname)

    if not tedana_exists:
        print(f"Missing tedana confounds for {sub} {ses_label} {run} {task}")
        continue
    if not fmriprep_exists:
        print(f"fmriprep failed for {sub} {ses_label} {run} {task}")
        continue

    print(f"Making Confounds: {sub} {ses_label} {run}")

    tedana_confounds = pd.read_csv(tedana_confounds_fname, sep='\t')
    fmriprep_confounds = pd.read_csv(fmriprep_fname, sep='\t')
    ICA_mixing = pd.read_csv(f'{base}ICA_mixing.tsv', sep='\t')
    metrics = pd.read_csv(f'{base}tedana_metrics.tsv', sep='\t')
    bad_components = ICA_mixing[metrics[metrics['classification'] == 'rejected']['Component']]

    # aCompCor - from fmriprep, grab whatever is available
    aCompCor_candidates = ['a_comp_cor_00', 'a_comp_cor_01', 'a_comp_cor_02', 'a_comp_cor_03', 'a_comp_cor_04', 'a_comp_cor_05']
    aCompCor = [col for col in aCompCor_candidates if col in fmriprep_confounds.columns]
    if len(aCompCor) < len(aCompCor_candidates):
        print(f"  Warning: Only found {len(aCompCor)}/{len(aCompCor_candidates)} aCompCor columns in fmriprep")

    # cosine and NSS from tedana confounds
    cosine = [col for col in fmriprep_confounds if col.startswith('cosine')]
    NSS = [col for col in fmriprep_confounds if col.startswith('non_steady_state')]

    # motion and FD from fmriprep
    motion = [col for col in ['trans_x', 'trans_y', 'trans_z', 'rot_x', 'rot_y', 'rot_z'] if col in fmriprep_confounds.columns]
    fd = [col for col in ['framewise_displacement'] if col in fmriprep_confounds.columns]

    # Build final confounds dataframe
    fmriprep_cols = cosine + NSS + motion + aCompCor + fd 
#print(f"columns: {fmriprep_cols}")
    confounds_df = pd.concat([
        fmriprep_confounds[fmriprep_cols],
        bad_components
    ], axis=1)

    # Replace n/a values with 0 so that FSL doesn't ignore the whole column and shift other values
    confounds_df.fillna(0, inplace=True)

    # Output in FSL-friendly format
    os.makedirs(outdir, exist_ok=True)
    confounds_df.to_csv(outfname, index=False, header=False, sep='\t')
