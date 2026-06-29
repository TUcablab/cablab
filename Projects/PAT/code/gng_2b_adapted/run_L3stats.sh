#!/bin/bash

# This run_* script is a wrapper for L3stats.sh, so it will loop over several
# copes and models. Note that Contrast N for PPI is always PHYS in these models.


# ensure paths are correct irrespective from where user runs the script
scriptdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
maindir="$(dirname "$scriptdir")"

## create log file to record what we did and when
logs=$maindir/rerunL3_date-`date +"%FT%H%M"`.log

# this loop defines the different types of analyses that will go into the group comparisons
for analysis in act; do # nppi-dmn; ppi_seed-VS; do
	analysistype=type-${analysis}
#	 these define the cope number (copenum) and cope name (copename)

# use below for act L3 gonogo
for copeinfo in "1 CR" "2 FA" "3 hit" "4 miss" "5 high_low_cue" "6 CR_hitgo"  "7 FA_hitgo"; do   #"# mainnet"  "# phys"

		# split copeinfo variable
		set -- $copeinfo
		copenum=$1
		copename=$2

#		if [ "${analysistype}" == "type-act" ] && [ "${copeinfo}" == "19 phys" ]; then
#			echo "skipping phys for activation since it does not exist..."
#			continues
#		fi

		NCORES=5
		
		SCRIPTNAME=${maindir}/code/L3stats.sh
		while [ $(ps -ef | grep -v grep | grep $SCRIPTNAME | wc -l) -ge $NCORES ]; do
			sleep 1s
		done
		echo "working on ${copenum} ${copename}"
		bash $SCRIPTNAME $copenum $copename $analysistype $logfile #&
		sleep 1s
		echo "complete ${copeinfo} ${analysistype}"
	done
done
