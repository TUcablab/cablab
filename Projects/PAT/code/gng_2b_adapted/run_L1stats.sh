#!/bin/bash

# Ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
basedir="$(dirname "$scriptdir")"
nruns=4

datadir=/data/chein-preprocessing/derivatives/fmriprep


for TASK in "gonogo"; do # for task in "gonogo" "pat"; do
	for PPI in 0; do  #putting 0 first will indicate "activation"
	#for ppi in "dmn" "VS"; 
		for SUB in `cat ${basedir}/code/sublist_anyprepfunc032026.txt`; do
          #for SUB in 1022; do
          
        seslist=""
        if [ -d ${datadir}/sub-${SUB}/ses-01 ]; then
                seslist="${seslist} 01"
        fi
        if [ -d ${datadir}/sub-${SUB}/ses-02 ]; then
                seslist="${seslist} 02"
        fi

        # NEW: if no sessions found, skip subject
        if [ -z "${seslist}" ]; then
                echo "No sessions found for sub-${SUB} in ${datadir}; skipping."
                continue
        fi

			for SES in ${seslist}; do
	  			for RUN in `seq $nruns`; do #for run in 1; do
	  			
		  		# Manages the number of jobs and cores
		  		SCRIPTNAME=${basedir}/code/L1stats-${TASK}.sh
	  			NCORES=4 #what 80?
	  			while [ $(ps -ef | grep -v grep | grep $SCRIPTNAME | wc -l) -ge $NCORES ]; do
	    			sleep 5s
	  			done
	  			

		  		bash $SCRIPTNAME $SUB $SES $RUN $PPI $TASK &
		  		sleep 1s
				echo "complete ${SUB} ses${SES} run${RUN}"
				done
			done	  	
	  	done
	done
done

