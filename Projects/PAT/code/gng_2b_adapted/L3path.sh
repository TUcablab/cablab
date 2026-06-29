#!/bin/bash

#Add flag for activation/ppi {type} and model number

model=1
task=gonogo #pat
ppi=act #ppi_seed-VS  nppi-dmn
sm=5 
cope=7
#sharedreward 14 F-s(rew-pun), 16 F-C(rew-punish)); trust cope 12(F-S,rec-def), cope 18 (F-C,rec-def) 

#remove preexisting failed job
rm L3sublist_${task}_${ppi}_COPE${cope}_$(date +"%m%d%y").txt

# Path to the subject list file
sublist="/data/chein-preprocessing/code/sublist_anyprepfunc032026.txt"
featdir="/data/chein-preprocessing/derivatives/fsl/"

# Loop through each subject in the list
while IFS= read -r subject; do


 	#if [[ ${task}="sharedreward "&& ("$subject" == "10954" || "$subject" == "11007") ]]; then
	#	files=$(ls -1 "${featdir}/sub-$subject/L1_task-${task}_model-${model}_type-${ppi}_run-1_sm-${sm}.feat/stats/cope${cope}.nii.gz" 2>/dev/null) 
	#	echo "$files" >> L3sublist_${task}_${ppi}_COPE${cope}_$(date +"%m%d%y").txt            
	#	echo "${subject} ${task} outlier situation dealt with"       
	#	continue

	#if [[ ${task}="trust" && ("$subject" == "10741" || "$subject" == "10827" || "$subject" == "10838" || "$subject" == "10857" || "$subject" == "10887"|| "$subject" == "10983") ]]; then
	#	files=$(ls -1 "${featdir}/sub-$subject/L1_task-${task}_model-${model}_type-${ppi}_run-1_sm-${sm}.feat/stats/cope${cope}.nii.gz" 2>/dev/null)  
	#	echo "$files" >> L3sublist_${task}_${ppi}_COPE${cope}_$(date +"%m%d%y").txt
	#	echo "${subject} ${task} outlier situation dealt with" 
        #       continue
	#else
    
    files=$(ls -1 "${featdir}/sub-$subject/L2_task-${task}_model-${model}_type-${ppi}_sm-${sm}.gfeat/cope${cope}.feat/stats/cope1.nii.gz" 2>/dev/null)

    if [ -z "$files" ]; then
        files=$(ls -1 "${featdir}/sub-$subject/L1_task-${task}_model-${model}_type-${ppi}_run-1_sm-${sm}.feat/stats/cope${cope}.nii.gz" 2>/dev/null)
    fi

    if [ -z "$files" ]; then
        files=$(ls -1 "${featdir}/sub-$subject/L1_task-${task}_model-${model}_type-${ppi}_run-2_sm-${sm}.feat/stats/cope${cope}.nii.gz" 2>/dev/null)  
    fi

    if [ -n "$files" ]; then
        echo "$files" >> L3sublist_${task}_${ppi}_COPE${cope}_$(date +"%m%d%y").txt
    else 
	echo "$subject" >> L3sub_nonl1l2exist.txt
	echo "$subject neuro output doesn't exist"
    fi

	#fi
done < "$sublist"
