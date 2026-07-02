#!/bin/bash

rootDir=/data/chein-preprocessing
sourcedata=/data/Project_LITE/Imaging/LITE_PAT/sourcedata
scriptdir=${rootDir}/code

#for sub in $(cat "${scriptdir}/sublist-all.txt"); do
for sub in 3158; do
    for ses in "01"; do

	script=${scriptdir}/prepdata.sh
	NCORES=20

	while [ $(ps -ef | grep -v grep | grep $script | wc -l) -ge $NCORES ]; do
		sleep 5s
	done

        bash $script $sub $ses &
	sleep 5s


    done
done
