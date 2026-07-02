#goal: extracting roi mean (VS) in the format of output z stats (L2 or L1 output for various cope of interest for each individual; no L2 -> get L1 run 1; no run 1, get run 2; ) 
#for shared reward and later trust (VS, mPFC, TPJ)
#input: mask, sublist, cope #;for retrieving input, naming & file categorizing: MODEL name, task, N, type (task MODEL ppi sm)
#output: one 1XN column of roimean(1 average Z from roi from each p) for each cope in each ROImean txt file
# 1. get mask (check)
# for each sub (sublist from L3 sub used in analyses with outliers/filtered) -> how
#for all cope, generate 1 cope specific txt file catching the append from each sub
# for each sub's each cope, 
# 2: if for  there is L2 output, get the L2 roi mean
#no L2 then file name = L1 run 1
#no L1 run 1 then file name = L2 run 2			
#get the L2 roi mean, append to cope specific 


#Q: 
#check whether fslmeant append work at all
#need to swap in the actual L3 sublist 

#!/usr/bin/env bash
# ensure paths are correct irrespective from where user runs the script


#/ZPOOL/data/projects/r01-soi
#/gpfs/scratch/tug87422/smithlab-shared/r01-soi

scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"

# ROI name and other path information
        TASK=gonogo	#pat
	MODEL=1 #NOTE: L1 L2 model not L3 # H2 H3 1
	sm=5
	N=118 #for distinguishing analyses iteration
	sublist="${maindir}/code/sublist-118.txt"
		

for ROI in bilatdACC_act_FA  lOperculumAIns_act_CR  rdlPFC_act_CR lAIns_act_FA  lPPC_act_CR rPPC_act_CR ldlPFC_act_CR rAIns_act_FA rvlPFC_act_CR; do

	MASK=${maindir}/masks/gonogo_funcROI_n118/${ROI}.nii.gz # for group mean
	for TYPE in act; do #ppi_seed-VS nppi-dmn;do #act #nppi-dmn, act, ppi_seed-VS # remember to change according to the MODEL
	outputdir=${maindir}/derivatives/group_means/${TASK}_${TYPE}_model-${MODEL}_n${N}_zstat
	#rm -rf outputdir #clean up erroneous output
	mkdir -p $outputdir
	
	#contrast for gonogo
	for COPENUM in {1..7}; do
		#cnum_padded=`zeropad ${COPENUM} 2` not 0 padded for L1 L2 output

#echo "processing ${COPENUM}"		
# swapping your breaking of bid formatting with the branching out folder bc of multiple version of output "n116_fmriprep24" "hpc"
		while IFS= read -r subject; do  # (somehow) all the fix for these outliers in 2 tasks are to change to run 1 L1
			
			# outlier specific swapping 
			#if [[ ${TASK}="sharedreward"&& ("$subject" == "10954" || "$subject" == "11007") ]]; then
#    		files=$(ls -1 "${maindir}/derivatives/fsl/n116_fmriprep24/sub-$subject/L1_task-${TASK}_model-${MODEL}_type-${TYPE}_run-1_sm-${sm}.feat/stats/zstat${COPENUM}.nii.gz" 2>/dev/null)	
#    		fslmeants -i "${files}" -m "${MASK}" >> "${outputdir}/${ROI}_${TASK}_type-${TYPE}_zstat-${COPENUM}.txt"
#    		echo "${subject} ${TASK} outlier situation dealt with"
#			continue
#         
#         elif [[ ${TASK}="trust" && ("$subject" == "10741" || "$subject" == "10827" || "$subject" == "10838" || "$subject" == "10857" || "$subject" == "10887"|| "$subject" == "10983") ]]; then
#    		files=$(ls -1 "${maindir}/derivatives/fsl/n116_fmriprep24/sub-$subject/L1_task-${TASK}_model-${MODEL}_type-${TYPE}_run-1_sm-${sm}.feat/stats/zstat${COPENUM}.nii.gz" 2>/dev/null)	
#    		fslmeants -i "${files}" -m "${MASK}" >> "${outputdir}/${ROI}_${TASK}_type-${TYPE}_zstat-${COPENUM}.txt"
#    		echo "${subject} ${TASK} outlier situation dealt with"
#			continue
#			
#         else
			#echo "subject ${subject}"
  			files=$(ls -1 "${maindir}/derivatives/fsl/sub-$subject/L2_task-${TASK}_model-${MODEL}_type-${TYPE}_sm-${sm}.gfeat/cope${COPENUM}.feat/stats/zstat1.nii.gz" 2>/dev/null)
   			 if [ -z "$files" ]; then
    		   files=$(ls -1 "${maindir}/derivatives/fsl/sub-$subject/L1_task-${TASK}_model-${MODEL}_type-${TYPE}_run-1_sm-${sm}.feat/stats/zstat${COPENUM}.nii.gz" 2>/dev/null)
   			 fi
   			 
#    			 if [ -z "$files" ]; then
#       		 files=$(ls -1 "${maindir}/derivatives/fsl/n116_fmriprep24/sub-$subject/L1_task-${TASK}_model-${MODEL}_type-${TYPE}_run-2_sm-${sm}.feat/stats/zstat${COPENUM}.nii.gz" 2>/dev/null)  
#				fi
#				
				#echo $((-n "$files" ))
					#if [-n "files"]; then   -n is not 
    				if [ -n "$files" ]; then
    			echo "identified ${subject} z stats ${files}" 
					# need to test does this really work?
					fslmeants -i ${files} -m ${MASK} >> ${outputdir}/${ROI}_${TASK}_type-${TYPE}_${model}_zstat-${COPENUM}.txt
	    			else
	    			echo "Check path: fail to locate ${subject}'s Z-stats ${files}"
    				fi
#			fi
		done < "$sublist"
	done
 done
done

echo "${ROI} mean Z saved in ${maindir}/derivatives/group_means/${TASK}_${TYPE}_model-${MODEL}_n${N}_zstat"

