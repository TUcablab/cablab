#!/bin/bash

# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"

# setting inputs and common variables

SUB=$1
SES=$2
TYPE=$3

task=gonogo # task-specific stat script hard coded
sm=5 # edit if necessary 


MAINOUTPUT=${maindir}/derivatives/fsl/sub-${SUB} #MAINOUTPUT=${maindir}/derivatives/fsl/sub-${SUB}/ses-${SES} add after
NCOPES=7 #initial template for Allison has 7: 1. CR 2. FA 3. hit 4. miss 5. high_low_cue 6. CR_hitgo 7. FA_hitgo  (enter COPE # pre-PPI)
model=1 # change model number according to template 

# find valid runs
valid_runs=()

for run in 1 2 3 4; do
	#featdir="${MAINOUTPUT}/L1_task-${task}_ses-${SES}_model-${model}_type-${TYPE}_run-${run}_sm-${sm}.feat"
    featdir="${MAINOUTPUT}/L1_task-${task}_model-${model}_type-${TYPE}_run-${run}_sm-${sm}.feat"
    echo $featdir
    [ -e "${featdir}/stats/cope7.nii.gz" ] && valid_runs+=("${featdir}") # check last cope
done

nruns=${#valid_runs[@]}

# exit if no runs
[ "$nruns" -eq 0 ] && {
    echo "Error: No valid runs found for sub-${SUB}, type-${TYPE}"
    exit 1
}

[ "$nruns" -eq 1 ] && {
    echo "Error: only one valid run found for sub-${SUB}, type-${TYPE}"
    exit 1
}

echo "Detected $nruns valid runs for sub-${SUB}, type-${TYPE}"

# assign inputs sequentially
INPUT1="${valid_runs[0]}"
INPUT2="${valid_runs[1]}"
INPUT3="${valid_runs[2]}"
INPUT4="${valid_runs[3]}"


# ppi has more contrasts than act (phys), so need a different L2 template
if [ "${TYPE}" == "act" ]; then
    ITEMPLATE=${maindir}/templates/L2_task-${task}_model-${model}_nruns-${nruns}_type-act.fsf
    NCOPES=${NCOPES}
else
    ITEMPLATE=${maindir}/templates/L2_task-${task}_model-${model}_nruns-${nruns}_type-ppi.fsf
    let NCOPES=${NCOPES}+1 # add 1 since we tend to only have one extra contrast for PPI
fi

# check for existing output and re-do if missing/incomplete
OUTPUT=${MAINOUTPUT}/L2_task-${task}_model-${model}_type-${TYPE}_sm-${sm}

#OUTPUT=${MAINOUTPUT}/L2_task-${task}_ses-${SES}_model-${model}_type-${TYPE}_sm-${sm}

if [ -e ${OUTPUT}.gfeat/cope${NCOPES}.feat/cluster_mask_zstat7.nii.gz ]; then # enter last (act) or penultimate (ppi) cope
    echo "skipping existing output"
else
    echo "re-doing: ${OUTPUT}" >> re-runL2date-`date`.log
    rm -rf ${OUTPUT}.gfeat

    # set output template and run template-specific analyses
    OTEMPLATE=${MAINOUTPUT}/L2_task-${task}_model-${model}_type-${TYPE}.fsf
    
    # Build sed command based on number of runs
    if [ $nruns -eq 2 ]; then
        sed -e 's@OUTPUT@'$OUTPUT'@g' \
        -e 's@INPUT1@'$INPUT1'@g' \
        -e 's@INPUT2@'$INPUT2'@g' \
        <$ITEMPLATE> $OTEMPLATE
    elif  [ $nruns -eq 3 ]; then
        sed -e 's@OUTPUT@'$OUTPUT'@g' \
        -e 's@INPUT1@'$INPUT1'@g' \
        -e 's@INPUT2@'$INPUT2'@g' \
        -e 's@INPUT3@'$INPUT3'@g' \
        <$ITEMPLATE> $OTEMPLATE
    elif [ $nruns -eq 4 ]; then
        sed -e 's@OUTPUT@'$OUTPUT'@g' \
        -e 's@INPUT1@'$INPUT1'@g' \
        -e 's@INPUT2@'$INPUT2'@g' \
        -e 's@INPUT3@'$INPUT3'@g' \
        -e 's@INPUT4@'$INPUT4'@g' \
        <$ITEMPLATE> $OTEMPLATE
    fi
    
    feat $OTEMPLATE

    # delete unused files
    for cope in `seq ${NCOPES}`; do
        rm -rf ${OUTPUT}.gfeat/cope${cope}.feat/stats/res4d.nii.gz
        rm -rf ${OUTPUT}.gfeat/cope${cope}.feat/stats/corrections.nii.gz
        rm -rf ${OUTPUT}.gfeat/cope${cope}.feat/stats/threshac1.nii.gz
        #rm -rf ${OUTPUT}.gfeat/cope${cope}.feat/filtered_func_data.nii.gz
        rm -rf ${OUTPUT}.gfeat/cope${cope}.feat/var_filtered_func_data.nii.gz
    done
fi
