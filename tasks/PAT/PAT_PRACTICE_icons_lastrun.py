#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on June 12, 2026, at 15:55
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
    
    # --- Initialize components for Routine "ChoiceRoutine_1" ---
    Who = visual.TextStim(win=win, name='Who',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0 ,0.38), height=0.04, wrapWidth=None, ori=0.0, 
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
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
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
        pos=(-0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
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
        pos=(-0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
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
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
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
        pos=(0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
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
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player1_1" ---
    polygon_6 = visual.Rect(
        win=win, name='polygon_6',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1 = visual.ImageStim(
        win=win,
        name='Player1', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    cook = visual.ImageStim(
        win=win,
        name='cook', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_4 = visual.TextStim(win=win, name='var_4',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_2 = visual.ImageStim(
        win=win,
        name='movie_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_5 = visual.TextStim(win=win, name='var_5',
        text='dancing',
        font='Open Sans',
        pos=(-0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    dance = visual.ImageStim(
        win=win,
        name='dance', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text = visual.TextStim(win=win, name='text',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1 = visual.TextStim(win=win, name='p1',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1 = visual.ImageStim(
        win=win,
        name='yes1', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    key_resp_3 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topyesp1" ---
    polygon_5 = visual.Rect(
        win=win, name='polygon_5',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_2 = visual.ImageStim(
        win=win,
        name='Player1_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    cook_2 = visual.ImageStim(
        win=win,
        name='cook_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var = visual.TextStim(win=win, name='var',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.13, 0.084), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_4 = visual.ImageStim(
        win=win,
        name='movie_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_6 = visual.TextStim(win=win, name='var_6',
        text='dancing',
        font='Open Sans',
        pos=(0.13, 0.10), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    dance_2 = visual.ImageStim(
        win=win,
        name='dance_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_13 = visual.TextStim(win=win, name='text_13',
        text='movies',
        font='Open Sans',
        pos=(0.0, 0.10), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_2 = visual.TextStim(win=win, name='p1_2',
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
    chatting = visual.ImageStim(
        win=win,
        name='chatting', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat = visual.TextStim(win=win, name='chat',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports = visual.ImageStim(
        win=win,
        name='sports', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport = visual.TextStim(win=win, name='sport',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach = visual.ImageStim(
        win=win,
        name='beach', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt = visual.TextStim(win=win, name='beach_txt',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic = visual.ImageStim(
        win=win,
        name='participantpic', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    yess = visual.ImageStim(
        win=win,
        name='yess', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.2, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_4 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player2_1" ---
    polygon_7 = visual.Rect(
        win=win, name='polygon_7',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    player = visual.ImageStim(
        win=win,
        name='player', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    fashion_2 = visual.ImageStim(
        win=win,
        name='fashion_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    text_10 = visual.TextStim(win=win, name='text_10',
        text='fashion',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_3 = visual.ImageStim(
        win=win,
        name='movie_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
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
    writing_2 = visual.ImageStim(
        win=win,
        name='writing_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask=None, anchor='center',
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
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
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
    key_resp_5 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topyesp2" ---
    polygon_4 = visual.Rect(
        win=win, name='polygon_4',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player2_4 = visual.ImageStim(
        win=win,
        name='Player2_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    fashion_3 = visual.ImageStim(
        win=win,
        name='fashion_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/fashion.png', mask=None, anchor='center',
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
    movie_5 = visual.ImageStim(
        win=win,
        name='movie_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
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
    writ = visual.ImageStim(
        win=win,
        name='writ', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
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
    chatting_2 = visual.ImageStim(
        win=win,
        name='chatting_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
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
    sports_2 = visual.ImageStim(
        win=win,
        name='sports_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
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
    beach_2 = visual.ImageStim(
        win=win,
        name='beach_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    participantpic_5 = visual.ImageStim(
        win=win,
        name='participantpic_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
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
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
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
    
    # --- Initialize components for Routine "ChoiceRoutine_2" ---
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
    writingpic = visual.ImageStim(
        win=win,
        name='writingpic', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_18 = visual.TextStim(win=win, name='text_18',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    instruments = visual.ImageStim(
        win=win,
        name='instruments', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_20 = visual.TextStim(win=win, name='text_20',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    knitting = visual.ImageStim(
        win=win,
        name='knitting', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    text_19 = visual.TextStim(win=win, name='text_19',
        text='knitting',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    beachpic = visual.ImageStim(
        win=win,
        name='beachpic', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    text_24 = visual.TextStim(win=win, name='text_24',
        text='beach',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    writingpic2 = visual.ImageStim(
        win=win,
        name='writingpic2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    text_22 = visual.TextStim(win=win, name='text_22',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    cycling = visual.ImageStim(
        win=win,
        name='cycling', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    text_23 = visual.TextStim(win=win, name='text_23',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    friendChoice = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Play1_2" ---
    polygon_8 = visual.Rect(
        win=win, name='polygon_8',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    p1_3 = visual.TextStim(win=win, name='p1_3',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    Player1_3 = visual.ImageStim(
        win=win,
        name='Player1_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    writingpic_2 = visual.ImageStim(
        win=win,
        name='writingpic_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_28 = visual.TextStim(win=win, name='text_28',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    instruments_2 = visual.ImageStim(
        win=win,
        name='instruments_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_29 = visual.TextStim(win=win, name='text_29',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    knitting_2 = visual.ImageStim(
        win=win,
        name='knitting_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    yes1_4 = visual.ImageStim(
        win=win,
        name='yes1_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_38 = visual.TextStim(win=win, name='text_38',
        text='knitting',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    key_resp_7 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnop1" ---
    polygon_12 = visual.Rect(
        win=win, name='polygon_12',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[1.0000, -1.0000, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_5 = visual.ImageStim(
        win=win,
        name='Player1_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    writt = visual.ImageStim(
        win=win,
        name='writt', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_3 = visual.TextStim(win=win, name='var_3',
        text='writing\n',
        font='Open Sans',
        pos=(-0.13, 0.087), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    piano = visual.ImageStim(
        win=win,
        name='piano', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_8 = visual.TextStim(win=win, name='var_8',
        text='knitting',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    knittingg = visual.ImageStim(
        win=win,
        name='knittingg', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_32 = visual.TextStim(win=win, name='text_32',
        text='instruments',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_5 = visual.TextStim(win=win, name='p1_5',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_3 = visual.TextStim(win=win, name='you_3',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_3 = visual.ImageStim(
        win=win,
        name='chatting_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_3 = visual.TextStim(win=win, name='chat_3',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.23), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_3 = visual.ImageStim(
        win=win,
        name='sports_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_3 = visual.TextStim(win=win, name='sport_3',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_3 = visual.ImageStim(
        win=win,
        name='beach_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_3 = visual.TextStim(win=win, name='beach_txt_3',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_6 = visual.ImageStim(
        win=win,
        name='participantpic_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    no_3 = visual.ImageStim(
        win=win,
        name='no_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_8 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "play2_2" ---
    polygon_10 = visual.Rect(
        win=win, name='polygon_10',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_27 = visual.TextStim(win=win, name='text_27',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    player_3 = visual.ImageStim(
        win=win,
        name='player_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    beachpic_2 = visual.ImageStim(
        win=win,
        name='beachpic_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_25 = visual.TextStim(win=win, name='text_25',
        text='beach',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    writingpic2_2 = visual.ImageStim(
        win=win,
        name='writingpic2_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_26 = visual.TextStim(win=win, name='text_26',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    cycling_2 = visual.ImageStim(
        win=win,
        name='cycling_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_30 = visual.TextStim(win=win, name='text_30',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1_3 = visual.ImageStim(
        win=win,
        name='yes1_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    key_resp_9 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnop2" ---
    polygon_14 = visual.Rect(
        win=win, name='polygon_14',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[1.0000, -1.0000, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_6 = visual.ImageStim(
        win=win,
        name='Player1_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    beach1 = visual.ImageStim(
        win=win,
        name='beach1', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_9 = visual.TextStim(win=win, name='var_9',
        text='beach\n',
        font='Open Sans',
        pos=(-0.13, 0.087), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    write = visual.ImageStim(
        win=win,
        name='write', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_10 = visual.TextStim(win=win, name='var_10',
        text='writing\n',
        font='Open Sans',
        pos=(0, 0.087), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    cycle = visual.ImageStim(
        win=win,
        name='cycle', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_33 = visual.TextStim(win=win, name='text_33',
        text='cycling',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_6 = visual.TextStim(win=win, name='p1_6',
        text='Player-2\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_4 = visual.TextStim(win=win, name='you_4',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_4 = visual.ImageStim(
        win=win,
        name='chatting_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_4 = visual.TextStim(win=win, name='chat_4',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_4 = visual.ImageStim(
        win=win,
        name='sports_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_4 = visual.TextStim(win=win, name='sport_4',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_4 = visual.ImageStim(
        win=win,
        name='beach_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_4 = visual.TextStim(win=win, name='beach_txt_4',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_2 = visual.ImageStim(
        win=win,
        name='participantpic_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    no_4 = visual.ImageStim(
        win=win,
        name='no_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_14 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "wait_2" ---
    polygon_2 = visual.Rect(
        win=win, name='polygon_2',
        width=(4, 4)[0], height=(4, 4)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_36 = visual.TextStim(win=win, name='text_36',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "ChoiceRoutine_3" ---
    Who_3 = visual.TextStim(win=win, name='Who_3',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0, 0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_21 = visual.TextStim(win=win, name='text_21',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_39 = visual.TextStim(win=win, name='text_39',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    Player1demo_3 = visual.ImageStim(
        win=win,
        name='Player1demo_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    Player2demo_3 = visual.ImageStim(
        win=win,
        name='Player2demo_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    writingpic_3 = visual.ImageStim(
        win=win,
        name='writingpic_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_40 = visual.TextStim(win=win, name='text_40',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    instruments_3 = visual.ImageStim(
        win=win,
        name='instruments_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_41 = visual.TextStim(win=win, name='text_41',
        text='instruments',
        font='Open Sans',
        pos=(-0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    knitting_3 = visual.ImageStim(
        win=win,
        name='knitting_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    text_42 = visual.TextStim(win=win, name='text_42',
        text='knitting',
        font='Open Sans',
        pos=(-0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    beachpic_3 = visual.ImageStim(
        win=win,
        name='beachpic_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    text_45 = visual.TextStim(win=win, name='text_45',
        text='beach',
        font='Open Sans',
        pos=(0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    writingpic2_3 = visual.ImageStim(
        win=win,
        name='writingpic2_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    text_43 = visual.TextStim(win=win, name='text_43',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    cycling_3 = visual.ImageStim(
        win=win,
        name='cycling_3', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    text_44 = visual.TextStim(win=win, name='text_44',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    friendChoice_2 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "player1_3" ---
    polygon_9 = visual.Rect(
        win=win, name='polygon_9',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    p1_9 = visual.TextStim(win=win, name='p1_9',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    Player1_4 = visual.ImageStim(
        win=win,
        name='Player1_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    writingpic_4 = visual.ImageStim(
        win=win,
        name='writingpic_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_46 = visual.TextStim(win=win, name='text_46',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    instruments_4 = visual.ImageStim(
        win=win,
        name='instruments_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_47 = visual.TextStim(win=win, name='text_47',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    knitting_4 = visual.ImageStim(
        win=win,
        name='knitting_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    yes1_5 = visual.ImageStim(
        win=win,
        name='yes1_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_49 = visual.TextStim(win=win, name='text_49',
        text='knitting',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    key_resp_11 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnsp1" ---
    polygon_35 = visual.Rect(
        win=win, name='polygon_35',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-0.4902, -0.5373, -0.5059], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_7 = visual.ImageStim(
        win=win,
        name='Player1_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    draw = visual.ImageStim(
        win=win,
        name='draw', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    wright = visual.TextStim(win=win, name='wright',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.13, 0.087), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    pianoo = visual.ImageStim(
        win=win,
        name='pianoo', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_12 = visual.TextStim(win=win, name='var_12',
        text='instruments',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    knit = visual.ImageStim(
        win=win,
        name='knit', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_34 = visual.TextStim(win=win, name='text_34',
        text='movies',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_7 = visual.TextStim(win=win, name='p1_7',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_5 = visual.TextStim(win=win, name='you_5',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_5 = visual.ImageStim(
        win=win,
        name='chatting_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_5 = visual.TextStim(win=win, name='chat_5',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_5 = visual.ImageStim(
        win=win,
        name='sports_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_5 = visual.TextStim(win=win, name='sport_5',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_5 = visual.ImageStim(
        win=win,
        name='beach_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_5 = visual.TextStim(win=win, name='beach_txt_5',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_3 = visual.ImageStim(
        win=win,
        name='participantpic_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    notseen = visual.ImageStim(
        win=win,
        name='notseen', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_12 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "player2_3" ---
    polygon_11 = visual.Rect(
        win=win, name='polygon_11',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_50 = visual.TextStim(win=win, name='text_50',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    player_4 = visual.ImageStim(
        win=win,
        name='player_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    beachpic_4 = visual.ImageStim(
        win=win,
        name='beachpic_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_51 = visual.TextStim(win=win, name='text_51',
        text='beach',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    writingpic2_4 = visual.ImageStim(
        win=win,
        name='writingpic2_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_52 = visual.TextStim(win=win, name='text_52',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    cycling_4 = visual.ImageStim(
        win=win,
        name='cycling_4', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_53 = visual.TextStim(win=win, name='text_53',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1_6 = visual.ImageStim(
        win=win,
        name='yes1_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    key_resp_10 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnsp2" ---
    polygon_36 = visual.Rect(
        win=win, name='polygon_36',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-0.4039, -0.3725, -0.3569], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_8 = visual.ImageStim(
        win=win,
        name='Player1_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    beachh = visual.ImageStim(
        win=win,
        name='beachh', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_13 = visual.TextStim(win=win, name='var_13',
        text='beach\n',
        font='Open Sans',
        pos=(-0.13, 0.087), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    wrightt = visual.ImageStim(
        win=win,
        name='wrightt', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_14 = visual.TextStim(win=win, name='var_14',
        text='writing',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    cyc = visual.ImageStim(
        win=win,
        name='cyc', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_35 = visual.TextStim(win=win, name='text_35',
        text='cycling',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_8 = visual.TextStim(win=win, name='p1_8',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_6 = visual.TextStim(win=win, name='you_6',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_6 = visual.ImageStim(
        win=win,
        name='chatting_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_6 = visual.TextStim(win=win, name='chat_6',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_6 = visual.ImageStim(
        win=win,
        name='sports_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_6 = visual.TextStim(win=win, name='sport_6',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_6 = visual.ImageStim(
        win=win,
        name='beach_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_6 = visual.TextStim(win=win, name='beach_txt_6',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_4 = visual.ImageStim(
        win=win,
        name='participantpic_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    notseen2 = visual.ImageStim(
        win=win,
        name='notseen2', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_13 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "wait_3" ---
    polygon_3 = visual.Rect(
        win=win, name='polygon_3',
        width=(4, 4)[0], height=(4, 4)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_67 = visual.TextStim(win=win, name='text_67',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "ChoiceRoutine_4" ---
    Who_4 = visual.TextStim(win=win, name='Who_4',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0, 0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_37 = visual.TextStim(win=win, name='text_37',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_48 = visual.TextStim(win=win, name='text_48',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    Player1demo_4 = visual.ImageStim(
        win=win,
        name='Player1demo_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    Player2demo_4 = visual.ImageStim(
        win=win,
        name='Player2demo_4', 
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
    text_54 = visual.TextStim(win=win, name='text_54',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
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
    text_55 = visual.TextStim(win=win, name='text_55',
        text='dancing',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
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
    text_56 = visual.TextStim(win=win, name='text_56',
        text='movies',
        font='Open Sans',
        pos=(-0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    fashion_4 = visual.ImageStim(
        win=win,
        name='fashion_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    text_57 = visual.TextStim(win=win, name='text_57',
        text='fashion',
        font='Open Sans',
        pos=(0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    movie_6 = visual.ImageStim(
        win=win,
        name='movie_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    text_58 = visual.TextStim(win=win, name='text_58',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
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
    text_59 = visual.TextStim(win=win, name='text_59',
        text='writing',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    key_resp_15 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "player1_4" ---
    polygon_16 = visual.Rect(
        win=win, name='polygon_16',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_9 = visual.ImageStim(
        win=win,
        name='Player1_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    cook_3 = visual.ImageStim(
        win=win,
        name='cook_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_11 = visual.TextStim(win=win, name='var_11',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_7 = visual.ImageStim(
        win=win,
        name='movie_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_15 = visual.TextStim(win=win, name='var_15',
        text='dancing',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    dance_3 = visual.ImageStim(
        win=win,
        name='dance_3', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_60 = visual.TextStim(win=win, name='text_60',
        text='movies',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_10 = visual.TextStim(win=win, name='p1_10',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1_7 = visual.ImageStim(
        win=win,
        name='yes1_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    key_resp_16 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topyesp1_2" ---
    polygon_17 = visual.Rect(
        win=win, name='polygon_17',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_10 = visual.ImageStim(
        win=win,
        name='Player1_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    cook_4 = visual.ImageStim(
        win=win,
        name='cook_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_16 = visual.TextStim(win=win, name='var_16',
        text='cooking\n\n',
        font='Open Sans',
        pos=(-0.13, 0.087), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_8 = visual.ImageStim(
        win=win,
        name='movie_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_17 = visual.TextStim(win=win, name='var_17',
        text='dancing',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    dance_4 = visual.ImageStim(
        win=win,
        name='dance_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_61 = visual.TextStim(win=win, name='text_61',
        text='movies',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_11 = visual.TextStim(win=win, name='p1_11',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_7 = visual.TextStim(win=win, name='you_7',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_7 = visual.ImageStim(
        win=win,
        name='chatting_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_7 = visual.TextStim(win=win, name='chat_7',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_7 = visual.ImageStim(
        win=win,
        name='sports_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_7 = visual.TextStim(win=win, name='sport_7',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_7 = visual.ImageStim(
        win=win,
        name='beach_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_7 = visual.TextStim(win=win, name='beach_txt_7',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_7 = visual.ImageStim(
        win=win,
        name='participantpic_7', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    yess_2 = visual.ImageStim(
        win=win,
        name='yess_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.2, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_17 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Player2_3" ---
    polygon_18 = visual.Rect(
        win=win, name='polygon_18',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    player_2 = visual.ImageStim(
        win=win,
        name='player_2', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    fashion_5 = visual.ImageStim(
        win=win,
        name='fashion_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    text_62 = visual.TextStim(win=win, name='text_62',
        text='fashion',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_9 = visual.ImageStim(
        win=win,
        name='movie_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    text_63 = visual.TextStim(win=win, name='text_63',
        text='movies',
        font='Open Sans',
        pos=(0.4, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    writing_4 = visual.ImageStim(
        win=win,
        name='writing_4', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_64 = visual.TextStim(win=win, name='text_64',
        text='writing',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    yes1_8 = visual.ImageStim(
        win=win,
        name='yes1_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_65 = visual.TextStim(win=win, name='text_65',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    key_resp_18 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topyesp2_2" ---
    polygon_19 = visual.Rect(
        win=win, name='polygon_19',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player2 = visual.ImageStim(
        win=win,
        name='Player2', 
        image='C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    fashion_6 = visual.ImageStim(
        win=win,
        name='fashion_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/fashion.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_18 = visual.TextStim(win=win, name='var_18',
        text='fashion\n\n\n',
        font='Open Sans',
        pos=(-0.13, 0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    movie_10 = visual.ImageStim(
        win=win,
        name='movie_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_19 = visual.TextStim(win=win, name='var_19',
        text='dancing',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    writ_2 = visual.ImageStim(
        win=win,
        name='writ_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_66 = visual.TextStim(win=win, name='text_66',
        text='writing',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_12 = visual.TextStim(win=win, name='p1_12',
        text='Player-2\n\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_8 = visual.TextStim(win=win, name='you_8',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_8 = visual.ImageStim(
        win=win,
        name='chatting_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_8 = visual.TextStim(win=win, name='chat_8',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_8 = visual.ImageStim(
        win=win,
        name='sports_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_8 = visual.TextStim(win=win, name='sport_8',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_8 = visual.ImageStim(
        win=win,
        name='beach_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    participantpic_8 = visual.ImageStim(
        win=win,
        name='participantpic_8', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    beach_txt_8 = visual.TextStim(win=win, name='beach_txt_8',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    yes_2 = visual.ImageStim(
        win=win,
        name='yes_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_19 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "wait_3" ---
    polygon_3 = visual.Rect(
        win=win, name='polygon_3',
        width=(4, 4)[0], height=(4, 4)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_67 = visual.TextStim(win=win, name='text_67',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "ChoiceRoutine_5" ---
    Who_5 = visual.TextStim(win=win, name='Who_5',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0, 0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_68 = visual.TextStim(win=win, name='text_68',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_69 = visual.TextStim(win=win, name='text_69',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    Player1demo_5 = visual.ImageStim(
        win=win,
        name='Player1demo_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    Player2demo_5 = visual.ImageStim(
        win=win,
        name='Player2demo_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    writingpic_5 = visual.ImageStim(
        win=win,
        name='writingpic_5', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_70 = visual.TextStim(win=win, name='text_70',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    instruments_5 = visual.ImageStim(
        win=win,
        name='instruments_5', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_71 = visual.TextStim(win=win, name='text_71',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    knitting_5 = visual.ImageStim(
        win=win,
        name='knitting_5', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    text_72 = visual.TextStim(win=win, name='text_72',
        text='knitting',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    beachpic_5 = visual.ImageStim(
        win=win,
        name='beachpic_5', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    writingpic2_5 = visual.ImageStim(
        win=win,
        name='writingpic2_5', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    text_73 = visual.TextStim(win=win, name='text_73',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    cycling_5 = visual.ImageStim(
        win=win,
        name='cycling_5', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    text_74 = visual.TextStim(win=win, name='text_74',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    friendChoice_3 = keyboard.Keyboard()
    text_75 = visual.TextStim(win=win, name='text_75',
        text='beach',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    
    # --- Initialize components for Routine "Play1_4" ---
    polygon_20 = visual.Rect(
        win=win, name='polygon_20',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    p1_13 = visual.TextStim(win=win, name='p1_13',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    Player1_11 = visual.ImageStim(
        win=win,
        name='Player1_11', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    writingpic_6 = visual.ImageStim(
        win=win,
        name='writingpic_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_76 = visual.TextStim(win=win, name='text_76',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    instruments_6 = visual.ImageStim(
        win=win,
        name='instruments_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_77 = visual.TextStim(win=win, name='text_77',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    knitting_6 = visual.ImageStim(
        win=win,
        name='knitting_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    yes1_9 = visual.ImageStim(
        win=win,
        name='yes1_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_78 = visual.TextStim(win=win, name='text_78',
        text='knitting',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    key_resp_20 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnop1_2" ---
    polygon_21 = visual.Rect(
        win=win, name='polygon_21',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[1.0000, -1.0000, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_12 = visual.ImageStim(
        win=win,
        name='Player1_12', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    writt_2 = visual.ImageStim(
        win=win,
        name='writt_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_20 = visual.TextStim(win=win, name='var_20',
        text='writing\n',
        font='Open Sans',
        pos=(-0.13, 0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    piano_2 = visual.ImageStim(
        win=win,
        name='piano_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_21 = visual.TextStim(win=win, name='var_21',
        text='knitting',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    knittingg_2 = visual.ImageStim(
        win=win,
        name='knittingg_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_79 = visual.TextStim(win=win, name='text_79',
        text='instruments',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_14 = visual.TextStim(win=win, name='p1_14',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_9 = visual.TextStim(win=win, name='you_9',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_9 = visual.ImageStim(
        win=win,
        name='chatting_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_9 = visual.TextStim(win=win, name='chat_9',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_9 = visual.ImageStim(
        win=win,
        name='sports_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_9 = visual.TextStim(win=win, name='sport_9',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_9 = visual.ImageStim(
        win=win,
        name='beach_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_9 = visual.TextStim(win=win, name='beach_txt_9',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_9 = visual.ImageStim(
        win=win,
        name='participantpic_9', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    no = visual.ImageStim(
        win=win,
        name='no', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_21 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "play2_4" ---
    polygon_22 = visual.Rect(
        win=win, name='polygon_22',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_80 = visual.TextStim(win=win, name='text_80',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    player_5 = visual.ImageStim(
        win=win,
        name='player_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    beachpic_6 = visual.ImageStim(
        win=win,
        name='beachpic_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_81 = visual.TextStim(win=win, name='text_81',
        text='beach',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    writingpic2_6 = visual.ImageStim(
        win=win,
        name='writingpic2_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_82 = visual.TextStim(win=win, name='text_82',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    cycling_6 = visual.ImageStim(
        win=win,
        name='cycling_6', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_83 = visual.TextStim(win=win, name='text_83',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.01, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1_10 = visual.ImageStim(
        win=win,
        name='yes1_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    key_resp_22 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnop2_2" ---
    polygon_23 = visual.Rect(
        win=win, name='polygon_23',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[1.0000, -1.0000, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_13 = visual.ImageStim(
        win=win,
        name='Player1_13', 
        image='C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    beach1_2 = visual.ImageStim(
        win=win,
        name='beach1_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_22 = visual.TextStim(win=win, name='var_22',
        text='beach\n',
        font='Open Sans',
        pos=(-0.13, 0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    write_2 = visual.ImageStim(
        win=win,
        name='write_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.13), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_23 = visual.TextStim(win=win, name='var_23',
        text='writing\n',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    cycle_2 = visual.ImageStim(
        win=win,
        name='cycle_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_84 = visual.TextStim(win=win, name='text_84',
        text='cycling',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_15 = visual.TextStim(win=win, name='p1_15',
        text='Player-2\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_10 = visual.TextStim(win=win, name='you_10',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_10 = visual.ImageStim(
        win=win,
        name='chatting_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_10 = visual.TextStim(win=win, name='chat_10',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_10 = visual.ImageStim(
        win=win,
        name='sports_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_10 = visual.TextStim(win=win, name='sport_10',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_10 = visual.ImageStim(
        win=win,
        name='beach_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_10 = visual.TextStim(win=win, name='beach_txt_10',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_10 = visual.ImageStim(
        win=win,
        name='participantpic_10', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    no_5 = visual.ImageStim(
        win=win,
        name='no_5', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_23 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "wait_4" ---
    polygon_24 = visual.Rect(
        win=win, name='polygon_24',
        width=(4, 4)[0], height=(4, 4)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_85 = visual.TextStim(win=win, name='text_85',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "ChoiceRoutine_6" ---
    Who_6 = visual.TextStim(win=win, name='Who_6',
        text='Who do you want to be friends with? \n\n',
        font='Courier New',
        pos=(0, 0.38), height=0.04, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_86 = visual.TextStim(win=win, name='text_86',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_87 = visual.TextStim(win=win, name='text_87',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    Player1demo_6 = visual.ImageStim(
        win=win,
        name='Player1demo_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    Player2demo_6 = visual.ImageStim(
        win=win,
        name='Player2demo_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    writingpic_7 = visual.ImageStim(
        win=win,
        name='writingpic_7', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_88 = visual.TextStim(win=win, name='text_88',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    instruments_7 = visual.ImageStim(
        win=win,
        name='instruments_7', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_89 = visual.TextStim(win=win, name='text_89',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    knitting_7 = visual.ImageStim(
        win=win,
        name='knitting_7', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    text_90 = visual.TextStim(win=win, name='text_90',
        text='knitting',
        font='Open Sans',
        pos=(-0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    beachpic_7 = visual.ImageStim(
        win=win,
        name='beachpic_7', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    writingpic2_7 = visual.ImageStim(
        win=win,
        name='writingpic2_7', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    text_91 = visual.TextStim(win=win, name='text_91',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    cycling_7 = visual.ImageStim(
        win=win,
        name='cycling_7', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    text_92 = visual.TextStim(win=win, name='text_92',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    friendChoice_4 = keyboard.Keyboard()
    text_93 = visual.TextStim(win=win, name='text_93',
        text='beach',
        font='Open Sans',
        pos=(0.3, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    
    # --- Initialize components for Routine "player1_5" ---
    polygon_27 = visual.Rect(
        win=win, name='polygon_27',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(-0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    p1_18 = visual.TextStim(win=win, name='p1_18',
        text='Player-1\n',
        font='Consolas',
        pos=(-0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    Player1_16 = visual.ImageStim(
        win=win,
        name='Player1_16', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    writingpic_8 = visual.ImageStim(
        win=win,
        name='writingpic_8', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_96 = visual.TextStim(win=win, name='text_96',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.5, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    instruments_8 = visual.ImageStim(
        win=win,
        name='instruments_8', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.40, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_97 = visual.TextStim(win=win, name='text_97',
        text='instruments',
        font='Open Sans',
        pos=(-0.40, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    knitting_8 = visual.ImageStim(
        win=win,
        name='knitting_8', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.30, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    yes1_11 = visual.ImageStim(
        win=win,
        name='yes1_11', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    text_98 = visual.TextStim(win=win, name='text_98',
        text='knitting',
        font='Open Sans',
        pos=(-0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    key_resp_26 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnsp1_2" ---
    polygon_37 = visual.Rect(
        win=win, name='polygon_37',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-0.4039, -0.3725, -0.3569], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_14 = visual.ImageStim(
        win=win,
        name='Player1_14', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    draw_2 = visual.ImageStim(
        win=win,
        name='draw_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    wright_2 = visual.TextStim(win=win, name='wright_2',
        text='writing\n\n',
        font='Open Sans',
        pos=(-0.13, 0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    pianoo_2 = visual.ImageStim(
        win=win,
        name='pianoo_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_24 = visual.TextStim(win=win, name='var_24',
        text='instruments',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    knit_2 = visual.ImageStim(
        win=win,
        name='knit_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_94 = visual.TextStim(win=win, name='text_94',
        text='movies',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_16 = visual.TextStim(win=win, name='p1_16',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_11 = visual.TextStim(win=win, name='you_11',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_11 = visual.ImageStim(
        win=win,
        name='chatting_11', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_11 = visual.TextStim(win=win, name='chat_11',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_11 = visual.ImageStim(
        win=win,
        name='sports_11', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_11 = visual.TextStim(win=win, name='sport_11',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_11 = visual.ImageStim(
        win=win,
        name='beach_11', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_11 = visual.TextStim(win=win, name='beach_txt_11',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_11 = visual.ImageStim(
        win=win,
        name='participantpic_11', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    notseen_2 = visual.ImageStim(
        win=win,
        name='notseen_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_24 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "player2_5" ---
    polygon_28 = visual.Rect(
        win=win, name='polygon_28',
        width=(0.4, 0.4)[0], height=(0.4, 0.4)[1],
        ori=0.0, pos=(0.4,0.13), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-1.0000, 0.0039, -1.0000], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_99 = visual.TextStim(win=win, name='text_99',
        text='Player-2\n',
        font='Consolas',
        pos=(0.4,0.3), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    player_6 = visual.ImageStim(
        win=win,
        name='player_6', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    beachpic_8 = visual.ImageStim(
        win=win,
        name='beachpic_8', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_100 = visual.TextStim(win=win, name='text_100',
        text='beach',
        font='Open Sans',
        pos=(0.30, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    writingpic2_8 = visual.ImageStim(
        win=win,
        name='writingpic2_8', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    text_101 = visual.TextStim(win=win, name='text_101',
        text='writing\n',
        font='Open Sans',
        pos=(0.4, -0.08), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    cycling_8 = visual.ImageStim(
        win=win,
        name='cycling_8', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.5, -0.03), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    text_102 = visual.TextStim(win=win, name='text_102',
        text='cycling',
        font='Open Sans',
        pos=(0.5, -0.07), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    yes1_12 = visual.ImageStim(
        win=win,
        name='yes1_12', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask=None, anchor='center',
        ori=0.0, pos=(0.4,0.13), size=(0.3, 0.3),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    key_resp_27 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "topnsp2_2" ---
    polygon_32 = visual.Rect(
        win=win, name='polygon_32',
        width=(0.3, 0.3)[0], height=(0.3, 0.3)[1],
        ori=0.0, pos=(0.0,-0.073), anchor='center',
        lineWidth=5.0,     colorSpace='rgb',  lineColor=[-0.4039, -0.3725, -0.3569], fillColor=[0.0000, 0.0000, 0.0000],
        opacity=None, depth=0.0, interpolate=True)
    Player1_15 = visual.ImageStim(
        win=win,
        name='Player1_15', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,0.3), size=(0.2, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    beachh_2 = visual.ImageStim(
        win=win,
        name='beachh_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    var_25 = visual.TextStim(win=win, name='var_25',
        text='beach\n',
        font='Open Sans',
        pos=(-0.13, 0.086), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    wrightt_2 = visual.ImageStim(
        win=win,
        name='wrightt_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    var_26 = visual.TextStim(win=win, name='var_26',
        text='writing',
        font='Open Sans',
        pos=(0.13, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    cyc_2 = visual.ImageStim(
        win=win,
        name='cyc_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, 0.14), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    text_95 = visual.TextStim(win=win, name='text_95',
        text='cycling',
        font='Open Sans',
        pos=(0.0, 0.1), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    p1_17 = visual.TextStim(win=win, name='p1_17',
        text='Player-1\n',
        font='Consolas',
        pos=(0.0,0.45), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    you_12 = visual.TextStim(win=win, name='you_12',
        text='You',
        font='Consolas',
        pos=(0.0,0.07), height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    chatting_12 = visual.ImageStim(
        win=win,
        name='chatting_12', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    chat_12 = visual.TextStim(win=win, name='chat_12',
        text='chatting',
        font='Open Sans',
        pos=(-0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    sports_12 = visual.ImageStim(
        win=win,
        name='sports_12', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    sport_12 = visual.TextStim(win=win, name='sport_12',
        text='sports',
        font='Open Sans',
        pos=(0, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    beach_12 = visual.ImageStim(
        win=win,
        name='beach_12', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask=None, anchor='center',
        ori=0.0, pos=(0.13, -0.2), size=(0.04, 0.04),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    beach_txt_12 = visual.TextStim(win=win, name='beach_txt_12',
        text='beach',
        font='Open Sans',
        pos=(0.13, -0.24), height=0.015, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    participantpic_12 = visual.ImageStim(
        win=win,
        name='participantpic_12', 
        image='C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.073), size=(0.15, 0.20),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    notseen2_2 = visual.ImageStim(
        win=win,
        name='notseen2_2', 
        image='C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask=None, anchor='center',
        ori=0.0, pos=(0.0,-0.080), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    key_resp_25 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "wait_5" ---
    polygon_29 = visual.Rect(
        win=win, name='polygon_29',
        width=(4, 4)[0], height=(4, 4)[1],
        ori=0.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
        opacity=None, depth=0.0, interpolate=True)
    text_103 = visual.TextStim(win=win, name='text_103',
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
    
    # --- Prepare to start Routine "ChoiceRoutine_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ChoiceRoutine_1.started', globalClock.getTime())
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
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    thisExp.nextEntry()
    # the Routine "ChoiceRoutine_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Player1_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Player1_1.started', globalClock.getTime())
    # Run 'Begin Routine' code from code
    if key_resp.keys != 'n':
        continueRoutine = False
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    Player1_1Components = [polygon_6, Player1, cook, var_4, movie_2, var_5, dance, text, p1, yes1, key_resp_3]
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
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    thisExp.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        thisExp.addData('key_resp_3.rt', key_resp_3.rt)
        thisExp.addData('key_resp_3.duration', key_resp_3.duration)
    thisExp.nextEntry()
    # the Routine "Player1_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topyesp1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topyesp1.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_2
    if key_resp.keys != 'n':
        continueRoutine = False
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    topyesp1Components = [polygon_5, Player1_2, cook_2, var, movie_4, var_6, dance_2, text_13, p1_2, you, chatting, chat, sports, sport, beach, beach_txt, participantpic, yess, key_resp_4]
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
    thisExp.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        thisExp.addData('key_resp_4.rt', key_resp_4.rt)
        thisExp.addData('key_resp_4.duration', key_resp_4.duration)
    thisExp.nextEntry()
    # the Routine "topyesp1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Player2_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Player2_1.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_3
    if key_resp.keys != 'y':
        continueRoutine = False
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    Player2_1Components = [polygon_7, player, fashion_2, text_10, movie_3, text_11, writing_2, text_12, yes1_2, text_14, key_resp_5]
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
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys = None
    thisExp.addData('key_resp_5.keys',key_resp_5.keys)
    if key_resp_5.keys != None:  # we had a response
        thisExp.addData('key_resp_5.rt', key_resp_5.rt)
        thisExp.addData('key_resp_5.duration', key_resp_5.duration)
    thisExp.nextEntry()
    # the Routine "Player2_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topyesp2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topyesp2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_4
    if key_resp.keys != 'y':
        continueRoutine = False
    key_resp_6.keys = []
    key_resp_6.rt = []
    _key_resp_6_allKeys = []
    # keep track of which components have finished
    topyesp2Components = [polygon_4, Player2_4, fashion_3, var_2, movie_5, var_7, writ, text_31, p1_4, you_2, chatting_2, chat_2, sports_2, sport_2, beach_2, participantpic_5, beach_txt_2, yes, key_resp_6]
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
        
        # *Player2_4* updates
        
        # if Player2_4 is starting this frame...
        if Player2_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2_4.frameNStart = frameN  # exact frame index
            Player2_4.tStart = t  # local t and not account for scr refresh
            Player2_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2_4.started')
            # update status
            Player2_4.status = STARTED
            Player2_4.setAutoDraw(True)
        
        # if Player2_4 is active this frame...
        if Player2_4.status == STARTED:
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
        
        # *writ* updates
        
        # if writ is starting this frame...
        if writ.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writ.frameNStart = frameN  # exact frame index
            writ.tStart = t  # local t and not account for scr refresh
            writ.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writ, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writ.started')
            # update status
            writ.status = STARTED
            writ.setAutoDraw(True)
        
        # if writ is active this frame...
        if writ.status == STARTED:
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
        
        # *chatting_2* updates
        
        # if chatting_2 is starting this frame...
        if chatting_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_2.frameNStart = frameN  # exact frame index
            chatting_2.tStart = t  # local t and not account for scr refresh
            chatting_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_2.started')
            # update status
            chatting_2.status = STARTED
            chatting_2.setAutoDraw(True)
        
        # if chatting_2 is active this frame...
        if chatting_2.status == STARTED:
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
        
        # *sports_2* updates
        
        # if sports_2 is starting this frame...
        if sports_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_2.frameNStart = frameN  # exact frame index
            sports_2.tStart = t  # local t and not account for scr refresh
            sports_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_2.started')
            # update status
            sports_2.status = STARTED
            sports_2.setAutoDraw(True)
        
        # if sports_2 is active this frame...
        if sports_2.status == STARTED:
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
        
        # *beach_2* updates
        
        # if beach_2 is starting this frame...
        if beach_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_2.frameNStart = frameN  # exact frame index
            beach_2.tStart = t  # local t and not account for scr refresh
            beach_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_2.started')
            # update status
            beach_2.status = STARTED
            beach_2.setAutoDraw(True)
        
        # if beach_2 is active this frame...
        if beach_2.status == STARTED:
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
    thisExp.addData('key_resp_6.keys',key_resp_6.keys)
    if key_resp_6.keys != None:  # we had a response
        thisExp.addData('key_resp_6.rt', key_resp_6.rt)
        thisExp.addData('key_resp_6.duration', key_resp_6.duration)
    thisExp.nextEntry()
    # the Routine "topyesp2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
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
    
    # --- Prepare to start Routine "ChoiceRoutine_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ChoiceRoutine_2.started', globalClock.getTime())
    friendChoice.keys = []
    friendChoice.rt = []
    _friendChoice_allKeys = []
    # keep track of which components have finished
    ChoiceRoutine_2Components = [Who_2, text_15, text_17, Player1demo_2, Player2demo_2, writingpic, text_18, instruments, text_20, knitting, text_19, beachpic, text_24, writingpic2, text_22, cycling, text_23, friendChoice]
    for thisComponent in ChoiceRoutine_2Components:
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
    
    # --- Run Routine "ChoiceRoutine_2" ---
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
        
        # *writingpic* updates
        
        # if writingpic is starting this frame...
        if writingpic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic.frameNStart = frameN  # exact frame index
            writingpic.tStart = t  # local t and not account for scr refresh
            writingpic.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic.started')
            # update status
            writingpic.status = STARTED
            writingpic.setAutoDraw(True)
        
        # if writingpic is active this frame...
        if writingpic.status == STARTED:
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
        
        # *instruments* updates
        
        # if instruments is starting this frame...
        if instruments.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments.frameNStart = frameN  # exact frame index
            instruments.tStart = t  # local t and not account for scr refresh
            instruments.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments.started')
            # update status
            instruments.status = STARTED
            instruments.setAutoDraw(True)
        
        # if instruments is active this frame...
        if instruments.status == STARTED:
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
        
        # *knitting* updates
        
        # if knitting is starting this frame...
        if knitting.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting.frameNStart = frameN  # exact frame index
            knitting.tStart = t  # local t and not account for scr refresh
            knitting.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting.started')
            # update status
            knitting.status = STARTED
            knitting.setAutoDraw(True)
        
        # if knitting is active this frame...
        if knitting.status == STARTED:
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
        
        # *beachpic* updates
        
        # if beachpic is starting this frame...
        if beachpic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic.frameNStart = frameN  # exact frame index
            beachpic.tStart = t  # local t and not account for scr refresh
            beachpic.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic.started')
            # update status
            beachpic.status = STARTED
            beachpic.setAutoDraw(True)
        
        # if beachpic is active this frame...
        if beachpic.status == STARTED:
            # update params
            pass
        
        # *text_24* updates
        
        # if text_24 is starting this frame...
        if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_24.frameNStart = frameN  # exact frame index
            text_24.tStart = t  # local t and not account for scr refresh
            text_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_24.started')
            # update status
            text_24.status = STARTED
            text_24.setAutoDraw(True)
        
        # if text_24 is active this frame...
        if text_24.status == STARTED:
            # update params
            pass
        
        # *writingpic2* updates
        
        # if writingpic2 is starting this frame...
        if writingpic2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2.frameNStart = frameN  # exact frame index
            writingpic2.tStart = t  # local t and not account for scr refresh
            writingpic2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2.started')
            # update status
            writingpic2.status = STARTED
            writingpic2.setAutoDraw(True)
        
        # if writingpic2 is active this frame...
        if writingpic2.status == STARTED:
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
        
        # *cycling* updates
        
        # if cycling is starting this frame...
        if cycling.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling.frameNStart = frameN  # exact frame index
            cycling.tStart = t  # local t and not account for scr refresh
            cycling.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling.started')
            # update status
            cycling.status = STARTED
            cycling.setAutoDraw(True)
        
        # if cycling is active this frame...
        if cycling.status == STARTED:
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
        
        # *friendChoice* updates
        waitOnFlip = False
        
        # if friendChoice is starting this frame...
        if friendChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            friendChoice.frameNStart = frameN  # exact frame index
            friendChoice.tStart = t  # local t and not account for scr refresh
            friendChoice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(friendChoice, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'friendChoice.started')
            # update status
            friendChoice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(friendChoice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(friendChoice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if friendChoice.status == STARTED and not waitOnFlip:
            theseKeys = friendChoice.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _friendChoice_allKeys.extend(theseKeys)
            if len(_friendChoice_allKeys):
                friendChoice.keys = _friendChoice_allKeys[-1].name  # just the last key pressed
                friendChoice.rt = _friendChoice_allKeys[-1].rt
                friendChoice.duration = _friendChoice_allKeys[-1].duration
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
        for thisComponent in ChoiceRoutine_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ChoiceRoutine_2" ---
    for thisComponent in ChoiceRoutine_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ChoiceRoutine_2.stopped', globalClock.getTime())
    # check responses
    if friendChoice.keys in ['', [], None]:  # No response was made
        friendChoice.keys = None
    thisExp.addData('friendChoice.keys',friendChoice.keys)
    if friendChoice.keys != None:  # we had a response
        thisExp.addData('friendChoice.rt', friendChoice.rt)
        thisExp.addData('friendChoice.duration', friendChoice.duration)
    thisExp.nextEntry()
    # the Routine "ChoiceRoutine_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Play1_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Play1_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_5
    if friendChoice.keys != 'n':
        continueRoutine = False
    key_resp_7.keys = []
    key_resp_7.rt = []
    _key_resp_7_allKeys = []
    # keep track of which components have finished
    Play1_2Components = [polygon_8, p1_3, Player1_3, writingpic_2, text_28, instruments_2, text_29, knitting_2, yes1_4, text_38, key_resp_7]
    for thisComponent in Play1_2Components:
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
    
    # --- Run Routine "Play1_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_8* updates
        
        # if polygon_8 is starting this frame...
        if polygon_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_8.frameNStart = frameN  # exact frame index
            polygon_8.tStart = t  # local t and not account for scr refresh
            polygon_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_8.started')
            # update status
            polygon_8.status = STARTED
            polygon_8.setAutoDraw(True)
        
        # if polygon_8 is active this frame...
        if polygon_8.status == STARTED:
            # update params
            pass
        
        # *p1_3* updates
        
        # if p1_3 is starting this frame...
        if p1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_3.frameNStart = frameN  # exact frame index
            p1_3.tStart = t  # local t and not account for scr refresh
            p1_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_3.started')
            # update status
            p1_3.status = STARTED
            p1_3.setAutoDraw(True)
        
        # if p1_3 is active this frame...
        if p1_3.status == STARTED:
            # update params
            pass
        
        # *Player1_3* updates
        
        # if Player1_3 is starting this frame...
        if Player1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_3.frameNStart = frameN  # exact frame index
            Player1_3.tStart = t  # local t and not account for scr refresh
            Player1_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_3.started')
            # update status
            Player1_3.status = STARTED
            Player1_3.setAutoDraw(True)
        
        # if Player1_3 is active this frame...
        if Player1_3.status == STARTED:
            # update params
            pass
        
        # *writingpic_2* updates
        
        # if writingpic_2 is starting this frame...
        if writingpic_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_2.frameNStart = frameN  # exact frame index
            writingpic_2.tStart = t  # local t and not account for scr refresh
            writingpic_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_2.started')
            # update status
            writingpic_2.status = STARTED
            writingpic_2.setAutoDraw(True)
        
        # if writingpic_2 is active this frame...
        if writingpic_2.status == STARTED:
            # update params
            pass
        
        # *text_28* updates
        
        # if text_28 is starting this frame...
        if text_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_28.frameNStart = frameN  # exact frame index
            text_28.tStart = t  # local t and not account for scr refresh
            text_28.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_28, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_28.started')
            # update status
            text_28.status = STARTED
            text_28.setAutoDraw(True)
        
        # if text_28 is active this frame...
        if text_28.status == STARTED:
            # update params
            pass
        
        # *instruments_2* updates
        
        # if instruments_2 is starting this frame...
        if instruments_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_2.frameNStart = frameN  # exact frame index
            instruments_2.tStart = t  # local t and not account for scr refresh
            instruments_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_2.started')
            # update status
            instruments_2.status = STARTED
            instruments_2.setAutoDraw(True)
        
        # if instruments_2 is active this frame...
        if instruments_2.status == STARTED:
            # update params
            pass
        
        # *text_29* updates
        
        # if text_29 is starting this frame...
        if text_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_29.frameNStart = frameN  # exact frame index
            text_29.tStart = t  # local t and not account for scr refresh
            text_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_29.started')
            # update status
            text_29.status = STARTED
            text_29.setAutoDraw(True)
        
        # if text_29 is active this frame...
        if text_29.status == STARTED:
            # update params
            pass
        
        # *knitting_2* updates
        
        # if knitting_2 is starting this frame...
        if knitting_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_2.frameNStart = frameN  # exact frame index
            knitting_2.tStart = t  # local t and not account for scr refresh
            knitting_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_2.started')
            # update status
            knitting_2.status = STARTED
            knitting_2.setAutoDraw(True)
        
        # if knitting_2 is active this frame...
        if knitting_2.status == STARTED:
            # update params
            pass
        
        # *yes1_4* updates
        
        # if yes1_4 is starting this frame...
        if yes1_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_4.frameNStart = frameN  # exact frame index
            yes1_4.tStart = t  # local t and not account for scr refresh
            yes1_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_4.started')
            # update status
            yes1_4.status = STARTED
            yes1_4.setAutoDraw(True)
        
        # if yes1_4 is active this frame...
        if yes1_4.status == STARTED:
            # update params
            pass
        
        # *text_38* updates
        
        # if text_38 is starting this frame...
        if text_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_38.frameNStart = frameN  # exact frame index
            text_38.tStart = t  # local t and not account for scr refresh
            text_38.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_38, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_38.started')
            # update status
            text_38.status = STARTED
            text_38.setAutoDraw(True)
        
        # if text_38 is active this frame...
        if text_38.status == STARTED:
            # update params
            pass
        
        # *key_resp_7* updates
        waitOnFlip = False
        
        # if key_resp_7 is starting this frame...
        if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_7.frameNStart = frameN  # exact frame index
            key_resp_7.tStart = t  # local t and not account for scr refresh
            key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_7.started')
            # update status
            key_resp_7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_7.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_7.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_7_allKeys.extend(theseKeys)
            if len(_key_resp_7_allKeys):
                key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
                key_resp_7.rt = _key_resp_7_allKeys[-1].rt
                key_resp_7.duration = _key_resp_7_allKeys[-1].duration
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
        for thisComponent in Play1_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Play1_2" ---
    for thisComponent in Play1_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Play1_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_7.keys in ['', [], None]:  # No response was made
        key_resp_7.keys = None
    thisExp.addData('key_resp_7.keys',key_resp_7.keys)
    if key_resp_7.keys != None:  # we had a response
        thisExp.addData('key_resp_7.rt', key_resp_7.rt)
        thisExp.addData('key_resp_7.duration', key_resp_7.duration)
    thisExp.nextEntry()
    # the Routine "Play1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnop1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnop1.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_6
    if friendChoice.keys != 'n':
        continueRoutine = False
    key_resp_8.keys = []
    key_resp_8.rt = []
    _key_resp_8_allKeys = []
    # keep track of which components have finished
    topnop1Components = [polygon_12, Player1_5, writt, var_3, piano, var_8, knittingg, text_32, p1_5, you_3, chatting_3, chat_3, sports_3, sport_3, beach_3, beach_txt_3, participantpic_6, no_3, key_resp_8]
    for thisComponent in topnop1Components:
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
    
    # --- Run Routine "topnop1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_12* updates
        
        # if polygon_12 is starting this frame...
        if polygon_12.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_12.frameNStart = frameN  # exact frame index
            polygon_12.tStart = t  # local t and not account for scr refresh
            polygon_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_12.started')
            # update status
            polygon_12.status = STARTED
            polygon_12.setAutoDraw(True)
        
        # if polygon_12 is active this frame...
        if polygon_12.status == STARTED:
            # update params
            pass
        
        # *Player1_5* updates
        
        # if Player1_5 is starting this frame...
        if Player1_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_5.frameNStart = frameN  # exact frame index
            Player1_5.tStart = t  # local t and not account for scr refresh
            Player1_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_5.started')
            # update status
            Player1_5.status = STARTED
            Player1_5.setAutoDraw(True)
        
        # if Player1_5 is active this frame...
        if Player1_5.status == STARTED:
            # update params
            pass
        
        # *writt* updates
        
        # if writt is starting this frame...
        if writt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writt.frameNStart = frameN  # exact frame index
            writt.tStart = t  # local t and not account for scr refresh
            writt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writt, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writt.started')
            # update status
            writt.status = STARTED
            writt.setAutoDraw(True)
        
        # if writt is active this frame...
        if writt.status == STARTED:
            # update params
            pass
        
        # *var_3* updates
        
        # if var_3 is starting this frame...
        if var_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_3.frameNStart = frameN  # exact frame index
            var_3.tStart = t  # local t and not account for scr refresh
            var_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_3.started')
            # update status
            var_3.status = STARTED
            var_3.setAutoDraw(True)
        
        # if var_3 is active this frame...
        if var_3.status == STARTED:
            # update params
            pass
        
        # *piano* updates
        
        # if piano is starting this frame...
        if piano.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            piano.frameNStart = frameN  # exact frame index
            piano.tStart = t  # local t and not account for scr refresh
            piano.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(piano, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'piano.started')
            # update status
            piano.status = STARTED
            piano.setAutoDraw(True)
        
        # if piano is active this frame...
        if piano.status == STARTED:
            # update params
            pass
        
        # *var_8* updates
        
        # if var_8 is starting this frame...
        if var_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_8.frameNStart = frameN  # exact frame index
            var_8.tStart = t  # local t and not account for scr refresh
            var_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_8.started')
            # update status
            var_8.status = STARTED
            var_8.setAutoDraw(True)
        
        # if var_8 is active this frame...
        if var_8.status == STARTED:
            # update params
            pass
        
        # *knittingg* updates
        
        # if knittingg is starting this frame...
        if knittingg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knittingg.frameNStart = frameN  # exact frame index
            knittingg.tStart = t  # local t and not account for scr refresh
            knittingg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knittingg, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knittingg.started')
            # update status
            knittingg.status = STARTED
            knittingg.setAutoDraw(True)
        
        # if knittingg is active this frame...
        if knittingg.status == STARTED:
            # update params
            pass
        
        # *text_32* updates
        
        # if text_32 is starting this frame...
        if text_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_32.frameNStart = frameN  # exact frame index
            text_32.tStart = t  # local t and not account for scr refresh
            text_32.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_32, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_32.started')
            # update status
            text_32.status = STARTED
            text_32.setAutoDraw(True)
        
        # if text_32 is active this frame...
        if text_32.status == STARTED:
            # update params
            pass
        
        # *p1_5* updates
        
        # if p1_5 is starting this frame...
        if p1_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_5.frameNStart = frameN  # exact frame index
            p1_5.tStart = t  # local t and not account for scr refresh
            p1_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_5.started')
            # update status
            p1_5.status = STARTED
            p1_5.setAutoDraw(True)
        
        # if p1_5 is active this frame...
        if p1_5.status == STARTED:
            # update params
            pass
        
        # *you_3* updates
        
        # if you_3 is starting this frame...
        if you_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_3.frameNStart = frameN  # exact frame index
            you_3.tStart = t  # local t and not account for scr refresh
            you_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_3.started')
            # update status
            you_3.status = STARTED
            you_3.setAutoDraw(True)
        
        # if you_3 is active this frame...
        if you_3.status == STARTED:
            # update params
            pass
        
        # *chatting_3* updates
        
        # if chatting_3 is starting this frame...
        if chatting_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_3.frameNStart = frameN  # exact frame index
            chatting_3.tStart = t  # local t and not account for scr refresh
            chatting_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_3.started')
            # update status
            chatting_3.status = STARTED
            chatting_3.setAutoDraw(True)
        
        # if chatting_3 is active this frame...
        if chatting_3.status == STARTED:
            # update params
            pass
        
        # *chat_3* updates
        
        # if chat_3 is starting this frame...
        if chat_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_3.frameNStart = frameN  # exact frame index
            chat_3.tStart = t  # local t and not account for scr refresh
            chat_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_3.started')
            # update status
            chat_3.status = STARTED
            chat_3.setAutoDraw(True)
        
        # if chat_3 is active this frame...
        if chat_3.status == STARTED:
            # update params
            pass
        
        # *sports_3* updates
        
        # if sports_3 is starting this frame...
        if sports_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_3.frameNStart = frameN  # exact frame index
            sports_3.tStart = t  # local t and not account for scr refresh
            sports_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_3.started')
            # update status
            sports_3.status = STARTED
            sports_3.setAutoDraw(True)
        
        # if sports_3 is active this frame...
        if sports_3.status == STARTED:
            # update params
            pass
        
        # *sport_3* updates
        
        # if sport_3 is starting this frame...
        if sport_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_3.frameNStart = frameN  # exact frame index
            sport_3.tStart = t  # local t and not account for scr refresh
            sport_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_3.started')
            # update status
            sport_3.status = STARTED
            sport_3.setAutoDraw(True)
        
        # if sport_3 is active this frame...
        if sport_3.status == STARTED:
            # update params
            pass
        
        # *beach_3* updates
        
        # if beach_3 is starting this frame...
        if beach_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_3.frameNStart = frameN  # exact frame index
            beach_3.tStart = t  # local t and not account for scr refresh
            beach_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_3.started')
            # update status
            beach_3.status = STARTED
            beach_3.setAutoDraw(True)
        
        # if beach_3 is active this frame...
        if beach_3.status == STARTED:
            # update params
            pass
        
        # *beach_txt_3* updates
        
        # if beach_txt_3 is starting this frame...
        if beach_txt_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_3.frameNStart = frameN  # exact frame index
            beach_txt_3.tStart = t  # local t and not account for scr refresh
            beach_txt_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_3.started')
            # update status
            beach_txt_3.status = STARTED
            beach_txt_3.setAutoDraw(True)
        
        # if beach_txt_3 is active this frame...
        if beach_txt_3.status == STARTED:
            # update params
            pass
        
        # *participantpic_6* updates
        
        # if participantpic_6 is starting this frame...
        if participantpic_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_6.frameNStart = frameN  # exact frame index
            participantpic_6.tStart = t  # local t and not account for scr refresh
            participantpic_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_6.started')
            # update status
            participantpic_6.status = STARTED
            participantpic_6.setAutoDraw(True)
        
        # if participantpic_6 is active this frame...
        if participantpic_6.status == STARTED:
            # update params
            pass
        
        # *no_3* updates
        
        # if no_3 is starting this frame...
        if no_3.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            no_3.frameNStart = frameN  # exact frame index
            no_3.tStart = t  # local t and not account for scr refresh
            no_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(no_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'no_3.started')
            # update status
            no_3.status = STARTED
            no_3.setAutoDraw(True)
        
        # if no_3 is active this frame...
        if no_3.status == STARTED:
            # update params
            pass
        
        # *key_resp_8* updates
        waitOnFlip = False
        
        # if key_resp_8 is starting this frame...
        if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_8.frameNStart = frameN  # exact frame index
            key_resp_8.tStart = t  # local t and not account for scr refresh
            key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_8.started')
            # update status
            key_resp_8.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_8.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_8.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_8_allKeys.extend(theseKeys)
            if len(_key_resp_8_allKeys):
                key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
                key_resp_8.rt = _key_resp_8_allKeys[-1].rt
                key_resp_8.duration = _key_resp_8_allKeys[-1].duration
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
        for thisComponent in topnop1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnop1" ---
    for thisComponent in topnop1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnop1.stopped', globalClock.getTime())
    # check responses
    if key_resp_8.keys in ['', [], None]:  # No response was made
        key_resp_8.keys = None
    thisExp.addData('key_resp_8.keys',key_resp_8.keys)
    if key_resp_8.keys != None:  # we had a response
        thisExp.addData('key_resp_8.rt', key_resp_8.rt)
        thisExp.addData('key_resp_8.duration', key_resp_8.duration)
    thisExp.nextEntry()
    # the Routine "topnop1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "play2_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('play2_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_7
    if friendChoice.keys != 'y':
        continueRoutine = False
    key_resp_9.keys = []
    key_resp_9.rt = []
    _key_resp_9_allKeys = []
    # keep track of which components have finished
    play2_2Components = [polygon_10, text_27, player_3, beachpic_2, text_25, writingpic2_2, text_26, cycling_2, text_30, yes1_3, key_resp_9]
    for thisComponent in play2_2Components:
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
    
    # --- Run Routine "play2_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_10* updates
        
        # if polygon_10 is starting this frame...
        if polygon_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_10.frameNStart = frameN  # exact frame index
            polygon_10.tStart = t  # local t and not account for scr refresh
            polygon_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_10.started')
            # update status
            polygon_10.status = STARTED
            polygon_10.setAutoDraw(True)
        
        # if polygon_10 is active this frame...
        if polygon_10.status == STARTED:
            # update params
            pass
        
        # *text_27* updates
        
        # if text_27 is starting this frame...
        if text_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_27.frameNStart = frameN  # exact frame index
            text_27.tStart = t  # local t and not account for scr refresh
            text_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_27, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_27.started')
            # update status
            text_27.status = STARTED
            text_27.setAutoDraw(True)
        
        # if text_27 is active this frame...
        if text_27.status == STARTED:
            # update params
            pass
        
        # *player_3* updates
        
        # if player_3 is starting this frame...
        if player_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player_3.frameNStart = frameN  # exact frame index
            player_3.tStart = t  # local t and not account for scr refresh
            player_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'player_3.started')
            # update status
            player_3.status = STARTED
            player_3.setAutoDraw(True)
        
        # if player_3 is active this frame...
        if player_3.status == STARTED:
            # update params
            pass
        
        # *beachpic_2* updates
        
        # if beachpic_2 is starting this frame...
        if beachpic_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_2.frameNStart = frameN  # exact frame index
            beachpic_2.tStart = t  # local t and not account for scr refresh
            beachpic_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_2.started')
            # update status
            beachpic_2.status = STARTED
            beachpic_2.setAutoDraw(True)
        
        # if beachpic_2 is active this frame...
        if beachpic_2.status == STARTED:
            # update params
            pass
        
        # *text_25* updates
        
        # if text_25 is starting this frame...
        if text_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_25.frameNStart = frameN  # exact frame index
            text_25.tStart = t  # local t and not account for scr refresh
            text_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_25, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_25.started')
            # update status
            text_25.status = STARTED
            text_25.setAutoDraw(True)
        
        # if text_25 is active this frame...
        if text_25.status == STARTED:
            # update params
            pass
        
        # *writingpic2_2* updates
        
        # if writingpic2_2 is starting this frame...
        if writingpic2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_2.frameNStart = frameN  # exact frame index
            writingpic2_2.tStart = t  # local t and not account for scr refresh
            writingpic2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_2.started')
            # update status
            writingpic2_2.status = STARTED
            writingpic2_2.setAutoDraw(True)
        
        # if writingpic2_2 is active this frame...
        if writingpic2_2.status == STARTED:
            # update params
            pass
        
        # *text_26* updates
        
        # if text_26 is starting this frame...
        if text_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_26.frameNStart = frameN  # exact frame index
            text_26.tStart = t  # local t and not account for scr refresh
            text_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_26.started')
            # update status
            text_26.status = STARTED
            text_26.setAutoDraw(True)
        
        # if text_26 is active this frame...
        if text_26.status == STARTED:
            # update params
            pass
        
        # *cycling_2* updates
        
        # if cycling_2 is starting this frame...
        if cycling_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_2.frameNStart = frameN  # exact frame index
            cycling_2.tStart = t  # local t and not account for scr refresh
            cycling_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_2.started')
            # update status
            cycling_2.status = STARTED
            cycling_2.setAutoDraw(True)
        
        # if cycling_2 is active this frame...
        if cycling_2.status == STARTED:
            # update params
            pass
        
        # *text_30* updates
        
        # if text_30 is starting this frame...
        if text_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_30.frameNStart = frameN  # exact frame index
            text_30.tStart = t  # local t and not account for scr refresh
            text_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_30.started')
            # update status
            text_30.status = STARTED
            text_30.setAutoDraw(True)
        
        # if text_30 is active this frame...
        if text_30.status == STARTED:
            # update params
            pass
        
        # *yes1_3* updates
        
        # if yes1_3 is starting this frame...
        if yes1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_3.frameNStart = frameN  # exact frame index
            yes1_3.tStart = t  # local t and not account for scr refresh
            yes1_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_3.started')
            # update status
            yes1_3.status = STARTED
            yes1_3.setAutoDraw(True)
        
        # if yes1_3 is active this frame...
        if yes1_3.status == STARTED:
            # update params
            pass
        
        # *key_resp_9* updates
        waitOnFlip = False
        
        # if key_resp_9 is starting this frame...
        if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_9.frameNStart = frameN  # exact frame index
            key_resp_9.tStart = t  # local t and not account for scr refresh
            key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_9.started')
            # update status
            key_resp_9.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_9.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_9.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_9_allKeys.extend(theseKeys)
            if len(_key_resp_9_allKeys):
                key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
                key_resp_9.rt = _key_resp_9_allKeys[-1].rt
                key_resp_9.duration = _key_resp_9_allKeys[-1].duration
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
        for thisComponent in play2_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "play2_2" ---
    for thisComponent in play2_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('play2_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_9.keys in ['', [], None]:  # No response was made
        key_resp_9.keys = None
    thisExp.addData('key_resp_9.keys',key_resp_9.keys)
    if key_resp_9.keys != None:  # we had a response
        thisExp.addData('key_resp_9.rt', key_resp_9.rt)
        thisExp.addData('key_resp_9.duration', key_resp_9.duration)
    thisExp.nextEntry()
    # the Routine "play2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnop2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnop2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_8
    if friendChoice.keys != 'y':
        continueRoutine = False
    key_resp_14.keys = []
    key_resp_14.rt = []
    _key_resp_14_allKeys = []
    # keep track of which components have finished
    topnop2Components = [polygon_14, Player1_6, beach1, var_9, write, var_10, cycle, text_33, p1_6, you_4, chatting_4, chat_4, sports_4, sport_4, beach_4, beach_txt_4, participantpic_2, no_4, key_resp_14]
    for thisComponent in topnop2Components:
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
    
    # --- Run Routine "topnop2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_14* updates
        
        # if polygon_14 is starting this frame...
        if polygon_14.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_14.frameNStart = frameN  # exact frame index
            polygon_14.tStart = t  # local t and not account for scr refresh
            polygon_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_14.started')
            # update status
            polygon_14.status = STARTED
            polygon_14.setAutoDraw(True)
        
        # if polygon_14 is active this frame...
        if polygon_14.status == STARTED:
            # update params
            pass
        
        # *Player1_6* updates
        
        # if Player1_6 is starting this frame...
        if Player1_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_6.frameNStart = frameN  # exact frame index
            Player1_6.tStart = t  # local t and not account for scr refresh
            Player1_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_6.started')
            # update status
            Player1_6.status = STARTED
            Player1_6.setAutoDraw(True)
        
        # if Player1_6 is active this frame...
        if Player1_6.status == STARTED:
            # update params
            pass
        
        # *beach1* updates
        
        # if beach1 is starting this frame...
        if beach1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beach1.frameNStart = frameN  # exact frame index
            beach1.tStart = t  # local t and not account for scr refresh
            beach1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach1.started')
            # update status
            beach1.status = STARTED
            beach1.setAutoDraw(True)
        
        # if beach1 is active this frame...
        if beach1.status == STARTED:
            # update params
            pass
        
        # *var_9* updates
        
        # if var_9 is starting this frame...
        if var_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_9.frameNStart = frameN  # exact frame index
            var_9.tStart = t  # local t and not account for scr refresh
            var_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_9.started')
            # update status
            var_9.status = STARTED
            var_9.setAutoDraw(True)
        
        # if var_9 is active this frame...
        if var_9.status == STARTED:
            # update params
            pass
        
        # *write* updates
        
        # if write is starting this frame...
        if write.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            write.frameNStart = frameN  # exact frame index
            write.tStart = t  # local t and not account for scr refresh
            write.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(write, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'write.started')
            # update status
            write.status = STARTED
            write.setAutoDraw(True)
        
        # if write is active this frame...
        if write.status == STARTED:
            # update params
            pass
        
        # *var_10* updates
        
        # if var_10 is starting this frame...
        if var_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_10.frameNStart = frameN  # exact frame index
            var_10.tStart = t  # local t and not account for scr refresh
            var_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_10.started')
            # update status
            var_10.status = STARTED
            var_10.setAutoDraw(True)
        
        # if var_10 is active this frame...
        if var_10.status == STARTED:
            # update params
            pass
        
        # *cycle* updates
        
        # if cycle is starting this frame...
        if cycle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycle.frameNStart = frameN  # exact frame index
            cycle.tStart = t  # local t and not account for scr refresh
            cycle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycle, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycle.started')
            # update status
            cycle.status = STARTED
            cycle.setAutoDraw(True)
        
        # if cycle is active this frame...
        if cycle.status == STARTED:
            # update params
            pass
        
        # *text_33* updates
        
        # if text_33 is starting this frame...
        if text_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_33.frameNStart = frameN  # exact frame index
            text_33.tStart = t  # local t and not account for scr refresh
            text_33.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_33, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_33.started')
            # update status
            text_33.status = STARTED
            text_33.setAutoDraw(True)
        
        # if text_33 is active this frame...
        if text_33.status == STARTED:
            # update params
            pass
        
        # *p1_6* updates
        
        # if p1_6 is starting this frame...
        if p1_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_6.frameNStart = frameN  # exact frame index
            p1_6.tStart = t  # local t and not account for scr refresh
            p1_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_6.started')
            # update status
            p1_6.status = STARTED
            p1_6.setAutoDraw(True)
        
        # if p1_6 is active this frame...
        if p1_6.status == STARTED:
            # update params
            pass
        
        # *you_4* updates
        
        # if you_4 is starting this frame...
        if you_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_4.frameNStart = frameN  # exact frame index
            you_4.tStart = t  # local t and not account for scr refresh
            you_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_4.started')
            # update status
            you_4.status = STARTED
            you_4.setAutoDraw(True)
        
        # if you_4 is active this frame...
        if you_4.status == STARTED:
            # update params
            pass
        
        # *chatting_4* updates
        
        # if chatting_4 is starting this frame...
        if chatting_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_4.frameNStart = frameN  # exact frame index
            chatting_4.tStart = t  # local t and not account for scr refresh
            chatting_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_4.started')
            # update status
            chatting_4.status = STARTED
            chatting_4.setAutoDraw(True)
        
        # if chatting_4 is active this frame...
        if chatting_4.status == STARTED:
            # update params
            pass
        
        # *chat_4* updates
        
        # if chat_4 is starting this frame...
        if chat_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_4.frameNStart = frameN  # exact frame index
            chat_4.tStart = t  # local t and not account for scr refresh
            chat_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_4.started')
            # update status
            chat_4.status = STARTED
            chat_4.setAutoDraw(True)
        
        # if chat_4 is active this frame...
        if chat_4.status == STARTED:
            # update params
            pass
        
        # *sports_4* updates
        
        # if sports_4 is starting this frame...
        if sports_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_4.frameNStart = frameN  # exact frame index
            sports_4.tStart = t  # local t and not account for scr refresh
            sports_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_4.started')
            # update status
            sports_4.status = STARTED
            sports_4.setAutoDraw(True)
        
        # if sports_4 is active this frame...
        if sports_4.status == STARTED:
            # update params
            pass
        
        # *sport_4* updates
        
        # if sport_4 is starting this frame...
        if sport_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_4.frameNStart = frameN  # exact frame index
            sport_4.tStart = t  # local t and not account for scr refresh
            sport_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_4.started')
            # update status
            sport_4.status = STARTED
            sport_4.setAutoDraw(True)
        
        # if sport_4 is active this frame...
        if sport_4.status == STARTED:
            # update params
            pass
        
        # *beach_4* updates
        
        # if beach_4 is starting this frame...
        if beach_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_4.frameNStart = frameN  # exact frame index
            beach_4.tStart = t  # local t and not account for scr refresh
            beach_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_4.started')
            # update status
            beach_4.status = STARTED
            beach_4.setAutoDraw(True)
        
        # if beach_4 is active this frame...
        if beach_4.status == STARTED:
            # update params
            pass
        
        # *beach_txt_4* updates
        
        # if beach_txt_4 is starting this frame...
        if beach_txt_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_4.frameNStart = frameN  # exact frame index
            beach_txt_4.tStart = t  # local t and not account for scr refresh
            beach_txt_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_4.started')
            # update status
            beach_txt_4.status = STARTED
            beach_txt_4.setAutoDraw(True)
        
        # if beach_txt_4 is active this frame...
        if beach_txt_4.status == STARTED:
            # update params
            pass
        
        # *participantpic_2* updates
        
        # if participantpic_2 is starting this frame...
        if participantpic_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_2.frameNStart = frameN  # exact frame index
            participantpic_2.tStart = t  # local t and not account for scr refresh
            participantpic_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_2.started')
            # update status
            participantpic_2.status = STARTED
            participantpic_2.setAutoDraw(True)
        
        # if participantpic_2 is active this frame...
        if participantpic_2.status == STARTED:
            # update params
            pass
        
        # *no_4* updates
        
        # if no_4 is starting this frame...
        if no_4.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            no_4.frameNStart = frameN  # exact frame index
            no_4.tStart = t  # local t and not account for scr refresh
            no_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(no_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'no_4.started')
            # update status
            no_4.status = STARTED
            no_4.setAutoDraw(True)
        
        # if no_4 is active this frame...
        if no_4.status == STARTED:
            # update params
            pass
        
        # *key_resp_14* updates
        waitOnFlip = False
        
        # if key_resp_14 is starting this frame...
        if key_resp_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_14.frameNStart = frameN  # exact frame index
            key_resp_14.tStart = t  # local t and not account for scr refresh
            key_resp_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_14.started')
            # update status
            key_resp_14.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_14.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_14.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_14.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_14.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_14_allKeys.extend(theseKeys)
            if len(_key_resp_14_allKeys):
                key_resp_14.keys = _key_resp_14_allKeys[-1].name  # just the last key pressed
                key_resp_14.rt = _key_resp_14_allKeys[-1].rt
                key_resp_14.duration = _key_resp_14_allKeys[-1].duration
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
        for thisComponent in topnop2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnop2" ---
    for thisComponent in topnop2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnop2.stopped', globalClock.getTime())
    # check responses
    if key_resp_14.keys in ['', [], None]:  # No response was made
        key_resp_14.keys = None
    thisExp.addData('key_resp_14.keys',key_resp_14.keys)
    if key_resp_14.keys != None:  # we had a response
        thisExp.addData('key_resp_14.rt', key_resp_14.rt)
        thisExp.addData('key_resp_14.duration', key_resp_14.duration)
    thisExp.nextEntry()
    # the Routine "topnop2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "wait_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('wait_2.started', globalClock.getTime())
    # keep track of which components have finished
    wait_2Components = [polygon_2, text_36]
    for thisComponent in wait_2Components:
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
    
    # --- Run Routine "wait_2" ---
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
        
        # *polygon_2* updates
        
        # if polygon_2 is starting this frame...
        if polygon_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2.frameNStart = frameN  # exact frame index
            polygon_2.tStart = t  # local t and not account for scr refresh
            polygon_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_2.started')
            # update status
            polygon_2.status = STARTED
            polygon_2.setAutoDraw(True)
        
        # if polygon_2 is active this frame...
        if polygon_2.status == STARTED:
            # update params
            pass
        
        # *text_36* updates
        
        # if text_36 is starting this frame...
        if text_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_36.frameNStart = frameN  # exact frame index
            text_36.tStart = t  # local t and not account for scr refresh
            text_36.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_36, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_36.started')
            # update status
            text_36.status = STARTED
            text_36.setAutoDraw(True)
        
        # if text_36 is active this frame...
        if text_36.status == STARTED:
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
        for thisComponent in wait_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "wait_2" ---
    for thisComponent in wait_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('wait_2.stopped', globalClock.getTime())
    # the Routine "wait_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ChoiceRoutine_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ChoiceRoutine_3.started', globalClock.getTime())
    friendChoice_2.keys = []
    friendChoice_2.rt = []
    _friendChoice_2_allKeys = []
    # keep track of which components have finished
    ChoiceRoutine_3Components = [Who_3, text_21, text_39, Player1demo_3, Player2demo_3, writingpic_3, text_40, instruments_3, text_41, knitting_3, text_42, beachpic_3, text_45, writingpic2_3, text_43, cycling_3, text_44, friendChoice_2]
    for thisComponent in ChoiceRoutine_3Components:
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
    
    # --- Run Routine "ChoiceRoutine_3" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Who_3* updates
        
        # if Who_3 is starting this frame...
        if Who_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Who_3.frameNStart = frameN  # exact frame index
            Who_3.tStart = t  # local t and not account for scr refresh
            Who_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Who_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Who_3.started')
            # update status
            Who_3.status = STARTED
            Who_3.setAutoDraw(True)
        
        # if Who_3 is active this frame...
        if Who_3.status == STARTED:
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
        
        # *text_39* updates
        
        # if text_39 is starting this frame...
        if text_39.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_39.frameNStart = frameN  # exact frame index
            text_39.tStart = t  # local t and not account for scr refresh
            text_39.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_39, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_39.started')
            # update status
            text_39.status = STARTED
            text_39.setAutoDraw(True)
        
        # if text_39 is active this frame...
        if text_39.status == STARTED:
            # update params
            pass
        
        # *Player1demo_3* updates
        
        # if Player1demo_3 is starting this frame...
        if Player1demo_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1demo_3.frameNStart = frameN  # exact frame index
            Player1demo_3.tStart = t  # local t and not account for scr refresh
            Player1demo_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1demo_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1demo_3.started')
            # update status
            Player1demo_3.status = STARTED
            Player1demo_3.setAutoDraw(True)
        
        # if Player1demo_3 is active this frame...
        if Player1demo_3.status == STARTED:
            # update params
            pass
        
        # *Player2demo_3* updates
        
        # if Player2demo_3 is starting this frame...
        if Player2demo_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2demo_3.frameNStart = frameN  # exact frame index
            Player2demo_3.tStart = t  # local t and not account for scr refresh
            Player2demo_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2demo_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2demo_3.started')
            # update status
            Player2demo_3.status = STARTED
            Player2demo_3.setAutoDraw(True)
        
        # if Player2demo_3 is active this frame...
        if Player2demo_3.status == STARTED:
            # update params
            pass
        
        # *writingpic_3* updates
        
        # if writingpic_3 is starting this frame...
        if writingpic_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_3.frameNStart = frameN  # exact frame index
            writingpic_3.tStart = t  # local t and not account for scr refresh
            writingpic_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_3.started')
            # update status
            writingpic_3.status = STARTED
            writingpic_3.setAutoDraw(True)
        
        # if writingpic_3 is active this frame...
        if writingpic_3.status == STARTED:
            # update params
            pass
        
        # *text_40* updates
        
        # if text_40 is starting this frame...
        if text_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_40.frameNStart = frameN  # exact frame index
            text_40.tStart = t  # local t and not account for scr refresh
            text_40.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_40, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_40.started')
            # update status
            text_40.status = STARTED
            text_40.setAutoDraw(True)
        
        # if text_40 is active this frame...
        if text_40.status == STARTED:
            # update params
            pass
        
        # *instruments_3* updates
        
        # if instruments_3 is starting this frame...
        if instruments_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_3.frameNStart = frameN  # exact frame index
            instruments_3.tStart = t  # local t and not account for scr refresh
            instruments_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_3.started')
            # update status
            instruments_3.status = STARTED
            instruments_3.setAutoDraw(True)
        
        # if instruments_3 is active this frame...
        if instruments_3.status == STARTED:
            # update params
            pass
        
        # *text_41* updates
        
        # if text_41 is starting this frame...
        if text_41.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_41.frameNStart = frameN  # exact frame index
            text_41.tStart = t  # local t and not account for scr refresh
            text_41.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_41, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_41.started')
            # update status
            text_41.status = STARTED
            text_41.setAutoDraw(True)
        
        # if text_41 is active this frame...
        if text_41.status == STARTED:
            # update params
            pass
        
        # *knitting_3* updates
        
        # if knitting_3 is starting this frame...
        if knitting_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_3.frameNStart = frameN  # exact frame index
            knitting_3.tStart = t  # local t and not account for scr refresh
            knitting_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_3.started')
            # update status
            knitting_3.status = STARTED
            knitting_3.setAutoDraw(True)
        
        # if knitting_3 is active this frame...
        if knitting_3.status == STARTED:
            # update params
            pass
        
        # *text_42* updates
        
        # if text_42 is starting this frame...
        if text_42.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_42.frameNStart = frameN  # exact frame index
            text_42.tStart = t  # local t and not account for scr refresh
            text_42.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_42, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_42.started')
            # update status
            text_42.status = STARTED
            text_42.setAutoDraw(True)
        
        # if text_42 is active this frame...
        if text_42.status == STARTED:
            # update params
            pass
        
        # *beachpic_3* updates
        
        # if beachpic_3 is starting this frame...
        if beachpic_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_3.frameNStart = frameN  # exact frame index
            beachpic_3.tStart = t  # local t and not account for scr refresh
            beachpic_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_3.started')
            # update status
            beachpic_3.status = STARTED
            beachpic_3.setAutoDraw(True)
        
        # if beachpic_3 is active this frame...
        if beachpic_3.status == STARTED:
            # update params
            pass
        
        # *text_45* updates
        
        # if text_45 is starting this frame...
        if text_45.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_45.frameNStart = frameN  # exact frame index
            text_45.tStart = t  # local t and not account for scr refresh
            text_45.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_45, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_45.started')
            # update status
            text_45.status = STARTED
            text_45.setAutoDraw(True)
        
        # if text_45 is active this frame...
        if text_45.status == STARTED:
            # update params
            pass
        
        # *writingpic2_3* updates
        
        # if writingpic2_3 is starting this frame...
        if writingpic2_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_3.frameNStart = frameN  # exact frame index
            writingpic2_3.tStart = t  # local t and not account for scr refresh
            writingpic2_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_3.started')
            # update status
            writingpic2_3.status = STARTED
            writingpic2_3.setAutoDraw(True)
        
        # if writingpic2_3 is active this frame...
        if writingpic2_3.status == STARTED:
            # update params
            pass
        
        # *text_43* updates
        
        # if text_43 is starting this frame...
        if text_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_43.frameNStart = frameN  # exact frame index
            text_43.tStart = t  # local t and not account for scr refresh
            text_43.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_43, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_43.started')
            # update status
            text_43.status = STARTED
            text_43.setAutoDraw(True)
        
        # if text_43 is active this frame...
        if text_43.status == STARTED:
            # update params
            pass
        
        # *cycling_3* updates
        
        # if cycling_3 is starting this frame...
        if cycling_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_3.frameNStart = frameN  # exact frame index
            cycling_3.tStart = t  # local t and not account for scr refresh
            cycling_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_3.started')
            # update status
            cycling_3.status = STARTED
            cycling_3.setAutoDraw(True)
        
        # if cycling_3 is active this frame...
        if cycling_3.status == STARTED:
            # update params
            pass
        
        # *text_44* updates
        
        # if text_44 is starting this frame...
        if text_44.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_44.frameNStart = frameN  # exact frame index
            text_44.tStart = t  # local t and not account for scr refresh
            text_44.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_44, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_44.started')
            # update status
            text_44.status = STARTED
            text_44.setAutoDraw(True)
        
        # if text_44 is active this frame...
        if text_44.status == STARTED:
            # update params
            pass
        
        # *friendChoice_2* updates
        waitOnFlip = False
        
        # if friendChoice_2 is starting this frame...
        if friendChoice_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            friendChoice_2.frameNStart = frameN  # exact frame index
            friendChoice_2.tStart = t  # local t and not account for scr refresh
            friendChoice_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(friendChoice_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'friendChoice_2.started')
            # update status
            friendChoice_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(friendChoice_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(friendChoice_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if friendChoice_2.status == STARTED and not waitOnFlip:
            theseKeys = friendChoice_2.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _friendChoice_2_allKeys.extend(theseKeys)
            if len(_friendChoice_2_allKeys):
                friendChoice_2.keys = _friendChoice_2_allKeys[-1].name  # just the last key pressed
                friendChoice_2.rt = _friendChoice_2_allKeys[-1].rt
                friendChoice_2.duration = _friendChoice_2_allKeys[-1].duration
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
        for thisComponent in ChoiceRoutine_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ChoiceRoutine_3" ---
    for thisComponent in ChoiceRoutine_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ChoiceRoutine_3.stopped', globalClock.getTime())
    # check responses
    if friendChoice_2.keys in ['', [], None]:  # No response was made
        friendChoice_2.keys = None
    thisExp.addData('friendChoice_2.keys',friendChoice_2.keys)
    if friendChoice_2.keys != None:  # we had a response
        thisExp.addData('friendChoice_2.rt', friendChoice_2.rt)
        thisExp.addData('friendChoice_2.duration', friendChoice_2.duration)
    thisExp.nextEntry()
    # the Routine "ChoiceRoutine_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "player1_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('player1_3.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_9
    if friendChoice_2.keys != 'n':
        continueRoutine = False
    key_resp_11.keys = []
    key_resp_11.rt = []
    _key_resp_11_allKeys = []
    # keep track of which components have finished
    player1_3Components = [polygon_9, p1_9, Player1_4, writingpic_4, text_46, instruments_4, text_47, knitting_4, yes1_5, text_49, key_resp_11]
    for thisComponent in player1_3Components:
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
    
    # --- Run Routine "player1_3" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_9* updates
        
        # if polygon_9 is starting this frame...
        if polygon_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_9.frameNStart = frameN  # exact frame index
            polygon_9.tStart = t  # local t and not account for scr refresh
            polygon_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_9.started')
            # update status
            polygon_9.status = STARTED
            polygon_9.setAutoDraw(True)
        
        # if polygon_9 is active this frame...
        if polygon_9.status == STARTED:
            # update params
            pass
        
        # *p1_9* updates
        
        # if p1_9 is starting this frame...
        if p1_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_9.frameNStart = frameN  # exact frame index
            p1_9.tStart = t  # local t and not account for scr refresh
            p1_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_9.started')
            # update status
            p1_9.status = STARTED
            p1_9.setAutoDraw(True)
        
        # if p1_9 is active this frame...
        if p1_9.status == STARTED:
            # update params
            pass
        
        # *Player1_4* updates
        
        # if Player1_4 is starting this frame...
        if Player1_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_4.frameNStart = frameN  # exact frame index
            Player1_4.tStart = t  # local t and not account for scr refresh
            Player1_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_4.started')
            # update status
            Player1_4.status = STARTED
            Player1_4.setAutoDraw(True)
        
        # if Player1_4 is active this frame...
        if Player1_4.status == STARTED:
            # update params
            pass
        
        # *writingpic_4* updates
        
        # if writingpic_4 is starting this frame...
        if writingpic_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_4.frameNStart = frameN  # exact frame index
            writingpic_4.tStart = t  # local t and not account for scr refresh
            writingpic_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_4.started')
            # update status
            writingpic_4.status = STARTED
            writingpic_4.setAutoDraw(True)
        
        # if writingpic_4 is active this frame...
        if writingpic_4.status == STARTED:
            # update params
            pass
        
        # *text_46* updates
        
        # if text_46 is starting this frame...
        if text_46.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_46.frameNStart = frameN  # exact frame index
            text_46.tStart = t  # local t and not account for scr refresh
            text_46.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_46, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_46.started')
            # update status
            text_46.status = STARTED
            text_46.setAutoDraw(True)
        
        # if text_46 is active this frame...
        if text_46.status == STARTED:
            # update params
            pass
        
        # *instruments_4* updates
        
        # if instruments_4 is starting this frame...
        if instruments_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_4.frameNStart = frameN  # exact frame index
            instruments_4.tStart = t  # local t and not account for scr refresh
            instruments_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_4.started')
            # update status
            instruments_4.status = STARTED
            instruments_4.setAutoDraw(True)
        
        # if instruments_4 is active this frame...
        if instruments_4.status == STARTED:
            # update params
            pass
        
        # *text_47* updates
        
        # if text_47 is starting this frame...
        if text_47.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_47.frameNStart = frameN  # exact frame index
            text_47.tStart = t  # local t and not account for scr refresh
            text_47.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_47, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_47.started')
            # update status
            text_47.status = STARTED
            text_47.setAutoDraw(True)
        
        # if text_47 is active this frame...
        if text_47.status == STARTED:
            # update params
            pass
        
        # *knitting_4* updates
        
        # if knitting_4 is starting this frame...
        if knitting_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_4.frameNStart = frameN  # exact frame index
            knitting_4.tStart = t  # local t and not account for scr refresh
            knitting_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_4.started')
            # update status
            knitting_4.status = STARTED
            knitting_4.setAutoDraw(True)
        
        # if knitting_4 is active this frame...
        if knitting_4.status == STARTED:
            # update params
            pass
        
        # *yes1_5* updates
        
        # if yes1_5 is starting this frame...
        if yes1_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_5.frameNStart = frameN  # exact frame index
            yes1_5.tStart = t  # local t and not account for scr refresh
            yes1_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_5.started')
            # update status
            yes1_5.status = STARTED
            yes1_5.setAutoDraw(True)
        
        # if yes1_5 is active this frame...
        if yes1_5.status == STARTED:
            # update params
            pass
        
        # *text_49* updates
        
        # if text_49 is starting this frame...
        if text_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_49.frameNStart = frameN  # exact frame index
            text_49.tStart = t  # local t and not account for scr refresh
            text_49.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_49, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_49.started')
            # update status
            text_49.status = STARTED
            text_49.setAutoDraw(True)
        
        # if text_49 is active this frame...
        if text_49.status == STARTED:
            # update params
            pass
        
        # *key_resp_11* updates
        waitOnFlip = False
        
        # if key_resp_11 is starting this frame...
        if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_11.frameNStart = frameN  # exact frame index
            key_resp_11.tStart = t  # local t and not account for scr refresh
            key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_11.started')
            # update status
            key_resp_11.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_11.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_11.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_11_allKeys.extend(theseKeys)
            if len(_key_resp_11_allKeys):
                key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
                key_resp_11.rt = _key_resp_11_allKeys[-1].rt
                key_resp_11.duration = _key_resp_11_allKeys[-1].duration
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
        for thisComponent in player1_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "player1_3" ---
    for thisComponent in player1_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('player1_3.stopped', globalClock.getTime())
    # check responses
    if key_resp_11.keys in ['', [], None]:  # No response was made
        key_resp_11.keys = None
    thisExp.addData('key_resp_11.keys',key_resp_11.keys)
    if key_resp_11.keys != None:  # we had a response
        thisExp.addData('key_resp_11.rt', key_resp_11.rt)
        thisExp.addData('key_resp_11.duration', key_resp_11.duration)
    thisExp.nextEntry()
    # the Routine "player1_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnsp1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnsp1.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_11
    if friendChoice_2.keys != 'n':
        continueRoutine = False
    key_resp_12.keys = []
    key_resp_12.rt = []
    _key_resp_12_allKeys = []
    # keep track of which components have finished
    topnsp1Components = [polygon_35, Player1_7, draw, wright, pianoo, var_12, knit, text_34, p1_7, you_5, chatting_5, chat_5, sports_5, sport_5, beach_5, beach_txt_5, participantpic_3, notseen, key_resp_12]
    for thisComponent in topnsp1Components:
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
    
    # --- Run Routine "topnsp1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_35* updates
        
        # if polygon_35 is starting this frame...
        if polygon_35.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_35.frameNStart = frameN  # exact frame index
            polygon_35.tStart = t  # local t and not account for scr refresh
            polygon_35.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_35, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_35.started')
            # update status
            polygon_35.status = STARTED
            polygon_35.setAutoDraw(True)
        
        # if polygon_35 is active this frame...
        if polygon_35.status == STARTED:
            # update params
            pass
        
        # *Player1_7* updates
        
        # if Player1_7 is starting this frame...
        if Player1_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_7.frameNStart = frameN  # exact frame index
            Player1_7.tStart = t  # local t and not account for scr refresh
            Player1_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_7.started')
            # update status
            Player1_7.status = STARTED
            Player1_7.setAutoDraw(True)
        
        # if Player1_7 is active this frame...
        if Player1_7.status == STARTED:
            # update params
            pass
        
        # *draw* updates
        
        # if draw is starting this frame...
        if draw.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            draw.frameNStart = frameN  # exact frame index
            draw.tStart = t  # local t and not account for scr refresh
            draw.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(draw, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'draw.started')
            # update status
            draw.status = STARTED
            draw.setAutoDraw(True)
        
        # if draw is active this frame...
        if draw.status == STARTED:
            # update params
            pass
        
        # *wright* updates
        
        # if wright is starting this frame...
        if wright.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wright.frameNStart = frameN  # exact frame index
            wright.tStart = t  # local t and not account for scr refresh
            wright.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wright, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'wright.started')
            # update status
            wright.status = STARTED
            wright.setAutoDraw(True)
        
        # if wright is active this frame...
        if wright.status == STARTED:
            # update params
            pass
        
        # *pianoo* updates
        
        # if pianoo is starting this frame...
        if pianoo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pianoo.frameNStart = frameN  # exact frame index
            pianoo.tStart = t  # local t and not account for scr refresh
            pianoo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pianoo, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'pianoo.started')
            # update status
            pianoo.status = STARTED
            pianoo.setAutoDraw(True)
        
        # if pianoo is active this frame...
        if pianoo.status == STARTED:
            # update params
            pass
        
        # *var_12* updates
        
        # if var_12 is starting this frame...
        if var_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_12.frameNStart = frameN  # exact frame index
            var_12.tStart = t  # local t and not account for scr refresh
            var_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_12.started')
            # update status
            var_12.status = STARTED
            var_12.setAutoDraw(True)
        
        # if var_12 is active this frame...
        if var_12.status == STARTED:
            # update params
            pass
        
        # *knit* updates
        
        # if knit is starting this frame...
        if knit.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knit.frameNStart = frameN  # exact frame index
            knit.tStart = t  # local t and not account for scr refresh
            knit.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knit, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knit.started')
            # update status
            knit.status = STARTED
            knit.setAutoDraw(True)
        
        # if knit is active this frame...
        if knit.status == STARTED:
            # update params
            pass
        
        # *text_34* updates
        
        # if text_34 is starting this frame...
        if text_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_34.frameNStart = frameN  # exact frame index
            text_34.tStart = t  # local t and not account for scr refresh
            text_34.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_34, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_34.started')
            # update status
            text_34.status = STARTED
            text_34.setAutoDraw(True)
        
        # if text_34 is active this frame...
        if text_34.status == STARTED:
            # update params
            pass
        
        # *p1_7* updates
        
        # if p1_7 is starting this frame...
        if p1_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_7.frameNStart = frameN  # exact frame index
            p1_7.tStart = t  # local t and not account for scr refresh
            p1_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_7.started')
            # update status
            p1_7.status = STARTED
            p1_7.setAutoDraw(True)
        
        # if p1_7 is active this frame...
        if p1_7.status == STARTED:
            # update params
            pass
        
        # *you_5* updates
        
        # if you_5 is starting this frame...
        if you_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_5.frameNStart = frameN  # exact frame index
            you_5.tStart = t  # local t and not account for scr refresh
            you_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_5.started')
            # update status
            you_5.status = STARTED
            you_5.setAutoDraw(True)
        
        # if you_5 is active this frame...
        if you_5.status == STARTED:
            # update params
            pass
        
        # *chatting_5* updates
        
        # if chatting_5 is starting this frame...
        if chatting_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_5.frameNStart = frameN  # exact frame index
            chatting_5.tStart = t  # local t and not account for scr refresh
            chatting_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_5.started')
            # update status
            chatting_5.status = STARTED
            chatting_5.setAutoDraw(True)
        
        # if chatting_5 is active this frame...
        if chatting_5.status == STARTED:
            # update params
            pass
        
        # *chat_5* updates
        
        # if chat_5 is starting this frame...
        if chat_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_5.frameNStart = frameN  # exact frame index
            chat_5.tStart = t  # local t and not account for scr refresh
            chat_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_5.started')
            # update status
            chat_5.status = STARTED
            chat_5.setAutoDraw(True)
        
        # if chat_5 is active this frame...
        if chat_5.status == STARTED:
            # update params
            pass
        
        # *sports_5* updates
        
        # if sports_5 is starting this frame...
        if sports_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_5.frameNStart = frameN  # exact frame index
            sports_5.tStart = t  # local t and not account for scr refresh
            sports_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_5.started')
            # update status
            sports_5.status = STARTED
            sports_5.setAutoDraw(True)
        
        # if sports_5 is active this frame...
        if sports_5.status == STARTED:
            # update params
            pass
        
        # *sport_5* updates
        
        # if sport_5 is starting this frame...
        if sport_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_5.frameNStart = frameN  # exact frame index
            sport_5.tStart = t  # local t and not account for scr refresh
            sport_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_5.started')
            # update status
            sport_5.status = STARTED
            sport_5.setAutoDraw(True)
        
        # if sport_5 is active this frame...
        if sport_5.status == STARTED:
            # update params
            pass
        
        # *beach_5* updates
        
        # if beach_5 is starting this frame...
        if beach_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_5.frameNStart = frameN  # exact frame index
            beach_5.tStart = t  # local t and not account for scr refresh
            beach_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_5.started')
            # update status
            beach_5.status = STARTED
            beach_5.setAutoDraw(True)
        
        # if beach_5 is active this frame...
        if beach_5.status == STARTED:
            # update params
            pass
        
        # *beach_txt_5* updates
        
        # if beach_txt_5 is starting this frame...
        if beach_txt_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_5.frameNStart = frameN  # exact frame index
            beach_txt_5.tStart = t  # local t and not account for scr refresh
            beach_txt_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_5.started')
            # update status
            beach_txt_5.status = STARTED
            beach_txt_5.setAutoDraw(True)
        
        # if beach_txt_5 is active this frame...
        if beach_txt_5.status == STARTED:
            # update params
            pass
        
        # *participantpic_3* updates
        
        # if participantpic_3 is starting this frame...
        if participantpic_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_3.frameNStart = frameN  # exact frame index
            participantpic_3.tStart = t  # local t and not account for scr refresh
            participantpic_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_3.started')
            # update status
            participantpic_3.status = STARTED
            participantpic_3.setAutoDraw(True)
        
        # if participantpic_3 is active this frame...
        if participantpic_3.status == STARTED:
            # update params
            pass
        
        # *notseen* updates
        
        # if notseen is starting this frame...
        if notseen.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            notseen.frameNStart = frameN  # exact frame index
            notseen.tStart = t  # local t and not account for scr refresh
            notseen.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(notseen, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'notseen.started')
            # update status
            notseen.status = STARTED
            notseen.setAutoDraw(True)
        
        # if notseen is active this frame...
        if notseen.status == STARTED:
            # update params
            pass
        
        # *key_resp_12* updates
        waitOnFlip = False
        
        # if key_resp_12 is starting this frame...
        if key_resp_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_12.frameNStart = frameN  # exact frame index
            key_resp_12.tStart = t  # local t and not account for scr refresh
            key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_12.started')
            # update status
            key_resp_12.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_12.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_12.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_12.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_12_allKeys.extend(theseKeys)
            if len(_key_resp_12_allKeys):
                key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
                key_resp_12.rt = _key_resp_12_allKeys[-1].rt
                key_resp_12.duration = _key_resp_12_allKeys[-1].duration
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
        for thisComponent in topnsp1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnsp1" ---
    for thisComponent in topnsp1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnsp1.stopped', globalClock.getTime())
    # check responses
    if key_resp_12.keys in ['', [], None]:  # No response was made
        key_resp_12.keys = None
    thisExp.addData('key_resp_12.keys',key_resp_12.keys)
    if key_resp_12.keys != None:  # we had a response
        thisExp.addData('key_resp_12.rt', key_resp_12.rt)
        thisExp.addData('key_resp_12.duration', key_resp_12.duration)
    thisExp.nextEntry()
    # the Routine "topnsp1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "player2_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('player2_3.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_10
    if friendChoice_2.keys != 'y':
        continueRoutine = False
    key_resp_10.keys = []
    key_resp_10.rt = []
    _key_resp_10_allKeys = []
    # keep track of which components have finished
    player2_3Components = [polygon_11, text_50, player_4, beachpic_4, text_51, writingpic2_4, text_52, cycling_4, text_53, yes1_6, key_resp_10]
    for thisComponent in player2_3Components:
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
    
    # --- Run Routine "player2_3" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_11* updates
        
        # if polygon_11 is starting this frame...
        if polygon_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_11.frameNStart = frameN  # exact frame index
            polygon_11.tStart = t  # local t and not account for scr refresh
            polygon_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_11.started')
            # update status
            polygon_11.status = STARTED
            polygon_11.setAutoDraw(True)
        
        # if polygon_11 is active this frame...
        if polygon_11.status == STARTED:
            # update params
            pass
        
        # *text_50* updates
        
        # if text_50 is starting this frame...
        if text_50.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_50.frameNStart = frameN  # exact frame index
            text_50.tStart = t  # local t and not account for scr refresh
            text_50.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_50, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_50.started')
            # update status
            text_50.status = STARTED
            text_50.setAutoDraw(True)
        
        # if text_50 is active this frame...
        if text_50.status == STARTED:
            # update params
            pass
        
        # *player_4* updates
        
        # if player_4 is starting this frame...
        if player_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player_4.frameNStart = frameN  # exact frame index
            player_4.tStart = t  # local t and not account for scr refresh
            player_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'player_4.started')
            # update status
            player_4.status = STARTED
            player_4.setAutoDraw(True)
        
        # if player_4 is active this frame...
        if player_4.status == STARTED:
            # update params
            pass
        
        # *beachpic_4* updates
        
        # if beachpic_4 is starting this frame...
        if beachpic_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_4.frameNStart = frameN  # exact frame index
            beachpic_4.tStart = t  # local t and not account for scr refresh
            beachpic_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_4.started')
            # update status
            beachpic_4.status = STARTED
            beachpic_4.setAutoDraw(True)
        
        # if beachpic_4 is active this frame...
        if beachpic_4.status == STARTED:
            # update params
            pass
        
        # *text_51* updates
        
        # if text_51 is starting this frame...
        if text_51.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_51.frameNStart = frameN  # exact frame index
            text_51.tStart = t  # local t and not account for scr refresh
            text_51.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_51, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_51.started')
            # update status
            text_51.status = STARTED
            text_51.setAutoDraw(True)
        
        # if text_51 is active this frame...
        if text_51.status == STARTED:
            # update params
            pass
        
        # *writingpic2_4* updates
        
        # if writingpic2_4 is starting this frame...
        if writingpic2_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_4.frameNStart = frameN  # exact frame index
            writingpic2_4.tStart = t  # local t and not account for scr refresh
            writingpic2_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_4.started')
            # update status
            writingpic2_4.status = STARTED
            writingpic2_4.setAutoDraw(True)
        
        # if writingpic2_4 is active this frame...
        if writingpic2_4.status == STARTED:
            # update params
            pass
        
        # *text_52* updates
        
        # if text_52 is starting this frame...
        if text_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_52.frameNStart = frameN  # exact frame index
            text_52.tStart = t  # local t and not account for scr refresh
            text_52.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_52.started')
            # update status
            text_52.status = STARTED
            text_52.setAutoDraw(True)
        
        # if text_52 is active this frame...
        if text_52.status == STARTED:
            # update params
            pass
        
        # *cycling_4* updates
        
        # if cycling_4 is starting this frame...
        if cycling_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_4.frameNStart = frameN  # exact frame index
            cycling_4.tStart = t  # local t and not account for scr refresh
            cycling_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_4.started')
            # update status
            cycling_4.status = STARTED
            cycling_4.setAutoDraw(True)
        
        # if cycling_4 is active this frame...
        if cycling_4.status == STARTED:
            # update params
            pass
        
        # *text_53* updates
        
        # if text_53 is starting this frame...
        if text_53.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_53.frameNStart = frameN  # exact frame index
            text_53.tStart = t  # local t and not account for scr refresh
            text_53.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_53.started')
            # update status
            text_53.status = STARTED
            text_53.setAutoDraw(True)
        
        # if text_53 is active this frame...
        if text_53.status == STARTED:
            # update params
            pass
        
        # *yes1_6* updates
        
        # if yes1_6 is starting this frame...
        if yes1_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_6.frameNStart = frameN  # exact frame index
            yes1_6.tStart = t  # local t and not account for scr refresh
            yes1_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_6.started')
            # update status
            yes1_6.status = STARTED
            yes1_6.setAutoDraw(True)
        
        # if yes1_6 is active this frame...
        if yes1_6.status == STARTED:
            # update params
            pass
        
        # *key_resp_10* updates
        waitOnFlip = False
        
        # if key_resp_10 is starting this frame...
        if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_10.frameNStart = frameN  # exact frame index
            key_resp_10.tStart = t  # local t and not account for scr refresh
            key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_10.started')
            # update status
            key_resp_10.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_10.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_10.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_10_allKeys.extend(theseKeys)
            if len(_key_resp_10_allKeys):
                key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
                key_resp_10.rt = _key_resp_10_allKeys[-1].rt
                key_resp_10.duration = _key_resp_10_allKeys[-1].duration
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
        for thisComponent in player2_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "player2_3" ---
    for thisComponent in player2_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('player2_3.stopped', globalClock.getTime())
    # check responses
    if key_resp_10.keys in ['', [], None]:  # No response was made
        key_resp_10.keys = None
    thisExp.addData('key_resp_10.keys',key_resp_10.keys)
    if key_resp_10.keys != None:  # we had a response
        thisExp.addData('key_resp_10.rt', key_resp_10.rt)
        thisExp.addData('key_resp_10.duration', key_resp_10.duration)
    thisExp.nextEntry()
    # the Routine "player2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnsp2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnsp2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_12
    if friendChoice_2.keys != 'y':
        continueRoutine = False
    key_resp_13.keys = []
    key_resp_13.rt = []
    _key_resp_13_allKeys = []
    # keep track of which components have finished
    topnsp2Components = [polygon_36, Player1_8, beachh, var_13, wrightt, var_14, cyc, text_35, p1_8, you_6, chatting_6, chat_6, sports_6, sport_6, beach_6, beach_txt_6, participantpic_4, notseen2, key_resp_13]
    for thisComponent in topnsp2Components:
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
    
    # --- Run Routine "topnsp2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_36* updates
        
        # if polygon_36 is starting this frame...
        if polygon_36.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_36.frameNStart = frameN  # exact frame index
            polygon_36.tStart = t  # local t and not account for scr refresh
            polygon_36.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_36, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_36.started')
            # update status
            polygon_36.status = STARTED
            polygon_36.setAutoDraw(True)
        
        # if polygon_36 is active this frame...
        if polygon_36.status == STARTED:
            # update params
            pass
        
        # *Player1_8* updates
        
        # if Player1_8 is starting this frame...
        if Player1_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_8.frameNStart = frameN  # exact frame index
            Player1_8.tStart = t  # local t and not account for scr refresh
            Player1_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_8.started')
            # update status
            Player1_8.status = STARTED
            Player1_8.setAutoDraw(True)
        
        # if Player1_8 is active this frame...
        if Player1_8.status == STARTED:
            # update params
            pass
        
        # *beachh* updates
        
        # if beachh is starting this frame...
        if beachh.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachh.frameNStart = frameN  # exact frame index
            beachh.tStart = t  # local t and not account for scr refresh
            beachh.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachh, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachh.started')
            # update status
            beachh.status = STARTED
            beachh.setAutoDraw(True)
        
        # if beachh is active this frame...
        if beachh.status == STARTED:
            # update params
            pass
        
        # *var_13* updates
        
        # if var_13 is starting this frame...
        if var_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_13.frameNStart = frameN  # exact frame index
            var_13.tStart = t  # local t and not account for scr refresh
            var_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_13.started')
            # update status
            var_13.status = STARTED
            var_13.setAutoDraw(True)
        
        # if var_13 is active this frame...
        if var_13.status == STARTED:
            # update params
            pass
        
        # *wrightt* updates
        
        # if wrightt is starting this frame...
        if wrightt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wrightt.frameNStart = frameN  # exact frame index
            wrightt.tStart = t  # local t and not account for scr refresh
            wrightt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wrightt, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'wrightt.started')
            # update status
            wrightt.status = STARTED
            wrightt.setAutoDraw(True)
        
        # if wrightt is active this frame...
        if wrightt.status == STARTED:
            # update params
            pass
        
        # *var_14* updates
        
        # if var_14 is starting this frame...
        if var_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_14.frameNStart = frameN  # exact frame index
            var_14.tStart = t  # local t and not account for scr refresh
            var_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_14.started')
            # update status
            var_14.status = STARTED
            var_14.setAutoDraw(True)
        
        # if var_14 is active this frame...
        if var_14.status == STARTED:
            # update params
            pass
        
        # *cyc* updates
        
        # if cyc is starting this frame...
        if cyc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cyc.frameNStart = frameN  # exact frame index
            cyc.tStart = t  # local t and not account for scr refresh
            cyc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cyc, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cyc.started')
            # update status
            cyc.status = STARTED
            cyc.setAutoDraw(True)
        
        # if cyc is active this frame...
        if cyc.status == STARTED:
            # update params
            pass
        
        # *text_35* updates
        
        # if text_35 is starting this frame...
        if text_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_35.frameNStart = frameN  # exact frame index
            text_35.tStart = t  # local t and not account for scr refresh
            text_35.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_35, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_35.started')
            # update status
            text_35.status = STARTED
            text_35.setAutoDraw(True)
        
        # if text_35 is active this frame...
        if text_35.status == STARTED:
            # update params
            pass
        
        # *p1_8* updates
        
        # if p1_8 is starting this frame...
        if p1_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_8.frameNStart = frameN  # exact frame index
            p1_8.tStart = t  # local t and not account for scr refresh
            p1_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_8.started')
            # update status
            p1_8.status = STARTED
            p1_8.setAutoDraw(True)
        
        # if p1_8 is active this frame...
        if p1_8.status == STARTED:
            # update params
            pass
        
        # *you_6* updates
        
        # if you_6 is starting this frame...
        if you_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_6.frameNStart = frameN  # exact frame index
            you_6.tStart = t  # local t and not account for scr refresh
            you_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_6.started')
            # update status
            you_6.status = STARTED
            you_6.setAutoDraw(True)
        
        # if you_6 is active this frame...
        if you_6.status == STARTED:
            # update params
            pass
        
        # *chatting_6* updates
        
        # if chatting_6 is starting this frame...
        if chatting_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_6.frameNStart = frameN  # exact frame index
            chatting_6.tStart = t  # local t and not account for scr refresh
            chatting_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_6.started')
            # update status
            chatting_6.status = STARTED
            chatting_6.setAutoDraw(True)
        
        # if chatting_6 is active this frame...
        if chatting_6.status == STARTED:
            # update params
            pass
        
        # *chat_6* updates
        
        # if chat_6 is starting this frame...
        if chat_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_6.frameNStart = frameN  # exact frame index
            chat_6.tStart = t  # local t and not account for scr refresh
            chat_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_6.started')
            # update status
            chat_6.status = STARTED
            chat_6.setAutoDraw(True)
        
        # if chat_6 is active this frame...
        if chat_6.status == STARTED:
            # update params
            pass
        
        # *sports_6* updates
        
        # if sports_6 is starting this frame...
        if sports_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_6.frameNStart = frameN  # exact frame index
            sports_6.tStart = t  # local t and not account for scr refresh
            sports_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_6.started')
            # update status
            sports_6.status = STARTED
            sports_6.setAutoDraw(True)
        
        # if sports_6 is active this frame...
        if sports_6.status == STARTED:
            # update params
            pass
        
        # *sport_6* updates
        
        # if sport_6 is starting this frame...
        if sport_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_6.frameNStart = frameN  # exact frame index
            sport_6.tStart = t  # local t and not account for scr refresh
            sport_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_6.started')
            # update status
            sport_6.status = STARTED
            sport_6.setAutoDraw(True)
        
        # if sport_6 is active this frame...
        if sport_6.status == STARTED:
            # update params
            pass
        
        # *beach_6* updates
        
        # if beach_6 is starting this frame...
        if beach_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_6.frameNStart = frameN  # exact frame index
            beach_6.tStart = t  # local t and not account for scr refresh
            beach_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_6.started')
            # update status
            beach_6.status = STARTED
            beach_6.setAutoDraw(True)
        
        # if beach_6 is active this frame...
        if beach_6.status == STARTED:
            # update params
            pass
        
        # *beach_txt_6* updates
        
        # if beach_txt_6 is starting this frame...
        if beach_txt_6.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_6.frameNStart = frameN  # exact frame index
            beach_txt_6.tStart = t  # local t and not account for scr refresh
            beach_txt_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_6.started')
            # update status
            beach_txt_6.status = STARTED
            beach_txt_6.setAutoDraw(True)
        
        # if beach_txt_6 is active this frame...
        if beach_txt_6.status == STARTED:
            # update params
            pass
        
        # *participantpic_4* updates
        
        # if participantpic_4 is starting this frame...
        if participantpic_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_4.frameNStart = frameN  # exact frame index
            participantpic_4.tStart = t  # local t and not account for scr refresh
            participantpic_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_4.started')
            # update status
            participantpic_4.status = STARTED
            participantpic_4.setAutoDraw(True)
        
        # if participantpic_4 is active this frame...
        if participantpic_4.status == STARTED:
            # update params
            pass
        
        # *notseen2* updates
        
        # if notseen2 is starting this frame...
        if notseen2.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            notseen2.frameNStart = frameN  # exact frame index
            notseen2.tStart = t  # local t and not account for scr refresh
            notseen2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(notseen2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'notseen2.started')
            # update status
            notseen2.status = STARTED
            notseen2.setAutoDraw(True)
        
        # if notseen2 is active this frame...
        if notseen2.status == STARTED:
            # update params
            pass
        
        # *key_resp_13* updates
        waitOnFlip = False
        
        # if key_resp_13 is starting this frame...
        if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_13.frameNStart = frameN  # exact frame index
            key_resp_13.tStart = t  # local t and not account for scr refresh
            key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_13.started')
            # update status
            key_resp_13.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_13.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_13.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_13_allKeys.extend(theseKeys)
            if len(_key_resp_13_allKeys):
                key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                key_resp_13.duration = _key_resp_13_allKeys[-1].duration
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
        for thisComponent in topnsp2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnsp2" ---
    for thisComponent in topnsp2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnsp2.stopped', globalClock.getTime())
    # check responses
    if key_resp_13.keys in ['', [], None]:  # No response was made
        key_resp_13.keys = None
    thisExp.addData('key_resp_13.keys',key_resp_13.keys)
    if key_resp_13.keys != None:  # we had a response
        thisExp.addData('key_resp_13.rt', key_resp_13.rt)
        thisExp.addData('key_resp_13.duration', key_resp_13.duration)
    thisExp.nextEntry()
    # the Routine "topnsp2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "wait_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('wait_3.started', globalClock.getTime())
    # keep track of which components have finished
    wait_3Components = [polygon_3, text_67]
    for thisComponent in wait_3Components:
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
    
    # --- Run Routine "wait_3" ---
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
        
        # *polygon_3* updates
        
        # if polygon_3 is starting this frame...
        if polygon_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3.frameNStart = frameN  # exact frame index
            polygon_3.tStart = t  # local t and not account for scr refresh
            polygon_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_3.started')
            # update status
            polygon_3.status = STARTED
            polygon_3.setAutoDraw(True)
        
        # if polygon_3 is active this frame...
        if polygon_3.status == STARTED:
            # update params
            pass
        
        # *text_67* updates
        
        # if text_67 is starting this frame...
        if text_67.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_67.frameNStart = frameN  # exact frame index
            text_67.tStart = t  # local t and not account for scr refresh
            text_67.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_67, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_67.started')
            # update status
            text_67.status = STARTED
            text_67.setAutoDraw(True)
        
        # if text_67 is active this frame...
        if text_67.status == STARTED:
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
        for thisComponent in wait_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "wait_3" ---
    for thisComponent in wait_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('wait_3.stopped', globalClock.getTime())
    # the Routine "wait_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ChoiceRoutine_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ChoiceRoutine_4.started', globalClock.getTime())
    key_resp_15.keys = []
    key_resp_15.rt = []
    _key_resp_15_allKeys = []
    # keep track of which components have finished
    ChoiceRoutine_4Components = [Who_4, text_37, text_48, Player1demo_4, Player2demo_4, cooking_2, text_54, movies_2, text_55, dancing_2, text_56, fashion_4, text_57, movie_6, text_58, writing_3, text_59, key_resp_15]
    for thisComponent in ChoiceRoutine_4Components:
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
    
    # --- Run Routine "ChoiceRoutine_4" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Who_4* updates
        
        # if Who_4 is starting this frame...
        if Who_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Who_4.frameNStart = frameN  # exact frame index
            Who_4.tStart = t  # local t and not account for scr refresh
            Who_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Who_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Who_4.started')
            # update status
            Who_4.status = STARTED
            Who_4.setAutoDraw(True)
        
        # if Who_4 is active this frame...
        if Who_4.status == STARTED:
            # update params
            pass
        
        # *text_37* updates
        
        # if text_37 is starting this frame...
        if text_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_37.frameNStart = frameN  # exact frame index
            text_37.tStart = t  # local t and not account for scr refresh
            text_37.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_37, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_37.started')
            # update status
            text_37.status = STARTED
            text_37.setAutoDraw(True)
        
        # if text_37 is active this frame...
        if text_37.status == STARTED:
            # update params
            pass
        
        # *text_48* updates
        
        # if text_48 is starting this frame...
        if text_48.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_48.frameNStart = frameN  # exact frame index
            text_48.tStart = t  # local t and not account for scr refresh
            text_48.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_48, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_48.started')
            # update status
            text_48.status = STARTED
            text_48.setAutoDraw(True)
        
        # if text_48 is active this frame...
        if text_48.status == STARTED:
            # update params
            pass
        
        # *Player1demo_4* updates
        
        # if Player1demo_4 is starting this frame...
        if Player1demo_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1demo_4.frameNStart = frameN  # exact frame index
            Player1demo_4.tStart = t  # local t and not account for scr refresh
            Player1demo_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1demo_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1demo_4.started')
            # update status
            Player1demo_4.status = STARTED
            Player1demo_4.setAutoDraw(True)
        
        # if Player1demo_4 is active this frame...
        if Player1demo_4.status == STARTED:
            # update params
            pass
        
        # *Player2demo_4* updates
        
        # if Player2demo_4 is starting this frame...
        if Player2demo_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2demo_4.frameNStart = frameN  # exact frame index
            Player2demo_4.tStart = t  # local t and not account for scr refresh
            Player2demo_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2demo_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2demo_4.started')
            # update status
            Player2demo_4.status = STARTED
            Player2demo_4.setAutoDraw(True)
        
        # if Player2demo_4 is active this frame...
        if Player2demo_4.status == STARTED:
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
        
        # *text_54* updates
        
        # if text_54 is starting this frame...
        if text_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_54.frameNStart = frameN  # exact frame index
            text_54.tStart = t  # local t and not account for scr refresh
            text_54.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_54.started')
            # update status
            text_54.status = STARTED
            text_54.setAutoDraw(True)
        
        # if text_54 is active this frame...
        if text_54.status == STARTED:
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
        
        # *text_55* updates
        
        # if text_55 is starting this frame...
        if text_55.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_55.frameNStart = frameN  # exact frame index
            text_55.tStart = t  # local t and not account for scr refresh
            text_55.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_55.started')
            # update status
            text_55.status = STARTED
            text_55.setAutoDraw(True)
        
        # if text_55 is active this frame...
        if text_55.status == STARTED:
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
        
        # *text_56* updates
        
        # if text_56 is starting this frame...
        if text_56.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_56.frameNStart = frameN  # exact frame index
            text_56.tStart = t  # local t and not account for scr refresh
            text_56.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_56, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_56.started')
            # update status
            text_56.status = STARTED
            text_56.setAutoDraw(True)
        
        # if text_56 is active this frame...
        if text_56.status == STARTED:
            # update params
            pass
        
        # *fashion_4* updates
        
        # if fashion_4 is starting this frame...
        if fashion_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fashion_4.frameNStart = frameN  # exact frame index
            fashion_4.tStart = t  # local t and not account for scr refresh
            fashion_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fashion_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fashion_4.started')
            # update status
            fashion_4.status = STARTED
            fashion_4.setAutoDraw(True)
        
        # if fashion_4 is active this frame...
        if fashion_4.status == STARTED:
            # update params
            pass
        
        # *text_57* updates
        
        # if text_57 is starting this frame...
        if text_57.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_57.frameNStart = frameN  # exact frame index
            text_57.tStart = t  # local t and not account for scr refresh
            text_57.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_57, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_57.started')
            # update status
            text_57.status = STARTED
            text_57.setAutoDraw(True)
        
        # if text_57 is active this frame...
        if text_57.status == STARTED:
            # update params
            pass
        
        # *movie_6* updates
        
        # if movie_6 is starting this frame...
        if movie_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_6.frameNStart = frameN  # exact frame index
            movie_6.tStart = t  # local t and not account for scr refresh
            movie_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_6.started')
            # update status
            movie_6.status = STARTED
            movie_6.setAutoDraw(True)
        
        # if movie_6 is active this frame...
        if movie_6.status == STARTED:
            # update params
            pass
        
        # *text_58* updates
        
        # if text_58 is starting this frame...
        if text_58.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_58.frameNStart = frameN  # exact frame index
            text_58.tStart = t  # local t and not account for scr refresh
            text_58.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_58, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_58.started')
            # update status
            text_58.status = STARTED
            text_58.setAutoDraw(True)
        
        # if text_58 is active this frame...
        if text_58.status == STARTED:
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
        
        # *text_59* updates
        
        # if text_59 is starting this frame...
        if text_59.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_59.frameNStart = frameN  # exact frame index
            text_59.tStart = t  # local t and not account for scr refresh
            text_59.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_59, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_59.started')
            # update status
            text_59.status = STARTED
            text_59.setAutoDraw(True)
        
        # if text_59 is active this frame...
        if text_59.status == STARTED:
            # update params
            pass
        
        # *key_resp_15* updates
        waitOnFlip = False
        
        # if key_resp_15 is starting this frame...
        if key_resp_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_15.frameNStart = frameN  # exact frame index
            key_resp_15.tStart = t  # local t and not account for scr refresh
            key_resp_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_15.started')
            # update status
            key_resp_15.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_15.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_15.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_15.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_15.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_15_allKeys.extend(theseKeys)
            if len(_key_resp_15_allKeys):
                key_resp_15.keys = _key_resp_15_allKeys[-1].name  # just the last key pressed
                key_resp_15.rt = _key_resp_15_allKeys[-1].rt
                key_resp_15.duration = _key_resp_15_allKeys[-1].duration
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
        for thisComponent in ChoiceRoutine_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ChoiceRoutine_4" ---
    for thisComponent in ChoiceRoutine_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ChoiceRoutine_4.stopped', globalClock.getTime())
    # check responses
    if key_resp_15.keys in ['', [], None]:  # No response was made
        key_resp_15.keys = None
    thisExp.addData('key_resp_15.keys',key_resp_15.keys)
    if key_resp_15.keys != None:  # we had a response
        thisExp.addData('key_resp_15.rt', key_resp_15.rt)
        thisExp.addData('key_resp_15.duration', key_resp_15.duration)
    thisExp.nextEntry()
    # the Routine "ChoiceRoutine_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "player1_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('player1_4.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_13
    if key_resp.keys != 'n':
        continueRoutine = False
    key_resp_16.keys = []
    key_resp_16.rt = []
    _key_resp_16_allKeys = []
    # keep track of which components have finished
    player1_4Components = [polygon_16, Player1_9, cook_3, var_11, movie_7, var_15, dance_3, text_60, p1_10, yes1_7, key_resp_16]
    for thisComponent in player1_4Components:
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
    
    # --- Run Routine "player1_4" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_16* updates
        
        # if polygon_16 is starting this frame...
        if polygon_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_16.frameNStart = frameN  # exact frame index
            polygon_16.tStart = t  # local t and not account for scr refresh
            polygon_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_16.started')
            # update status
            polygon_16.status = STARTED
            polygon_16.setAutoDraw(True)
        
        # if polygon_16 is active this frame...
        if polygon_16.status == STARTED:
            # update params
            pass
        
        # *Player1_9* updates
        
        # if Player1_9 is starting this frame...
        if Player1_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_9.frameNStart = frameN  # exact frame index
            Player1_9.tStart = t  # local t and not account for scr refresh
            Player1_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_9.started')
            # update status
            Player1_9.status = STARTED
            Player1_9.setAutoDraw(True)
        
        # if Player1_9 is active this frame...
        if Player1_9.status == STARTED:
            # update params
            pass
        
        # *cook_3* updates
        
        # if cook_3 is starting this frame...
        if cook_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cook_3.frameNStart = frameN  # exact frame index
            cook_3.tStart = t  # local t and not account for scr refresh
            cook_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cook_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cook_3.started')
            # update status
            cook_3.status = STARTED
            cook_3.setAutoDraw(True)
        
        # if cook_3 is active this frame...
        if cook_3.status == STARTED:
            # update params
            pass
        
        # *var_11* updates
        
        # if var_11 is starting this frame...
        if var_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_11.frameNStart = frameN  # exact frame index
            var_11.tStart = t  # local t and not account for scr refresh
            var_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_11.started')
            # update status
            var_11.status = STARTED
            var_11.setAutoDraw(True)
        
        # if var_11 is active this frame...
        if var_11.status == STARTED:
            # update params
            pass
        
        # *movie_7* updates
        
        # if movie_7 is starting this frame...
        if movie_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_7.frameNStart = frameN  # exact frame index
            movie_7.tStart = t  # local t and not account for scr refresh
            movie_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_7.started')
            # update status
            movie_7.status = STARTED
            movie_7.setAutoDraw(True)
        
        # if movie_7 is active this frame...
        if movie_7.status == STARTED:
            # update params
            pass
        
        # *var_15* updates
        
        # if var_15 is starting this frame...
        if var_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_15.frameNStart = frameN  # exact frame index
            var_15.tStart = t  # local t and not account for scr refresh
            var_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_15.started')
            # update status
            var_15.status = STARTED
            var_15.setAutoDraw(True)
        
        # if var_15 is active this frame...
        if var_15.status == STARTED:
            # update params
            pass
        
        # *dance_3* updates
        
        # if dance_3 is starting this frame...
        if dance_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dance_3.frameNStart = frameN  # exact frame index
            dance_3.tStart = t  # local t and not account for scr refresh
            dance_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dance_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'dance_3.started')
            # update status
            dance_3.status = STARTED
            dance_3.setAutoDraw(True)
        
        # if dance_3 is active this frame...
        if dance_3.status == STARTED:
            # update params
            pass
        
        # *text_60* updates
        
        # if text_60 is starting this frame...
        if text_60.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_60.frameNStart = frameN  # exact frame index
            text_60.tStart = t  # local t and not account for scr refresh
            text_60.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_60, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_60.started')
            # update status
            text_60.status = STARTED
            text_60.setAutoDraw(True)
        
        # if text_60 is active this frame...
        if text_60.status == STARTED:
            # update params
            pass
        
        # *p1_10* updates
        
        # if p1_10 is starting this frame...
        if p1_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_10.frameNStart = frameN  # exact frame index
            p1_10.tStart = t  # local t and not account for scr refresh
            p1_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_10.started')
            # update status
            p1_10.status = STARTED
            p1_10.setAutoDraw(True)
        
        # if p1_10 is active this frame...
        if p1_10.status == STARTED:
            # update params
            pass
        
        # *yes1_7* updates
        
        # if yes1_7 is starting this frame...
        if yes1_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_7.frameNStart = frameN  # exact frame index
            yes1_7.tStart = t  # local t and not account for scr refresh
            yes1_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_7.started')
            # update status
            yes1_7.status = STARTED
            yes1_7.setAutoDraw(True)
        
        # if yes1_7 is active this frame...
        if yes1_7.status == STARTED:
            # update params
            pass
        
        # *key_resp_16* updates
        waitOnFlip = False
        
        # if key_resp_16 is starting this frame...
        if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_16.frameNStart = frameN  # exact frame index
            key_resp_16.tStart = t  # local t and not account for scr refresh
            key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_16.started')
            # update status
            key_resp_16.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_16.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_16.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_16_allKeys.extend(theseKeys)
            if len(_key_resp_16_allKeys):
                key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
                key_resp_16.rt = _key_resp_16_allKeys[-1].rt
                key_resp_16.duration = _key_resp_16_allKeys[-1].duration
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
        for thisComponent in player1_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "player1_4" ---
    for thisComponent in player1_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('player1_4.stopped', globalClock.getTime())
    # check responses
    if key_resp_16.keys in ['', [], None]:  # No response was made
        key_resp_16.keys = None
    thisExp.addData('key_resp_16.keys',key_resp_16.keys)
    if key_resp_16.keys != None:  # we had a response
        thisExp.addData('key_resp_16.rt', key_resp_16.rt)
        thisExp.addData('key_resp_16.duration', key_resp_16.duration)
    thisExp.nextEntry()
    # the Routine "player1_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topyesp1_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topyesp1_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_14
    if key_resp.keys != 'n':
        continueRoutine = False
    key_resp_17.keys = []
    key_resp_17.rt = []
    _key_resp_17_allKeys = []
    # keep track of which components have finished
    topyesp1_2Components = [polygon_17, Player1_10, cook_4, var_16, movie_8, var_17, dance_4, text_61, p1_11, you_7, chatting_7, chat_7, sports_7, sport_7, beach_7, beach_txt_7, participantpic_7, yess_2, key_resp_17]
    for thisComponent in topyesp1_2Components:
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
    
    # --- Run Routine "topyesp1_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_17* updates
        
        # if polygon_17 is starting this frame...
        if polygon_17.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_17.frameNStart = frameN  # exact frame index
            polygon_17.tStart = t  # local t and not account for scr refresh
            polygon_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_17.started')
            # update status
            polygon_17.status = STARTED
            polygon_17.setAutoDraw(True)
        
        # if polygon_17 is active this frame...
        if polygon_17.status == STARTED:
            # update params
            pass
        
        # *Player1_10* updates
        
        # if Player1_10 is starting this frame...
        if Player1_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_10.frameNStart = frameN  # exact frame index
            Player1_10.tStart = t  # local t and not account for scr refresh
            Player1_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_10.started')
            # update status
            Player1_10.status = STARTED
            Player1_10.setAutoDraw(True)
        
        # if Player1_10 is active this frame...
        if Player1_10.status == STARTED:
            # update params
            pass
        
        # *cook_4* updates
        
        # if cook_4 is starting this frame...
        if cook_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cook_4.frameNStart = frameN  # exact frame index
            cook_4.tStart = t  # local t and not account for scr refresh
            cook_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cook_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cook_4.started')
            # update status
            cook_4.status = STARTED
            cook_4.setAutoDraw(True)
        
        # if cook_4 is active this frame...
        if cook_4.status == STARTED:
            # update params
            pass
        
        # *var_16* updates
        
        # if var_16 is starting this frame...
        if var_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_16.frameNStart = frameN  # exact frame index
            var_16.tStart = t  # local t and not account for scr refresh
            var_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_16.started')
            # update status
            var_16.status = STARTED
            var_16.setAutoDraw(True)
        
        # if var_16 is active this frame...
        if var_16.status == STARTED:
            # update params
            pass
        
        # *movie_8* updates
        
        # if movie_8 is starting this frame...
        if movie_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_8.frameNStart = frameN  # exact frame index
            movie_8.tStart = t  # local t and not account for scr refresh
            movie_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_8.started')
            # update status
            movie_8.status = STARTED
            movie_8.setAutoDraw(True)
        
        # if movie_8 is active this frame...
        if movie_8.status == STARTED:
            # update params
            pass
        
        # *var_17* updates
        
        # if var_17 is starting this frame...
        if var_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_17.frameNStart = frameN  # exact frame index
            var_17.tStart = t  # local t and not account for scr refresh
            var_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_17.started')
            # update status
            var_17.status = STARTED
            var_17.setAutoDraw(True)
        
        # if var_17 is active this frame...
        if var_17.status == STARTED:
            # update params
            pass
        
        # *dance_4* updates
        
        # if dance_4 is starting this frame...
        if dance_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dance_4.frameNStart = frameN  # exact frame index
            dance_4.tStart = t  # local t and not account for scr refresh
            dance_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dance_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'dance_4.started')
            # update status
            dance_4.status = STARTED
            dance_4.setAutoDraw(True)
        
        # if dance_4 is active this frame...
        if dance_4.status == STARTED:
            # update params
            pass
        
        # *text_61* updates
        
        # if text_61 is starting this frame...
        if text_61.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_61.frameNStart = frameN  # exact frame index
            text_61.tStart = t  # local t and not account for scr refresh
            text_61.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_61, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_61.started')
            # update status
            text_61.status = STARTED
            text_61.setAutoDraw(True)
        
        # if text_61 is active this frame...
        if text_61.status == STARTED:
            # update params
            pass
        
        # *p1_11* updates
        
        # if p1_11 is starting this frame...
        if p1_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_11.frameNStart = frameN  # exact frame index
            p1_11.tStart = t  # local t and not account for scr refresh
            p1_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_11.started')
            # update status
            p1_11.status = STARTED
            p1_11.setAutoDraw(True)
        
        # if p1_11 is active this frame...
        if p1_11.status == STARTED:
            # update params
            pass
        
        # *you_7* updates
        
        # if you_7 is starting this frame...
        if you_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_7.frameNStart = frameN  # exact frame index
            you_7.tStart = t  # local t and not account for scr refresh
            you_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_7.started')
            # update status
            you_7.status = STARTED
            you_7.setAutoDraw(True)
        
        # if you_7 is active this frame...
        if you_7.status == STARTED:
            # update params
            pass
        
        # *chatting_7* updates
        
        # if chatting_7 is starting this frame...
        if chatting_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_7.frameNStart = frameN  # exact frame index
            chatting_7.tStart = t  # local t and not account for scr refresh
            chatting_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_7.started')
            # update status
            chatting_7.status = STARTED
            chatting_7.setAutoDraw(True)
        
        # if chatting_7 is active this frame...
        if chatting_7.status == STARTED:
            # update params
            pass
        
        # *chat_7* updates
        
        # if chat_7 is starting this frame...
        if chat_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_7.frameNStart = frameN  # exact frame index
            chat_7.tStart = t  # local t and not account for scr refresh
            chat_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_7.started')
            # update status
            chat_7.status = STARTED
            chat_7.setAutoDraw(True)
        
        # if chat_7 is active this frame...
        if chat_7.status == STARTED:
            # update params
            pass
        
        # *sports_7* updates
        
        # if sports_7 is starting this frame...
        if sports_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_7.frameNStart = frameN  # exact frame index
            sports_7.tStart = t  # local t and not account for scr refresh
            sports_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_7.started')
            # update status
            sports_7.status = STARTED
            sports_7.setAutoDraw(True)
        
        # if sports_7 is active this frame...
        if sports_7.status == STARTED:
            # update params
            pass
        
        # *sport_7* updates
        
        # if sport_7 is starting this frame...
        if sport_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_7.frameNStart = frameN  # exact frame index
            sport_7.tStart = t  # local t and not account for scr refresh
            sport_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_7.started')
            # update status
            sport_7.status = STARTED
            sport_7.setAutoDraw(True)
        
        # if sport_7 is active this frame...
        if sport_7.status == STARTED:
            # update params
            pass
        
        # *beach_7* updates
        
        # if beach_7 is starting this frame...
        if beach_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_7.frameNStart = frameN  # exact frame index
            beach_7.tStart = t  # local t and not account for scr refresh
            beach_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_7.started')
            # update status
            beach_7.status = STARTED
            beach_7.setAutoDraw(True)
        
        # if beach_7 is active this frame...
        if beach_7.status == STARTED:
            # update params
            pass
        
        # *beach_txt_7* updates
        
        # if beach_txt_7 is starting this frame...
        if beach_txt_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_7.frameNStart = frameN  # exact frame index
            beach_txt_7.tStart = t  # local t and not account for scr refresh
            beach_txt_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_7.started')
            # update status
            beach_txt_7.status = STARTED
            beach_txt_7.setAutoDraw(True)
        
        # if beach_txt_7 is active this frame...
        if beach_txt_7.status == STARTED:
            # update params
            pass
        
        # *participantpic_7* updates
        
        # if participantpic_7 is starting this frame...
        if participantpic_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_7.frameNStart = frameN  # exact frame index
            participantpic_7.tStart = t  # local t and not account for scr refresh
            participantpic_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_7.started')
            # update status
            participantpic_7.status = STARTED
            participantpic_7.setAutoDraw(True)
        
        # if participantpic_7 is active this frame...
        if participantpic_7.status == STARTED:
            # update params
            pass
        
        # *yess_2* updates
        
        # if yess_2 is starting this frame...
        if yess_2.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            yess_2.frameNStart = frameN  # exact frame index
            yess_2.tStart = t  # local t and not account for scr refresh
            yess_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yess_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yess_2.started')
            # update status
            yess_2.status = STARTED
            yess_2.setAutoDraw(True)
        
        # if yess_2 is active this frame...
        if yess_2.status == STARTED:
            # update params
            pass
        
        # *key_resp_17* updates
        waitOnFlip = False
        
        # if key_resp_17 is starting this frame...
        if key_resp_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_17.frameNStart = frameN  # exact frame index
            key_resp_17.tStart = t  # local t and not account for scr refresh
            key_resp_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_17.started')
            # update status
            key_resp_17.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_17.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_17.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_17.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_17.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_17_allKeys.extend(theseKeys)
            if len(_key_resp_17_allKeys):
                key_resp_17.keys = _key_resp_17_allKeys[-1].name  # just the last key pressed
                key_resp_17.rt = _key_resp_17_allKeys[-1].rt
                key_resp_17.duration = _key_resp_17_allKeys[-1].duration
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
        for thisComponent in topyesp1_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topyesp1_2" ---
    for thisComponent in topyesp1_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topyesp1_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_17.keys in ['', [], None]:  # No response was made
        key_resp_17.keys = None
    thisExp.addData('key_resp_17.keys',key_resp_17.keys)
    if key_resp_17.keys != None:  # we had a response
        thisExp.addData('key_resp_17.rt', key_resp_17.rt)
        thisExp.addData('key_resp_17.duration', key_resp_17.duration)
    thisExp.nextEntry()
    # the Routine "topyesp1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Player2_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Player2_3.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_15
    if key_resp.keys != 'y':
        continueRoutine = False
    key_resp_18.keys = []
    key_resp_18.rt = []
    _key_resp_18_allKeys = []
    # keep track of which components have finished
    Player2_3Components = [polygon_18, player_2, fashion_5, text_62, movie_9, text_63, writing_4, text_64, yes1_8, text_65, key_resp_18]
    for thisComponent in Player2_3Components:
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
    
    # --- Run Routine "Player2_3" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_18* updates
        
        # if polygon_18 is starting this frame...
        if polygon_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_18.frameNStart = frameN  # exact frame index
            polygon_18.tStart = t  # local t and not account for scr refresh
            polygon_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_18.started')
            # update status
            polygon_18.status = STARTED
            polygon_18.setAutoDraw(True)
        
        # if polygon_18 is active this frame...
        if polygon_18.status == STARTED:
            # update params
            pass
        
        # *player_2* updates
        
        # if player_2 is starting this frame...
        if player_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player_2.frameNStart = frameN  # exact frame index
            player_2.tStart = t  # local t and not account for scr refresh
            player_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'player_2.started')
            # update status
            player_2.status = STARTED
            player_2.setAutoDraw(True)
        
        # if player_2 is active this frame...
        if player_2.status == STARTED:
            # update params
            pass
        
        # *fashion_5* updates
        
        # if fashion_5 is starting this frame...
        if fashion_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fashion_5.frameNStart = frameN  # exact frame index
            fashion_5.tStart = t  # local t and not account for scr refresh
            fashion_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fashion_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fashion_5.started')
            # update status
            fashion_5.status = STARTED
            fashion_5.setAutoDraw(True)
        
        # if fashion_5 is active this frame...
        if fashion_5.status == STARTED:
            # update params
            pass
        
        # *text_62* updates
        
        # if text_62 is starting this frame...
        if text_62.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_62.frameNStart = frameN  # exact frame index
            text_62.tStart = t  # local t and not account for scr refresh
            text_62.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_62, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_62.started')
            # update status
            text_62.status = STARTED
            text_62.setAutoDraw(True)
        
        # if text_62 is active this frame...
        if text_62.status == STARTED:
            # update params
            pass
        
        # *movie_9* updates
        
        # if movie_9 is starting this frame...
        if movie_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_9.frameNStart = frameN  # exact frame index
            movie_9.tStart = t  # local t and not account for scr refresh
            movie_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_9.started')
            # update status
            movie_9.status = STARTED
            movie_9.setAutoDraw(True)
        
        # if movie_9 is active this frame...
        if movie_9.status == STARTED:
            # update params
            pass
        
        # *text_63* updates
        
        # if text_63 is starting this frame...
        if text_63.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_63.frameNStart = frameN  # exact frame index
            text_63.tStart = t  # local t and not account for scr refresh
            text_63.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_63, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_63.started')
            # update status
            text_63.status = STARTED
            text_63.setAutoDraw(True)
        
        # if text_63 is active this frame...
        if text_63.status == STARTED:
            # update params
            pass
        
        # *writing_4* updates
        
        # if writing_4 is starting this frame...
        if writing_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writing_4.frameNStart = frameN  # exact frame index
            writing_4.tStart = t  # local t and not account for scr refresh
            writing_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writing_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writing_4.started')
            # update status
            writing_4.status = STARTED
            writing_4.setAutoDraw(True)
        
        # if writing_4 is active this frame...
        if writing_4.status == STARTED:
            # update params
            pass
        
        # *text_64* updates
        
        # if text_64 is starting this frame...
        if text_64.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_64.frameNStart = frameN  # exact frame index
            text_64.tStart = t  # local t and not account for scr refresh
            text_64.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_64, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_64.started')
            # update status
            text_64.status = STARTED
            text_64.setAutoDraw(True)
        
        # if text_64 is active this frame...
        if text_64.status == STARTED:
            # update params
            pass
        
        # *yes1_8* updates
        
        # if yes1_8 is starting this frame...
        if yes1_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_8.frameNStart = frameN  # exact frame index
            yes1_8.tStart = t  # local t and not account for scr refresh
            yes1_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_8.started')
            # update status
            yes1_8.status = STARTED
            yes1_8.setAutoDraw(True)
        
        # if yes1_8 is active this frame...
        if yes1_8.status == STARTED:
            # update params
            pass
        
        # *text_65* updates
        
        # if text_65 is starting this frame...
        if text_65.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_65.frameNStart = frameN  # exact frame index
            text_65.tStart = t  # local t and not account for scr refresh
            text_65.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_65, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_65.started')
            # update status
            text_65.status = STARTED
            text_65.setAutoDraw(True)
        
        # if text_65 is active this frame...
        if text_65.status == STARTED:
            # update params
            pass
        
        # *key_resp_18* updates
        waitOnFlip = False
        
        # if key_resp_18 is starting this frame...
        if key_resp_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_18.frameNStart = frameN  # exact frame index
            key_resp_18.tStart = t  # local t and not account for scr refresh
            key_resp_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_18.started')
            # update status
            key_resp_18.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_18.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_18.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_18.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_18_allKeys.extend(theseKeys)
            if len(_key_resp_18_allKeys):
                key_resp_18.keys = _key_resp_18_allKeys[-1].name  # just the last key pressed
                key_resp_18.rt = _key_resp_18_allKeys[-1].rt
                key_resp_18.duration = _key_resp_18_allKeys[-1].duration
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
        for thisComponent in Player2_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Player2_3" ---
    for thisComponent in Player2_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Player2_3.stopped', globalClock.getTime())
    # check responses
    if key_resp_18.keys in ['', [], None]:  # No response was made
        key_resp_18.keys = None
    thisExp.addData('key_resp_18.keys',key_resp_18.keys)
    if key_resp_18.keys != None:  # we had a response
        thisExp.addData('key_resp_18.rt', key_resp_18.rt)
        thisExp.addData('key_resp_18.duration', key_resp_18.duration)
    thisExp.nextEntry()
    # the Routine "Player2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topyesp2_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topyesp2_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_16
    if key_resp.keys != 'y':
        continueRoutine = False
    key_resp_19.keys = []
    key_resp_19.rt = []
    _key_resp_19_allKeys = []
    # keep track of which components have finished
    topyesp2_2Components = [polygon_19, Player2, fashion_6, var_18, movie_10, var_19, writ_2, text_66, p1_12, you_8, chatting_8, chat_8, sports_8, sport_8, beach_8, participantpic_8, beach_txt_8, yes_2, key_resp_19]
    for thisComponent in topyesp2_2Components:
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
    
    # --- Run Routine "topyesp2_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_19* updates
        
        # if polygon_19 is starting this frame...
        if polygon_19.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_19.frameNStart = frameN  # exact frame index
            polygon_19.tStart = t  # local t and not account for scr refresh
            polygon_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_19.started')
            # update status
            polygon_19.status = STARTED
            polygon_19.setAutoDraw(True)
        
        # if polygon_19 is active this frame...
        if polygon_19.status == STARTED:
            # update params
            pass
        
        # *Player2* updates
        
        # if Player2 is starting this frame...
        if Player2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2.frameNStart = frameN  # exact frame index
            Player2.tStart = t  # local t and not account for scr refresh
            Player2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2.started')
            # update status
            Player2.status = STARTED
            Player2.setAutoDraw(True)
        
        # if Player2 is active this frame...
        if Player2.status == STARTED:
            # update params
            pass
        
        # *fashion_6* updates
        
        # if fashion_6 is starting this frame...
        if fashion_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fashion_6.frameNStart = frameN  # exact frame index
            fashion_6.tStart = t  # local t and not account for scr refresh
            fashion_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fashion_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fashion_6.started')
            # update status
            fashion_6.status = STARTED
            fashion_6.setAutoDraw(True)
        
        # if fashion_6 is active this frame...
        if fashion_6.status == STARTED:
            # update params
            pass
        
        # *var_18* updates
        
        # if var_18 is starting this frame...
        if var_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_18.frameNStart = frameN  # exact frame index
            var_18.tStart = t  # local t and not account for scr refresh
            var_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_18.started')
            # update status
            var_18.status = STARTED
            var_18.setAutoDraw(True)
        
        # if var_18 is active this frame...
        if var_18.status == STARTED:
            # update params
            pass
        
        # *movie_10* updates
        
        # if movie_10 is starting this frame...
        if movie_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            movie_10.frameNStart = frameN  # exact frame index
            movie_10.tStart = t  # local t and not account for scr refresh
            movie_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(movie_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'movie_10.started')
            # update status
            movie_10.status = STARTED
            movie_10.setAutoDraw(True)
        
        # if movie_10 is active this frame...
        if movie_10.status == STARTED:
            # update params
            pass
        
        # *var_19* updates
        
        # if var_19 is starting this frame...
        if var_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_19.frameNStart = frameN  # exact frame index
            var_19.tStart = t  # local t and not account for scr refresh
            var_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_19.started')
            # update status
            var_19.status = STARTED
            var_19.setAutoDraw(True)
        
        # if var_19 is active this frame...
        if var_19.status == STARTED:
            # update params
            pass
        
        # *writ_2* updates
        
        # if writ_2 is starting this frame...
        if writ_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writ_2.frameNStart = frameN  # exact frame index
            writ_2.tStart = t  # local t and not account for scr refresh
            writ_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writ_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writ_2.started')
            # update status
            writ_2.status = STARTED
            writ_2.setAutoDraw(True)
        
        # if writ_2 is active this frame...
        if writ_2.status == STARTED:
            # update params
            pass
        
        # *text_66* updates
        
        # if text_66 is starting this frame...
        if text_66.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_66.frameNStart = frameN  # exact frame index
            text_66.tStart = t  # local t and not account for scr refresh
            text_66.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_66, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_66.started')
            # update status
            text_66.status = STARTED
            text_66.setAutoDraw(True)
        
        # if text_66 is active this frame...
        if text_66.status == STARTED:
            # update params
            pass
        
        # *p1_12* updates
        
        # if p1_12 is starting this frame...
        if p1_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_12.frameNStart = frameN  # exact frame index
            p1_12.tStart = t  # local t and not account for scr refresh
            p1_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_12.started')
            # update status
            p1_12.status = STARTED
            p1_12.setAutoDraw(True)
        
        # if p1_12 is active this frame...
        if p1_12.status == STARTED:
            # update params
            pass
        
        # *you_8* updates
        
        # if you_8 is starting this frame...
        if you_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_8.frameNStart = frameN  # exact frame index
            you_8.tStart = t  # local t and not account for scr refresh
            you_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_8.started')
            # update status
            you_8.status = STARTED
            you_8.setAutoDraw(True)
        
        # if you_8 is active this frame...
        if you_8.status == STARTED:
            # update params
            pass
        
        # *chatting_8* updates
        
        # if chatting_8 is starting this frame...
        if chatting_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_8.frameNStart = frameN  # exact frame index
            chatting_8.tStart = t  # local t and not account for scr refresh
            chatting_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_8.started')
            # update status
            chatting_8.status = STARTED
            chatting_8.setAutoDraw(True)
        
        # if chatting_8 is active this frame...
        if chatting_8.status == STARTED:
            # update params
            pass
        
        # *chat_8* updates
        
        # if chat_8 is starting this frame...
        if chat_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_8.frameNStart = frameN  # exact frame index
            chat_8.tStart = t  # local t and not account for scr refresh
            chat_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_8.started')
            # update status
            chat_8.status = STARTED
            chat_8.setAutoDraw(True)
        
        # if chat_8 is active this frame...
        if chat_8.status == STARTED:
            # update params
            pass
        
        # *sports_8* updates
        
        # if sports_8 is starting this frame...
        if sports_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_8.frameNStart = frameN  # exact frame index
            sports_8.tStart = t  # local t and not account for scr refresh
            sports_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_8.started')
            # update status
            sports_8.status = STARTED
            sports_8.setAutoDraw(True)
        
        # if sports_8 is active this frame...
        if sports_8.status == STARTED:
            # update params
            pass
        
        # *sport_8* updates
        
        # if sport_8 is starting this frame...
        if sport_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_8.frameNStart = frameN  # exact frame index
            sport_8.tStart = t  # local t and not account for scr refresh
            sport_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_8.started')
            # update status
            sport_8.status = STARTED
            sport_8.setAutoDraw(True)
        
        # if sport_8 is active this frame...
        if sport_8.status == STARTED:
            # update params
            pass
        
        # *beach_8* updates
        
        # if beach_8 is starting this frame...
        if beach_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_8.frameNStart = frameN  # exact frame index
            beach_8.tStart = t  # local t and not account for scr refresh
            beach_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_8.started')
            # update status
            beach_8.status = STARTED
            beach_8.setAutoDraw(True)
        
        # if beach_8 is active this frame...
        if beach_8.status == STARTED:
            # update params
            pass
        
        # *participantpic_8* updates
        
        # if participantpic_8 is starting this frame...
        if participantpic_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_8.frameNStart = frameN  # exact frame index
            participantpic_8.tStart = t  # local t and not account for scr refresh
            participantpic_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_8.started')
            # update status
            participantpic_8.status = STARTED
            participantpic_8.setAutoDraw(True)
        
        # if participantpic_8 is active this frame...
        if participantpic_8.status == STARTED:
            # update params
            pass
        
        # *beach_txt_8* updates
        
        # if beach_txt_8 is starting this frame...
        if beach_txt_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_8.frameNStart = frameN  # exact frame index
            beach_txt_8.tStart = t  # local t and not account for scr refresh
            beach_txt_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_8.started')
            # update status
            beach_txt_8.status = STARTED
            beach_txt_8.setAutoDraw(True)
        
        # if beach_txt_8 is active this frame...
        if beach_txt_8.status == STARTED:
            # update params
            pass
        
        # *yes_2* updates
        
        # if yes_2 is starting this frame...
        if yes_2.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            yes_2.frameNStart = frameN  # exact frame index
            yes_2.tStart = t  # local t and not account for scr refresh
            yes_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes_2.started')
            # update status
            yes_2.status = STARTED
            yes_2.setAutoDraw(True)
        
        # if yes_2 is active this frame...
        if yes_2.status == STARTED:
            # update params
            pass
        
        # *key_resp_19* updates
        waitOnFlip = False
        
        # if key_resp_19 is starting this frame...
        if key_resp_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_19.frameNStart = frameN  # exact frame index
            key_resp_19.tStart = t  # local t and not account for scr refresh
            key_resp_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_19.started')
            # update status
            key_resp_19.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_19.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_19.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_19.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_19.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_19_allKeys.extend(theseKeys)
            if len(_key_resp_19_allKeys):
                key_resp_19.keys = _key_resp_19_allKeys[-1].name  # just the last key pressed
                key_resp_19.rt = _key_resp_19_allKeys[-1].rt
                key_resp_19.duration = _key_resp_19_allKeys[-1].duration
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
        for thisComponent in topyesp2_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topyesp2_2" ---
    for thisComponent in topyesp2_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topyesp2_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_19.keys in ['', [], None]:  # No response was made
        key_resp_19.keys = None
    thisExp.addData('key_resp_19.keys',key_resp_19.keys)
    if key_resp_19.keys != None:  # we had a response
        thisExp.addData('key_resp_19.rt', key_resp_19.rt)
        thisExp.addData('key_resp_19.duration', key_resp_19.duration)
    thisExp.nextEntry()
    # the Routine "topyesp2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "wait_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('wait_3.started', globalClock.getTime())
    # keep track of which components have finished
    wait_3Components = [polygon_3, text_67]
    for thisComponent in wait_3Components:
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
    
    # --- Run Routine "wait_3" ---
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
        
        # *polygon_3* updates
        
        # if polygon_3 is starting this frame...
        if polygon_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3.frameNStart = frameN  # exact frame index
            polygon_3.tStart = t  # local t and not account for scr refresh
            polygon_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_3.started')
            # update status
            polygon_3.status = STARTED
            polygon_3.setAutoDraw(True)
        
        # if polygon_3 is active this frame...
        if polygon_3.status == STARTED:
            # update params
            pass
        
        # *text_67* updates
        
        # if text_67 is starting this frame...
        if text_67.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_67.frameNStart = frameN  # exact frame index
            text_67.tStart = t  # local t and not account for scr refresh
            text_67.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_67, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_67.started')
            # update status
            text_67.status = STARTED
            text_67.setAutoDraw(True)
        
        # if text_67 is active this frame...
        if text_67.status == STARTED:
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
        for thisComponent in wait_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "wait_3" ---
    for thisComponent in wait_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('wait_3.stopped', globalClock.getTime())
    # the Routine "wait_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ChoiceRoutine_5" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ChoiceRoutine_5.started', globalClock.getTime())
    friendChoice_3.keys = []
    friendChoice_3.rt = []
    _friendChoice_3_allKeys = []
    # keep track of which components have finished
    ChoiceRoutine_5Components = [Who_5, text_68, text_69, Player1demo_5, Player2demo_5, writingpic_5, text_70, instruments_5, text_71, knitting_5, text_72, beachpic_5, writingpic2_5, text_73, cycling_5, text_74, friendChoice_3, text_75]
    for thisComponent in ChoiceRoutine_5Components:
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
    
    # --- Run Routine "ChoiceRoutine_5" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Who_5* updates
        
        # if Who_5 is starting this frame...
        if Who_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Who_5.frameNStart = frameN  # exact frame index
            Who_5.tStart = t  # local t and not account for scr refresh
            Who_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Who_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Who_5.started')
            # update status
            Who_5.status = STARTED
            Who_5.setAutoDraw(True)
        
        # if Who_5 is active this frame...
        if Who_5.status == STARTED:
            # update params
            pass
        
        # *text_68* updates
        
        # if text_68 is starting this frame...
        if text_68.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_68.frameNStart = frameN  # exact frame index
            text_68.tStart = t  # local t and not account for scr refresh
            text_68.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_68, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_68.started')
            # update status
            text_68.status = STARTED
            text_68.setAutoDraw(True)
        
        # if text_68 is active this frame...
        if text_68.status == STARTED:
            # update params
            pass
        
        # *text_69* updates
        
        # if text_69 is starting this frame...
        if text_69.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_69.frameNStart = frameN  # exact frame index
            text_69.tStart = t  # local t and not account for scr refresh
            text_69.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_69, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_69.started')
            # update status
            text_69.status = STARTED
            text_69.setAutoDraw(True)
        
        # if text_69 is active this frame...
        if text_69.status == STARTED:
            # update params
            pass
        
        # *Player1demo_5* updates
        
        # if Player1demo_5 is starting this frame...
        if Player1demo_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1demo_5.frameNStart = frameN  # exact frame index
            Player1demo_5.tStart = t  # local t and not account for scr refresh
            Player1demo_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1demo_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1demo_5.started')
            # update status
            Player1demo_5.status = STARTED
            Player1demo_5.setAutoDraw(True)
        
        # if Player1demo_5 is active this frame...
        if Player1demo_5.status == STARTED:
            # update params
            pass
        
        # *Player2demo_5* updates
        
        # if Player2demo_5 is starting this frame...
        if Player2demo_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2demo_5.frameNStart = frameN  # exact frame index
            Player2demo_5.tStart = t  # local t and not account for scr refresh
            Player2demo_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2demo_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2demo_5.started')
            # update status
            Player2demo_5.status = STARTED
            Player2demo_5.setAutoDraw(True)
        
        # if Player2demo_5 is active this frame...
        if Player2demo_5.status == STARTED:
            # update params
            pass
        
        # *writingpic_5* updates
        
        # if writingpic_5 is starting this frame...
        if writingpic_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_5.frameNStart = frameN  # exact frame index
            writingpic_5.tStart = t  # local t and not account for scr refresh
            writingpic_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_5.started')
            # update status
            writingpic_5.status = STARTED
            writingpic_5.setAutoDraw(True)
        
        # if writingpic_5 is active this frame...
        if writingpic_5.status == STARTED:
            # update params
            pass
        
        # *text_70* updates
        
        # if text_70 is starting this frame...
        if text_70.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_70.frameNStart = frameN  # exact frame index
            text_70.tStart = t  # local t and not account for scr refresh
            text_70.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_70, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_70.started')
            # update status
            text_70.status = STARTED
            text_70.setAutoDraw(True)
        
        # if text_70 is active this frame...
        if text_70.status == STARTED:
            # update params
            pass
        
        # *instruments_5* updates
        
        # if instruments_5 is starting this frame...
        if instruments_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_5.frameNStart = frameN  # exact frame index
            instruments_5.tStart = t  # local t and not account for scr refresh
            instruments_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_5.started')
            # update status
            instruments_5.status = STARTED
            instruments_5.setAutoDraw(True)
        
        # if instruments_5 is active this frame...
        if instruments_5.status == STARTED:
            # update params
            pass
        
        # *text_71* updates
        
        # if text_71 is starting this frame...
        if text_71.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_71.frameNStart = frameN  # exact frame index
            text_71.tStart = t  # local t and not account for scr refresh
            text_71.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_71, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_71.started')
            # update status
            text_71.status = STARTED
            text_71.setAutoDraw(True)
        
        # if text_71 is active this frame...
        if text_71.status == STARTED:
            # update params
            pass
        
        # *knitting_5* updates
        
        # if knitting_5 is starting this frame...
        if knitting_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_5.frameNStart = frameN  # exact frame index
            knitting_5.tStart = t  # local t and not account for scr refresh
            knitting_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_5.started')
            # update status
            knitting_5.status = STARTED
            knitting_5.setAutoDraw(True)
        
        # if knitting_5 is active this frame...
        if knitting_5.status == STARTED:
            # update params
            pass
        
        # *text_72* updates
        
        # if text_72 is starting this frame...
        if text_72.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_72.frameNStart = frameN  # exact frame index
            text_72.tStart = t  # local t and not account for scr refresh
            text_72.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_72, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_72.started')
            # update status
            text_72.status = STARTED
            text_72.setAutoDraw(True)
        
        # if text_72 is active this frame...
        if text_72.status == STARTED:
            # update params
            pass
        
        # *beachpic_5* updates
        
        # if beachpic_5 is starting this frame...
        if beachpic_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_5.frameNStart = frameN  # exact frame index
            beachpic_5.tStart = t  # local t and not account for scr refresh
            beachpic_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_5.started')
            # update status
            beachpic_5.status = STARTED
            beachpic_5.setAutoDraw(True)
        
        # if beachpic_5 is active this frame...
        if beachpic_5.status == STARTED:
            # update params
            pass
        
        # *writingpic2_5* updates
        
        # if writingpic2_5 is starting this frame...
        if writingpic2_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_5.frameNStart = frameN  # exact frame index
            writingpic2_5.tStart = t  # local t and not account for scr refresh
            writingpic2_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_5.started')
            # update status
            writingpic2_5.status = STARTED
            writingpic2_5.setAutoDraw(True)
        
        # if writingpic2_5 is active this frame...
        if writingpic2_5.status == STARTED:
            # update params
            pass
        
        # *text_73* updates
        
        # if text_73 is starting this frame...
        if text_73.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_73.frameNStart = frameN  # exact frame index
            text_73.tStart = t  # local t and not account for scr refresh
            text_73.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_73, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_73.started')
            # update status
            text_73.status = STARTED
            text_73.setAutoDraw(True)
        
        # if text_73 is active this frame...
        if text_73.status == STARTED:
            # update params
            pass
        
        # *cycling_5* updates
        
        # if cycling_5 is starting this frame...
        if cycling_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_5.frameNStart = frameN  # exact frame index
            cycling_5.tStart = t  # local t and not account for scr refresh
            cycling_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_5.started')
            # update status
            cycling_5.status = STARTED
            cycling_5.setAutoDraw(True)
        
        # if cycling_5 is active this frame...
        if cycling_5.status == STARTED:
            # update params
            pass
        
        # *text_74* updates
        
        # if text_74 is starting this frame...
        if text_74.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_74.frameNStart = frameN  # exact frame index
            text_74.tStart = t  # local t and not account for scr refresh
            text_74.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_74, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_74.started')
            # update status
            text_74.status = STARTED
            text_74.setAutoDraw(True)
        
        # if text_74 is active this frame...
        if text_74.status == STARTED:
            # update params
            pass
        
        # *friendChoice_3* updates
        waitOnFlip = False
        
        # if friendChoice_3 is starting this frame...
        if friendChoice_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            friendChoice_3.frameNStart = frameN  # exact frame index
            friendChoice_3.tStart = t  # local t and not account for scr refresh
            friendChoice_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(friendChoice_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'friendChoice_3.started')
            # update status
            friendChoice_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(friendChoice_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(friendChoice_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if friendChoice_3.status == STARTED and not waitOnFlip:
            theseKeys = friendChoice_3.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _friendChoice_3_allKeys.extend(theseKeys)
            if len(_friendChoice_3_allKeys):
                friendChoice_3.keys = _friendChoice_3_allKeys[-1].name  # just the last key pressed
                friendChoice_3.rt = _friendChoice_3_allKeys[-1].rt
                friendChoice_3.duration = _friendChoice_3_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_75* updates
        
        # if text_75 is starting this frame...
        if text_75.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_75.frameNStart = frameN  # exact frame index
            text_75.tStart = t  # local t and not account for scr refresh
            text_75.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_75, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_75.started')
            # update status
            text_75.status = STARTED
            text_75.setAutoDraw(True)
        
        # if text_75 is active this frame...
        if text_75.status == STARTED:
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
        for thisComponent in ChoiceRoutine_5Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ChoiceRoutine_5" ---
    for thisComponent in ChoiceRoutine_5Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ChoiceRoutine_5.stopped', globalClock.getTime())
    # check responses
    if friendChoice_3.keys in ['', [], None]:  # No response was made
        friendChoice_3.keys = None
    thisExp.addData('friendChoice_3.keys',friendChoice_3.keys)
    if friendChoice_3.keys != None:  # we had a response
        thisExp.addData('friendChoice_3.rt', friendChoice_3.rt)
        thisExp.addData('friendChoice_3.duration', friendChoice_3.duration)
    thisExp.nextEntry()
    # the Routine "ChoiceRoutine_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Play1_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Play1_4.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_17
    if friendChoice.keys != 'n':
        continueRoutine = False
    key_resp_20.keys = []
    key_resp_20.rt = []
    _key_resp_20_allKeys = []
    # keep track of which components have finished
    Play1_4Components = [polygon_20, p1_13, Player1_11, writingpic_6, text_76, instruments_6, text_77, knitting_6, yes1_9, text_78, key_resp_20]
    for thisComponent in Play1_4Components:
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
    
    # --- Run Routine "Play1_4" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_20* updates
        
        # if polygon_20 is starting this frame...
        if polygon_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_20.frameNStart = frameN  # exact frame index
            polygon_20.tStart = t  # local t and not account for scr refresh
            polygon_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_20.started')
            # update status
            polygon_20.status = STARTED
            polygon_20.setAutoDraw(True)
        
        # if polygon_20 is active this frame...
        if polygon_20.status == STARTED:
            # update params
            pass
        
        # *p1_13* updates
        
        # if p1_13 is starting this frame...
        if p1_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_13.frameNStart = frameN  # exact frame index
            p1_13.tStart = t  # local t and not account for scr refresh
            p1_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_13.started')
            # update status
            p1_13.status = STARTED
            p1_13.setAutoDraw(True)
        
        # if p1_13 is active this frame...
        if p1_13.status == STARTED:
            # update params
            pass
        
        # *Player1_11* updates
        
        # if Player1_11 is starting this frame...
        if Player1_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_11.frameNStart = frameN  # exact frame index
            Player1_11.tStart = t  # local t and not account for scr refresh
            Player1_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_11.started')
            # update status
            Player1_11.status = STARTED
            Player1_11.setAutoDraw(True)
        
        # if Player1_11 is active this frame...
        if Player1_11.status == STARTED:
            # update params
            pass
        
        # *writingpic_6* updates
        
        # if writingpic_6 is starting this frame...
        if writingpic_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_6.frameNStart = frameN  # exact frame index
            writingpic_6.tStart = t  # local t and not account for scr refresh
            writingpic_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_6.started')
            # update status
            writingpic_6.status = STARTED
            writingpic_6.setAutoDraw(True)
        
        # if writingpic_6 is active this frame...
        if writingpic_6.status == STARTED:
            # update params
            pass
        
        # *text_76* updates
        
        # if text_76 is starting this frame...
        if text_76.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_76.frameNStart = frameN  # exact frame index
            text_76.tStart = t  # local t and not account for scr refresh
            text_76.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_76, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_76.started')
            # update status
            text_76.status = STARTED
            text_76.setAutoDraw(True)
        
        # if text_76 is active this frame...
        if text_76.status == STARTED:
            # update params
            pass
        
        # *instruments_6* updates
        
        # if instruments_6 is starting this frame...
        if instruments_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_6.frameNStart = frameN  # exact frame index
            instruments_6.tStart = t  # local t and not account for scr refresh
            instruments_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_6.started')
            # update status
            instruments_6.status = STARTED
            instruments_6.setAutoDraw(True)
        
        # if instruments_6 is active this frame...
        if instruments_6.status == STARTED:
            # update params
            pass
        
        # *text_77* updates
        
        # if text_77 is starting this frame...
        if text_77.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_77.frameNStart = frameN  # exact frame index
            text_77.tStart = t  # local t and not account for scr refresh
            text_77.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_77, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_77.started')
            # update status
            text_77.status = STARTED
            text_77.setAutoDraw(True)
        
        # if text_77 is active this frame...
        if text_77.status == STARTED:
            # update params
            pass
        
        # *knitting_6* updates
        
        # if knitting_6 is starting this frame...
        if knitting_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_6.frameNStart = frameN  # exact frame index
            knitting_6.tStart = t  # local t and not account for scr refresh
            knitting_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_6.started')
            # update status
            knitting_6.status = STARTED
            knitting_6.setAutoDraw(True)
        
        # if knitting_6 is active this frame...
        if knitting_6.status == STARTED:
            # update params
            pass
        
        # *yes1_9* updates
        
        # if yes1_9 is starting this frame...
        if yes1_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_9.frameNStart = frameN  # exact frame index
            yes1_9.tStart = t  # local t and not account for scr refresh
            yes1_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_9.started')
            # update status
            yes1_9.status = STARTED
            yes1_9.setAutoDraw(True)
        
        # if yes1_9 is active this frame...
        if yes1_9.status == STARTED:
            # update params
            pass
        
        # *text_78* updates
        
        # if text_78 is starting this frame...
        if text_78.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_78.frameNStart = frameN  # exact frame index
            text_78.tStart = t  # local t and not account for scr refresh
            text_78.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_78, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_78.started')
            # update status
            text_78.status = STARTED
            text_78.setAutoDraw(True)
        
        # if text_78 is active this frame...
        if text_78.status == STARTED:
            # update params
            pass
        
        # *key_resp_20* updates
        waitOnFlip = False
        
        # if key_resp_20 is starting this frame...
        if key_resp_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_20.frameNStart = frameN  # exact frame index
            key_resp_20.tStart = t  # local t and not account for scr refresh
            key_resp_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_20.started')
            # update status
            key_resp_20.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_20.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_20.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_20.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_20.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_20_allKeys.extend(theseKeys)
            if len(_key_resp_20_allKeys):
                key_resp_20.keys = _key_resp_20_allKeys[-1].name  # just the last key pressed
                key_resp_20.rt = _key_resp_20_allKeys[-1].rt
                key_resp_20.duration = _key_resp_20_allKeys[-1].duration
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
        for thisComponent in Play1_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Play1_4" ---
    for thisComponent in Play1_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Play1_4.stopped', globalClock.getTime())
    # check responses
    if key_resp_20.keys in ['', [], None]:  # No response was made
        key_resp_20.keys = None
    thisExp.addData('key_resp_20.keys',key_resp_20.keys)
    if key_resp_20.keys != None:  # we had a response
        thisExp.addData('key_resp_20.rt', key_resp_20.rt)
        thisExp.addData('key_resp_20.duration', key_resp_20.duration)
    thisExp.nextEntry()
    # the Routine "Play1_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnop1_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnop1_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_18
    if friendChoice.keys != 'n':
        continueRoutine = False
    key_resp_21.keys = []
    key_resp_21.rt = []
    _key_resp_21_allKeys = []
    # keep track of which components have finished
    topnop1_2Components = [polygon_21, Player1_12, writt_2, var_20, piano_2, var_21, knittingg_2, text_79, p1_14, you_9, chatting_9, chat_9, sports_9, sport_9, beach_9, beach_txt_9, participantpic_9, no, key_resp_21]
    for thisComponent in topnop1_2Components:
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
    
    # --- Run Routine "topnop1_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_21* updates
        
        # if polygon_21 is starting this frame...
        if polygon_21.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_21.frameNStart = frameN  # exact frame index
            polygon_21.tStart = t  # local t and not account for scr refresh
            polygon_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_21.started')
            # update status
            polygon_21.status = STARTED
            polygon_21.setAutoDraw(True)
        
        # if polygon_21 is active this frame...
        if polygon_21.status == STARTED:
            # update params
            pass
        
        # *Player1_12* updates
        
        # if Player1_12 is starting this frame...
        if Player1_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_12.frameNStart = frameN  # exact frame index
            Player1_12.tStart = t  # local t and not account for scr refresh
            Player1_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_12.started')
            # update status
            Player1_12.status = STARTED
            Player1_12.setAutoDraw(True)
        
        # if Player1_12 is active this frame...
        if Player1_12.status == STARTED:
            # update params
            pass
        
        # *writt_2* updates
        
        # if writt_2 is starting this frame...
        if writt_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writt_2.frameNStart = frameN  # exact frame index
            writt_2.tStart = t  # local t and not account for scr refresh
            writt_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writt_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writt_2.started')
            # update status
            writt_2.status = STARTED
            writt_2.setAutoDraw(True)
        
        # if writt_2 is active this frame...
        if writt_2.status == STARTED:
            # update params
            pass
        
        # *var_20* updates
        
        # if var_20 is starting this frame...
        if var_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_20.frameNStart = frameN  # exact frame index
            var_20.tStart = t  # local t and not account for scr refresh
            var_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_20.started')
            # update status
            var_20.status = STARTED
            var_20.setAutoDraw(True)
        
        # if var_20 is active this frame...
        if var_20.status == STARTED:
            # update params
            pass
        
        # *piano_2* updates
        
        # if piano_2 is starting this frame...
        if piano_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            piano_2.frameNStart = frameN  # exact frame index
            piano_2.tStart = t  # local t and not account for scr refresh
            piano_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(piano_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'piano_2.started')
            # update status
            piano_2.status = STARTED
            piano_2.setAutoDraw(True)
        
        # if piano_2 is active this frame...
        if piano_2.status == STARTED:
            # update params
            pass
        
        # *var_21* updates
        
        # if var_21 is starting this frame...
        if var_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_21.frameNStart = frameN  # exact frame index
            var_21.tStart = t  # local t and not account for scr refresh
            var_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_21.started')
            # update status
            var_21.status = STARTED
            var_21.setAutoDraw(True)
        
        # if var_21 is active this frame...
        if var_21.status == STARTED:
            # update params
            pass
        
        # *knittingg_2* updates
        
        # if knittingg_2 is starting this frame...
        if knittingg_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knittingg_2.frameNStart = frameN  # exact frame index
            knittingg_2.tStart = t  # local t and not account for scr refresh
            knittingg_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knittingg_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knittingg_2.started')
            # update status
            knittingg_2.status = STARTED
            knittingg_2.setAutoDraw(True)
        
        # if knittingg_2 is active this frame...
        if knittingg_2.status == STARTED:
            # update params
            pass
        
        # *text_79* updates
        
        # if text_79 is starting this frame...
        if text_79.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_79.frameNStart = frameN  # exact frame index
            text_79.tStart = t  # local t and not account for scr refresh
            text_79.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_79, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_79.started')
            # update status
            text_79.status = STARTED
            text_79.setAutoDraw(True)
        
        # if text_79 is active this frame...
        if text_79.status == STARTED:
            # update params
            pass
        
        # *p1_14* updates
        
        # if p1_14 is starting this frame...
        if p1_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_14.frameNStart = frameN  # exact frame index
            p1_14.tStart = t  # local t and not account for scr refresh
            p1_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_14.started')
            # update status
            p1_14.status = STARTED
            p1_14.setAutoDraw(True)
        
        # if p1_14 is active this frame...
        if p1_14.status == STARTED:
            # update params
            pass
        
        # *you_9* updates
        
        # if you_9 is starting this frame...
        if you_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_9.frameNStart = frameN  # exact frame index
            you_9.tStart = t  # local t and not account for scr refresh
            you_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_9.started')
            # update status
            you_9.status = STARTED
            you_9.setAutoDraw(True)
        
        # if you_9 is active this frame...
        if you_9.status == STARTED:
            # update params
            pass
        
        # *chatting_9* updates
        
        # if chatting_9 is starting this frame...
        if chatting_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_9.frameNStart = frameN  # exact frame index
            chatting_9.tStart = t  # local t and not account for scr refresh
            chatting_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_9.started')
            # update status
            chatting_9.status = STARTED
            chatting_9.setAutoDraw(True)
        
        # if chatting_9 is active this frame...
        if chatting_9.status == STARTED:
            # update params
            pass
        
        # *chat_9* updates
        
        # if chat_9 is starting this frame...
        if chat_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_9.frameNStart = frameN  # exact frame index
            chat_9.tStart = t  # local t and not account for scr refresh
            chat_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_9.started')
            # update status
            chat_9.status = STARTED
            chat_9.setAutoDraw(True)
        
        # if chat_9 is active this frame...
        if chat_9.status == STARTED:
            # update params
            pass
        
        # *sports_9* updates
        
        # if sports_9 is starting this frame...
        if sports_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_9.frameNStart = frameN  # exact frame index
            sports_9.tStart = t  # local t and not account for scr refresh
            sports_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_9.started')
            # update status
            sports_9.status = STARTED
            sports_9.setAutoDraw(True)
        
        # if sports_9 is active this frame...
        if sports_9.status == STARTED:
            # update params
            pass
        
        # *sport_9* updates
        
        # if sport_9 is starting this frame...
        if sport_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_9.frameNStart = frameN  # exact frame index
            sport_9.tStart = t  # local t and not account for scr refresh
            sport_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_9.started')
            # update status
            sport_9.status = STARTED
            sport_9.setAutoDraw(True)
        
        # if sport_9 is active this frame...
        if sport_9.status == STARTED:
            # update params
            pass
        
        # *beach_9* updates
        
        # if beach_9 is starting this frame...
        if beach_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_9.frameNStart = frameN  # exact frame index
            beach_9.tStart = t  # local t and not account for scr refresh
            beach_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_9.started')
            # update status
            beach_9.status = STARTED
            beach_9.setAutoDraw(True)
        
        # if beach_9 is active this frame...
        if beach_9.status == STARTED:
            # update params
            pass
        
        # *beach_txt_9* updates
        
        # if beach_txt_9 is starting this frame...
        if beach_txt_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_9.frameNStart = frameN  # exact frame index
            beach_txt_9.tStart = t  # local t and not account for scr refresh
            beach_txt_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_9.started')
            # update status
            beach_txt_9.status = STARTED
            beach_txt_9.setAutoDraw(True)
        
        # if beach_txt_9 is active this frame...
        if beach_txt_9.status == STARTED:
            # update params
            pass
        
        # *participantpic_9* updates
        
        # if participantpic_9 is starting this frame...
        if participantpic_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_9.frameNStart = frameN  # exact frame index
            participantpic_9.tStart = t  # local t and not account for scr refresh
            participantpic_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_9.started')
            # update status
            participantpic_9.status = STARTED
            participantpic_9.setAutoDraw(True)
        
        # if participantpic_9 is active this frame...
        if participantpic_9.status == STARTED:
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
        
        # *key_resp_21* updates
        waitOnFlip = False
        
        # if key_resp_21 is starting this frame...
        if key_resp_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_21.frameNStart = frameN  # exact frame index
            key_resp_21.tStart = t  # local t and not account for scr refresh
            key_resp_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_21.started')
            # update status
            key_resp_21.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_21.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_21.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_21.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_21.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_21_allKeys.extend(theseKeys)
            if len(_key_resp_21_allKeys):
                key_resp_21.keys = _key_resp_21_allKeys[-1].name  # just the last key pressed
                key_resp_21.rt = _key_resp_21_allKeys[-1].rt
                key_resp_21.duration = _key_resp_21_allKeys[-1].duration
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
        for thisComponent in topnop1_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnop1_2" ---
    for thisComponent in topnop1_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnop1_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_21.keys in ['', [], None]:  # No response was made
        key_resp_21.keys = None
    thisExp.addData('key_resp_21.keys',key_resp_21.keys)
    if key_resp_21.keys != None:  # we had a response
        thisExp.addData('key_resp_21.rt', key_resp_21.rt)
        thisExp.addData('key_resp_21.duration', key_resp_21.duration)
    thisExp.nextEntry()
    # the Routine "topnop1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "play2_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('play2_4.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_19
    if friendChoice.keys != 'y':
        continueRoutine = False
    key_resp_22.keys = []
    key_resp_22.rt = []
    _key_resp_22_allKeys = []
    # keep track of which components have finished
    play2_4Components = [polygon_22, text_80, player_5, beachpic_6, text_81, writingpic2_6, text_82, cycling_6, text_83, yes1_10, key_resp_22]
    for thisComponent in play2_4Components:
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
    
    # --- Run Routine "play2_4" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_22* updates
        
        # if polygon_22 is starting this frame...
        if polygon_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_22.frameNStart = frameN  # exact frame index
            polygon_22.tStart = t  # local t and not account for scr refresh
            polygon_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_22.started')
            # update status
            polygon_22.status = STARTED
            polygon_22.setAutoDraw(True)
        
        # if polygon_22 is active this frame...
        if polygon_22.status == STARTED:
            # update params
            pass
        
        # *text_80* updates
        
        # if text_80 is starting this frame...
        if text_80.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_80.frameNStart = frameN  # exact frame index
            text_80.tStart = t  # local t and not account for scr refresh
            text_80.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_80, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_80.started')
            # update status
            text_80.status = STARTED
            text_80.setAutoDraw(True)
        
        # if text_80 is active this frame...
        if text_80.status == STARTED:
            # update params
            pass
        
        # *player_5* updates
        
        # if player_5 is starting this frame...
        if player_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player_5.frameNStart = frameN  # exact frame index
            player_5.tStart = t  # local t and not account for scr refresh
            player_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'player_5.started')
            # update status
            player_5.status = STARTED
            player_5.setAutoDraw(True)
        
        # if player_5 is active this frame...
        if player_5.status == STARTED:
            # update params
            pass
        
        # *beachpic_6* updates
        
        # if beachpic_6 is starting this frame...
        if beachpic_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_6.frameNStart = frameN  # exact frame index
            beachpic_6.tStart = t  # local t and not account for scr refresh
            beachpic_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_6.started')
            # update status
            beachpic_6.status = STARTED
            beachpic_6.setAutoDraw(True)
        
        # if beachpic_6 is active this frame...
        if beachpic_6.status == STARTED:
            # update params
            pass
        
        # *text_81* updates
        
        # if text_81 is starting this frame...
        if text_81.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_81.frameNStart = frameN  # exact frame index
            text_81.tStart = t  # local t and not account for scr refresh
            text_81.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_81, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_81.started')
            # update status
            text_81.status = STARTED
            text_81.setAutoDraw(True)
        
        # if text_81 is active this frame...
        if text_81.status == STARTED:
            # update params
            pass
        
        # *writingpic2_6* updates
        
        # if writingpic2_6 is starting this frame...
        if writingpic2_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_6.frameNStart = frameN  # exact frame index
            writingpic2_6.tStart = t  # local t and not account for scr refresh
            writingpic2_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_6.started')
            # update status
            writingpic2_6.status = STARTED
            writingpic2_6.setAutoDraw(True)
        
        # if writingpic2_6 is active this frame...
        if writingpic2_6.status == STARTED:
            # update params
            pass
        
        # *text_82* updates
        
        # if text_82 is starting this frame...
        if text_82.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_82.frameNStart = frameN  # exact frame index
            text_82.tStart = t  # local t and not account for scr refresh
            text_82.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_82, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_82.started')
            # update status
            text_82.status = STARTED
            text_82.setAutoDraw(True)
        
        # if text_82 is active this frame...
        if text_82.status == STARTED:
            # update params
            pass
        
        # *cycling_6* updates
        
        # if cycling_6 is starting this frame...
        if cycling_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_6.frameNStart = frameN  # exact frame index
            cycling_6.tStart = t  # local t and not account for scr refresh
            cycling_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_6.started')
            # update status
            cycling_6.status = STARTED
            cycling_6.setAutoDraw(True)
        
        # if cycling_6 is active this frame...
        if cycling_6.status == STARTED:
            # update params
            pass
        
        # *text_83* updates
        
        # if text_83 is starting this frame...
        if text_83.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_83.frameNStart = frameN  # exact frame index
            text_83.tStart = t  # local t and not account for scr refresh
            text_83.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_83, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_83.started')
            # update status
            text_83.status = STARTED
            text_83.setAutoDraw(True)
        
        # if text_83 is active this frame...
        if text_83.status == STARTED:
            # update params
            pass
        
        # *yes1_10* updates
        
        # if yes1_10 is starting this frame...
        if yes1_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_10.frameNStart = frameN  # exact frame index
            yes1_10.tStart = t  # local t and not account for scr refresh
            yes1_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_10.started')
            # update status
            yes1_10.status = STARTED
            yes1_10.setAutoDraw(True)
        
        # if yes1_10 is active this frame...
        if yes1_10.status == STARTED:
            # update params
            pass
        
        # *key_resp_22* updates
        waitOnFlip = False
        
        # if key_resp_22 is starting this frame...
        if key_resp_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_22.frameNStart = frameN  # exact frame index
            key_resp_22.tStart = t  # local t and not account for scr refresh
            key_resp_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_22.started')
            # update status
            key_resp_22.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_22.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_22.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_22.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_22.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_22_allKeys.extend(theseKeys)
            if len(_key_resp_22_allKeys):
                key_resp_22.keys = _key_resp_22_allKeys[-1].name  # just the last key pressed
                key_resp_22.rt = _key_resp_22_allKeys[-1].rt
                key_resp_22.duration = _key_resp_22_allKeys[-1].duration
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
        for thisComponent in play2_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "play2_4" ---
    for thisComponent in play2_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('play2_4.stopped', globalClock.getTime())
    # check responses
    if key_resp_22.keys in ['', [], None]:  # No response was made
        key_resp_22.keys = None
    thisExp.addData('key_resp_22.keys',key_resp_22.keys)
    if key_resp_22.keys != None:  # we had a response
        thisExp.addData('key_resp_22.rt', key_resp_22.rt)
        thisExp.addData('key_resp_22.duration', key_resp_22.duration)
    thisExp.nextEntry()
    # the Routine "play2_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnop2_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnop2_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_20
    if key_resp.keys != 'y':
        continueRoutine = False
    key_resp_23.keys = []
    key_resp_23.rt = []
    _key_resp_23_allKeys = []
    # keep track of which components have finished
    topnop2_2Components = [polygon_23, Player1_13, beach1_2, var_22, write_2, var_23, cycle_2, text_84, p1_15, you_10, chatting_10, chat_10, sports_10, sport_10, beach_10, beach_txt_10, participantpic_10, no_5, key_resp_23]
    for thisComponent in topnop2_2Components:
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
    
    # --- Run Routine "topnop2_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_23* updates
        
        # if polygon_23 is starting this frame...
        if polygon_23.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_23.frameNStart = frameN  # exact frame index
            polygon_23.tStart = t  # local t and not account for scr refresh
            polygon_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_23.started')
            # update status
            polygon_23.status = STARTED
            polygon_23.setAutoDraw(True)
        
        # if polygon_23 is active this frame...
        if polygon_23.status == STARTED:
            # update params
            pass
        
        # *Player1_13* updates
        
        # if Player1_13 is starting this frame...
        if Player1_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_13.frameNStart = frameN  # exact frame index
            Player1_13.tStart = t  # local t and not account for scr refresh
            Player1_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_13.started')
            # update status
            Player1_13.status = STARTED
            Player1_13.setAutoDraw(True)
        
        # if Player1_13 is active this frame...
        if Player1_13.status == STARTED:
            # update params
            pass
        
        # *beach1_2* updates
        
        # if beach1_2 is starting this frame...
        if beach1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beach1_2.frameNStart = frameN  # exact frame index
            beach1_2.tStart = t  # local t and not account for scr refresh
            beach1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach1_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach1_2.started')
            # update status
            beach1_2.status = STARTED
            beach1_2.setAutoDraw(True)
        
        # if beach1_2 is active this frame...
        if beach1_2.status == STARTED:
            # update params
            pass
        
        # *var_22* updates
        
        # if var_22 is starting this frame...
        if var_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_22.frameNStart = frameN  # exact frame index
            var_22.tStart = t  # local t and not account for scr refresh
            var_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_22.started')
            # update status
            var_22.status = STARTED
            var_22.setAutoDraw(True)
        
        # if var_22 is active this frame...
        if var_22.status == STARTED:
            # update params
            pass
        
        # *write_2* updates
        
        # if write_2 is starting this frame...
        if write_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            write_2.frameNStart = frameN  # exact frame index
            write_2.tStart = t  # local t and not account for scr refresh
            write_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(write_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'write_2.started')
            # update status
            write_2.status = STARTED
            write_2.setAutoDraw(True)
        
        # if write_2 is active this frame...
        if write_2.status == STARTED:
            # update params
            pass
        
        # *var_23* updates
        
        # if var_23 is starting this frame...
        if var_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_23.frameNStart = frameN  # exact frame index
            var_23.tStart = t  # local t and not account for scr refresh
            var_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_23.started')
            # update status
            var_23.status = STARTED
            var_23.setAutoDraw(True)
        
        # if var_23 is active this frame...
        if var_23.status == STARTED:
            # update params
            pass
        
        # *cycle_2* updates
        
        # if cycle_2 is starting this frame...
        if cycle_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycle_2.frameNStart = frameN  # exact frame index
            cycle_2.tStart = t  # local t and not account for scr refresh
            cycle_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycle_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycle_2.started')
            # update status
            cycle_2.status = STARTED
            cycle_2.setAutoDraw(True)
        
        # if cycle_2 is active this frame...
        if cycle_2.status == STARTED:
            # update params
            pass
        
        # *text_84* updates
        
        # if text_84 is starting this frame...
        if text_84.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_84.frameNStart = frameN  # exact frame index
            text_84.tStart = t  # local t and not account for scr refresh
            text_84.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_84, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_84.started')
            # update status
            text_84.status = STARTED
            text_84.setAutoDraw(True)
        
        # if text_84 is active this frame...
        if text_84.status == STARTED:
            # update params
            pass
        
        # *p1_15* updates
        
        # if p1_15 is starting this frame...
        if p1_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_15.frameNStart = frameN  # exact frame index
            p1_15.tStart = t  # local t and not account for scr refresh
            p1_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_15.started')
            # update status
            p1_15.status = STARTED
            p1_15.setAutoDraw(True)
        
        # if p1_15 is active this frame...
        if p1_15.status == STARTED:
            # update params
            pass
        
        # *you_10* updates
        
        # if you_10 is starting this frame...
        if you_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_10.frameNStart = frameN  # exact frame index
            you_10.tStart = t  # local t and not account for scr refresh
            you_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_10.started')
            # update status
            you_10.status = STARTED
            you_10.setAutoDraw(True)
        
        # if you_10 is active this frame...
        if you_10.status == STARTED:
            # update params
            pass
        
        # *chatting_10* updates
        
        # if chatting_10 is starting this frame...
        if chatting_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_10.frameNStart = frameN  # exact frame index
            chatting_10.tStart = t  # local t and not account for scr refresh
            chatting_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_10.started')
            # update status
            chatting_10.status = STARTED
            chatting_10.setAutoDraw(True)
        
        # if chatting_10 is active this frame...
        if chatting_10.status == STARTED:
            # update params
            pass
        
        # *chat_10* updates
        
        # if chat_10 is starting this frame...
        if chat_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_10.frameNStart = frameN  # exact frame index
            chat_10.tStart = t  # local t and not account for scr refresh
            chat_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_10.started')
            # update status
            chat_10.status = STARTED
            chat_10.setAutoDraw(True)
        
        # if chat_10 is active this frame...
        if chat_10.status == STARTED:
            # update params
            pass
        
        # *sports_10* updates
        
        # if sports_10 is starting this frame...
        if sports_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_10.frameNStart = frameN  # exact frame index
            sports_10.tStart = t  # local t and not account for scr refresh
            sports_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_10.started')
            # update status
            sports_10.status = STARTED
            sports_10.setAutoDraw(True)
        
        # if sports_10 is active this frame...
        if sports_10.status == STARTED:
            # update params
            pass
        
        # *sport_10* updates
        
        # if sport_10 is starting this frame...
        if sport_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_10.frameNStart = frameN  # exact frame index
            sport_10.tStart = t  # local t and not account for scr refresh
            sport_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_10.started')
            # update status
            sport_10.status = STARTED
            sport_10.setAutoDraw(True)
        
        # if sport_10 is active this frame...
        if sport_10.status == STARTED:
            # update params
            pass
        
        # *beach_10* updates
        
        # if beach_10 is starting this frame...
        if beach_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_10.frameNStart = frameN  # exact frame index
            beach_10.tStart = t  # local t and not account for scr refresh
            beach_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_10.started')
            # update status
            beach_10.status = STARTED
            beach_10.setAutoDraw(True)
        
        # if beach_10 is active this frame...
        if beach_10.status == STARTED:
            # update params
            pass
        
        # *beach_txt_10* updates
        
        # if beach_txt_10 is starting this frame...
        if beach_txt_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_10.frameNStart = frameN  # exact frame index
            beach_txt_10.tStart = t  # local t and not account for scr refresh
            beach_txt_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_10.started')
            # update status
            beach_txt_10.status = STARTED
            beach_txt_10.setAutoDraw(True)
        
        # if beach_txt_10 is active this frame...
        if beach_txt_10.status == STARTED:
            # update params
            pass
        
        # *participantpic_10* updates
        
        # if participantpic_10 is starting this frame...
        if participantpic_10.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_10.frameNStart = frameN  # exact frame index
            participantpic_10.tStart = t  # local t and not account for scr refresh
            participantpic_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_10.started')
            # update status
            participantpic_10.status = STARTED
            participantpic_10.setAutoDraw(True)
        
        # if participantpic_10 is active this frame...
        if participantpic_10.status == STARTED:
            # update params
            pass
        
        # *no_5* updates
        
        # if no_5 is starting this frame...
        if no_5.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            no_5.frameNStart = frameN  # exact frame index
            no_5.tStart = t  # local t and not account for scr refresh
            no_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(no_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'no_5.started')
            # update status
            no_5.status = STARTED
            no_5.setAutoDraw(True)
        
        # if no_5 is active this frame...
        if no_5.status == STARTED:
            # update params
            pass
        
        # *key_resp_23* updates
        waitOnFlip = False
        
        # if key_resp_23 is starting this frame...
        if key_resp_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_23.frameNStart = frameN  # exact frame index
            key_resp_23.tStart = t  # local t and not account for scr refresh
            key_resp_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_23.started')
            # update status
            key_resp_23.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_23.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_23.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_23.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_23.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_23_allKeys.extend(theseKeys)
            if len(_key_resp_23_allKeys):
                key_resp_23.keys = _key_resp_23_allKeys[-1].name  # just the last key pressed
                key_resp_23.rt = _key_resp_23_allKeys[-1].rt
                key_resp_23.duration = _key_resp_23_allKeys[-1].duration
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
        for thisComponent in topnop2_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnop2_2" ---
    for thisComponent in topnop2_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnop2_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_23.keys in ['', [], None]:  # No response was made
        key_resp_23.keys = None
    thisExp.addData('key_resp_23.keys',key_resp_23.keys)
    if key_resp_23.keys != None:  # we had a response
        thisExp.addData('key_resp_23.rt', key_resp_23.rt)
        thisExp.addData('key_resp_23.duration', key_resp_23.duration)
    thisExp.nextEntry()
    # the Routine "topnop2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "wait_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('wait_4.started', globalClock.getTime())
    # keep track of which components have finished
    wait_4Components = [polygon_24, text_85]
    for thisComponent in wait_4Components:
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
    
    # --- Run Routine "wait_4" ---
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
        
        # *polygon_24* updates
        
        # if polygon_24 is starting this frame...
        if polygon_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_24.frameNStart = frameN  # exact frame index
            polygon_24.tStart = t  # local t and not account for scr refresh
            polygon_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_24.started')
            # update status
            polygon_24.status = STARTED
            polygon_24.setAutoDraw(True)
        
        # if polygon_24 is active this frame...
        if polygon_24.status == STARTED:
            # update params
            pass
        
        # *text_85* updates
        
        # if text_85 is starting this frame...
        if text_85.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_85.frameNStart = frameN  # exact frame index
            text_85.tStart = t  # local t and not account for scr refresh
            text_85.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_85, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_85.started')
            # update status
            text_85.status = STARTED
            text_85.setAutoDraw(True)
        
        # if text_85 is active this frame...
        if text_85.status == STARTED:
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
        for thisComponent in wait_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "wait_4" ---
    for thisComponent in wait_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('wait_4.stopped', globalClock.getTime())
    # the Routine "wait_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ChoiceRoutine_6" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ChoiceRoutine_6.started', globalClock.getTime())
    friendChoice_4.keys = []
    friendChoice_4.rt = []
    _friendChoice_4_allKeys = []
    # keep track of which components have finished
    ChoiceRoutine_6Components = [Who_6, text_86, text_87, Player1demo_6, Player2demo_6, writingpic_7, text_88, instruments_7, text_89, knitting_7, text_90, beachpic_7, writingpic2_7, text_91, cycling_7, text_92, friendChoice_4, text_93]
    for thisComponent in ChoiceRoutine_6Components:
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
    
    # --- Run Routine "ChoiceRoutine_6" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Who_6* updates
        
        # if Who_6 is starting this frame...
        if Who_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Who_6.frameNStart = frameN  # exact frame index
            Who_6.tStart = t  # local t and not account for scr refresh
            Who_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Who_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Who_6.started')
            # update status
            Who_6.status = STARTED
            Who_6.setAutoDraw(True)
        
        # if Who_6 is active this frame...
        if Who_6.status == STARTED:
            # update params
            pass
        
        # *text_86* updates
        
        # if text_86 is starting this frame...
        if text_86.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_86.frameNStart = frameN  # exact frame index
            text_86.tStart = t  # local t and not account for scr refresh
            text_86.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_86, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_86.started')
            # update status
            text_86.status = STARTED
            text_86.setAutoDraw(True)
        
        # if text_86 is active this frame...
        if text_86.status == STARTED:
            # update params
            pass
        
        # *text_87* updates
        
        # if text_87 is starting this frame...
        if text_87.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_87.frameNStart = frameN  # exact frame index
            text_87.tStart = t  # local t and not account for scr refresh
            text_87.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_87, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_87.started')
            # update status
            text_87.status = STARTED
            text_87.setAutoDraw(True)
        
        # if text_87 is active this frame...
        if text_87.status == STARTED:
            # update params
            pass
        
        # *Player1demo_6* updates
        
        # if Player1demo_6 is starting this frame...
        if Player1demo_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1demo_6.frameNStart = frameN  # exact frame index
            Player1demo_6.tStart = t  # local t and not account for scr refresh
            Player1demo_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1demo_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1demo_6.started')
            # update status
            Player1demo_6.status = STARTED
            Player1demo_6.setAutoDraw(True)
        
        # if Player1demo_6 is active this frame...
        if Player1demo_6.status == STARTED:
            # update params
            pass
        
        # *Player2demo_6* updates
        
        # if Player2demo_6 is starting this frame...
        if Player2demo_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player2demo_6.frameNStart = frameN  # exact frame index
            Player2demo_6.tStart = t  # local t and not account for scr refresh
            Player2demo_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player2demo_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player2demo_6.started')
            # update status
            Player2demo_6.status = STARTED
            Player2demo_6.setAutoDraw(True)
        
        # if Player2demo_6 is active this frame...
        if Player2demo_6.status == STARTED:
            # update params
            pass
        
        # *writingpic_7* updates
        
        # if writingpic_7 is starting this frame...
        if writingpic_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_7.frameNStart = frameN  # exact frame index
            writingpic_7.tStart = t  # local t and not account for scr refresh
            writingpic_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_7.started')
            # update status
            writingpic_7.status = STARTED
            writingpic_7.setAutoDraw(True)
        
        # if writingpic_7 is active this frame...
        if writingpic_7.status == STARTED:
            # update params
            pass
        
        # *text_88* updates
        
        # if text_88 is starting this frame...
        if text_88.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_88.frameNStart = frameN  # exact frame index
            text_88.tStart = t  # local t and not account for scr refresh
            text_88.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_88, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_88.started')
            # update status
            text_88.status = STARTED
            text_88.setAutoDraw(True)
        
        # if text_88 is active this frame...
        if text_88.status == STARTED:
            # update params
            pass
        
        # *instruments_7* updates
        
        # if instruments_7 is starting this frame...
        if instruments_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_7.frameNStart = frameN  # exact frame index
            instruments_7.tStart = t  # local t and not account for scr refresh
            instruments_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_7.started')
            # update status
            instruments_7.status = STARTED
            instruments_7.setAutoDraw(True)
        
        # if instruments_7 is active this frame...
        if instruments_7.status == STARTED:
            # update params
            pass
        
        # *text_89* updates
        
        # if text_89 is starting this frame...
        if text_89.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_89.frameNStart = frameN  # exact frame index
            text_89.tStart = t  # local t and not account for scr refresh
            text_89.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_89, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_89.started')
            # update status
            text_89.status = STARTED
            text_89.setAutoDraw(True)
        
        # if text_89 is active this frame...
        if text_89.status == STARTED:
            # update params
            pass
        
        # *knitting_7* updates
        
        # if knitting_7 is starting this frame...
        if knitting_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_7.frameNStart = frameN  # exact frame index
            knitting_7.tStart = t  # local t and not account for scr refresh
            knitting_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_7.started')
            # update status
            knitting_7.status = STARTED
            knitting_7.setAutoDraw(True)
        
        # if knitting_7 is active this frame...
        if knitting_7.status == STARTED:
            # update params
            pass
        
        # *text_90* updates
        
        # if text_90 is starting this frame...
        if text_90.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_90.frameNStart = frameN  # exact frame index
            text_90.tStart = t  # local t and not account for scr refresh
            text_90.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_90, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_90.started')
            # update status
            text_90.status = STARTED
            text_90.setAutoDraw(True)
        
        # if text_90 is active this frame...
        if text_90.status == STARTED:
            # update params
            pass
        
        # *beachpic_7* updates
        
        # if beachpic_7 is starting this frame...
        if beachpic_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_7.frameNStart = frameN  # exact frame index
            beachpic_7.tStart = t  # local t and not account for scr refresh
            beachpic_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_7.started')
            # update status
            beachpic_7.status = STARTED
            beachpic_7.setAutoDraw(True)
        
        # if beachpic_7 is active this frame...
        if beachpic_7.status == STARTED:
            # update params
            pass
        
        # *writingpic2_7* updates
        
        # if writingpic2_7 is starting this frame...
        if writingpic2_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_7.frameNStart = frameN  # exact frame index
            writingpic2_7.tStart = t  # local t and not account for scr refresh
            writingpic2_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_7.started')
            # update status
            writingpic2_7.status = STARTED
            writingpic2_7.setAutoDraw(True)
        
        # if writingpic2_7 is active this frame...
        if writingpic2_7.status == STARTED:
            # update params
            pass
        
        # *text_91* updates
        
        # if text_91 is starting this frame...
        if text_91.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_91.frameNStart = frameN  # exact frame index
            text_91.tStart = t  # local t and not account for scr refresh
            text_91.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_91, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_91.started')
            # update status
            text_91.status = STARTED
            text_91.setAutoDraw(True)
        
        # if text_91 is active this frame...
        if text_91.status == STARTED:
            # update params
            pass
        
        # *cycling_7* updates
        
        # if cycling_7 is starting this frame...
        if cycling_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_7.frameNStart = frameN  # exact frame index
            cycling_7.tStart = t  # local t and not account for scr refresh
            cycling_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_7.started')
            # update status
            cycling_7.status = STARTED
            cycling_7.setAutoDraw(True)
        
        # if cycling_7 is active this frame...
        if cycling_7.status == STARTED:
            # update params
            pass
        
        # *text_92* updates
        
        # if text_92 is starting this frame...
        if text_92.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_92.frameNStart = frameN  # exact frame index
            text_92.tStart = t  # local t and not account for scr refresh
            text_92.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_92, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_92.started')
            # update status
            text_92.status = STARTED
            text_92.setAutoDraw(True)
        
        # if text_92 is active this frame...
        if text_92.status == STARTED:
            # update params
            pass
        
        # *friendChoice_4* updates
        waitOnFlip = False
        
        # if friendChoice_4 is starting this frame...
        if friendChoice_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            friendChoice_4.frameNStart = frameN  # exact frame index
            friendChoice_4.tStart = t  # local t and not account for scr refresh
            friendChoice_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(friendChoice_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'friendChoice_4.started')
            # update status
            friendChoice_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(friendChoice_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(friendChoice_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if friendChoice_4.status == STARTED and not waitOnFlip:
            theseKeys = friendChoice_4.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _friendChoice_4_allKeys.extend(theseKeys)
            if len(_friendChoice_4_allKeys):
                friendChoice_4.keys = _friendChoice_4_allKeys[-1].name  # just the last key pressed
                friendChoice_4.rt = _friendChoice_4_allKeys[-1].rt
                friendChoice_4.duration = _friendChoice_4_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_93* updates
        
        # if text_93 is starting this frame...
        if text_93.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_93.frameNStart = frameN  # exact frame index
            text_93.tStart = t  # local t and not account for scr refresh
            text_93.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_93, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_93.started')
            # update status
            text_93.status = STARTED
            text_93.setAutoDraw(True)
        
        # if text_93 is active this frame...
        if text_93.status == STARTED:
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
        for thisComponent in ChoiceRoutine_6Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ChoiceRoutine_6" ---
    for thisComponent in ChoiceRoutine_6Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ChoiceRoutine_6.stopped', globalClock.getTime())
    # check responses
    if friendChoice_4.keys in ['', [], None]:  # No response was made
        friendChoice_4.keys = None
    thisExp.addData('friendChoice_4.keys',friendChoice_4.keys)
    if friendChoice_4.keys != None:  # we had a response
        thisExp.addData('friendChoice_4.rt', friendChoice_4.rt)
        thisExp.addData('friendChoice_4.duration', friendChoice_4.duration)
    thisExp.nextEntry()
    # the Routine "ChoiceRoutine_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "player1_5" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('player1_5.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_23
    if friendChoice_2.keys != 'n':
        continueRoutine = False
    key_resp_26.keys = []
    key_resp_26.rt = []
    _key_resp_26_allKeys = []
    # keep track of which components have finished
    player1_5Components = [polygon_27, p1_18, Player1_16, writingpic_8, text_96, instruments_8, text_97, knitting_8, yes1_11, text_98, key_resp_26]
    for thisComponent in player1_5Components:
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
    
    # --- Run Routine "player1_5" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_27* updates
        
        # if polygon_27 is starting this frame...
        if polygon_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_27.frameNStart = frameN  # exact frame index
            polygon_27.tStart = t  # local t and not account for scr refresh
            polygon_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_27, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_27.started')
            # update status
            polygon_27.status = STARTED
            polygon_27.setAutoDraw(True)
        
        # if polygon_27 is active this frame...
        if polygon_27.status == STARTED:
            # update params
            pass
        
        # *p1_18* updates
        
        # if p1_18 is starting this frame...
        if p1_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_18.frameNStart = frameN  # exact frame index
            p1_18.tStart = t  # local t and not account for scr refresh
            p1_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_18.started')
            # update status
            p1_18.status = STARTED
            p1_18.setAutoDraw(True)
        
        # if p1_18 is active this frame...
        if p1_18.status == STARTED:
            # update params
            pass
        
        # *Player1_16* updates
        
        # if Player1_16 is starting this frame...
        if Player1_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_16.frameNStart = frameN  # exact frame index
            Player1_16.tStart = t  # local t and not account for scr refresh
            Player1_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_16.started')
            # update status
            Player1_16.status = STARTED
            Player1_16.setAutoDraw(True)
        
        # if Player1_16 is active this frame...
        if Player1_16.status == STARTED:
            # update params
            pass
        
        # *writingpic_8* updates
        
        # if writingpic_8 is starting this frame...
        if writingpic_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic_8.frameNStart = frameN  # exact frame index
            writingpic_8.tStart = t  # local t and not account for scr refresh
            writingpic_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic_8.started')
            # update status
            writingpic_8.status = STARTED
            writingpic_8.setAutoDraw(True)
        
        # if writingpic_8 is active this frame...
        if writingpic_8.status == STARTED:
            # update params
            pass
        
        # *text_96* updates
        
        # if text_96 is starting this frame...
        if text_96.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_96.frameNStart = frameN  # exact frame index
            text_96.tStart = t  # local t and not account for scr refresh
            text_96.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_96, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_96.started')
            # update status
            text_96.status = STARTED
            text_96.setAutoDraw(True)
        
        # if text_96 is active this frame...
        if text_96.status == STARTED:
            # update params
            pass
        
        # *instruments_8* updates
        
        # if instruments_8 is starting this frame...
        if instruments_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruments_8.frameNStart = frameN  # exact frame index
            instruments_8.tStart = t  # local t and not account for scr refresh
            instruments_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruments_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruments_8.started')
            # update status
            instruments_8.status = STARTED
            instruments_8.setAutoDraw(True)
        
        # if instruments_8 is active this frame...
        if instruments_8.status == STARTED:
            # update params
            pass
        
        # *text_97* updates
        
        # if text_97 is starting this frame...
        if text_97.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_97.frameNStart = frameN  # exact frame index
            text_97.tStart = t  # local t and not account for scr refresh
            text_97.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_97, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_97.started')
            # update status
            text_97.status = STARTED
            text_97.setAutoDraw(True)
        
        # if text_97 is active this frame...
        if text_97.status == STARTED:
            # update params
            pass
        
        # *knitting_8* updates
        
        # if knitting_8 is starting this frame...
        if knitting_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knitting_8.frameNStart = frameN  # exact frame index
            knitting_8.tStart = t  # local t and not account for scr refresh
            knitting_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knitting_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knitting_8.started')
            # update status
            knitting_8.status = STARTED
            knitting_8.setAutoDraw(True)
        
        # if knitting_8 is active this frame...
        if knitting_8.status == STARTED:
            # update params
            pass
        
        # *yes1_11* updates
        
        # if yes1_11 is starting this frame...
        if yes1_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_11.frameNStart = frameN  # exact frame index
            yes1_11.tStart = t  # local t and not account for scr refresh
            yes1_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_11.started')
            # update status
            yes1_11.status = STARTED
            yes1_11.setAutoDraw(True)
        
        # if yes1_11 is active this frame...
        if yes1_11.status == STARTED:
            # update params
            pass
        
        # *text_98* updates
        
        # if text_98 is starting this frame...
        if text_98.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_98.frameNStart = frameN  # exact frame index
            text_98.tStart = t  # local t and not account for scr refresh
            text_98.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_98, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_98.started')
            # update status
            text_98.status = STARTED
            text_98.setAutoDraw(True)
        
        # if text_98 is active this frame...
        if text_98.status == STARTED:
            # update params
            pass
        
        # *key_resp_26* updates
        waitOnFlip = False
        
        # if key_resp_26 is starting this frame...
        if key_resp_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_26.frameNStart = frameN  # exact frame index
            key_resp_26.tStart = t  # local t and not account for scr refresh
            key_resp_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_26, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_26.started')
            # update status
            key_resp_26.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_26.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_26.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_26.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_26.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_26_allKeys.extend(theseKeys)
            if len(_key_resp_26_allKeys):
                key_resp_26.keys = _key_resp_26_allKeys[-1].name  # just the last key pressed
                key_resp_26.rt = _key_resp_26_allKeys[-1].rt
                key_resp_26.duration = _key_resp_26_allKeys[-1].duration
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
        for thisComponent in player1_5Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "player1_5" ---
    for thisComponent in player1_5Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('player1_5.stopped', globalClock.getTime())
    # check responses
    if key_resp_26.keys in ['', [], None]:  # No response was made
        key_resp_26.keys = None
    thisExp.addData('key_resp_26.keys',key_resp_26.keys)
    if key_resp_26.keys != None:  # we had a response
        thisExp.addData('key_resp_26.rt', key_resp_26.rt)
        thisExp.addData('key_resp_26.duration', key_resp_26.duration)
    thisExp.nextEntry()
    # the Routine "player1_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnsp1_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnsp1_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_21
    if friendChoice_2.keys != 'n':
        continueRoutine = False
    key_resp_24.keys = []
    key_resp_24.rt = []
    _key_resp_24_allKeys = []
    # keep track of which components have finished
    topnsp1_2Components = [polygon_37, Player1_14, draw_2, wright_2, pianoo_2, var_24, knit_2, text_94, p1_16, you_11, chatting_11, chat_11, sports_11, sport_11, beach_11, beach_txt_11, participantpic_11, notseen_2, key_resp_24]
    for thisComponent in topnsp1_2Components:
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
    
    # --- Run Routine "topnsp1_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_37* updates
        
        # if polygon_37 is starting this frame...
        if polygon_37.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_37.frameNStart = frameN  # exact frame index
            polygon_37.tStart = t  # local t and not account for scr refresh
            polygon_37.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_37, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_37.started')
            # update status
            polygon_37.status = STARTED
            polygon_37.setAutoDraw(True)
        
        # if polygon_37 is active this frame...
        if polygon_37.status == STARTED:
            # update params
            pass
        
        # *Player1_14* updates
        
        # if Player1_14 is starting this frame...
        if Player1_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_14.frameNStart = frameN  # exact frame index
            Player1_14.tStart = t  # local t and not account for scr refresh
            Player1_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_14.started')
            # update status
            Player1_14.status = STARTED
            Player1_14.setAutoDraw(True)
        
        # if Player1_14 is active this frame...
        if Player1_14.status == STARTED:
            # update params
            pass
        
        # *draw_2* updates
        
        # if draw_2 is starting this frame...
        if draw_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            draw_2.frameNStart = frameN  # exact frame index
            draw_2.tStart = t  # local t and not account for scr refresh
            draw_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(draw_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'draw_2.started')
            # update status
            draw_2.status = STARTED
            draw_2.setAutoDraw(True)
        
        # if draw_2 is active this frame...
        if draw_2.status == STARTED:
            # update params
            pass
        
        # *wright_2* updates
        
        # if wright_2 is starting this frame...
        if wright_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wright_2.frameNStart = frameN  # exact frame index
            wright_2.tStart = t  # local t and not account for scr refresh
            wright_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wright_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'wright_2.started')
            # update status
            wright_2.status = STARTED
            wright_2.setAutoDraw(True)
        
        # if wright_2 is active this frame...
        if wright_2.status == STARTED:
            # update params
            pass
        
        # *pianoo_2* updates
        
        # if pianoo_2 is starting this frame...
        if pianoo_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pianoo_2.frameNStart = frameN  # exact frame index
            pianoo_2.tStart = t  # local t and not account for scr refresh
            pianoo_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pianoo_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'pianoo_2.started')
            # update status
            pianoo_2.status = STARTED
            pianoo_2.setAutoDraw(True)
        
        # if pianoo_2 is active this frame...
        if pianoo_2.status == STARTED:
            # update params
            pass
        
        # *var_24* updates
        
        # if var_24 is starting this frame...
        if var_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_24.frameNStart = frameN  # exact frame index
            var_24.tStart = t  # local t and not account for scr refresh
            var_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_24.started')
            # update status
            var_24.status = STARTED
            var_24.setAutoDraw(True)
        
        # if var_24 is active this frame...
        if var_24.status == STARTED:
            # update params
            pass
        
        # *knit_2* updates
        
        # if knit_2 is starting this frame...
        if knit_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            knit_2.frameNStart = frameN  # exact frame index
            knit_2.tStart = t  # local t and not account for scr refresh
            knit_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(knit_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'knit_2.started')
            # update status
            knit_2.status = STARTED
            knit_2.setAutoDraw(True)
        
        # if knit_2 is active this frame...
        if knit_2.status == STARTED:
            # update params
            pass
        
        # *text_94* updates
        
        # if text_94 is starting this frame...
        if text_94.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_94.frameNStart = frameN  # exact frame index
            text_94.tStart = t  # local t and not account for scr refresh
            text_94.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_94, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_94.started')
            # update status
            text_94.status = STARTED
            text_94.setAutoDraw(True)
        
        # if text_94 is active this frame...
        if text_94.status == STARTED:
            # update params
            pass
        
        # *p1_16* updates
        
        # if p1_16 is starting this frame...
        if p1_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_16.frameNStart = frameN  # exact frame index
            p1_16.tStart = t  # local t and not account for scr refresh
            p1_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_16.started')
            # update status
            p1_16.status = STARTED
            p1_16.setAutoDraw(True)
        
        # if p1_16 is active this frame...
        if p1_16.status == STARTED:
            # update params
            pass
        
        # *you_11* updates
        
        # if you_11 is starting this frame...
        if you_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_11.frameNStart = frameN  # exact frame index
            you_11.tStart = t  # local t and not account for scr refresh
            you_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_11.started')
            # update status
            you_11.status = STARTED
            you_11.setAutoDraw(True)
        
        # if you_11 is active this frame...
        if you_11.status == STARTED:
            # update params
            pass
        
        # *chatting_11* updates
        
        # if chatting_11 is starting this frame...
        if chatting_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_11.frameNStart = frameN  # exact frame index
            chatting_11.tStart = t  # local t and not account for scr refresh
            chatting_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_11.started')
            # update status
            chatting_11.status = STARTED
            chatting_11.setAutoDraw(True)
        
        # if chatting_11 is active this frame...
        if chatting_11.status == STARTED:
            # update params
            pass
        
        # *chat_11* updates
        
        # if chat_11 is starting this frame...
        if chat_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_11.frameNStart = frameN  # exact frame index
            chat_11.tStart = t  # local t and not account for scr refresh
            chat_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_11.started')
            # update status
            chat_11.status = STARTED
            chat_11.setAutoDraw(True)
        
        # if chat_11 is active this frame...
        if chat_11.status == STARTED:
            # update params
            pass
        
        # *sports_11* updates
        
        # if sports_11 is starting this frame...
        if sports_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_11.frameNStart = frameN  # exact frame index
            sports_11.tStart = t  # local t and not account for scr refresh
            sports_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_11.started')
            # update status
            sports_11.status = STARTED
            sports_11.setAutoDraw(True)
        
        # if sports_11 is active this frame...
        if sports_11.status == STARTED:
            # update params
            pass
        
        # *sport_11* updates
        
        # if sport_11 is starting this frame...
        if sport_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_11.frameNStart = frameN  # exact frame index
            sport_11.tStart = t  # local t and not account for scr refresh
            sport_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_11.started')
            # update status
            sport_11.status = STARTED
            sport_11.setAutoDraw(True)
        
        # if sport_11 is active this frame...
        if sport_11.status == STARTED:
            # update params
            pass
        
        # *beach_11* updates
        
        # if beach_11 is starting this frame...
        if beach_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_11.frameNStart = frameN  # exact frame index
            beach_11.tStart = t  # local t and not account for scr refresh
            beach_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_11.started')
            # update status
            beach_11.status = STARTED
            beach_11.setAutoDraw(True)
        
        # if beach_11 is active this frame...
        if beach_11.status == STARTED:
            # update params
            pass
        
        # *beach_txt_11* updates
        
        # if beach_txt_11 is starting this frame...
        if beach_txt_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_11.frameNStart = frameN  # exact frame index
            beach_txt_11.tStart = t  # local t and not account for scr refresh
            beach_txt_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_11.started')
            # update status
            beach_txt_11.status = STARTED
            beach_txt_11.setAutoDraw(True)
        
        # if beach_txt_11 is active this frame...
        if beach_txt_11.status == STARTED:
            # update params
            pass
        
        # *participantpic_11* updates
        
        # if participantpic_11 is starting this frame...
        if participantpic_11.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_11.frameNStart = frameN  # exact frame index
            participantpic_11.tStart = t  # local t and not account for scr refresh
            participantpic_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_11.started')
            # update status
            participantpic_11.status = STARTED
            participantpic_11.setAutoDraw(True)
        
        # if participantpic_11 is active this frame...
        if participantpic_11.status == STARTED:
            # update params
            pass
        
        # *notseen_2* updates
        
        # if notseen_2 is starting this frame...
        if notseen_2.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            notseen_2.frameNStart = frameN  # exact frame index
            notseen_2.tStart = t  # local t and not account for scr refresh
            notseen_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(notseen_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'notseen_2.started')
            # update status
            notseen_2.status = STARTED
            notseen_2.setAutoDraw(True)
        
        # if notseen_2 is active this frame...
        if notseen_2.status == STARTED:
            # update params
            pass
        
        # *key_resp_24* updates
        waitOnFlip = False
        
        # if key_resp_24 is starting this frame...
        if key_resp_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_24.frameNStart = frameN  # exact frame index
            key_resp_24.tStart = t  # local t and not account for scr refresh
            key_resp_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_24.started')
            # update status
            key_resp_24.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_24.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_24.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_24.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_24.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_24_allKeys.extend(theseKeys)
            if len(_key_resp_24_allKeys):
                key_resp_24.keys = _key_resp_24_allKeys[-1].name  # just the last key pressed
                key_resp_24.rt = _key_resp_24_allKeys[-1].rt
                key_resp_24.duration = _key_resp_24_allKeys[-1].duration
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
        for thisComponent in topnsp1_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnsp1_2" ---
    for thisComponent in topnsp1_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnsp1_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_24.keys in ['', [], None]:  # No response was made
        key_resp_24.keys = None
    thisExp.addData('key_resp_24.keys',key_resp_24.keys)
    if key_resp_24.keys != None:  # we had a response
        thisExp.addData('key_resp_24.rt', key_resp_24.rt)
        thisExp.addData('key_resp_24.duration', key_resp_24.duration)
    thisExp.nextEntry()
    # the Routine "topnsp1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "player2_5" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('player2_5.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_24
    if friendChoice_2.keys != 'y':
        continueRoutine = False
    key_resp_27.keys = []
    key_resp_27.rt = []
    _key_resp_27_allKeys = []
    # keep track of which components have finished
    player2_5Components = [polygon_28, text_99, player_6, beachpic_8, text_100, writingpic2_8, text_101, cycling_8, text_102, yes1_12, key_resp_27]
    for thisComponent in player2_5Components:
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
    
    # --- Run Routine "player2_5" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_28* updates
        
        # if polygon_28 is starting this frame...
        if polygon_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_28.frameNStart = frameN  # exact frame index
            polygon_28.tStart = t  # local t and not account for scr refresh
            polygon_28.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_28, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_28.started')
            # update status
            polygon_28.status = STARTED
            polygon_28.setAutoDraw(True)
        
        # if polygon_28 is active this frame...
        if polygon_28.status == STARTED:
            # update params
            pass
        
        # *text_99* updates
        
        # if text_99 is starting this frame...
        if text_99.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_99.frameNStart = frameN  # exact frame index
            text_99.tStart = t  # local t and not account for scr refresh
            text_99.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_99, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_99.started')
            # update status
            text_99.status = STARTED
            text_99.setAutoDraw(True)
        
        # if text_99 is active this frame...
        if text_99.status == STARTED:
            # update params
            pass
        
        # *player_6* updates
        
        # if player_6 is starting this frame...
        if player_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player_6.frameNStart = frameN  # exact frame index
            player_6.tStart = t  # local t and not account for scr refresh
            player_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'player_6.started')
            # update status
            player_6.status = STARTED
            player_6.setAutoDraw(True)
        
        # if player_6 is active this frame...
        if player_6.status == STARTED:
            # update params
            pass
        
        # *beachpic_8* updates
        
        # if beachpic_8 is starting this frame...
        if beachpic_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachpic_8.frameNStart = frameN  # exact frame index
            beachpic_8.tStart = t  # local t and not account for scr refresh
            beachpic_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachpic_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachpic_8.started')
            # update status
            beachpic_8.status = STARTED
            beachpic_8.setAutoDraw(True)
        
        # if beachpic_8 is active this frame...
        if beachpic_8.status == STARTED:
            # update params
            pass
        
        # *text_100* updates
        
        # if text_100 is starting this frame...
        if text_100.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_100.frameNStart = frameN  # exact frame index
            text_100.tStart = t  # local t and not account for scr refresh
            text_100.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_100, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_100.started')
            # update status
            text_100.status = STARTED
            text_100.setAutoDraw(True)
        
        # if text_100 is active this frame...
        if text_100.status == STARTED:
            # update params
            pass
        
        # *writingpic2_8* updates
        
        # if writingpic2_8 is starting this frame...
        if writingpic2_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            writingpic2_8.frameNStart = frameN  # exact frame index
            writingpic2_8.tStart = t  # local t and not account for scr refresh
            writingpic2_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(writingpic2_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'writingpic2_8.started')
            # update status
            writingpic2_8.status = STARTED
            writingpic2_8.setAutoDraw(True)
        
        # if writingpic2_8 is active this frame...
        if writingpic2_8.status == STARTED:
            # update params
            pass
        
        # *text_101* updates
        
        # if text_101 is starting this frame...
        if text_101.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_101.frameNStart = frameN  # exact frame index
            text_101.tStart = t  # local t and not account for scr refresh
            text_101.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_101, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_101.started')
            # update status
            text_101.status = STARTED
            text_101.setAutoDraw(True)
        
        # if text_101 is active this frame...
        if text_101.status == STARTED:
            # update params
            pass
        
        # *cycling_8* updates
        
        # if cycling_8 is starting this frame...
        if cycling_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cycling_8.frameNStart = frameN  # exact frame index
            cycling_8.tStart = t  # local t and not account for scr refresh
            cycling_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cycling_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cycling_8.started')
            # update status
            cycling_8.status = STARTED
            cycling_8.setAutoDraw(True)
        
        # if cycling_8 is active this frame...
        if cycling_8.status == STARTED:
            # update params
            pass
        
        # *text_102* updates
        
        # if text_102 is starting this frame...
        if text_102.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_102.frameNStart = frameN  # exact frame index
            text_102.tStart = t  # local t and not account for scr refresh
            text_102.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_102, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_102.started')
            # update status
            text_102.status = STARTED
            text_102.setAutoDraw(True)
        
        # if text_102 is active this frame...
        if text_102.status == STARTED:
            # update params
            pass
        
        # *yes1_12* updates
        
        # if yes1_12 is starting this frame...
        if yes1_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            yes1_12.frameNStart = frameN  # exact frame index
            yes1_12.tStart = t  # local t and not account for scr refresh
            yes1_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(yes1_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'yes1_12.started')
            # update status
            yes1_12.status = STARTED
            yes1_12.setAutoDraw(True)
        
        # if yes1_12 is active this frame...
        if yes1_12.status == STARTED:
            # update params
            pass
        
        # *key_resp_27* updates
        waitOnFlip = False
        
        # if key_resp_27 is starting this frame...
        if key_resp_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_27.frameNStart = frameN  # exact frame index
            key_resp_27.tStart = t  # local t and not account for scr refresh
            key_resp_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_27, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_27.started')
            # update status
            key_resp_27.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_27.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_27.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_27.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_27.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_27_allKeys.extend(theseKeys)
            if len(_key_resp_27_allKeys):
                key_resp_27.keys = _key_resp_27_allKeys[-1].name  # just the last key pressed
                key_resp_27.rt = _key_resp_27_allKeys[-1].rt
                key_resp_27.duration = _key_resp_27_allKeys[-1].duration
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
        for thisComponent in player2_5Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "player2_5" ---
    for thisComponent in player2_5Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('player2_5.stopped', globalClock.getTime())
    # check responses
    if key_resp_27.keys in ['', [], None]:  # No response was made
        key_resp_27.keys = None
    thisExp.addData('key_resp_27.keys',key_resp_27.keys)
    if key_resp_27.keys != None:  # we had a response
        thisExp.addData('key_resp_27.rt', key_resp_27.rt)
        thisExp.addData('key_resp_27.duration', key_resp_27.duration)
    thisExp.nextEntry()
    # the Routine "player2_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "topnsp2_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('topnsp2_2.started', globalClock.getTime())
    # Run 'Begin Routine' code from code_22
    if friendChoice_2.keys != 'y':
        continueRoutine = False
    key_resp_25.keys = []
    key_resp_25.rt = []
    _key_resp_25_allKeys = []
    # keep track of which components have finished
    topnsp2_2Components = [polygon_32, Player1_15, beachh_2, var_25, wrightt_2, var_26, cyc_2, text_95, p1_17, you_12, chatting_12, chat_12, sports_12, sport_12, beach_12, beach_txt_12, participantpic_12, notseen2_2, key_resp_25]
    for thisComponent in topnsp2_2Components:
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
    
    # --- Run Routine "topnsp2_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_32* updates
        
        # if polygon_32 is starting this frame...
        if polygon_32.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            polygon_32.frameNStart = frameN  # exact frame index
            polygon_32.tStart = t  # local t and not account for scr refresh
            polygon_32.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_32, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_32.started')
            # update status
            polygon_32.status = STARTED
            polygon_32.setAutoDraw(True)
        
        # if polygon_32 is active this frame...
        if polygon_32.status == STARTED:
            # update params
            pass
        
        # *Player1_15* updates
        
        # if Player1_15 is starting this frame...
        if Player1_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Player1_15.frameNStart = frameN  # exact frame index
            Player1_15.tStart = t  # local t and not account for scr refresh
            Player1_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Player1_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Player1_15.started')
            # update status
            Player1_15.status = STARTED
            Player1_15.setAutoDraw(True)
        
        # if Player1_15 is active this frame...
        if Player1_15.status == STARTED:
            # update params
            pass
        
        # *beachh_2* updates
        
        # if beachh_2 is starting this frame...
        if beachh_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            beachh_2.frameNStart = frameN  # exact frame index
            beachh_2.tStart = t  # local t and not account for scr refresh
            beachh_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beachh_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beachh_2.started')
            # update status
            beachh_2.status = STARTED
            beachh_2.setAutoDraw(True)
        
        # if beachh_2 is active this frame...
        if beachh_2.status == STARTED:
            # update params
            pass
        
        # *var_25* updates
        
        # if var_25 is starting this frame...
        if var_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_25.frameNStart = frameN  # exact frame index
            var_25.tStart = t  # local t and not account for scr refresh
            var_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_25, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_25.started')
            # update status
            var_25.status = STARTED
            var_25.setAutoDraw(True)
        
        # if var_25 is active this frame...
        if var_25.status == STARTED:
            # update params
            pass
        
        # *wrightt_2* updates
        
        # if wrightt_2 is starting this frame...
        if wrightt_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wrightt_2.frameNStart = frameN  # exact frame index
            wrightt_2.tStart = t  # local t and not account for scr refresh
            wrightt_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wrightt_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'wrightt_2.started')
            # update status
            wrightt_2.status = STARTED
            wrightt_2.setAutoDraw(True)
        
        # if wrightt_2 is active this frame...
        if wrightt_2.status == STARTED:
            # update params
            pass
        
        # *var_26* updates
        
        # if var_26 is starting this frame...
        if var_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            var_26.frameNStart = frameN  # exact frame index
            var_26.tStart = t  # local t and not account for scr refresh
            var_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(var_26, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'var_26.started')
            # update status
            var_26.status = STARTED
            var_26.setAutoDraw(True)
        
        # if var_26 is active this frame...
        if var_26.status == STARTED:
            # update params
            pass
        
        # *cyc_2* updates
        
        # if cyc_2 is starting this frame...
        if cyc_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cyc_2.frameNStart = frameN  # exact frame index
            cyc_2.tStart = t  # local t and not account for scr refresh
            cyc_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cyc_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'cyc_2.started')
            # update status
            cyc_2.status = STARTED
            cyc_2.setAutoDraw(True)
        
        # if cyc_2 is active this frame...
        if cyc_2.status == STARTED:
            # update params
            pass
        
        # *text_95* updates
        
        # if text_95 is starting this frame...
        if text_95.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_95.frameNStart = frameN  # exact frame index
            text_95.tStart = t  # local t and not account for scr refresh
            text_95.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_95, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_95.started')
            # update status
            text_95.status = STARTED
            text_95.setAutoDraw(True)
        
        # if text_95 is active this frame...
        if text_95.status == STARTED:
            # update params
            pass
        
        # *p1_17* updates
        
        # if p1_17 is starting this frame...
        if p1_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p1_17.frameNStart = frameN  # exact frame index
            p1_17.tStart = t  # local t and not account for scr refresh
            p1_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p1_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p1_17.started')
            # update status
            p1_17.status = STARTED
            p1_17.setAutoDraw(True)
        
        # if p1_17 is active this frame...
        if p1_17.status == STARTED:
            # update params
            pass
        
        # *you_12* updates
        
        # if you_12 is starting this frame...
        if you_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            you_12.frameNStart = frameN  # exact frame index
            you_12.tStart = t  # local t and not account for scr refresh
            you_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(you_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'you_12.started')
            # update status
            you_12.status = STARTED
            you_12.setAutoDraw(True)
        
        # if you_12 is active this frame...
        if you_12.status == STARTED:
            # update params
            pass
        
        # *chatting_12* updates
        
        # if chatting_12 is starting this frame...
        if chatting_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chatting_12.frameNStart = frameN  # exact frame index
            chatting_12.tStart = t  # local t and not account for scr refresh
            chatting_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chatting_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chatting_12.started')
            # update status
            chatting_12.status = STARTED
            chatting_12.setAutoDraw(True)
        
        # if chatting_12 is active this frame...
        if chatting_12.status == STARTED:
            # update params
            pass
        
        # *chat_12* updates
        
        # if chat_12 is starting this frame...
        if chat_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            chat_12.frameNStart = frameN  # exact frame index
            chat_12.tStart = t  # local t and not account for scr refresh
            chat_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chat_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'chat_12.started')
            # update status
            chat_12.status = STARTED
            chat_12.setAutoDraw(True)
        
        # if chat_12 is active this frame...
        if chat_12.status == STARTED:
            # update params
            pass
        
        # *sports_12* updates
        
        # if sports_12 is starting this frame...
        if sports_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sports_12.frameNStart = frameN  # exact frame index
            sports_12.tStart = t  # local t and not account for scr refresh
            sports_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sports_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sports_12.started')
            # update status
            sports_12.status = STARTED
            sports_12.setAutoDraw(True)
        
        # if sports_12 is active this frame...
        if sports_12.status == STARTED:
            # update params
            pass
        
        # *sport_12* updates
        
        # if sport_12 is starting this frame...
        if sport_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sport_12.frameNStart = frameN  # exact frame index
            sport_12.tStart = t  # local t and not account for scr refresh
            sport_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sport_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'sport_12.started')
            # update status
            sport_12.status = STARTED
            sport_12.setAutoDraw(True)
        
        # if sport_12 is active this frame...
        if sport_12.status == STARTED:
            # update params
            pass
        
        # *beach_12* updates
        
        # if beach_12 is starting this frame...
        if beach_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_12.frameNStart = frameN  # exact frame index
            beach_12.tStart = t  # local t and not account for scr refresh
            beach_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_12.started')
            # update status
            beach_12.status = STARTED
            beach_12.setAutoDraw(True)
        
        # if beach_12 is active this frame...
        if beach_12.status == STARTED:
            # update params
            pass
        
        # *beach_txt_12* updates
        
        # if beach_txt_12 is starting this frame...
        if beach_txt_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            beach_txt_12.frameNStart = frameN  # exact frame index
            beach_txt_12.tStart = t  # local t and not account for scr refresh
            beach_txt_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(beach_txt_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'beach_txt_12.started')
            # update status
            beach_txt_12.status = STARTED
            beach_txt_12.setAutoDraw(True)
        
        # if beach_txt_12 is active this frame...
        if beach_txt_12.status == STARTED:
            # update params
            pass
        
        # *participantpic_12* updates
        
        # if participantpic_12 is starting this frame...
        if participantpic_12.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            participantpic_12.frameNStart = frameN  # exact frame index
            participantpic_12.tStart = t  # local t and not account for scr refresh
            participantpic_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(participantpic_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'participantpic_12.started')
            # update status
            participantpic_12.status = STARTED
            participantpic_12.setAutoDraw(True)
        
        # if participantpic_12 is active this frame...
        if participantpic_12.status == STARTED:
            # update params
            pass
        
        # *notseen2_2* updates
        
        # if notseen2_2 is starting this frame...
        if notseen2_2.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            notseen2_2.frameNStart = frameN  # exact frame index
            notseen2_2.tStart = t  # local t and not account for scr refresh
            notseen2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(notseen2_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'notseen2_2.started')
            # update status
            notseen2_2.status = STARTED
            notseen2_2.setAutoDraw(True)
        
        # if notseen2_2 is active this frame...
        if notseen2_2.status == STARTED:
            # update params
            pass
        
        # *key_resp_25* updates
        waitOnFlip = False
        
        # if key_resp_25 is starting this frame...
        if key_resp_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_25.frameNStart = frameN  # exact frame index
            key_resp_25.tStart = t  # local t and not account for scr refresh
            key_resp_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_25, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_25.started')
            # update status
            key_resp_25.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_25.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_25.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_25.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_25.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_25_allKeys.extend(theseKeys)
            if len(_key_resp_25_allKeys):
                key_resp_25.keys = _key_resp_25_allKeys[-1].name  # just the last key pressed
                key_resp_25.rt = _key_resp_25_allKeys[-1].rt
                key_resp_25.duration = _key_resp_25_allKeys[-1].duration
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
        for thisComponent in topnsp2_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "topnsp2_2" ---
    for thisComponent in topnsp2_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('topnsp2_2.stopped', globalClock.getTime())
    # check responses
    if key_resp_25.keys in ['', [], None]:  # No response was made
        key_resp_25.keys = None
    thisExp.addData('key_resp_25.keys',key_resp_25.keys)
    if key_resp_25.keys != None:  # we had a response
        thisExp.addData('key_resp_25.rt', key_resp_25.rt)
        thisExp.addData('key_resp_25.duration', key_resp_25.duration)
    thisExp.nextEntry()
    # the Routine "topnsp2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "wait_5" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('wait_5.started', globalClock.getTime())
    # keep track of which components have finished
    wait_5Components = [polygon_29, text_103]
    for thisComponent in wait_5Components:
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
    
    # --- Run Routine "wait_5" ---
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
        
        # *polygon_29* updates
        
        # if polygon_29 is starting this frame...
        if polygon_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_29.frameNStart = frameN  # exact frame index
            polygon_29.tStart = t  # local t and not account for scr refresh
            polygon_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_29, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_29.started')
            # update status
            polygon_29.status = STARTED
            polygon_29.setAutoDraw(True)
        
        # if polygon_29 is active this frame...
        if polygon_29.status == STARTED:
            # update params
            pass
        
        # *text_103* updates
        
        # if text_103 is starting this frame...
        if text_103.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_103.frameNStart = frameN  # exact frame index
            text_103.tStart = t  # local t and not account for scr refresh
            text_103.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_103, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_103.started')
            # update status
            text_103.status = STARTED
            text_103.setAutoDraw(True)
        
        # if text_103 is active this frame...
        if text_103.status == STARTED:
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
        for thisComponent in wait_5Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "wait_5" ---
    for thisComponent in wait_5Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('wait_5.stopped', globalClock.getTime())
    # the Routine "wait_5" was not non-slip safe, so reset the non-slip timer
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
