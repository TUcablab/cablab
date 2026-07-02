#!/usr/bin/env bash
# Example code for heudiconv and pydeface. This will get your data ready for analyses.
# This code will convert DICOMS to BIDS (PART 1). Will also deface (PART 2).

sub=$1
ses=$2

# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
dsroot="$(dirname "$scriptdir")"
sourcedata=/data/Project_LITE/Imaging/LITE_PAT/sourcedata
cutoff_epoch=$(date -d '2025-03-04' +%s) # March 4, 2025

# Reset heuristics_file to avoid leakage from prior runs in the same shell
unset heuristics_file

if [ "$ses" = "02" ]; then
    folder_sub="Chein_LITE2_P${sub}"
    subdir="$sourcedata/${folder_sub}"
    scandir="$subdir/scans"

    if [ ! -d "$subdir" ]; then
        echo "No ses-02 directory found at $subdir for sub-${sub}. Skipping ses-${ses}."
        exit 0
    fi

    if ! find "$scandir" -type f -name '*.dcm' ! -name '._*' -print -quit 2>/dev/null | grep -q .; then
        echo "No ses-02 DICOMs for sub-${sub}. Skipping ses-${ses}."
        exit 0
    fi

    heuristics_file="/out/code/heuristic2.py"
    dicom_template="/sourcedata/Chein_LITE2_P{subject}/scans/*/*/DICOM/files/*.dcm"
    seen="XA30 heuristic, session 2"
else
    folder_sub="Chein_LITE1_P${sub}"
    dicom_template="/sourcedata/Chein_LITE1_P{subject}/scans/*/*/DICOM/files/*.dcm"
    subdir="$sourcedata/${folder_sub}/"
    scandir="$subdir/scans"

    if [ ! -d "$subdir" ]; then
        echo "No ses-01 directory found at $subdir for sub-${sub}. Skipping ses-${ses}."
        exit 0
    fi

    # Find one DICOM and read the actual acquisition date from the header
    sample_dcm=$(find "$scandir" -type f -name '*.dcm' ! -name '._*' -print -quit 2>/dev/null)

    if [ -z "$sample_dcm" ]; then
        echo "No ses-01 DICOMs for sub-${sub}. Skipping ses-${ses}."
        exit 0
    fi

    epoch=$(python3 -c "
import pydicom, sys
from datetime import datetime

ds = pydicom.dcmread(sys.argv[1], stop_before_pixels=True)
study_date = getattr(ds, 'StudyDate', '') or getattr(ds, 'AcquisitionDate', '')
study_time = getattr(ds, 'StudyTime', '') or getattr(ds, 'AcquisitionTime', '000000')

if not study_date:
    sys.exit(1)

study_time = study_time.split('.')[0].ljust(6, '0')
dt = datetime.strptime(study_date + study_time, '%Y%m%d%H%M%S')
print(int(dt.timestamp()))
" "$sample_dcm")

    if [ $? -ne 0 ] || [ -z "$epoch" ]; then
        echo "ERROR: Could not read DICOM date for sub-${sub} ses-${ses} ($sample_dcm)" | tee -a "$dsroot/code/dicom_errors.log"
        exit 0
    fi

    if [ "$epoch" -le "$cutoff_epoch" ]; then
        heuristics_file="/out/code/heuristic0.py"
    else
        heuristics_file="/out/code/heuristic2.py"
    fi

    seen="$(date -d "@$epoch" '+%Y-%m-%d %H:%M:%S') [DICOM StudyDate]"
fi

echo "Heuristic chosen for sub-${sub} ses-${ses}: $(basename "$heuristics_file") [seen=${seen}]"

locdir=$sourcedata/localizers/$folder_sub

# Move localizers to avoid slice indices error
if [ ! -d "$locdir" ]; then
    mkdir -p "$locdir"
fi

for localizers in "$scandir"/*-localizer; do
    [ -d "$localizers" ] || continue
    echo "Moving $localizers to $locdir"
    mv "$localizers" "$locdir/"
done

# Make BIDS folder if it doesn't exist
if [ ! -d "$dsroot/bids-0" ]; then
    mkdir -p "$dsroot/bids-0"
fi

# Overwrite existing BIDS output for this subject/session
rm -rf "$dsroot/bids-0/sub-${sub}/ses-${ses}"

# Run heudiconv with the correct dicom template and heuristic file
apptainer run --cleanenv \
    -B "$dsroot:/out" \
    -B "$sourcedata:/sourcedata" \
    /data/chein-preprocessing/tools/heudiconv_1.3.3.sif \
    -d "$dicom_template" \
    -o /out/bids-0/ \
    -f "$heuristics_file" \
    -s "$sub" \
    -ss "$ses" \
    -c dcm2niix \
    -b --minmeta --overwrite

# Defacing anatomical scans and shifting dates for anonymization
bidsroot=$dsroot/bids-0

echo "Defacing subject $sub session $ses"
pydeface "$bidsroot/sub-${sub}/ses-${ses}/anat/sub-${sub}_ses-${ses}_T1w.nii.gz"

mv -f "$bidsroot/sub-${sub}/ses-${ses}/anat/sub-${sub}_ses-${ses}_T1w_defaced.nii.gz" "$bidsroot/sub-${sub}/ses-${ses}/anat/sub-${sub}_ses-${ses}_T1w.nii.gz"

python "$scriptdir/shiftdates.py" "$bidsroot/sub-${sub}/ses-${ses}/sub-${sub}_ses-${ses}_scans.tsv"
