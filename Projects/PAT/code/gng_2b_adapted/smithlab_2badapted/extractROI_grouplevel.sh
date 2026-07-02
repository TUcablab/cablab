#!/usr/bin/env bash

# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"

# ROI name and other path information
#for ROI in cope10_win-lose_striatum_L_roi; do
#for ROI in cnum31_cov15-3_533 cnum31_cov15-2_533 cnum31_cov15-1_533; do
#for ROI in cnum31_cov11-3_533 cnum31_cov11-2_533 cnum31_cov11-1_533; do
#thr_seed-postTPJ;thr_seed-mPFC


#for ROI in thr_mPFC_neurosynth;do
#thr_mPFC_neurosynth thr_seed-postTPJ roi_lTPJ_func_H2_3 roi_lmPFC_func_H2_3
#for ROI in thr_seed-VS thr_seed_mPFC thr_seed-postTPJ; do
for ROI in roi_cerebellum_func_nppi_trustCOPE18 roi_mPFC_func_nppi_trustCOPE18 roi_rPFC_func_nppi_trustCOPE18 roi_lparietal_func_nppi_trustCOPE16 roi_rInsula_func_nppi_trustCOPE16; do
#	MASK=${maindir}/masks/brain_images/${ROI}.nii.gz # for group mean
	MASK=${maindir}/masks/${ROI}.nii.gz # for group mean
   TASK=trust	
	#TASK=trust # remember to change according to the model
	#TYPE=ppi_seed-VS # remember to change according to the model
	#ls 
	TYPE=nppi-dmn
	#TYPE=act
	N=91
	
#	N=95 # remember to change according to the model
	model=H3 # remember to change according to the model
#	model=H2
	outputdir=${maindir}/derivatives/group_means/${TASK}_${TYPE}_model-${model}_n${N}
	mkdir -p $outputdir
#for COPENUM in {1..6} 14 16; do #sharedreward
   for COPENUM in {4..9} 10 16 17 18; do #trust f-c
  # for COPENUM in {4..9} 10 12 18; do #trust f-s
#	for COPENUM in {1..6}; do ### if TYPE is ppi, cope number should change! OR should it???
#	for COPENUM in {7..9}; do
  #for COPENUM in {1..6};do
		cnum_padded=`zeropad ${COPENUM} 2`
		MAINOUTPUT=${maindir}/derivatives/fsl/L3_task-${TASK}_model-${model}_type-${TYPE}_n${N}
		#DATA=`ls -1 ${MAINOUTPUT}/L3_task-${TASK}_type-c_*cnum-${cnum_padded}_*onegroup.gfeat/cope1.feat/filtered_func_data.nii.gz`
		DATA=`ls -1 ${MAINOUTPUT}/L3_task-${TASK}_type-${TYPE}_cnum-${cnum_padded}_*onegroup.gfeat/cope1.feat/filtered_func_data.nii.gz`
               # DATA=/ZPOOL/data/projects/rf1-sra-trust/derivatives/fsl/L3act/L3_model-full_task-trust_seed-0_n123_flame1/L3_task-trust_act_cnum-10_cname-rec-def_onegroup.gfeat/cope1.feat/filtered_func_data.nii.gz
		fslmeants -i $DATA -o ${outputdir}/${ROI}_type-${TYPE}_cope-${cnum_padded}.txt -m ${MASK}

	done
done
