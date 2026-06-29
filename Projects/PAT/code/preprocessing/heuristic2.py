from __future__ import annotations

import logging
from typing import Optional

from heudiconv.utils import SeqInfo

lgr = logging.getLogger("heudiconv")

def create_key(template, outtype=("nii.gz",),
    annotation_classes= None):
    if template is None or not template:
        raise ValueError("Template must be a valid format string")
    return (template, outtype, annotation_classes)

def infotodict(seqinfo):
    t1w = create_key('sub-{subject}/{session}/anat/sub-{subject}_{session}_T1w')
    mag = create_key('sub-{subject}/{session}/fmap/sub-{subject}_{session}_acq-bold_magnitude')
    phase = create_key('sub-{subject}/{session}/fmap/sub-{subject}_{session}_acq-bold_phasediff')
    t2_flair = create_key('sub-{subject}/{session}/anat/sub-{subject}_{session}_FLAIR')
    pat_mag = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-pat_run-{item:d}_part-mag_bold')
    pat_phase = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-pat_run-{item:d}_part-phase_bold')
    pat_sbref = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-pat_run-{item:d}_sbref')
    pat_sbref_pha = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-pat_run-{item:d}_part-phase_sbref')
    gonogo_mag = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-gonogo_run-{item:d}_part-mag_bold')
    gonogo_phase = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-gonogo_run-{item:d}_part-phase_bold')
    gonogo_sbref = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-gonogo_run-{item:d}_sbref')
    gonogo_sbref_pha = create_key('sub-{subject}/{session}/func/sub-{subject}_{session}_task-gonogo_run-{item:d}_part-phase_sbref')
    dwi = create_key('sub-{subject}/{session}/dwi/sub-{subject}_{session}_dwi')
    dwi_pa = create_key('sub-{subject}/{session}/fmap/sub-{subject}_{session}_acq-dwi_dir-PA_epi')
    dwi_ap = create_key('sub-{subject}/{session}/fmap/sub-{subject}_{session}_acq-dwi_dir-AP_epi')
    
    info = {
            t1w: [],
            mag: [], phase: [],
            t2_flair: [],
            dwi: [], dwi_pa: [], dwi_ap: [],
            pat_mag: [], pat_phase: [], pat_sbref: [], pat_sbref_pha: [],
            gonogo_mag: [], gonogo_phase: [], gonogo_sbref: [], gonogo_sbref_pha: [],
            }
    
    list_of_ids = [s.series_id for s in seqinfo]

    for s in seqinfo:
        # anatomical and standard fmaps
        if ('t1' in s.protocol_name):
            info[t1w] = [s.series_id]
        if ('gre_field' in s.protocol_name) and ('P' not in s.image_type):
            idx = list_of_ids.index(s.series_id)
            if idx + 1 < len(seqinfo) and 'P' in seqinfo[idx + 1].image_type:
                info[mag].append(s.series_id)  # magnitude (scan 6)
        if ('gre_field' in s.protocol_name) and ('P' in s.image_type):
            info[phase] = [s.series_id]  # phasediff (scan 7)
        if ('t2_tse_dark-fluid_tra_p3' in s.protocol_name) and (s.dim3 == 47):
            info[t2_flair] = [s.series_id]

        # diffusion images and se fmaps
        if ('cmrr_fieldmapse_ap' in s.protocol_name) and (s.dim4 == 2):
            info[dwi_ap] = [s.series_id]
        if ('cmrr_fieldmapse_pa' in s.protocol_name) and (s.dim4 == 2):
            info[dwi_pa] = [s.series_id]
        if ('cmrr_mb3hydi_ipat2_64ch' in s.protocol_name) and (s.dim4 == 145):
            info[dwi] = [s.series_id]

        # functionals: mag, phase, sbref

        if (s.dim4 > 100) and ('PAT' in s.series_description) and ('_Pha' not in s.series_description):
            info[pat_mag].append(s.series_id)
            idx = list_of_ids.index(s.series_id)
            info[pat_sbref].append(list_of_ids[idx - 2])      # e.g. task_pat_run1_CMRR_MB3_IP2_ME4_TR1615_SBRef
            info[pat_sbref_pha].append(list_of_ids[idx - 1])  # e.g. task_pat_run1_CMRR_MB3_IP2_ME4_TR1615_SBRef_Pha
        if (s.dim4 > 100) and ('PAT' in s.series_description) and ('TR1615_fleet_Pha' in s.series_description):
            info[pat_phase].append(s.series_id)

        if (s.dim4 > 100) and ('pGNG' in s.series_description) and ('_Pha' not in s.series_description):
            info[gonogo_mag].append(s.series_id)
            idx = list_of_ids.index(s.series_id)
            info[gonogo_sbref].append(list_of_ids[idx - 2])      # e.g. task_gonogo_run1_CMRR_MB3_IP2_ME4_TR1615_SBRef
            info[gonogo_sbref_pha].append(list_of_ids[idx - 1])  # e.g. task_gonogo_run1_CMRR_MB3_IP2_ME4_TR1615_SBRef_Pha
        if (s.dim4 > 100) and ('pGNG' in s.series_description) and ('TR1615_Pha' in s.series_description):
            info[gonogo_phase].append(s.series_id)
                 
    return info

POPULATE_INTENDED_FOR_OPTS = {
        'matching_parameters': ['ModalityAcquisitionLabel'],
        'criterion': 'Closest'
}
