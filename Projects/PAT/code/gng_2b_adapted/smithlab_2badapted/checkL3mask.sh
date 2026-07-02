#!/bin/bash
#work on Linux, if want to do hpc need to swap line 4, 24 (for different tasks) and 41;

REF_MASK="/usr/local/fsl/data/standard/MNI152_T1_2mm_brain_mask.nii.gz"
ref_voxels=$(fslstats "$REF_MASK" -V | awk '{print $2}')
echo "Reference brain mask has $ref_voxels nonzero voxels."
echo

while read -r featdir; do
    echo ${featdir}
    subid=$(echo "$featdir" | grep -o "sub-[0-9]*")
    level=$(basename "$featdir" | grep -o "^L[12]")
    maskfile="${featdir}/mask.nii.gz"
    echo ${maskfile}
    
    if [[ -f "$maskfile" ]]; then
        data_voxels=$(fslstats "$maskfile" -V | awk '{print $2}')
        percent_missing=$(echo "scale=1; 100 * ($data_voxels - $ref_voxels) / $ref_voxels" | bc)
        percent_missing=$(echo "$percent_missing" | sed 's/-//')  # make absolute
        
        if (( $(echo "$percent_missing > 20.0" | bc -l) )); then
            printf "[!] %s (%s) is missing %.1f%%\n" "$subid" "$level" "$percent_missing"
            
            if [[ "$level" == "L2" ]]; then
                for run in 1 2; do #sharedreward
                    l1mask="/ZPOOL/data/projects/r01-soi/derivatives/fsl/hpc/${subid}/L1_task-trust_model-1_type-act_run-${run}_sm-5.feat/mask.nii.gz"
                    if [[ -f "$l1mask" ]]; then
                        l1_voxels=$(fslstats "$l1mask" -V | awk '{print $2}')
                        l1_missing=$(echo "scale=1; 100 * ($l1_voxels - $ref_voxels) / $ref_voxels" | bc)
                        l1_missing=$(echo "$l1_missing" | sed 's/-//')
                        printf "    └── L1 run-%d: %.1f%% of mask voxels missing.\n" "$run" "$l1_missing"
                    else
                        echo "    └── L1 run-${run} mask not found for $subid"
                    fi
                done
            fi
        else
            printf "    %s (%s) is missing %.1f%% of mask voxels.\n" "$subid" "$level" "$percent_missing"
        fi
    else
        echo "[!] Mask file not found: $maskfile"
    fi
done < L3path_trust_n111_featdir.txt

