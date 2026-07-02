#!/bin/bash

# ensure paths are correct
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"
toolsdir=/data/chein-preprocessing/tools
bidsdir=$maindir/bids
scratchdir=$maindir/scratch
projectname="chein"

sub=$1

# make derivatives folder if it doesn't exist.
# moved outside session loop since it only needs to happen once
if [ ! -d $maindir/derivatives/fmriprep ]; then
    mkdir -p $maindir/derivatives/fmriprep
fi

TEMPLATEFLOW_DIR=$toolsdir/templateflow
MPLCONFIGDIR_DIR=$toolsdir/mplconfigdir
export SINGULARITYENV_TEMPLATEFLOW_HOME=/opt/templateflow
export SINGULARITYENV_MPLCONFIGDIR=/opt/mplconfigdir

for ses in "01"; do

    singularity run --cleanenv \
    -B ${TEMPLATEFLOW_DIR}:/opt/templateflow \
    -B ${MPLCONFIGDIR_DIR}:/opt/mplconfigdir \
    -B $maindir:/base \
    -B $toolsdir/licenses:/opts \
    -B $scratchdir:/scratch \
    $toolsdir/fmriprep-25.2.4.simg \
    /base/bids /base/derivatives/fmriprep \
    participant --participant_label $sub \
    -t gonogo \
    --skip-bids-validation \
    --n-cpus 8 \
    --omp-nthreads 7 \
    --mem-mb 55000 \
    --session-label $ses \
    --me-output-echos \
    --output-spaces MNI152NLin6Asym \
    --bids-filter-file /base/code/fmriprep_config.json \
    --fs-no-reconall --fs-license-file /opts/fs_license.txt

    # --cifti-output 91k \
    # --output-spaces fsLR fsaverage MNI152NLin6Asym \

done
