#!/bin/bash

scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"
scriptname=${scriptdir}/tedana.sh

for sub in `cat ${scriptdir}/sublist-204.txt`; do
#for sub in 1005; do
	
	NCORES=30
	while [ $(ps -ef | grep -v grep | grep $scriptname | wc -l) -ge $NCORES ]; do
		sleep 5s
	done
	

	bash $scriptname $sub &
	sleep 1s

done
