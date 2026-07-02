#!/usr/bin/env bash

#the cleaned up activation only version

# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"

litedatadir=/data/chein-preprocessing/derivatives/fmriprep # later split litedatadir and projectdir (maindir)

# study-specific inputs
SM=5
SUB=$1
SES=$2
RUN=$3
PPI=$4 # 0 for activation, otherwise seed region or network
TASK=$5

MAINOUTPUT=${maindir}/derivatives/fsl/sub-${SUB}
mkdir -p $MAINOUTPUT
DATA=${litedatadir}/sub-${SUB}/ses-${SES}/func/sub-${SUB}_ses-${SES}_task-${TASK}_run-${RUN}_part-mag_space-MNI152NLin6Asym_desc-preproc_bold.nii.gz

if [ ! -e $DATA ]; then
	echo "missing data: $DATA " >> ${maindir}/re-runL1_nogogo.log
	exit # exiting to ensure nothing gets run without confounds
fi

NVOLUMES=`fslnvols $DATA`
CONFOUNDEVS=${maindir}/derivatives/fsl/confounds_tedana/sub-${SUB}/ses-${SES}/sub-${SUB}_ses-${SES}_task-${TASK}_run-${RUN}_desc-TedanaPlusConfounds.tsv


if [ ! -e $CONFOUNDEVS ]; then
	echo "missing confounds: $CONFOUNDEVS " >> ${maindir}/re-runL1_gonogo.log
	exit # exiting to ensure nothing gets run without confounds
fi
#VDIR=${maindir}/derivatives/fsl/EVfiles/sub-${SUB}/${TASK}/run-${RUN}
EVDIR=${maindir}/derivatives/fsl/EVfiles/sub-${SUB}_task-${TASK}_run-${RUN}_events

TYPE=act
OUTPUT=${MAINOUTPUT}/L1_task-${TASK}_model-1_type-${TYPE}_run-${RUN}_sm-${SM}


# check for output and skip existing
	if [ -e ${OUTPUT}.feat/cluster_mask_zstat1.nii.gz ]; then
		exit
	else
		echo "No $OUTPUT, creating now " >> ${maindir}/re-runL1_gonogo.log
		rm -rf ${OUTPUT}.feat
	fi

# create template and run analyses
	ITEMPLATE=${maindir}/templates/L1_task-${TASK}_model-1_type-${TYPE}.fsf
	OTEMPLATE=${MAINOUTPUT}/L1_sub-${SUB}_task-${TASK}_model-1_seed-${PPI}_run-${RUN}.fsf
		sed -e 's@OUTPUT@'$OUTPUT'@g' \
		-e 's@DATA@'$DATA'@g' \
		-e 's@EVDIR@'$EVDIR'@g' \
		-e 's@SMOOTH@'$SM'@g' \
		-e 's@CONFOUNDEVS@'$CONFOUNDEVS'@g' \
		<$ITEMPLATE> $OTEMPLATE
    	feat $OTEMPLATE
    	
# fix registration as per NeuroStars post:
# https://neurostars.org/t/performing-full-glm-analysis-with-fsl-on-the-bold-images-preprocessed-by-fmriprep-without-re-registering-the-data-to-the-mni-space/784/3
mkdir -p ${OUTPUT}.feat/reg
ln -s $FSLDIR/etc/flirtsch/ident.mat ${OUTPUT}.feat/reg/example_func2standard.mat
ln -s $FSLDIR/etc/flirtsch/ident.mat ${OUTPUT}.feat/reg/standard2example_func.mat
ln -s ${OUTPUT}.feat/mean_func.nii.gz ${OUTPUT}.feat/reg/standard.nii.gz

# delete unused files
rm -rf ${OUTPUT}.feat/stats/res4d.nii.gz
rm -rf ${OUTPUT}.feat/stats/corrections.nii.gz
rm -rf ${OUTPUT}.feat/stats/threshac1.nii.gz
#rm -rf ${OUTPUT}.feat/filtered_func_data.nii.gz
