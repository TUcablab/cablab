#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on July 13, 2026, at 14:37
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
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.3'
expName = 'PAT_PRACTICE_icons'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
    'Age': '',
    'Wave': '',
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
        originPath='C:\\Users\\Public\\Documents\\cablab\\tasks\\PAT\\PAT_PRACTICE_icons6-12-26_lastrun.py',
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
            size=[1920, 1080], fullscr=True, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = False
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
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='iohub')
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
                'defaultKeyboard': keyboard.Keyboard(backend='ioHub')
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
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "welcome" ---
    wel = visual.TextStim(win=win, name='wel',
        text='Welcome to the Friends Game!\n\nWe will now show you how to play this game.\n\nPress spacebar for a demo.\n',
        font='Consolas',
        pos=(0, 0), height=0.05, wrapWidth=2.0, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2 = keyboard.Keyboard()
    # Run 'Begin Experiment' code from initialize_variables
    import pandas as pd
    import random
    
    # Step 1: list to track which rows have already been used across the whole task,
    # so the same peer never gets shown twice
    usedRows = []
    
    # load the stimuli/conditions file once
    conditions_df = pd.read_excel('stimuli/conditions.xlsx')
    
    # Step 2: determine age category & the column to pull images from
    # NOTE: adjust 'Age' below to match whatever key your participant info dialog
    # actually stores it under (e.g. expInfo['Age'])
    Age = float(expInfo['Age'])
    
    if Age >= 18:
        ageCategory = 'young_adults'
    elif 13 <= Age <= 17:
        ageCategory = 'teens'
    elif Age <= 12:
        ageCategory = 'children'
    else:
        ageCategory = None  # shouldn't happen, but a safe fallback
    
    # this is the actual column name in conditions.xlsx to read images from
    # CHANGE these strings to match your real column headers if they differ
    ageColumn = ageCategory
    
    # --- Initialize components for Routine "ChoiceRoutine_1" ---
    Who = visual.TextStim(win=win, name='Who',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0 ,0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_3 = visual.TextStim(win=win, name='text_3',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    Player1demo = visual.ImageStim(
        win=win,
        name='Player1demo', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    Player2demo = visual.ImageStim(
        win=win,
        name='Player2demo', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    cooking = visual.ImageStim(
        win=win,
        name='cooking', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_4 = visual.TextStim(win=win, name='text_4',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    movies = visual.ImageStim(
        win=win,
        name='movies', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_5 = visual.TextStim(win=win, name='text_5',
        text='dancing',
        font='Open Sans',
        pos=(-0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    dancing = visual.ImageStim(
        win=win,
        name='dancing', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    text_6 = visual.TextStim(win=win, name='text_6',
        text='movies',
        font='Open Sans',
        pos=(-0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    fashion = visual.ImageStim(
        win=win,
        name='fashion', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    text_7 = visual.TextStim(win=win, name='text_7',
        text='fashion',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    movie = visual.ImageStim(
        win=win,
        name='movie', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    text_8 = visual.TextStim(win=win, name='text_8',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    writing = visual.ImageStim(
        win=win,
        name='writing', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    text_9 = visual.TextStim(win=win, name='text_9',
        text='writing',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player1_1" ---
    polygon_6 = visual.Rect(
        win=win, name='polygon_6',
        width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    leftplayer = visual.ImageStim(
        win=win,
        name='leftplayer', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    icon7 = visual.ImageStim(
        win=win,
        name='icon7', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    ison7t = visual.TextStim(win=win, name='ison7t',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    icon8 = visual.ImageStim(
        win=win,
        name='icon8', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    icon8t = visual.TextStim(win=win, name='icon8t',
        text='dancing',
        font='Open Sans',
        pos=(-0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    icon9 = visual.ImageStim(
        win=win,
        name='icon9', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    int9 = visual.TextStim(win=win, name='int9',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    leftplayert = visual.TextStim(win=win, name='leftplayert',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1 = visual.ImageStim(
        win=win,
        name='yes1', 
        image='stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    
    # --- Initialize components for Routine "topyesp1" ---
    polygon_5 = visual.Rect(
        win=win, name='polygon_5',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    topleftpeerchoice = visual.ImageStim(
        win=win,
        name='topleftpeerchoice', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    icon10 = visual.ImageStim(
        win=win,
        name='icon10', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    int10 = visual.TextStim(win=win, name='int10',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.13, 0.084), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    icon11 = visual.ImageStim(
        win=win,
        name='icon11', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    int111 = visual.TextStim(win=win, name='int111',
        text='dancing',
        font='Open Sans',
        pos=(0.13, 0.10), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    icon12 = visual.ImageStim(
        win=win,
        name='icon12', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    int12 = visual.TextStim(win=win, name='int12',
        text='movies',
        font='Open Sans',
        pos=(0.0, 0.10), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    toppeername = visual.TextStim(win=win, name='toppeername',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you = visual.TextStim(win=win, name='you',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    icon13 = visual.ImageStim(
        win=win,
        name='icon13', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    int13 = visual.TextStim(win=win, name='int13',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    icon14 = visual.ImageStim(
        win=win,
        name='icon14', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    int14 = visual.TextStim(win=win, name='int14',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    icon15 = visual.ImageStim(
        win=win,
        name='icon15', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    int15 = visual.TextStim(win=win, name='int15',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic = visual.ImageStim(
        win=win,
        name='participantpic', 
        image='stimuli/practice/participant.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    yess = visual.ImageStim(
        win=win,
        name='yess', 
        image='stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.2, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_4 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player2_1" ---
    polygon_7 = visual.Rect(
        win=win, name='polygon_7',
        width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    rightpeerchoice = visual.ImageStim(
        win=win,
        name='rightpeerchoice', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    icon16 = visual.ImageStim(
        win=win,
        name='icon16', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    int16 = visual.TextStim(win=win, name='int16',
        text='fashion',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    icon17 = visual.ImageStim(
        win=win,
        name='icon17', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    text_11 = visual.TextStim(win=win, name='text_11',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    icon19 = visual.ImageStim(
        win=win,
        name='icon19', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_12 = visual.TextStim(win=win, name='text_12',
        text='writing',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    yes1_2 = visual.ImageStim(
        win=win,
        name='yes1_2', 
        image='stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_14 = visual.TextStim(win=win, name='text_14',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    
    # --- Initialize components for Routine "topyesp2" ---
    polygon_4 = visual.Rect(
        win=win, name='polygon_4',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    toprightpeer = visual.ImageStim(
        win=win,
        name='toprightpeer', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    icon20 = visual.ImageStim(
        win=win,
        name='icon20', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_2 = visual.TextStim(win=win, name='var_2',
        text='fashion\n\n\n',
        font='Open Sans',
        pos=(-0.13, 0.076), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    icon21 = visual.ImageStim(
        win=win,
        name='icon21', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_7 = visual.TextStim(win=win, name='var_7',
        text='dancing',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    icon22 = visual.ImageStim(
        win=win,
        name='icon22', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_31 = visual.TextStim(win=win, name='text_31',
        text='writing',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_4 = visual.TextStim(win=win, name='p1_4',
        text='Player-2\n\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_2 = visual.TextStim(win=win, name='you_2',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    icon23 = visual.ImageStim(
        win=win,
        name='icon23', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_2 = visual.TextStim(win=win, name='chat_2',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    icon24 = visual.ImageStim(
        win=win,
        name='icon24', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_2 = visual.TextStim(win=win, name='sport_2',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    icon25 = visual.ImageStim(
        win=win,
        name='icon25', 
        image='stimuli/icons/animals.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    participantpic_5 = visual.ImageStim(
        win=win,
        name='participantpic_5', 
        image='stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    beach_txt_2 = visual.TextStim(win=win, name='beach_txt_2',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    yes = visual.ImageStim(
        win=win,
        name='yes', 
        image='stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_6 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "wait" ---
    polygon = visual.Rect(
        win=win, name='polygon',
        width=(4, 4)[0], height=(4, 4)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_16 = visual.TextStim(win=win, name='text_16',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
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
    
    # --- Prepare to start Routine "welcome" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('welcome.started', globalClock.getTime())
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    welcomeComponents = [wel, key_resp_2]
    for thisComponent in welcomeComponents:
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
    
    # --- Run Routine "welcome" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *wel* updates
        
        # if wel is starting this frame...
        if wel.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wel.frameNStart = frameN  # exact frame index
            wel.tStart = t  # local t and not account for scr refresh
            wel.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wel, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'wel.started')
            # update status
            wel.status = STARTED
            wel.setAutoDraw(True)
        
        # if wel is active this frame...
        if wel.status == STARTED:
            # update params
            pass
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
        for thisComponent in welcomeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "welcome" ---
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('welcome.stopped', globalClock.getTime())
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    thisExp.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        thisExp.addData('key_resp_2.rt', key_resp_2.rt)
        thisExp.addData('key_resp_2.duration', key_resp_2.duration)
    thisExp.nextEntry()
    # the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_3 = data.TrialHandler(nReps=5.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('stimuli/conditions.xlsx'),
        seed=None, name='trials_3')
    thisExp.addLoop(trials_3)  # add the loop to the experiment
    thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            globals()[paramName] = thisTrial_3[paramName]
    
    for thisTrial_3 in trials_3:
        currentLoop = trials_3
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
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
        if thisTrial_3 != None:
            for paramName in thisTrial_3:
                globals()[paramName] = thisTrial_3[paramName]
        
        # --- Prepare to start Routine "ChoiceRoutine_1" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('ChoiceRoutine_1.started', globalClock.getTime())
        # Run 'Begin Routine' code from load_images
        # Step 4: pick a gender pool for this pair (participant's gender doesn't matter,
        # only that the two peers match each other)
        genderPool = random.choice(['female', 'male'])
        
        # excel row 2-61 (female) and 62-122 (male) → pandas 0-indexed positions
        # (excel row 2 = pandas index 0, since row 1 is the header)
        if genderPool == 'female':
            rowRange = list(range(0, 60))     # excel rows 2-61
        else:
            rowRange = list(range(60, 121))   # excel rows 62-122
        
        # filter out rows already used in earlier trials
        availableRows = [r for r in rowRange if r not in usedRows]
        
        # safety check: if this pool runs out, fall back to the other gender pool
        if len(availableRows) < 2:
            genderPool = 'male' if genderPool == 'female' else 'female'
            rowRange = list(range(60, 121)) if genderPool == 'male' else list(range(0, 60))
            availableRows = [r for r in rowRange if r not in usedRows]
        
        # pick two different random rows and mark them as used
        peerRows = random.sample(availableRows, 2)
        usedRows.extend(peerRows)
        
        # Step 5 & 6: follow the file path and store as image1 / image2
        peer1_row = peerRows[0]
        peer2_row = peerRows[1]
        
        image1 = 'stimuli/' + str(conditions_df.loc[peer1_row, ageColumn])
        image2 = 'stimuli/' + str(conditions_df.loc[peer2_row, ageColumn])
        Player1demo.setImage(image1)
        Player2demo.setImage(image2)
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        ChoiceRoutine_1Components = [Who, text_2, text_3, Player1demo, Player2demo, cooking, text_4, movies, text_5, dancing, text_6, fashion, text_7, movie, text_8, writing, text_9, key_resp]
        for thisComponent in ChoiceRoutine_1Components:
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
        
        # --- Run Routine "ChoiceRoutine_1" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Who* updates
            
            # if Who is starting this frame...
            if Who.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Who.frameNStart = frameN  # exact frame index
                Who.tStart = t  # local t and not account for scr refresh
                Who.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Who, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Who.started')
                # update status
                Who.status = STARTED
                Who.setAutoDraw(True)
            
            # if Who is active this frame...
            if Who.status == STARTED:
                # update params
                pass
            
            # *text_2* updates
            
            # if text_2 is starting this frame...
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.started')
                # update status
                text_2.status = STARTED
                text_2.setAutoDraw(True)
            
            # if text_2 is active this frame...
            if text_2.status == STARTED:
                # update params
                pass
            
            # *text_3* updates
            
            # if text_3 is starting this frame...
            if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_3.frameNStart = frameN  # exact frame index
                text_3.tStart = t  # local t and not account for scr refresh
                text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.started')
                # update status
                text_3.status = STARTED
                text_3.setAutoDraw(True)
            
            # if text_3 is active this frame...
            if text_3.status == STARTED:
                # update params
                pass
            
            # *Player1demo* updates
            
            # if Player1demo is starting this frame...
            if Player1demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Player1demo.frameNStart = frameN  # exact frame index
                Player1demo.tStart = t  # local t and not account for scr refresh
                Player1demo.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Player1demo, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Player1demo.started')
                # update status
                Player1demo.status = STARTED
                Player1demo.setAutoDraw(True)
            
            # if Player1demo is active this frame...
            if Player1demo.status == STARTED:
                # update params
                pass
            
            # *Player2demo* updates
            
            # if Player2demo is starting this frame...
            if Player2demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Player2demo.frameNStart = frameN  # exact frame index
                Player2demo.tStart = t  # local t and not account for scr refresh
                Player2demo.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Player2demo, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Player2demo.started')
                # update status
                Player2demo.status = STARTED
                Player2demo.setAutoDraw(True)
            
            # if Player2demo is active this frame...
            if Player2demo.status == STARTED:
                # update params
                pass
            
            # *cooking* updates
            
            # if cooking is starting this frame...
            if cooking.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cooking.frameNStart = frameN  # exact frame index
                cooking.tStart = t  # local t and not account for scr refresh
                cooking.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cooking, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'cooking.started')
                # update status
                cooking.status = STARTED
                cooking.setAutoDraw(True)
            
            # if cooking is active this frame...
            if cooking.status == STARTED:
                # update params
                pass
            
            # *text_4* updates
            
            # if text_4 is starting this frame...
            if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_4.frameNStart = frameN  # exact frame index
                text_4.tStart = t  # local t and not account for scr refresh
                text_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_4.started')
                # update status
                text_4.status = STARTED
                text_4.setAutoDraw(True)
            
            # if text_4 is active this frame...
            if text_4.status == STARTED:
                # update params
                pass
            
            # *movies* updates
            
            # if movies is starting this frame...
            if movies.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                movies.frameNStart = frameN  # exact frame index
                movies.tStart = t  # local t and not account for scr refresh
                movies.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(movies, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'movies.started')
                # update status
                movies.status = STARTED
                movies.setAutoDraw(True)
            
            # if movies is active this frame...
            if movies.status == STARTED:
                # update params
                pass
            
            # *text_5* updates
            
            # if text_5 is starting this frame...
            if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_5.frameNStart = frameN  # exact frame index
                text_5.tStart = t  # local t and not account for scr refresh
                text_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_5.started')
                # update status
                text_5.status = STARTED
                text_5.setAutoDraw(True)
            
            # if text_5 is active this frame...
            if text_5.status == STARTED:
                # update params
                pass
            
            # *dancing* updates
            
            # if dancing is starting this frame...
            if dancing.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                dancing.frameNStart = frameN  # exact frame index
                dancing.tStart = t  # local t and not account for scr refresh
                dancing.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dancing, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'dancing.started')
                # update status
                dancing.status = STARTED
                dancing.setAutoDraw(True)
            
            # if dancing is active this frame...
            if dancing.status == STARTED:
                # update params
                pass
            
            # *text_6* updates
            
            # if text_6 is starting this frame...
            if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_6.frameNStart = frameN  # exact frame index
                text_6.tStart = t  # local t and not account for scr refresh
                text_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_6.started')
                # update status
                text_6.status = STARTED
                text_6.setAutoDraw(True)
            
            # if text_6 is active this frame...
            if text_6.status == STARTED:
                # update params
                pass
            
            # *fashion* updates
            
            # if fashion is starting this frame...
            if fashion.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fashion.frameNStart = frameN  # exact frame index
                fashion.tStart = t  # local t and not account for scr refresh
                fashion.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fashion, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fashion.started')
                # update status
                fashion.status = STARTED
                fashion.setAutoDraw(True)
            
            # if fashion is active this frame...
            if fashion.status == STARTED:
                # update params
                pass
            
            # *text_7* updates
            
            # if text_7 is starting this frame...
            if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_7.frameNStart = frameN  # exact frame index
                text_7.tStart = t  # local t and not account for scr refresh
                text_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_7.started')
                # update status
                text_7.status = STARTED
                text_7.setAutoDraw(True)
            
            # if text_7 is active this frame...
            if text_7.status == STARTED:
                # update params
                pass
            
            # *movie* updates
            
            # if movie is starting this frame...
            if movie.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                movie.frameNStart = frameN  # exact frame index
                movie.tStart = t  # local t and not account for scr refresh
                movie.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(movie, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'movie.started')
                # update status
                movie.status = STARTED
                movie.setAutoDraw(True)
            
            # if movie is active this frame...
            if movie.status == STARTED:
                # update params
                pass
            
            # *text_8* updates
            
            # if text_8 is starting this frame...
            if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_8.frameNStart = frameN  # exact frame index
                text_8.tStart = t  # local t and not account for scr refresh
                text_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_8.started')
                # update status
                text_8.status = STARTED
                text_8.setAutoDraw(True)
            
            # if text_8 is active this frame...
            if text_8.status == STARTED:
                # update params
                pass
            
            # *writing* updates
            
            # if writing is starting this frame...
            if writing.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                writing.frameNStart = frameN  # exact frame index
                writing.tStart = t  # local t and not account for scr refresh
                writing.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(writing, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'writing.started')
                # update status
                writing.status = STARTED
                writing.setAutoDraw(True)
            
            # if writing is active this frame...
            if writing.status == STARTED:
                # update params
                pass
            
            # *text_9* updates
            
            # if text_9 is starting this frame...
            if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_9.frameNStart = frameN  # exact frame index
                text_9.tStart = t  # local t and not account for scr refresh
                text_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_9.started')
                # update status
                text_9.status = STARTED
                text_9.setAutoDraw(True)
            
            # if text_9 is active this frame...
            if text_9.status == STARTED:
                # update params
                pass
            
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
                theseKeys = key_resp.getKeys(keyList=['1','2','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    key_resp.duration = _key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
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
            for thisComponent in ChoiceRoutine_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ChoiceRoutine_1" ---
        for thisComponent in ChoiceRoutine_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('ChoiceRoutine_1.stopped', globalClock.getTime())
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials_3.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials_3.addData('key_resp.rt', key_resp.rt)
            trials_3.addData('key_resp.duration', key_resp.duration)
        # Run 'End Routine' code from code_31
        if key_resp.keys == '1':
            Player1_1 = 1
            Player2_1 = 0
        
        elif key_resp.keys == '2':
            Player1_1 = 1
            Player2_1 = 0
        
        # the Routine "ChoiceRoutine_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials = data.TrialHandler(nReps=Player1_1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='trials')
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
            
            # --- Prepare to start Routine "Player1_1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Player1_1.started', globalClock.getTime())
            leftplayer.setImage(image1)
            # keep track of which components have finished
            Player1_1Components = [polygon_6, leftplayer, icon7, ison7t, icon8, icon8t, icon9, int9, leftplayert, yes1]
            for thisComponent in Player1_1Components:
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
            
            # --- Run Routine "Player1_1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # is it time to end the Routine? (based on local clock)
                if tThisFlip > 3.0-frameTolerance:
                    continueRoutine = False
                
                # *polygon_6* updates
                
                # if polygon_6 is starting this frame...
                if polygon_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    polygon_6.frameNStart = frameN  # exact frame index
                    polygon_6.tStart = t  # local t and not account for scr refresh
                    polygon_6.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(polygon_6, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'polygon_6.started')
                    # update status
                    polygon_6.status = STARTED
                    polygon_6.setAutoDraw(True)
                
                # if polygon_6 is active this frame...
                if polygon_6.status == STARTED:
                    # update params
                    pass
                
                # *leftplayer* updates
                
                # if leftplayer is starting this frame...
                if leftplayer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    leftplayer.frameNStart = frameN  # exact frame index
                    leftplayer.tStart = t  # local t and not account for scr refresh
                    leftplayer.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(leftplayer, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'leftplayer.started')
                    # update status
                    leftplayer.status = STARTED
                    leftplayer.setAutoDraw(True)
                
                # if leftplayer is active this frame...
                if leftplayer.status == STARTED:
                    # update params
                    pass
                
                # *icon7* updates
                
                # if icon7 is starting this frame...
                if icon7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon7.frameNStart = frameN  # exact frame index
                    icon7.tStart = t  # local t and not account for scr refresh
                    icon7.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon7, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon7.started')
                    # update status
                    icon7.status = STARTED
                    icon7.setAutoDraw(True)
                
                # if icon7 is active this frame...
                if icon7.status == STARTED:
                    # update params
                    pass
                
                # *ison7t* updates
                
                # if ison7t is starting this frame...
                if ison7t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ison7t.frameNStart = frameN  # exact frame index
                    ison7t.tStart = t  # local t and not account for scr refresh
                    ison7t.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ison7t, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ison7t.started')
                    # update status
                    ison7t.status = STARTED
                    ison7t.setAutoDraw(True)
                
                # if ison7t is active this frame...
                if ison7t.status == STARTED:
                    # update params
                    pass
                
                # *icon8* updates
                
                # if icon8 is starting this frame...
                if icon8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon8.frameNStart = frameN  # exact frame index
                    icon8.tStart = t  # local t and not account for scr refresh
                    icon8.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon8, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon8.started')
                    # update status
                    icon8.status = STARTED
                    icon8.setAutoDraw(True)
                
                # if icon8 is active this frame...
                if icon8.status == STARTED:
                    # update params
                    pass
                
                # *icon8t* updates
                
                # if icon8t is starting this frame...
                if icon8t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon8t.frameNStart = frameN  # exact frame index
                    icon8t.tStart = t  # local t and not account for scr refresh
                    icon8t.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon8t, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon8t.started')
                    # update status
                    icon8t.status = STARTED
                    icon8t.setAutoDraw(True)
                
                # if icon8t is active this frame...
                if icon8t.status == STARTED:
                    # update params
                    pass
                
                # *icon9* updates
                
                # if icon9 is starting this frame...
                if icon9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon9.frameNStart = frameN  # exact frame index
                    icon9.tStart = t  # local t and not account for scr refresh
                    icon9.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon9, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon9.started')
                    # update status
                    icon9.status = STARTED
                    icon9.setAutoDraw(True)
                
                # if icon9 is active this frame...
                if icon9.status == STARTED:
                    # update params
                    pass
                
                # *int9* updates
                
                # if int9 is starting this frame...
                if int9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    int9.frameNStart = frameN  # exact frame index
                    int9.tStart = t  # local t and not account for scr refresh
                    int9.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int9, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int9.started')
                    # update status
                    int9.status = STARTED
                    int9.setAutoDraw(True)
                
                # if int9 is active this frame...
                if int9.status == STARTED:
                    # update params
                    pass
                
                # *leftplayert* updates
                
                # if leftplayert is starting this frame...
                if leftplayert.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    leftplayert.frameNStart = frameN  # exact frame index
                    leftplayert.tStart = t  # local t and not account for scr refresh
                    leftplayert.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(leftplayert, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'leftplayert.started')
                    # update status
                    leftplayert.status = STARTED
                    leftplayert.setAutoDraw(True)
                
                # if leftplayert is active this frame...
                if leftplayert.status == STARTED:
                    # update params
                    pass
                
                # *yes1* updates
                
                # if yes1 is starting this frame...
                if yes1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    yes1.frameNStart = frameN  # exact frame index
                    yes1.tStart = t  # local t and not account for scr refresh
                    yes1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yes1, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'yes1.started')
                    # update status
                    yes1.status = STARTED
                    yes1.setAutoDraw(True)
                
                # if yes1 is active this frame...
                if yes1.status == STARTED:
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
                for thisComponent in Player1_1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Player1_1" ---
            for thisComponent in Player1_1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Player1_1.stopped', globalClock.getTime())
            # the Routine "Player1_1" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "topyesp1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('topyesp1.started', globalClock.getTime())
            topleftpeerchoice.setImage(image1)
            key_resp_4.keys = []
            key_resp_4.rt = []
            _key_resp_4_allKeys = []
            # keep track of which components have finished
            topyesp1Components = [polygon_5, topleftpeerchoice, icon10, int10, icon11, int111, icon12, int12, toppeername, you, icon13, int13, icon14, int14, icon15, int15, participantpic, yess, key_resp_4]
            for thisComponent in topyesp1Components:
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
            
            # --- Run Routine "topyesp1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # is it time to end the Routine? (based on local clock)
                if tThisFlip > 3.0-frameTolerance:
                    continueRoutine = False
                
                # *polygon_5* updates
                
                # if polygon_5 is starting this frame...
                if polygon_5.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                    # keep track of start time/frame for later
                    polygon_5.frameNStart = frameN  # exact frame index
                    polygon_5.tStart = t  # local t and not account for scr refresh
                    polygon_5.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(polygon_5, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'polygon_5.started')
                    # update status
                    polygon_5.status = STARTED
                    polygon_5.setAutoDraw(True)
                
                # if polygon_5 is active this frame...
                if polygon_5.status == STARTED:
                    # update params
                    pass
                
                # *topleftpeerchoice* updates
                
                # if topleftpeerchoice is starting this frame...
                if topleftpeerchoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    topleftpeerchoice.frameNStart = frameN  # exact frame index
                    topleftpeerchoice.tStart = t  # local t and not account for scr refresh
                    topleftpeerchoice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(topleftpeerchoice, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'topleftpeerchoice.started')
                    # update status
                    topleftpeerchoice.status = STARTED
                    topleftpeerchoice.setAutoDraw(True)
                
                # if topleftpeerchoice is active this frame...
                if topleftpeerchoice.status == STARTED:
                    # update params
                    pass
                
                # *icon10* updates
                
                # if icon10 is starting this frame...
                if icon10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon10.frameNStart = frameN  # exact frame index
                    icon10.tStart = t  # local t and not account for scr refresh
                    icon10.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon10, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon10.started')
                    # update status
                    icon10.status = STARTED
                    icon10.setAutoDraw(True)
                
                # if icon10 is active this frame...
                if icon10.status == STARTED:
                    # update params
                    pass
                
                # *int10* updates
                
                # if int10 is starting this frame...
                if int10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    int10.frameNStart = frameN  # exact frame index
                    int10.tStart = t  # local t and not account for scr refresh
                    int10.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int10, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int10.started')
                    # update status
                    int10.status = STARTED
                    int10.setAutoDraw(True)
                
                # if int10 is active this frame...
                if int10.status == STARTED:
                    # update params
                    pass
                
                # *icon11* updates
                
                # if icon11 is starting this frame...
                if icon11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon11.frameNStart = frameN  # exact frame index
                    icon11.tStart = t  # local t and not account for scr refresh
                    icon11.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon11, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon11.started')
                    # update status
                    icon11.status = STARTED
                    icon11.setAutoDraw(True)
                
                # if icon11 is active this frame...
                if icon11.status == STARTED:
                    # update params
                    pass
                
                # *int111* updates
                
                # if int111 is starting this frame...
                if int111.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    int111.frameNStart = frameN  # exact frame index
                    int111.tStart = t  # local t and not account for scr refresh
                    int111.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int111, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int111.started')
                    # update status
                    int111.status = STARTED
                    int111.setAutoDraw(True)
                
                # if int111 is active this frame...
                if int111.status == STARTED:
                    # update params
                    pass
                
                # *icon12* updates
                
                # if icon12 is starting this frame...
                if icon12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon12.frameNStart = frameN  # exact frame index
                    icon12.tStart = t  # local t and not account for scr refresh
                    icon12.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon12, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon12.started')
                    # update status
                    icon12.status = STARTED
                    icon12.setAutoDraw(True)
                
                # if icon12 is active this frame...
                if icon12.status == STARTED:
                    # update params
                    pass
                
                # *int12* updates
                
                # if int12 is starting this frame...
                if int12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    int12.frameNStart = frameN  # exact frame index
                    int12.tStart = t  # local t and not account for scr refresh
                    int12.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int12, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int12.started')
                    # update status
                    int12.status = STARTED
                    int12.setAutoDraw(True)
                
                # if int12 is active this frame...
                if int12.status == STARTED:
                    # update params
                    pass
                
                # *toppeername* updates
                
                # if toppeername is starting this frame...
                if toppeername.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    toppeername.frameNStart = frameN  # exact frame index
                    toppeername.tStart = t  # local t and not account for scr refresh
                    toppeername.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(toppeername, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'toppeername.started')
                    # update status
                    toppeername.status = STARTED
                    toppeername.setAutoDraw(True)
                
                # if toppeername is active this frame...
                if toppeername.status == STARTED:
                    # update params
                    pass
                
                # *you* updates
                
                # if you is starting this frame...
                if you.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    you.frameNStart = frameN  # exact frame index
                    you.tStart = t  # local t and not account for scr refresh
                    you.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(you, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'you.started')
                    # update status
                    you.status = STARTED
                    you.setAutoDraw(True)
                
                # if you is active this frame...
                if you.status == STARTED:
                    # update params
                    pass
                
                # *icon13* updates
                
                # if icon13 is starting this frame...
                if icon13.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon13.frameNStart = frameN  # exact frame index
                    icon13.tStart = t  # local t and not account for scr refresh
                    icon13.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon13, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon13.started')
                    # update status
                    icon13.status = STARTED
                    icon13.setAutoDraw(True)
                
                # if icon13 is active this frame...
                if icon13.status == STARTED:
                    # update params
                    pass
                
                # *int13* updates
                
                # if int13 is starting this frame...
                if int13.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    int13.frameNStart = frameN  # exact frame index
                    int13.tStart = t  # local t and not account for scr refresh
                    int13.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int13, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int13.started')
                    # update status
                    int13.status = STARTED
                    int13.setAutoDraw(True)
                
                # if int13 is active this frame...
                if int13.status == STARTED:
                    # update params
                    pass
                
                # *icon14* updates
                
                # if icon14 is starting this frame...
                if icon14.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon14.frameNStart = frameN  # exact frame index
                    icon14.tStart = t  # local t and not account for scr refresh
                    icon14.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon14, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon14.started')
                    # update status
                    icon14.status = STARTED
                    icon14.setAutoDraw(True)
                
                # if icon14 is active this frame...
                if icon14.status == STARTED:
                    # update params
                    pass
                
                # *int14* updates
                
                # if int14 is starting this frame...
                if int14.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    int14.frameNStart = frameN  # exact frame index
                    int14.tStart = t  # local t and not account for scr refresh
                    int14.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int14, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int14.started')
                    # update status
                    int14.status = STARTED
                    int14.setAutoDraw(True)
                
                # if int14 is active this frame...
                if int14.status == STARTED:
                    # update params
                    pass
                
                # *icon15* updates
                
                # if icon15 is starting this frame...
                if icon15.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon15.frameNStart = frameN  # exact frame index
                    icon15.tStart = t  # local t and not account for scr refresh
                    icon15.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon15, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon15.started')
                    # update status
                    icon15.status = STARTED
                    icon15.setAutoDraw(True)
                
                # if icon15 is active this frame...
                if icon15.status == STARTED:
                    # update params
                    pass
                
                # *int15* updates
                
                # if int15 is starting this frame...
                if int15.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    int15.frameNStart = frameN  # exact frame index
                    int15.tStart = t  # local t and not account for scr refresh
                    int15.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int15, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int15.started')
                    # update status
                    int15.status = STARTED
                    int15.setAutoDraw(True)
                
                # if int15 is active this frame...
                if int15.status == STARTED:
                    # update params
                    pass
                
                # *participantpic* updates
                
                # if participantpic is starting this frame...
                if participantpic.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    participantpic.frameNStart = frameN  # exact frame index
                    participantpic.tStart = t  # local t and not account for scr refresh
                    participantpic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(participantpic, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'participantpic.started')
                    # update status
                    participantpic.status = STARTED
                    participantpic.setAutoDraw(True)
                
                # if participantpic is active this frame...
                if participantpic.status == STARTED:
                    # update params
                    pass
                
                # *yess* updates
                
                # if yess is starting this frame...
                if yess.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                    # keep track of start time/frame for later
                    yess.frameNStart = frameN  # exact frame index
                    yess.tStart = t  # local t and not account for scr refresh
                    yess.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yess, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'yess.started')
                    # update status
                    yess.status = STARTED
                    yess.setAutoDraw(True)
                
                # if yess is active this frame...
                if yess.status == STARTED:
                    # update params
                    pass
                
                # *key_resp_4* updates
                waitOnFlip = False
                
                # if key_resp_4 is starting this frame...
                if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_4.frameNStart = frameN  # exact frame index
                    key_resp_4.tStart = t  # local t and not account for scr refresh
                    key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_4.started')
                    # update status
                    key_resp_4.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_4.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_4.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_4_allKeys.extend(theseKeys)
                    if len(_key_resp_4_allKeys):
                        key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                        key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                        key_resp_4.duration = _key_resp_4_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
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
                for thisComponent in topyesp1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "topyesp1" ---
            for thisComponent in topyesp1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('topyesp1.stopped', globalClock.getTime())
            # check responses
            if key_resp_4.keys in ['', [], None]:  # No response was made
                key_resp_4.keys = None
            trials.addData('key_resp_4.keys',key_resp_4.keys)
            if key_resp_4.keys != None:  # we had a response
                trials.addData('key_resp_4.rt', key_resp_4.rt)
                trials.addData('key_resp_4.duration', key_resp_4.duration)
            # the Routine "topyesp1" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed Player1_1 repeats of 'trials'
        
        
        # set up handler to look after randomisation of conditions etc
        trials_2 = data.TrialHandler(nReps=Player2_1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='trials_2')
        thisExp.addLoop(trials_2)  # add the loop to the experiment
        thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                globals()[paramName] = thisTrial_2[paramName]
        
        for thisTrial_2 in trials_2:
            currentLoop = trials_2
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
            # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
            if thisTrial_2 != None:
                for paramName in thisTrial_2:
                    globals()[paramName] = thisTrial_2[paramName]
            
            # --- Prepare to start Routine "Player2_1" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Player2_1.started', globalClock.getTime())
            rightpeerchoice.setImage(image2)
            # keep track of which components have finished
            Player2_1Components = [polygon_7, rightpeerchoice, icon16, int16, icon17, text_11, icon19, text_12, yes1_2, text_14]
            for thisComponent in Player2_1Components:
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
            
            # --- Run Routine "Player2_1" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *polygon_7* updates
                
                # if polygon_7 is starting this frame...
                if polygon_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    polygon_7.frameNStart = frameN  # exact frame index
                    polygon_7.tStart = t  # local t and not account for scr refresh
                    polygon_7.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(polygon_7, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'polygon_7.started')
                    # update status
                    polygon_7.status = STARTED
                    polygon_7.setAutoDraw(True)
                
                # if polygon_7 is active this frame...
                if polygon_7.status == STARTED:
                    # update params
                    pass
                
                # *rightpeerchoice* updates
                
                # if rightpeerchoice is starting this frame...
                if rightpeerchoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    rightpeerchoice.frameNStart = frameN  # exact frame index
                    rightpeerchoice.tStart = t  # local t and not account for scr refresh
                    rightpeerchoice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rightpeerchoice, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rightpeerchoice.started')
                    # update status
                    rightpeerchoice.status = STARTED
                    rightpeerchoice.setAutoDraw(True)
                
                # if rightpeerchoice is active this frame...
                if rightpeerchoice.status == STARTED:
                    # update params
                    pass
                
                # *icon16* updates
                
                # if icon16 is starting this frame...
                if icon16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon16.frameNStart = frameN  # exact frame index
                    icon16.tStart = t  # local t and not account for scr refresh
                    icon16.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon16, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon16.started')
                    # update status
                    icon16.status = STARTED
                    icon16.setAutoDraw(True)
                
                # if icon16 is active this frame...
                if icon16.status == STARTED:
                    # update params
                    pass
                
                # *int16* updates
                
                # if int16 is starting this frame...
                if int16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    int16.frameNStart = frameN  # exact frame index
                    int16.tStart = t  # local t and not account for scr refresh
                    int16.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(int16, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'int16.started')
                    # update status
                    int16.status = STARTED
                    int16.setAutoDraw(True)
                
                # if int16 is active this frame...
                if int16.status == STARTED:
                    # update params
                    pass
                
                # *icon17* updates
                
                # if icon17 is starting this frame...
                if icon17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon17.frameNStart = frameN  # exact frame index
                    icon17.tStart = t  # local t and not account for scr refresh
                    icon17.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon17, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon17.started')
                    # update status
                    icon17.status = STARTED
                    icon17.setAutoDraw(True)
                
                # if icon17 is active this frame...
                if icon17.status == STARTED:
                    # update params
                    pass
                
                # *text_11* updates
                
                # if text_11 is starting this frame...
                if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_11.frameNStart = frameN  # exact frame index
                    text_11.tStart = t  # local t and not account for scr refresh
                    text_11.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_11.started')
                    # update status
                    text_11.status = STARTED
                    text_11.setAutoDraw(True)
                
                # if text_11 is active this frame...
                if text_11.status == STARTED:
                    # update params
                    pass
                
                # *icon19* updates
                
                # if icon19 is starting this frame...
                if icon19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon19.frameNStart = frameN  # exact frame index
                    icon19.tStart = t  # local t and not account for scr refresh
                    icon19.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon19, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon19.started')
                    # update status
                    icon19.status = STARTED
                    icon19.setAutoDraw(True)
                
                # if icon19 is active this frame...
                if icon19.status == STARTED:
                    # update params
                    pass
                
                # *text_12* updates
                
                # if text_12 is starting this frame...
                if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_12.frameNStart = frameN  # exact frame index
                    text_12.tStart = t  # local t and not account for scr refresh
                    text_12.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_12.started')
                    # update status
                    text_12.status = STARTED
                    text_12.setAutoDraw(True)
                
                # if text_12 is active this frame...
                if text_12.status == STARTED:
                    # update params
                    pass
                
                # *yes1_2* updates
                
                # if yes1_2 is starting this frame...
                if yes1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    yes1_2.frameNStart = frameN  # exact frame index
                    yes1_2.tStart = t  # local t and not account for scr refresh
                    yes1_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yes1_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'yes1_2.started')
                    # update status
                    yes1_2.status = STARTED
                    yes1_2.setAutoDraw(True)
                
                # if yes1_2 is active this frame...
                if yes1_2.status == STARTED:
                    # update params
                    pass
                
                # *text_14* updates
                
                # if text_14 is starting this frame...
                if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_14.frameNStart = frameN  # exact frame index
                    text_14.tStart = t  # local t and not account for scr refresh
                    text_14.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_14.started')
                    # update status
                    text_14.status = STARTED
                    text_14.setAutoDraw(True)
                
                # if text_14 is active this frame...
                if text_14.status == STARTED:
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
                for thisComponent in Player2_1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Player2_1" ---
            for thisComponent in Player2_1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Player2_1.stopped', globalClock.getTime())
            # the Routine "Player2_1" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "topyesp2" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('topyesp2.started', globalClock.getTime())
            toprightpeer.setImage(image2)
            key_resp_6.keys = []
            key_resp_6.rt = []
            _key_resp_6_allKeys = []
            # keep track of which components have finished
            topyesp2Components = [polygon_4, toprightpeer, icon20, var_2, icon21, var_7, icon22, text_31, p1_4, you_2, icon23, chat_2, icon24, sport_2, icon25, participantpic_5, beach_txt_2, yes, key_resp_6]
            for thisComponent in topyesp2Components:
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
            
            # --- Run Routine "topyesp2" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *polygon_4* updates
                
                # if polygon_4 is starting this frame...
                if polygon_4.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                    # keep track of start time/frame for later
                    polygon_4.frameNStart = frameN  # exact frame index
                    polygon_4.tStart = t  # local t and not account for scr refresh
                    polygon_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(polygon_4, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'polygon_4.started')
                    # update status
                    polygon_4.status = STARTED
                    polygon_4.setAutoDraw(True)
                
                # if polygon_4 is active this frame...
                if polygon_4.status == STARTED:
                    # update params
                    pass
                
                # *toprightpeer* updates
                
                # if toprightpeer is starting this frame...
                if toprightpeer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    toprightpeer.frameNStart = frameN  # exact frame index
                    toprightpeer.tStart = t  # local t and not account for scr refresh
                    toprightpeer.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(toprightpeer, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'toprightpeer.started')
                    # update status
                    toprightpeer.status = STARTED
                    toprightpeer.setAutoDraw(True)
                
                # if toprightpeer is active this frame...
                if toprightpeer.status == STARTED:
                    # update params
                    pass
                
                # *icon20* updates
                
                # if icon20 is starting this frame...
                if icon20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon20.frameNStart = frameN  # exact frame index
                    icon20.tStart = t  # local t and not account for scr refresh
                    icon20.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon20, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon20.started')
                    # update status
                    icon20.status = STARTED
                    icon20.setAutoDraw(True)
                
                # if icon20 is active this frame...
                if icon20.status == STARTED:
                    # update params
                    pass
                
                # *var_2* updates
                
                # if var_2 is starting this frame...
                if var_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    var_2.frameNStart = frameN  # exact frame index
                    var_2.tStart = t  # local t and not account for scr refresh
                    var_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(var_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'var_2.started')
                    # update status
                    var_2.status = STARTED
                    var_2.setAutoDraw(True)
                
                # if var_2 is active this frame...
                if var_2.status == STARTED:
                    # update params
                    pass
                
                # *icon21* updates
                
                # if icon21 is starting this frame...
                if icon21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon21.frameNStart = frameN  # exact frame index
                    icon21.tStart = t  # local t and not account for scr refresh
                    icon21.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon21, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon21.started')
                    # update status
                    icon21.status = STARTED
                    icon21.setAutoDraw(True)
                
                # if icon21 is active this frame...
                if icon21.status == STARTED:
                    # update params
                    pass
                
                # *var_7* updates
                
                # if var_7 is starting this frame...
                if var_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    var_7.frameNStart = frameN  # exact frame index
                    var_7.tStart = t  # local t and not account for scr refresh
                    var_7.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(var_7, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'var_7.started')
                    # update status
                    var_7.status = STARTED
                    var_7.setAutoDraw(True)
                
                # if var_7 is active this frame...
                if var_7.status == STARTED:
                    # update params
                    pass
                
                # *icon22* updates
                
                # if icon22 is starting this frame...
                if icon22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon22.frameNStart = frameN  # exact frame index
                    icon22.tStart = t  # local t and not account for scr refresh
                    icon22.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon22, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon22.started')
                    # update status
                    icon22.status = STARTED
                    icon22.setAutoDraw(True)
                
                # if icon22 is active this frame...
                if icon22.status == STARTED:
                    # update params
                    pass
                
                # *text_31* updates
                
                # if text_31 is starting this frame...
                if text_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_31.frameNStart = frameN  # exact frame index
                    text_31.tStart = t  # local t and not account for scr refresh
                    text_31.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_31, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_31.started')
                    # update status
                    text_31.status = STARTED
                    text_31.setAutoDraw(True)
                
                # if text_31 is active this frame...
                if text_31.status == STARTED:
                    # update params
                    pass
                
                # *p1_4* updates
                
                # if p1_4 is starting this frame...
                if p1_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    p1_4.frameNStart = frameN  # exact frame index
                    p1_4.tStart = t  # local t and not account for scr refresh
                    p1_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(p1_4, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'p1_4.started')
                    # update status
                    p1_4.status = STARTED
                    p1_4.setAutoDraw(True)
                
                # if p1_4 is active this frame...
                if p1_4.status == STARTED:
                    # update params
                    pass
                
                # *you_2* updates
                
                # if you_2 is starting this frame...
                if you_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    you_2.frameNStart = frameN  # exact frame index
                    you_2.tStart = t  # local t and not account for scr refresh
                    you_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(you_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'you_2.started')
                    # update status
                    you_2.status = STARTED
                    you_2.setAutoDraw(True)
                
                # if you_2 is active this frame...
                if you_2.status == STARTED:
                    # update params
                    pass
                
                # *icon23* updates
                
                # if icon23 is starting this frame...
                if icon23.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon23.frameNStart = frameN  # exact frame index
                    icon23.tStart = t  # local t and not account for scr refresh
                    icon23.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon23, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon23.started')
                    # update status
                    icon23.status = STARTED
                    icon23.setAutoDraw(True)
                
                # if icon23 is active this frame...
                if icon23.status == STARTED:
                    # update params
                    pass
                
                # *chat_2* updates
                
                # if chat_2 is starting this frame...
                if chat_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    chat_2.frameNStart = frameN  # exact frame index
                    chat_2.tStart = t  # local t and not account for scr refresh
                    chat_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(chat_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'chat_2.started')
                    # update status
                    chat_2.status = STARTED
                    chat_2.setAutoDraw(True)
                
                # if chat_2 is active this frame...
                if chat_2.status == STARTED:
                    # update params
                    pass
                
                # *icon24* updates
                
                # if icon24 is starting this frame...
                if icon24.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon24.frameNStart = frameN  # exact frame index
                    icon24.tStart = t  # local t and not account for scr refresh
                    icon24.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon24, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon24.started')
                    # update status
                    icon24.status = STARTED
                    icon24.setAutoDraw(True)
                
                # if icon24 is active this frame...
                if icon24.status == STARTED:
                    # update params
                    pass
                
                # *sport_2* updates
                
                # if sport_2 is starting this frame...
                if sport_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    sport_2.frameNStart = frameN  # exact frame index
                    sport_2.tStart = t  # local t and not account for scr refresh
                    sport_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(sport_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sport_2.started')
                    # update status
                    sport_2.status = STARTED
                    sport_2.setAutoDraw(True)
                
                # if sport_2 is active this frame...
                if sport_2.status == STARTED:
                    # update params
                    pass
                
                # *icon25* updates
                
                # if icon25 is starting this frame...
                if icon25.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    icon25.frameNStart = frameN  # exact frame index
                    icon25.tStart = t  # local t and not account for scr refresh
                    icon25.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(icon25, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'icon25.started')
                    # update status
                    icon25.status = STARTED
                    icon25.setAutoDraw(True)
                
                # if icon25 is active this frame...
                if icon25.status == STARTED:
                    # update params
                    pass
                
                # *participantpic_5* updates
                
                # if participantpic_5 is starting this frame...
                if participantpic_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    participantpic_5.frameNStart = frameN  # exact frame index
                    participantpic_5.tStart = t  # local t and not account for scr refresh
                    participantpic_5.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(participantpic_5, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'participantpic_5.started')
                    # update status
                    participantpic_5.status = STARTED
                    participantpic_5.setAutoDraw(True)
                
                # if participantpic_5 is active this frame...
                if participantpic_5.status == STARTED:
                    # update params
                    pass
                
                # *beach_txt_2* updates
                
                # if beach_txt_2 is starting this frame...
                if beach_txt_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                    # keep track of start time/frame for later
                    beach_txt_2.frameNStart = frameN  # exact frame index
                    beach_txt_2.tStart = t  # local t and not account for scr refresh
                    beach_txt_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(beach_txt_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'beach_txt_2.started')
                    # update status
                    beach_txt_2.status = STARTED
                    beach_txt_2.setAutoDraw(True)
                
                # if beach_txt_2 is active this frame...
                if beach_txt_2.status == STARTED:
                    # update params
                    pass
                
                # *yes* updates
                
                # if yes is starting this frame...
                if yes.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                    # keep track of start time/frame for later
                    yes.frameNStart = frameN  # exact frame index
                    yes.tStart = t  # local t and not account for scr refresh
                    yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(yes, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'yes.started')
                    # update status
                    yes.status = STARTED
                    yes.setAutoDraw(True)
                
                # if yes is active this frame...
                if yes.status == STARTED:
                    # update params
                    pass
                
                # *key_resp_6* updates
                waitOnFlip = False
                
                # if key_resp_6 is starting this frame...
                if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_6.frameNStart = frameN  # exact frame index
                    key_resp_6.tStart = t  # local t and not account for scr refresh
                    key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_6.started')
                    # update status
                    key_resp_6.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_6.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_6.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_6_allKeys.extend(theseKeys)
                    if len(_key_resp_6_allKeys):
                        key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
                        key_resp_6.rt = _key_resp_6_allKeys[-1].rt
                        key_resp_6.duration = _key_resp_6_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
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
                for thisComponent in topyesp2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "topyesp2" ---
            for thisComponent in topyesp2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('topyesp2.stopped', globalClock.getTime())
            # check responses
            if key_resp_6.keys in ['', [], None]:  # No response was made
                key_resp_6.keys = None
            trials_2.addData('key_resp_6.keys',key_resp_6.keys)
            if key_resp_6.keys != None:  # we had a response
                trials_2.addData('key_resp_6.rt', key_resp_6.rt)
                trials_2.addData('key_resp_6.duration', key_resp_6.duration)
            # the Routine "topyesp2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed Player2_1 repeats of 'trials_2'
        
        
        # --- Prepare to start Routine "wait" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('wait.started', globalClock.getTime())
        # keep track of which components have finished
        waitComponents = [polygon, text_16]
        for thisComponent in waitComponents:
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
        
        # --- Run Routine "wait" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # is it time to end the Routine? (based on local clock)
            if tThisFlip > 3-frameTolerance:
                continueRoutine = False
            
            # *polygon* updates
            
            # if polygon is starting this frame...
            if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon.frameNStart = frameN  # exact frame index
                polygon.tStart = t  # local t and not account for scr refresh
                polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'polygon.started')
                # update status
                polygon.status = STARTED
                polygon.setAutoDraw(True)
            
            # if polygon is active this frame...
            if polygon.status == STARTED:
                # update params
                pass
            
            # *text_16* updates
            
            # if text_16 is starting this frame...
            if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_16.frameNStart = frameN  # exact frame index
                text_16.tStart = t  # local t and not account for scr refresh
                text_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_16.started')
                # update status
                text_16.status = STARTED
                text_16.setAutoDraw(True)
            
            # if text_16 is active this frame...
            if text_16.status == STARTED:
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
            for thisComponent in waitComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "wait" ---
        for thisComponent in waitComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('wait.stopped', globalClock.getTime())
        # the Routine "wait" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 5.0 repeats of 'trials_3'
    
    
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
