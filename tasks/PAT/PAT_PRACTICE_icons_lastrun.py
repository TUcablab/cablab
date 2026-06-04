#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on June 04, 2026, at 15:20
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
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
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
        originPath='C:\\Users\\Public\\Documents\\cablab\\tasks\\PAT\\PAT_PRACTICE_icons_lastrun.py',
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
    
    # --- Initialize components for Routine "welcome" ---
    wel = visual.TextStim(win=win, name='wel',
        text='Welcome to the Friends Game!\n\nWe will now show you how to play this game.\n\nPress spacebar for a demo.\n',
        font='Consolas',
        pos=(0, 0), height=0.05, wrapWidth=2.0, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "trial" ---
    Who = visual.TextStim(win=win, name='Who',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0, 0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_3 = visual.TextStim(win=win, name='text_3',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    Player1demo = visual.ImageStim(
        win=win,
        name='Player1demo', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    Player2demo = visual.ImageStim(
        win=win,
        name='Player2demo', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    cooking = visual.ImageStim(
        win=win,
        name='cooking', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_4 = visual.TextStim(win=win, name='text_4',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.08), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    movies = visual.ImageStim(
        win=win,
        name='movies', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_5 = visual.TextStim(win=win, name='text_5',
        text='dancing',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    dancing = visual.ImageStim(
        win=win,
        name='dancing', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    text_6 = visual.TextStim(win=win, name='text_6',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    fashion = visual.ImageStim(
        win=win,
        name='fashion', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    text_7 = visual.TextStim(win=win, name='text_7',
        text='fashion',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    movie = visual.ImageStim(
        win=win,
        name='movie', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    text_8 = visual.TextStim(win=win, name='text_8',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    writing = visual.ImageStim(
        win=win,
        name='writing', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    text_9 = visual.TextStim(win=win, name='text_9',
        text='writing',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player_1" ---
    Player1 = visual.ImageStim(
        win=win,
        name='Player1', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    cook = visual.ImageStim(
        win=win,
        name='cook', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    var_4 = visual.TextStim(win=win, name='var_4',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.08), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    movie_2 = visual.ImageStim(
        win=win,
        name='movie_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    var_5 = visual.TextStim(win=win, name='var_5',
        text='dancing',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    dance = visual.ImageStim(
        win=win,
        name='dance', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text = visual.TextStim(win=win, name='text',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    p1 = visual.TextStim(win=win, name='p1',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    yes1 = visual.ImageStim(
        win=win,
        name='yes1', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    key_resp_4 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player_2" ---
    player = visual.ImageStim(
        win=win,
        name='player', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    fashion_2 = visual.ImageStim(
        win=win,
        name='fashion_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    text_10 = visual.TextStim(win=win, name='text_10',
        text='fashion',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    movie_3 = visual.ImageStim(
        win=win,
        name='movie_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_11 = visual.TextStim(win=win, name='text_11',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    writing_2 = visual.ImageStim(
        win=win,
        name='writing_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_12 = visual.TextStim(win=win, name='text_12',
        text='writing',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    key_resp_3 = keyboard.Keyboard()
    yes1_2 = visual.ImageStim(
        win=win,
        name='yes1_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.3, 0.3),
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
    
    # --- Initialize components for Routine "topplayer" ---
    Player1_2 = visual.ImageStim(
        win=win,
        name='Player1_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    cook_2 = visual.ImageStim(
        win=win,
        name='cook_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    var = visual.TextStim(win=win, name='var',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.13, 0.095), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    movie_4 = visual.ImageStim(
        win=win,
        name='movie_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    var_6 = visual.TextStim(win=win, name='var_6',
        text='dancing',
        font='Open Sans',
        pos=(0.13, 0.11), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    dance_2 = visual.ImageStim(
        win=win,
        name='dance_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_13 = visual.TextStim(win=win, name='text_13',
        text='movies',
        font='Open Sans',
        pos=(0.0, 0.11), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    p1_2 = visual.TextStim(win=win, name='p1_2',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    you = visual.TextStim(win=win, name='you',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    chatting = visual.ImageStim(
        win=win,
        name='chatting', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    chat = visual.TextStim(win=win, name='chat',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.23), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    sports = visual.ImageStim(
        win=win,
        name='sports', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    sport = visual.TextStim(win=win, name='sport',
        text='sports',
        font='Open Sans',
        pos=(0, -0.23), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    beach = visual.ImageStim(
        win=win,
        name='beach', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    beach_txt = visual.TextStim(win=win, name='beach_txt',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.23), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    participantpic = visual.ImageStim(
        win=win,
        name='participantpic', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    no = visual.ImageStim(
        win=win,
        name='no', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.2, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    
    # --- Initialize components for Routine "fix" ---
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
    
    # --- Initialize components for Routine "trail2" ---
    Who_2 = visual.TextStim(win=win, name='Who_2',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0, 0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_15 = visual.TextStim(win=win, name='text_15',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_17 = visual.TextStim(win=win, name='text_17',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    Player1demo_2 = visual.ImageStim(
        win=win,
        name='Player1demo_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    Player2demo_2 = visual.ImageStim(
        win=win,
        name='Player2demo_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    cooking_2 = visual.ImageStim(
        win=win,
        name='cooking_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_18 = visual.TextStim(win=win, name='text_18',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.08), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    movies_2 = visual.ImageStim(
        win=win,
        name='movies_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_19 = visual.TextStim(win=win, name='text_19',
        text='dancing',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    dancing_2 = visual.ImageStim(
        win=win,
        name='dancing_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    text_20 = visual.TextStim(win=win, name='text_20',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    fashion_3 = visual.ImageStim(
        win=win,
        name='fashion_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    text_21 = visual.TextStim(win=win, name='text_21',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    movie_5 = visual.ImageStim(
        win=win,
        name='movie_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    text_22 = visual.TextStim(win=win, name='text_22',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    writing_3 = visual.ImageStim(
        win=win,
        name='writing_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    text_23 = visual.TextStim(win=win, name='text_23',
        text='writing',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    key_resp_5 = keyboard.Keyboard()
    
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
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('trial.started', globalClock.getTime())
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    trialComponents = [Who, text_2, text_3, Player1demo, Player2demo, cooking, text_4, movies, text_5, dancing, text_6, fashion, text_7, movie, text_8, writing, text_9, key_resp]
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
            theseKeys = key_resp.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
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
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    thisExp.nextEntry()
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Player_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Player_1.started', globalClock.getTime())
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    Player_1Components = [Player1, cook, var_4, movie_2, var_5, dance, text, p1, yes1, key_resp_4]
    for thisComponent in Player_1Components:
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
    
    # --- Run Routine "Player_1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Player1* updates
        
        # if Player1 is starting this frame...
        if Player1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1.frameNStart = frameN  # exact frame index
            Player1.tStart = t  # local t and not account for scr refresh
            Player1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1.started')
            # update status
            Player1.status = STARTED
            Player1.setAutoDraw(True)
        
        # if Player1 is active this frame...
        if Player1.status == STARTED:
            # update params
            pass
        
        # *cook* updates
        
        # if cook is starting this frame...
        if cook.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cook.frameNStart = frameN  # exact frame index
            cook.tStart = t  # local t and not account for scr refresh
            cook.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cook, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cook.started')
            # update status
            cook.status = STARTED
            cook.setAutoDraw(True)
        
        # if cook is active this frame...
        if cook.status == STARTED:
            # update params
            pass
        
        # *var_4* updates
        
        # if var_4 is starting this frame...
        if var_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_4.frameNStart = frameN  # exact frame index
            var_4.tStart = t  # local t and not account for scr refresh
            var_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_4.started')
            # update status
            var_4.status = STARTED
            var_4.setAutoDraw(True)
        
        # if var_4 is active this frame...
        if var_4.status == STARTED:
            # update params
            pass
        
        # *movie_2* updates
        
        # if movie_2 is starting this frame...
        if movie_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_2.frameNStart = frameN  # exact frame index
            movie_2.tStart = t  # local t and not account for scr refresh
            movie_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_2.started')
            # update status
            movie_2.status = STARTED
            movie_2.setAutoDraw(True)
        
        # if movie_2 is active this frame...
        if movie_2.status == STARTED:
            # update params
            pass
        
        # *var_5* updates
        
        # if var_5 is starting this frame...
        if var_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_5.frameNStart = frameN  # exact frame index
            var_5.tStart = t  # local t and not account for scr refresh
            var_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_5.started')
            # update status
            var_5.status = STARTED
            var_5.setAutoDraw(True)
        
        # if var_5 is active this frame...
        if var_5.status == STARTED:
            # update params
            pass
        
        # *dance* updates
        
        # if dance is starting this frame...
        if dance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dance.frameNStart = frameN  # exact frame index
            dance.tStart = t  # local t and not account for scr refresh
            dance.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dance, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'dance.started')
            # update status
            dance.status = STARTED
            dance.setAutoDraw(True)
        
        # if dance is active this frame...
        if dance.status == STARTED:
            # update params
            pass
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *p1* updates
        
        # if p1 is starting this frame...
        if p1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1.frameNStart = frameN  # exact frame index
            p1.tStart = t  # local t and not account for scr refresh
            p1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1.started')
            # update status
            p1.status = STARTED
            p1.setAutoDraw(True)
        
        # if p1 is active this frame...
        if p1.status == STARTED:
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
        for thisComponent in Player_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Player_1" ---
    for thisComponent in Player_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Player_1.stopped', globalClock.getTime())
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    thisExp.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        thisExp.addData('key_resp_4.rt', key_resp_4.rt)
        thisExp.addData('key_resp_4.duration', key_resp_4.duration)
    thisExp.nextEntry()
    # the Routine "Player_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Player_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Player_2.started', globalClock.getTime())
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    Player_2Components = [player, fashion_2, text_10, movie_3, text_11, writing_2, text_12, key_resp_3, yes1_2, text_14]
    for thisComponent in Player_2Components:
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
    
    # --- Run Routine "Player_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *player* updates
        
        # if player is starting this frame...
        if player.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player.frameNStart = frameN  # exact frame index
            player.tStart = t  # local t and not account for scr refresh
            player.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'player.started')
            # update status
            player.status = STARTED
            player.setAutoDraw(True)
        
        # if player is active this frame...
        if player.status == STARTED:
            # update params
            pass
        
        # *fashion_2* updates
        
        # if fashion_2 is starting this frame...
        if fashion_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fashion_2.frameNStart = frameN  # exact frame index
            fashion_2.tStart = t  # local t and not account for scr refresh
            fashion_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fashion_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fashion_2.started')
            # update status
            fashion_2.status = STARTED
            fashion_2.setAutoDraw(True)
        
        # if fashion_2 is active this frame...
        if fashion_2.status == STARTED:
            # update params
            pass
        
        # *text_10* updates
        
        # if text_10 is starting this frame...
        if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_10.started')
            # update status
            text_10.status = STARTED
            text_10.setAutoDraw(True)
        
        # if text_10 is active this frame...
        if text_10.status == STARTED:
            # update params
            pass
        
        # *movie_3* updates
        
        # if movie_3 is starting this frame...
        if movie_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_3.frameNStart = frameN  # exact frame index
            movie_3.tStart = t  # local t and not account for scr refresh
            movie_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_3.started')
            # update status
            movie_3.status = STARTED
            movie_3.setAutoDraw(True)
        
        # if movie_3 is active this frame...
        if movie_3.status == STARTED:
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
        
        # *writing_2* updates
        
        # if writing_2 is starting this frame...
        if writing_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writing_2.frameNStart = frameN  # exact frame index
            writing_2.tStart = t  # local t and not account for scr refresh
            writing_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writing_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writing_2.started')
            # update status
            writing_2.status = STARTED
            writing_2.setAutoDraw(True)
        
        # if writing_2 is active this frame...
        if writing_2.status == STARTED:
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
        
        # *key_resp_3* updates
        waitOnFlip = False
        
        # if key_resp_3 is starting this frame...
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_3.started')
            # update status
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                key_resp_3.duration = _key_resp_3_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
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
        for thisComponent in Player_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Player_2" ---
    for thisComponent in Player_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Player_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    thisExp.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        thisExp.addData('key_resp_3.rt', key_resp_3.rt)
        thisExp.addData('key_resp_3.duration', key_resp_3.duration)
    thisExp.nextEntry()
    # the Routine "Player_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topplayer" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topplayer.started', globalClock.getTime())
    # keep track of which components have finished
    topplayerComponents = [Player1_2, cook_2, var, movie_4, var_6, dance_2, text_13, p1_2, you, chatting, chat, sports, sport, beach, beach_txt, participantpic, no]
    for thisComponent in topplayerComponents:
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
    
    # --- Run Routine "topplayer" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # is it time to end the Routine? (based on local clock)
        if tThisFlip > 4.5-frameTolerance:
            continueRoutine = False
        
        # *Player1_2* updates
        
        # if Player1_2 is starting this frame...
        if Player1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_2.frameNStart = frameN  # exact frame index
            Player1_2.tStart = t  # local t and not account for scr refresh
            Player1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_2.started')
            # update status
            Player1_2.status = STARTED
            Player1_2.setAutoDraw(True)
        
        # if Player1_2 is active this frame...
        if Player1_2.status == STARTED:
            # update params
            pass
        
        # *cook_2* updates
        
        # if cook_2 is starting this frame...
        if cook_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cook_2.frameNStart = frameN  # exact frame index
            cook_2.tStart = t  # local t and not account for scr refresh
            cook_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cook_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cook_2.started')
            # update status
            cook_2.status = STARTED
            cook_2.setAutoDraw(True)
        
        # if cook_2 is active this frame...
        if cook_2.status == STARTED:
            # update params
            pass
        
        # *var* updates
        
        # if var is starting this frame...
        if var.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var.frameNStart = frameN  # exact frame index
            var.tStart = t  # local t and not account for scr refresh
            var.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var.started')
            # update status
            var.status = STARTED
            var.setAutoDraw(True)
        
        # if var is active this frame...
        if var.status == STARTED:
            # update params
            pass
        
        # *movie_4* updates
        
        # if movie_4 is starting this frame...
        if movie_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_4.frameNStart = frameN  # exact frame index
            movie_4.tStart = t  # local t and not account for scr refresh
            movie_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_4.started')
            # update status
            movie_4.status = STARTED
            movie_4.setAutoDraw(True)
        
        # if movie_4 is active this frame...
        if movie_4.status == STARTED:
            # update params
            pass
        
        # *var_6* updates
        
        # if var_6 is starting this frame...
        if var_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_6.frameNStart = frameN  # exact frame index
            var_6.tStart = t  # local t and not account for scr refresh
            var_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_6.started')
            # update status
            var_6.status = STARTED
            var_6.setAutoDraw(True)
        
        # if var_6 is active this frame...
        if var_6.status == STARTED:
            # update params
            pass
        
        # *dance_2* updates
        
        # if dance_2 is starting this frame...
        if dance_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dance_2.frameNStart = frameN  # exact frame index
            dance_2.tStart = t  # local t and not account for scr refresh
            dance_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dance_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'dance_2.started')
            # update status
            dance_2.status = STARTED
            dance_2.setAutoDraw(True)
        
        # if dance_2 is active this frame...
        if dance_2.status == STARTED:
            # update params
            pass
        
        # *text_13* updates
        
        # if text_13 is starting this frame...
        if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_13.frameNStart = frameN  # exact frame index
            text_13.tStart = t  # local t and not account for scr refresh
            text_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_13.started')
            # update status
            text_13.status = STARTED
            text_13.setAutoDraw(True)
        
        # if text_13 is active this frame...
        if text_13.status == STARTED:
            # update params
            pass
        
        # *p1_2* updates
        
        # if p1_2 is starting this frame...
        if p1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_2.frameNStart = frameN  # exact frame index
            p1_2.tStart = t  # local t and not account for scr refresh
            p1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_2.started')
            # update status
            p1_2.status = STARTED
            p1_2.setAutoDraw(True)
        
        # if p1_2 is active this frame...
        if p1_2.status == STARTED:
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
        
        # *chatting* updates
        
        # if chatting is starting this frame...
        if chatting.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting.frameNStart = frameN  # exact frame index
            chatting.tStart = t  # local t and not account for scr refresh
            chatting.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting.started')
            # update status
            chatting.status = STARTED
            chatting.setAutoDraw(True)
        
        # if chatting is active this frame...
        if chatting.status == STARTED:
            # update params
            pass
        
        # *chat* updates
        
        # if chat is starting this frame...
        if chat.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat.frameNStart = frameN  # exact frame index
            chat.tStart = t  # local t and not account for scr refresh
            chat.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat.started')
            # update status
            chat.status = STARTED
            chat.setAutoDraw(True)
        
        # if chat is active this frame...
        if chat.status == STARTED:
            # update params
            pass
        
        # *sports* updates
        
        # if sports is starting this frame...
        if sports.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports.frameNStart = frameN  # exact frame index
            sports.tStart = t  # local t and not account for scr refresh
            sports.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports.started')
            # update status
            sports.status = STARTED
            sports.setAutoDraw(True)
        
        # if sports is active this frame...
        if sports.status == STARTED:
            # update params
            pass
        
        # *sport* updates
        
        # if sport is starting this frame...
        if sport.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport.frameNStart = frameN  # exact frame index
            sport.tStart = t  # local t and not account for scr refresh
            sport.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport.started')
            # update status
            sport.status = STARTED
            sport.setAutoDraw(True)
        
        # if sport is active this frame...
        if sport.status == STARTED:
            # update params
            pass
        
        # *beach* updates
        
        # if beach is starting this frame...
        if beach.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach.frameNStart = frameN  # exact frame index
            beach.tStart = t  # local t and not account for scr refresh
            beach.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach.started')
            # update status
            beach.status = STARTED
            beach.setAutoDraw(True)
        
        # if beach is active this frame...
        if beach.status == STARTED:
            # update params
            pass
        
        # *beach_txt* updates
        
        # if beach_txt is starting this frame...
        if beach_txt.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt.frameNStart = frameN  # exact frame index
            beach_txt.tStart = t  # local t and not account for scr refresh
            beach_txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt.started')
            # update status
            beach_txt.status = STARTED
            beach_txt.setAutoDraw(True)
        
        # if beach_txt is active this frame...
        if beach_txt.status == STARTED:
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
        
        # *no* updates
        
        # if no is starting this frame...
        if no.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            no.frameNStart = frameN  # exact frame index
            no.tStart = t  # local t and not account for scr refresh
            no.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(no, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'no.started')
            # update status
            no.status = STARTED
            no.setAutoDraw(True)
        
        # if no is active this frame...
        if no.status == STARTED:
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
        for thisComponent in topplayerComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topplayer" ---
    for thisComponent in topplayerComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topplayer.stopped', globalClock.getTime())
    # the Routine "topplayer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "fix" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('fix.started', globalClock.getTime())
    # keep track of which components have finished
    fixComponents = [polygon, text_16]
    for thisComponent in fixComponents:
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
    
    # --- Run Routine "fix" ---
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
        for thisComponent in fixComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "fix" ---
    for thisComponent in fixComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('fix.stopped', globalClock.getTime())
    # the Routine "fix" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "trail2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('trail2.started', globalClock.getTime())
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    trail2Components = [Who_2, text_15, text_17, Player1demo_2, Player2demo_2, cooking_2, text_18, movies_2, text_19, dancing_2, text_20, fashion_3, text_21, movie_5, text_22, writing_3, text_23, key_resp_5]
    for thisComponent in trail2Components:
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
    
    # --- Run Routine "trail2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Who_2* updates
        
        # if Who_2 is starting this frame...
        if Who_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Who_2.frameNStart = frameN  # exact frame index
            Who_2.tStart = t  # local t and not account for scr refresh
            Who_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Who_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Who_2.started')
            # update status
            Who_2.status = STARTED
            Who_2.setAutoDraw(True)
        
        # if Who_2 is active this frame...
        if Who_2.status == STARTED:
            # update params
            pass
        
        # *text_15* updates
        
        # if text_15 is starting this frame...
        if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_15.frameNStart = frameN  # exact frame index
            text_15.tStart = t  # local t and not account for scr refresh
            text_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_15.started')
            # update status
            text_15.status = STARTED
            text_15.setAutoDraw(True)
        
        # if text_15 is active this frame...
        if text_15.status == STARTED:
            # update params
            pass
        
        # *text_17* updates
        
        # if text_17 is starting this frame...
        if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_17.frameNStart = frameN  # exact frame index
            text_17.tStart = t  # local t and not account for scr refresh
            text_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_17.started')
            # update status
            text_17.status = STARTED
            text_17.setAutoDraw(True)
        
        # if text_17 is active this frame...
        if text_17.status == STARTED:
            # update params
            pass
        
        # *Player1demo_2* updates
        
        # if Player1demo_2 is starting this frame...
        if Player1demo_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1demo_2.frameNStart = frameN  # exact frame index
            Player1demo_2.tStart = t  # local t and not account for scr refresh
            Player1demo_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1demo_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1demo_2.started')
            # update status
            Player1demo_2.status = STARTED
            Player1demo_2.setAutoDraw(True)
        
        # if Player1demo_2 is active this frame...
        if Player1demo_2.status == STARTED:
            # update params
            pass
        
        # *Player2demo_2* updates
        
        # if Player2demo_2 is starting this frame...
        if Player2demo_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2demo_2.frameNStart = frameN  # exact frame index
            Player2demo_2.tStart = t  # local t and not account for scr refresh
            Player2demo_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2demo_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2demo_2.started')
            # update status
            Player2demo_2.status = STARTED
            Player2demo_2.setAutoDraw(True)
        
        # if Player2demo_2 is active this frame...
        if Player2demo_2.status == STARTED:
            # update params
            pass
        
        # *cooking_2* updates
        
        # if cooking_2 is starting this frame...
        if cooking_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cooking_2.frameNStart = frameN  # exact frame index
            cooking_2.tStart = t  # local t and not account for scr refresh
            cooking_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cooking_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cooking_2.started')
            # update status
            cooking_2.status = STARTED
            cooking_2.setAutoDraw(True)
        
        # if cooking_2 is active this frame...
        if cooking_2.status == STARTED:
            # update params
            pass
        
        # *text_18* updates
        
        # if text_18 is starting this frame...
        if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_18.frameNStart = frameN  # exact frame index
            text_18.tStart = t  # local t and not account for scr refresh
            text_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_18.started')
            # update status
            text_18.status = STARTED
            text_18.setAutoDraw(True)
        
        # if text_18 is active this frame...
        if text_18.status == STARTED:
            # update params
            pass
        
        # *movies_2* updates
        
        # if movies_2 is starting this frame...
        if movies_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movies_2.frameNStart = frameN  # exact frame index
            movies_2.tStart = t  # local t and not account for scr refresh
            movies_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movies_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movies_2.started')
            # update status
            movies_2.status = STARTED
            movies_2.setAutoDraw(True)
        
        # if movies_2 is active this frame...
        if movies_2.status == STARTED:
            # update params
            pass
        
        # *text_19* updates
        
        # if text_19 is starting this frame...
        if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_19.frameNStart = frameN  # exact frame index
            text_19.tStart = t  # local t and not account for scr refresh
            text_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_19.started')
            # update status
            text_19.status = STARTED
            text_19.setAutoDraw(True)
        
        # if text_19 is active this frame...
        if text_19.status == STARTED:
            # update params
            pass
        
        # *dancing_2* updates
        
        # if dancing_2 is starting this frame...
        if dancing_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dancing_2.frameNStart = frameN  # exact frame index
            dancing_2.tStart = t  # local t and not account for scr refresh
            dancing_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dancing_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'dancing_2.started')
            # update status
            dancing_2.status = STARTED
            dancing_2.setAutoDraw(True)
        
        # if dancing_2 is active this frame...
        if dancing_2.status == STARTED:
            # update params
            pass
        
        # *text_20* updates
        
        # if text_20 is starting this frame...
        if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_20.frameNStart = frameN  # exact frame index
            text_20.tStart = t  # local t and not account for scr refresh
            text_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_20.started')
            # update status
            text_20.status = STARTED
            text_20.setAutoDraw(True)
        
        # if text_20 is active this frame...
        if text_20.status == STARTED:
            # update params
            pass
        
        # *fashion_3* updates
        
        # if fashion_3 is starting this frame...
        if fashion_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fashion_3.frameNStart = frameN  # exact frame index
            fashion_3.tStart = t  # local t and not account for scr refresh
            fashion_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fashion_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fashion_3.started')
            # update status
            fashion_3.status = STARTED
            fashion_3.setAutoDraw(True)
        
        # if fashion_3 is active this frame...
        if fashion_3.status == STARTED:
            # update params
            pass
        
        # *text_21* updates
        
        # if text_21 is starting this frame...
        if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_21.frameNStart = frameN  # exact frame index
            text_21.tStart = t  # local t and not account for scr refresh
            text_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_21.started')
            # update status
            text_21.status = STARTED
            text_21.setAutoDraw(True)
        
        # if text_21 is active this frame...
        if text_21.status == STARTED:
            # update params
            pass
        
        # *movie_5* updates
        
        # if movie_5 is starting this frame...
        if movie_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_5.frameNStart = frameN  # exact frame index
            movie_5.tStart = t  # local t and not account for scr refresh
            movie_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_5.started')
            # update status
            movie_5.status = STARTED
            movie_5.setAutoDraw(True)
        
        # if movie_5 is active this frame...
        if movie_5.status == STARTED:
            # update params
            pass
        
        # *text_22* updates
        
        # if text_22 is starting this frame...
        if text_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_22.frameNStart = frameN  # exact frame index
            text_22.tStart = t  # local t and not account for scr refresh
            text_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_22.started')
            # update status
            text_22.status = STARTED
            text_22.setAutoDraw(True)
        
        # if text_22 is active this frame...
        if text_22.status == STARTED:
            # update params
            pass
        
        # *writing_3* updates
        
        # if writing_3 is starting this frame...
        if writing_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writing_3.frameNStart = frameN  # exact frame index
            writing_3.tStart = t  # local t and not account for scr refresh
            writing_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writing_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writing_3.started')
            # update status
            writing_3.status = STARTED
            writing_3.setAutoDraw(True)
        
        # if writing_3 is active this frame...
        if writing_3.status == STARTED:
            # update params
            pass
        
        # *text_23* updates
        
        # if text_23 is starting this frame...
        if text_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_23.frameNStart = frameN  # exact frame index
            text_23.tStart = t  # local t and not account for scr refresh
            text_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_23.started')
            # update status
            text_23.status = STARTED
            text_23.setAutoDraw(True)
        
        # if text_23 is active this frame...
        if text_23.status == STARTED:
            # update params
            pass
        
        # *key_resp_5* updates
        waitOnFlip = False
        
        # if key_resp_5 is starting this frame...
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_5.started')
            # update status
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                key_resp_5.duration = _key_resp_5_allKeys[-1].duration
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
        for thisComponent in trail2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trail2" ---
    for thisComponent in trail2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('trail2.stopped', globalClock.getTime())
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys = None
    thisExp.addData('key_resp_5.keys',key_resp_5.keys)
    if key_resp_5.keys != None:  # we had a response
        thisExp.addData('key_resp_5.rt', key_resp_5.rt)
        thisExp.addData('key_resp_5.duration', key_resp_5.duration)
    thisExp.nextEntry()
    # the Routine "trail2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
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
