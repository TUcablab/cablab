# Pat/Peer Affinity Task

Code and analysis materials for PAT

This README is manuscript-aligned and reproducibility-focused. It documents:
- what each major file group does,
- which scripts are used at each workflow stage,
- and how analysis choices map to the manuscript/supplement.

## 1) Study

BioArchive link, OpenNeuro data in the future

final sample size

## 2) Task Description

PAT description


## 3) Imaging + Preprocessing (As Documented in Manuscript/Supplement)
Ask Shenghan to add when manuscript is finished

## 4) Core directories

- `code/`
  - canonical script entry points for conversion, preprocessing wrappers, FEAT L1/L2/L3, ROI extraction
- `templates/`
  - FEAT `.fsf` templates used by L1/L2/L3 scripts
- `masks/`
  - anatomical/functional/network masks and seed ROIs (VS, mPFC, TPJ, DMN/network masks)
- `derivatives/`
  - generated analysis outputs (subset tracked in git)

## 5) Script-by-Script Workflow Map: preprocessing

### A) preprocessing: prepdata from DICOM to bid-compatible nifti through heudiconv
   **MUST INSTALL PYDEFACE BEFOREHAND** 

    
    Heuristic files called by prepdata:
    - heuristic.py
    - heuristic0.py
    - heuristic2.py

### B) preprocessing: Warpkit - multi-echo distortions correction


### C) preprocessing:  preprocessing: Run fMRIPrep and tedana

fMRIPrep files:
- `code/run_fmriprep.sh`
- `code/fmriprep.sh`

tedana files:
- `code/run_tedana.sh`
- `code/tedana.sh`

Outputs:
- `derivatives/fmriprep/sub-*/...desc-preproc_bold.nii.gz`
Run MRIQC (recommended QC stage)



### D) preprocessing: tedanna for multi-echo-based denoising
for  confound


### E) preprocessing: mriqc - quality control terms

where you get fdmean (mean framewise displacement) and TSNR (temporal signal to noise ratio), individualize noise control covariates in L3

Primary files:
- `code/run_mriqc-hpc.sh`
- `code/mriqc-hpc.sh`

## 6) Script-by-Script Workflow Map: analyses

### A) Locally sorting the raw behavioral files to event files, then to three-column file
need to elaborate

### B)


