#!/bin/bash

# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"

# create log file to record what we did and when
#logfile=${maindir}/rerunL2_date-`date +"%FT%H%M"`.log


for TYPE in "act"; do #"act""nppi-dmn" "ppi_seed-VS"
	for SES in "01"; do
		#for SUB in 1029; do 	
		for SUB in `cat ${scriptdir}/sublist_anyprepfunc032026.txt`; do
		# Manages the number of jobs and cores
			for TASK in gonogo; do #pat gonogo
	  			SCRIPTNAME=${maindir}/code/L2stats-${TASK}.sh
	  			NCORES=20
	  			
	  			while [ $(ps -ef | grep -v grep | grep $SCRIPTNAME | wc -l) -ge $NCORES ]; do
	  			sleep 1s
	  			done
	  			
	  			bash $SCRIPTNAME $SUB $SES $TYPE &
	  			
	  			sleep 1s
	  			done
	  	done	  			
	done
done
