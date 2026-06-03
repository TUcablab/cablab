#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on Fri May 29 09:49:37 2026
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import csv  # write trial-by-trial output immediately
import sys  # to get file system encoding
import random as py_random  # for randomized block order and starting values

from psychopy.hardware import keyboard

# Run 'Before Experiment' code from code
from psychopy import core
# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.3'
expName = 'DelayDiscountingTitrated'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
    'age': '',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/avidachs/Documents/GitHub/cablab/tasks/Delaydiscounting/run_scripts/psychopyVersion/DelayDiscountingTitratedBuilder_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.EXP)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.EXP)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1900, 1010], fullscr=False, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [-1.0000, -1.0000, -1.0000]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = True
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='ptb')
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='PsychToolbox')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName

    # --- Live trial-by-trial CSV output ---
    # This file is updated and flushed after every completed choice trial,
    # so completed rows remain saved even if the task closes before the end.
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    live_csv_filename = filename + '_trial_by_trial.csv'
    live_csv_file = open(live_csv_filename, mode='w', newline='', encoding='utf-8')
    live_csv_columns = [
        'participant',
        'age',
        'date',
        'block_num',
        'delay_label',
        'delay_days',
        'round_num',
        'starting_immediate_reward',
        'immediate_amount_shown',
        'delayed_amount',
        'button_press',
        'rt',
        'interval_used',
        'next_immediate_amount'
    ]
    live_csv_writer = csv.DictWriter(live_csv_file, fieldnames=live_csv_columns)
    live_csv_writer.writeheader()
    live_csv_file.flush()
    os.fsync(live_csv_file.fileno())

    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "trial" ---
    key_resp = keyboard.Keyboard()
    # Run 'Begin Experiment' code from code
    maxvalue = 1000
    minvalue = 0
    immediate_start_values = [200, 500, 800]
    delay_blocks = [
        {"label": "1 week", "days": 7},
        {"label": "1 month", "days": 30},
        {"label": "6 months", "days": 180},
        {"label": "1 year", "days": 365},
        {"label": "5 years", "days": 1825},
        {"label": "15 years", "days": 5475},
    ]
    py_random.shuffle(delay_blocks)

    # These are reset at the start of each block.
    immediateValue1 = None
    delay = ""
    delay_days = None
    roundN = 1
    interval = 0
    blockN = 0
    starting_immediate_reward = None
    
    
    def set_italic(stim, value):
        # PsychoPy versions differ slightly in how TextStim italic is updated.
        # This keeps the selected feedback italicized without changing task logic.
        try:
            stim.setItalic(value, log=False)
        except AttributeError:
            stim.italic = value
    
    
    from psychopy import visual
    
    immediateText = visual.TextStim(
        win,
        text="0 now\n(1)",
        pos=(-0.4, 0),
        color="black",
        font="Times New Roman"
    )
    
    delayText = visual.TextStim(
        win,
        text="1000 in\n(3)",
        pos=(0.4, 0),
        color="black",
        font="Times New Roman"
    )
    immediate_text = visual.TextStim(win=win, name='immediate_text',
        text='',
        font='Times New Roman',
        pos=(-0.4, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    delay_text = visual.TextStim(win=win, name='delay_text',
        text='',
        font='Times New Roman',
        pos=(0.4, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    # debug = visual.TextStim(win=win, name='debug',
    #     text='',
    #     font='Open Sans',
    #     pos=(0, -0.1), height=0.05, wrapWidth=None, ori=0.0, 
    #     color='white', colorSpace='rgb', opacity=None, 
    #     languageStyle='LTR',
    #     depth=-4.0);
    which_text = visual.TextStim(win=win, name='which_text',
        text='Which would you prefer?',
        font='Times New Roman',
        pos=(0, .2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    or_text = visual.TextStim(win=win, name='or_text',
        text='OR',
        font='Times New Roman',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
    # --- Instruction screen before the task begins ---
    instruction_text = visual.TextStim(
        win=win,
        name='instruction_text',
        text=(
            "For this task, you will be asked to make choices about money.\n\n"

            "You will be given two options and you should choose one.\n\n"

            "On the left side of the screen, there will be an amount of money you can get right\n"
            "now.\n\n"

            "On the right side of the screen, there will be another ammount of money, but\n"
            "you would not be able to get the money right away. Insted, you would have\n"
            "to wait some amount of time.\n\n"

            "For example, the computer might ask you if you would like $5 now or $100\n"
            "in 2 weeks\n\n"

            "Press the 1 key to choose the option on the left.\n\n"

            "Press the 3 key to choose the option on the right.\n\n"

            "We don't expect you to choose anything in particular, just choose the ever options\n"
            "you would prefer"
        ),
        font='Times New Roman',
        pos=(-.3, 0),
        height=0.05,
        wrapWidth=1.5,
        color='white',
        colorSpace='rgb',
        languageStyle='LTR',
        alignText='left'

    )
    instruction_text.draw()
    win.flip()
    start_keys = event.waitKeys(keyList=['return', 'space', 'escape'])
    if start_keys and start_keys[0] == 'escape':
        live_csv_file.close()
        endExperiment(thisExp, inputs=inputs, win=win)
        return
    
    # --- Six randomized delay blocks ---
    for blockN, delay_info in enumerate(delay_blocks, start=1):
        delay = delay_info["label"]
        delay_days = delay_info["days"]
        starting_immediate_reward = py_random.choice(immediate_start_values)
        immediateValue1 = starting_immediate_reward
        roundN = 1
        interval = 0

        # Block start screen: wait for ENTER or SPACEBAR before each delay block.
        block_text = visual.TextStim(
            win=win,
            name='block_text',
            text=(
                f"Set {blockN} of {len(delay_blocks)}\n\n"
                "Hit Enter to continue"
            ),
            font='Times New Roman',
            pos=(0, 0),
            height=0.05,
            wrapWidth=1.2,
            color='white',
            colorSpace='rgb',
            languageStyle='LTR'
        )
        block_text.draw()
        win.flip()
        start_keys = event.waitKeys(keyList=['return', 'space', 'escape'])
        if start_keys and start_keys[0] == 'escape':
            live_csv_file.close()
            endExperiment(thisExp, inputs=inputs, win=win)
            return

        # set up handler to look after randomisation of conditions etc
        trials = data.TrialHandler(nReps=9.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name=f'trials_block_{blockN}')
        thisExp.addLoop(trials)  # add the loop to the experiment
        thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
    
        for thisTrial in trials:
            currentLoop = trials
            thisExp.timestampOnFlip(win, 'thisRow.t')
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    inputs=inputs, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
        
            # --- Prepare to start Routine "trial" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('trial.started', globalClock.getTime())
            trials.addData('block_num', blockN)
            trials.addData('delay_label', delay)
            trials.addData('delay_days', delay_days)
            trials.addData('starting_immediate_reward', starting_immediate_reward)
            trials.addData('roundN', roundN)
            key_resp.keys = []
            key_resp.rt = []
            _key_resp_allKeys = []

            # Reset both options to white at the start of each new trial/round.
            # The chosen option will briefly turn green after the participant responds.
            immediate_text.setColor('white', log=False)
            delay_text.setColor('white', log=False)
            set_italic(immediate_text, False)
            set_italic(delay_text, False)

            # keep track of which components have finished
            trialComponents = [key_resp, immediate_text, delay_text, which_text, or_text]
            for thisComponent in trialComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
        
            # --- Run Routine "trial" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
            
                # *key_resp* updates
                waitOnFlip = False
            
                # if key_resp is starting this frame...
                if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp.frameNStart = frameN  # exact frame index
                    key_resp.tStart = t  # local t and not account for scr refresh
                    key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp.started')
                    # update status
                    key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp.getKeys(keyList=['1', '3'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_allKeys.extend(theseKeys)
                    if len(_key_resp_allKeys):
                        key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                        key_resp.rt = _key_resp_allKeys[-1].rt
                        key_resp.duration = _key_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                # Run 'Each Frame' code from code
                immediateText.draw()
                delayText.draw()
            
                # *immediate_text* updates
            
                # if immediate_text is starting this frame...
                if immediate_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    immediate_text.frameNStart = frameN  # exact frame index
                    immediate_text.tStart = t  # local t and not account for scr refresh
                    immediate_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(immediate_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'immediate_text.started')
                    # update status
                    immediate_text.status = STARTED
                    immediate_text.setAutoDraw(True)
            
                # if immediate_text is active this frame...
                if immediate_text.status == STARTED:
                    # update params
                    immediate_text.setText(f"${immediateValue1:.0f} now\n(1)", log=False)
            
                # *delay_text* updates
            
                # if delay_text is starting this frame...
                if delay_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    delay_text.frameNStart = frameN  # exact frame index
                    delay_text.tStart = t  # local t and not account for scr refresh
                    delay_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(delay_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'delay_text.started')
                    # update status
                    delay_text.status = STARTED
                    delay_text.setAutoDraw(True)
            
                # if delay_text is active this frame...
                if delay_text.status == STARTED:
                    # update params
                    delay_text.setText(f"${maxvalue} in\n{delay}\n(3)", log=False)
            
                # *debug* updates
            
                # # if debug is starting this frame...
                # if debug.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                #     # keep track of start time/frame for later
                #     debug.frameNStart = frameN  # exact frame index
                #     debug.tStart = t  # local t and not account for scr refresh
                #     debug.tStartRefresh = tThisFlipGlobal  # on global time
                #     win.timeOnFlip(debug, 'tStartRefresh')  # time at next scr refresh
                #     # add timestamp to datafile
                #     thisExp.timestampOnFlip(win, 'debug.started')
                #     # update status
                #     debug.status = STARTED
                #     debug.setAutoDraw(True)
            
                # # if debug is active this frame...
                # if debug.status == STARTED:
                #     # update params
                #     debug.setText(f"interval:{interval} val:{immediateValue1} round:{roundN}", log=False)
            
                # *which_text* updates
            
                # if which_text is starting this frame...
                if which_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    which_text.frameNStart = frameN  # exact frame index
                    which_text.tStart = t  # local t and not account for scr refresh
                    which_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(which_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'which_text.started')
                    # update status
                    which_text.status = STARTED
                    which_text.setAutoDraw(True)
            
                # if which_text is active this frame...
                if which_text.status == STARTED:
                    # update params
                    pass
            
                # *or_text* updates
            
                # if or_text is starting this frame...
                if or_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    or_text.frameNStart = frameN  # exact frame index
                    or_text.tStart = t  # local t and not account for scr refresh
                    or_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(or_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'or_text.started')
                    # update status
                    or_text.status = STARTED
                    or_text.setAutoDraw(True)
            
                # if or_text is active this frame...
                if or_text.status == STARTED:
                    # update params
                    pass
            
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
            
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in trialComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
            
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
        
            # --- Ending Routine "trial" ---
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('trial.stopped', globalClock.getTime())
            # check responses
            if key_resp.keys in ['', [], None]:  # No response was made
                key_resp.keys = None
            trials.addData('key_resp.keys',key_resp.keys)
            if key_resp.keys != None:  # we had a response
                trials.addData('key_resp.rt', key_resp.rt)
                trials.addData('key_resp.duration', key_resp.duration)
            # Run 'End Routine' code from code
            if roundN == 1:
                if key_resp.keys[0] == '1':
                    interval = immediateValue1 - minvalue
                elif key_resp.keys[0] == '3':
                    interval = maxvalue - immediateValue1
            interval = interval/2
        
        
            ## If they choose the immediate option, subtract the 
            if key_resp.keys == '1':
                updateAmount = int(round(immediateValue1 - interval, 0))
        
            elif key_resp.keys == '3':
                updateAmount = int(round(immediateValue1 + interval, 0))

            # Save this trial immediately to a separate trial-by-trial CSV.
            # This gives you one row per completed choice trial and writes it to disk right away.
            live_csv_writer.writerow({
                'participant': expInfo.get('participant', ''),
                'age': expInfo.get('age', ''),
                'date': expInfo.get('date', ''),
                'block_num': blockN,
                'delay_label': delay,
                'delay_days': delay_days,
                'round_num': roundN,
                'starting_immediate_reward': starting_immediate_reward,
                'immediate_amount_shown': int(round(immediateValue1, 0)),
                'delayed_amount': maxvalue,
                'button_press': key_resp.keys,
                'rt': key_resp.rt if key_resp.keys is not None else '',
                'interval_used': interval,
                'next_immediate_amount': updateAmount
            })
            live_csv_file.flush()
            os.fsync(live_csv_file.fileno())
        
            # Show feedback: turn the selected option green before advancing.
            # This preserves the current trial text on screen for 1 second.
            immediate_text.setText(f"${immediateValue1:.0f} now\n(1)", log=False)
            delay_text.setText(f"${maxvalue} in\n{delay}\n(3)", log=False)

            if key_resp.keys == '1':
                immediate_text.setColor('green', log=False)
                delay_text.setColor('white', log=False)
                set_italic(immediate_text, True)
                set_italic(delay_text, False)
            elif key_resp.keys == '3':
                immediate_text.setColor('white', log=False)
                delay_text.setColor('green', log=False)
                set_italic(immediate_text, False)
                set_italic(delay_text, True)

            which_text.draw()
            immediate_text.draw()
            or_text.draw()
            delay_text.draw()
            # debug.setText(f"interval:{interval} val:{immediateValue1} round:{roundN}", log=False)
            # debug.draw()
            win.flip()
            core.wait(1)

            # Reset colors and italics before updating the value for the next trial.
            immediate_text.setColor('white', log=False)
            delay_text.setColor('white', log=False)
            set_italic(immediate_text, False)
            set_italic(delay_text, False)

            immediateValue1 = updateAmount
        
        
            roundN += 1
            
        
            # the Routine "trial" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed 10.0 repeats of current block's 'trials'
    
    
    # Close the live CSV after all blocks finish.
    live_csv_file.close()

    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
