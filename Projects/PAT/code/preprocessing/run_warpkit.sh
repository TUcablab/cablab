#!/bin/bash

scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"
scriptname=${scriptdir}/warpkit.sh

for sub in `cat ${scriptdir}/sublist-all.txt`; do
#for sub in 3028; do
	for ses in "01" "02"; do
	
	bash $scriptname $sub $ses

	done
done
