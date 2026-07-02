#!/bin/bash

scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"
scriptname=${scriptdir}/fmriprep.sh

for sub in `cat ${scriptdir}/sublist-fmriprepredo.txt`; do	

	NCORES=10

	while [ $(ps -ef | grep -v grep | grep $scriptname | wc -l) -ge $NCORES ]; do
		sleep 5s
	done

	bash $scriptname $sub &
	sleep 5s

done
