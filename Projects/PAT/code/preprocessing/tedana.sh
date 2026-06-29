#!/bin/bash

# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"
toolsdir=/data/chein-preprocessing/tools

rm -f $scriptdir/missing-tedanaInput.log

sub=$1

for ses in {01..02}; do

    prepdir=$maindir/derivatives/fmriprep/sub-${sub}/ses-${ses}/func
    [[ ! -d "$prepdir" ]] && continue

    for task in gonogo pat; do
        for run in {1..4}; do

            # prepare inputs and outputs
            echo1=${prepdir}/sub-${sub}_ses-${ses}_task-${task}_run-${run}_echo-1_part-mag_desc-preproc_bold.nii.gz
            echo2=${prepdir}/sub-${sub}_ses-${ses}_task-${task}_run-${run}_echo-2_part-mag_desc-preproc_bold.nii.gz
            echo3=${prepdir}/sub-${sub}_ses-${ses}_task-${task}_run-${run}_echo-3_part-mag_desc-preproc_bold.nii.gz
            echo4=${prepdir}/sub-${sub}_ses-${ses}_task-${task}_run-${run}_echo-4_part-mag_desc-preproc_bold.nii.gz
            
            outdir=${maindir}/derivatives/tedana/sub-${sub}/ses-${ses}

            # Check for the presence of all echo files
            if [ ! -e $echo1 ] || [ ! -e $echo2 ] || [ ! -e $echo3 ] || [ ! -e $echo4 ]; then
                echo "Missing one or more files for sub-${sub}, ses-${ses}, task-${task}, run-${run}" >> $scriptdir/missing-tedanaInput.log
                echo "#Skipping sub-${sub}, ses-${ses}, task-${task}, run-${run}"
                continue
            fi

            mkdir -p $outdir
            
                # Initialize echo time variables
            echotime1=""
            echotime2=""
            echotime3=""
            echotime4=""

            # Extract echo times from the first script output
            for echo in 1 2 3 4; do
                json_file=$(find "$maindir/bids" -name "sub-${sub}_ses-${ses}_task-${task}_run-${run}_echo-${echo}_part-mag_bold.json")
                if [ -n "$json_file" ]; then
                    echo_time=$(grep -o '"EchoTime": [0-9.]*' "$json_file" | cut -d' ' -f2 | tr -d '\r')
                    eval "echotime${echo}=${echo_time}"
                else
                    echo "missing JSON for echo-${echo} for sub-${sub}, ses-${ses}, task-${task}, run-${run}"
                    echo "missing JSON for echo-${echo} for sub-${sub}, ses-${ses}, task-${task}, run-${run}" >> $scriptdir/missing-tedanaInput.log
                fi
            done

            tedana -d $echo1 $echo2 $echo3 $echo4 \
            -e $echotime1 $echotime2 $echotime3 $echotime4 \
            --out-dir $outdir \
            --prefix sub-${sub}_ses-${ses}_task-${task}_run-${run} \
            --convention bids \
            --fittype curvefit \
            --overwrite

                        # clean up and save space
                # rm -rf ${outdir}/sub-${sub}_ses-${ses}_task-${task}_run-${run}_*.nii.gz

        done
    done
done
