/*************************** 
 * Pat_Practice_Icons *
 ***************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'PAT_PRACTICE_icons';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(ChoiceRoutine_1RoutineBegin());
flowScheduler.add(ChoiceRoutine_1RoutineEachFrame());
flowScheduler.add(ChoiceRoutine_1RoutineEnd());
flowScheduler.add(Player1_1RoutineBegin());
flowScheduler.add(Player1_1RoutineEachFrame());
flowScheduler.add(Player1_1RoutineEnd());
flowScheduler.add(topyesp1RoutineBegin());
flowScheduler.add(topyesp1RoutineEachFrame());
flowScheduler.add(topyesp1RoutineEnd());
flowScheduler.add(Player2_1RoutineBegin());
flowScheduler.add(Player2_1RoutineEachFrame());
flowScheduler.add(Player2_1RoutineEnd());
flowScheduler.add(topyesp2RoutineBegin());
flowScheduler.add(topyesp2RoutineEachFrame());
flowScheduler.add(topyesp2RoutineEnd());
flowScheduler.add(waitRoutineBegin());
flowScheduler.add(waitRoutineEachFrame());
flowScheduler.add(waitRoutineEnd());
flowScheduler.add(ChoiceRoutine_2RoutineBegin());
flowScheduler.add(ChoiceRoutine_2RoutineEachFrame());
flowScheduler.add(ChoiceRoutine_2RoutineEnd());
flowScheduler.add(Play1_2RoutineBegin());
flowScheduler.add(Play1_2RoutineEachFrame());
flowScheduler.add(Play1_2RoutineEnd());
flowScheduler.add(topnop1RoutineBegin());
flowScheduler.add(topnop1RoutineEachFrame());
flowScheduler.add(topnop1RoutineEnd());
flowScheduler.add(play2_2RoutineBegin());
flowScheduler.add(play2_2RoutineEachFrame());
flowScheduler.add(play2_2RoutineEnd());
flowScheduler.add(topnop2RoutineBegin());
flowScheduler.add(topnop2RoutineEachFrame());
flowScheduler.add(topnop2RoutineEnd());
flowScheduler.add(wait_2RoutineBegin());
flowScheduler.add(wait_2RoutineEachFrame());
flowScheduler.add(wait_2RoutineEnd());
flowScheduler.add(ChoiceRoutine_3RoutineBegin());
flowScheduler.add(ChoiceRoutine_3RoutineEachFrame());
flowScheduler.add(ChoiceRoutine_3RoutineEnd());
flowScheduler.add(player1_3RoutineBegin());
flowScheduler.add(player1_3RoutineEachFrame());
flowScheduler.add(player1_3RoutineEnd());
flowScheduler.add(topnsp1RoutineBegin());
flowScheduler.add(topnsp1RoutineEachFrame());
flowScheduler.add(topnsp1RoutineEnd());
flowScheduler.add(player2_3RoutineBegin());
flowScheduler.add(player2_3RoutineEachFrame());
flowScheduler.add(player2_3RoutineEnd());
flowScheduler.add(topnsp2RoutineBegin());
flowScheduler.add(topnsp2RoutineEachFrame());
flowScheduler.add(topnsp2RoutineEnd());
flowScheduler.add(wait_3RoutineBegin());
flowScheduler.add(wait_3RoutineEachFrame());
flowScheduler.add(wait_3RoutineEnd());
flowScheduler.add(ChoiceRoutine_4RoutineBegin());
flowScheduler.add(ChoiceRoutine_4RoutineEachFrame());
flowScheduler.add(ChoiceRoutine_4RoutineEnd());
flowScheduler.add(player1_4RoutineBegin());
flowScheduler.add(player1_4RoutineEachFrame());
flowScheduler.add(player1_4RoutineEnd());
flowScheduler.add(topyesp1_2RoutineBegin());
flowScheduler.add(topyesp1_2RoutineEachFrame());
flowScheduler.add(topyesp1_2RoutineEnd());
flowScheduler.add(Player2_3RoutineBegin());
flowScheduler.add(Player2_3RoutineEachFrame());
flowScheduler.add(Player2_3RoutineEnd());
flowScheduler.add(topyesp2_2RoutineBegin());
flowScheduler.add(topyesp2_2RoutineEachFrame());
flowScheduler.add(topyesp2_2RoutineEnd());
flowScheduler.add(wait_3RoutineBegin());
flowScheduler.add(wait_3RoutineEachFrame());
flowScheduler.add(wait_3RoutineEnd());
flowScheduler.add(ChoiceRoutine_5RoutineBegin());
flowScheduler.add(ChoiceRoutine_5RoutineEachFrame());
flowScheduler.add(ChoiceRoutine_5RoutineEnd());
flowScheduler.add(Play1_4RoutineBegin());
flowScheduler.add(Play1_4RoutineEachFrame());
flowScheduler.add(Play1_4RoutineEnd());
flowScheduler.add(topnop1_2RoutineBegin());
flowScheduler.add(topnop1_2RoutineEachFrame());
flowScheduler.add(topnop1_2RoutineEnd());
flowScheduler.add(play2_4RoutineBegin());
flowScheduler.add(play2_4RoutineEachFrame());
flowScheduler.add(play2_4RoutineEnd());
flowScheduler.add(topnop2_2RoutineBegin());
flowScheduler.add(topnop2_2RoutineEachFrame());
flowScheduler.add(topnop2_2RoutineEnd());
flowScheduler.add(wait_4RoutineBegin());
flowScheduler.add(wait_4RoutineEachFrame());
flowScheduler.add(wait_4RoutineEnd());
flowScheduler.add(ChoiceRoutine_6RoutineBegin());
flowScheduler.add(ChoiceRoutine_6RoutineEachFrame());
flowScheduler.add(ChoiceRoutine_6RoutineEnd());
flowScheduler.add(player1_5RoutineBegin());
flowScheduler.add(player1_5RoutineEachFrame());
flowScheduler.add(player1_5RoutineEnd());
flowScheduler.add(topnsp1_2RoutineBegin());
flowScheduler.add(topnsp1_2RoutineEachFrame());
flowScheduler.add(topnsp1_2RoutineEnd());
flowScheduler.add(player2_5RoutineBegin());
flowScheduler.add(player2_5RoutineEachFrame());
flowScheduler.add(player2_5RoutineEnd());
flowScheduler.add(topnsp2_2RoutineBegin());
flowScheduler.add(topnsp2_2RoutineEachFrame());
flowScheduler.add(topnsp2_2RoutineEnd());
flowScheduler.add(wait_5RoutineBegin());
flowScheduler.add(wait_5RoutineEachFrame());
flowScheduler.add(wait_5RoutineEnd());
const RunLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RunLoopBegin(RunLoopScheduler));
flowScheduler.add(RunLoopScheduler);
flowScheduler.add(RunLoopEnd);







flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimuli/practice/player1.jpg', 'path': 'stimuli/practice/player1.jpg'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\practice\player2.jpg', 'path': '../../../../../tur31606/Desktop/pat/stimuli/practice/player2.jpg'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\cooking.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/cooking.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\movies.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/movies.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\dancing.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/dancing.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\fashion.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/fashion.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\writing.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/writing.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\practice\player1.jpg', 'path': '../../../../../tur31606/Desktop/pat/stimuli/practice/player1.jpg'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\feedback\Thumbs_up.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\chatting.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/chatting.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\sports.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/sports.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\icons\beach.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/icons/beach.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\feedback\Thumbs_up.png', 'path': '../../../../../tuu20869/Desktop/stimuli/feedback/Thumbs_up.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\practice\player2.jpg', 'path': '../../../../../tuu20869/Desktop/stimuli/practice/player2.jpg'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\icons\fashion.png', 'path': '../../../../../tuu20869/Desktop/stimuli/icons/fashion.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\icons\writing.png', 'path': '../../../../../tuu20869/Desktop/stimuli/icons/writing.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\icons\instruments.png', 'path': '../../../../../tuu20869/Desktop/stimuli/icons/instruments.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\icons\knitting.png', 'path': '../../../../../tuu20869/Desktop/stimuli/icons/knitting.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\icons\beach.png', 'path': '../../../../../tuu20869/Desktop/stimuli/icons/beach.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\icons\cycling.png', 'path': '../../../../../tuu20869/Desktop/stimuli/icons/cycling.png'},
    {'name': '..\..\..\..\..\tur31606\Desktop\pat\stimuli\feedback\Thumbs_down.png', 'path': '../../../../../tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png'},
    {'name': '..\..\..\..\..\tuu20869\Desktop\stimuli\feedback\grey_box.png', 'path': '../../../../../tuu20869/Desktop/stimuli/feedback/grey_box.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  wel = new visual.TextStim({
    win: psychoJS.window,
    name: 'wel',
    text: 'Welcome to the Friends Game!\n\nWe will now show you how to play this game.\n\nPress spacebar for a demo.\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ChoiceRoutine_1"
  ChoiceRoutine_1Clock = new util.Clock();
  Who = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo', units : undefined, 
    image : 'stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  cooking = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cooking', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'cooking\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  movies = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movies', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  dancing = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dancing', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  fashion = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fashion', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'fashion',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  movie = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -14.0 
  });
  
  writing = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writing', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -16.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Player1_1"
  Player1_1Clock = new util.Clock();
  polygon_6 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_6', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cook = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cook', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_4',
    text: 'cooking\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_5',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  dance = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dance', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topyesp1"
  topyesp1Clock = new util.Clock();
  polygon_5 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_5', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cook_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cook_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var = new visual.TextStim({
    win: psychoJS.window,
    name: 'var',
    text: 'cooking\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.084], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_6',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  dance_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dance_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_2',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you = new visual.TextStim({
    win: psychoJS.window,
    name: 'you',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  yess = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yess', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.2, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Player2_1"
  Player2_1Clock = new util.Clock();
  polygon_7 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_7', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  player = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fashion_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fashion_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'fashion',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  writing_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writing_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  yes1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topyesp2"
  topyesp2Clock = new util.Clock();
  polygon_4 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_4', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player2_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fashion_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fashion_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/fashion.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_2',
    text: 'fashion\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.076], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_7',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  writ = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writ', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_4',
    text: 'Player-2\n\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_2',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_2',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_2',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  participantpic_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  beach_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_2',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -16.0 
  });
  
  yes = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wait"
  waitClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [4, 4][0], height: [4, 4][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ChoiceRoutine_2"
  ChoiceRoutine_2Clock = new util.Clock();
  Who_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who_2',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  writingpic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  instruments = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  knitting = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  beachpic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  writingpic2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -14.0 
  });
  
  cycling = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -16.0 
  });
  
  friendChoice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Play1_2"
  Play1_2Clock = new util.Clock();
  polygon_8 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_8', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  p1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_3',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  Player1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  writingpic_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  instruments_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  knitting_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  yes1_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnop1"
  topnop1Clock = new util.Clock();
  polygon_12 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_12', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  writt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writt', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_3',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.087], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  piano = new visual.ImageStim({
    win : psychoJS.window,
    name : 'piano', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_8',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  knittingg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knittingg', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_5',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_3',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_3',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.23)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_3',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_3',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  no_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'no_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "play2_2"
  play2_2Clock = new util.Clock();
  polygon_10 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_10', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  player_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  beachpic_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  writingpic2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  cycling_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnop2"
  topnop2Clock = new util.Clock();
  polygon_14 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_14', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  beach1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach1', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_9',
    text: 'beach\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.087], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  write = new visual.ImageStim({
    win : psychoJS.window,
    name : 'write', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_10',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.087], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  cycle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycle', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_6',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_4',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_4',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_4',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_4',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  no_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'no_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wait_2"
  wait_2Clock = new util.Clock();
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2', 
    width: [4, 4][0], height: [4, 4][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ChoiceRoutine_3"
  ChoiceRoutine_3Clock = new util.Clock();
  Who_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who_3',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  writingpic_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  instruments_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  knitting_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  beachpic_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  writingpic2_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -14.0 
  });
  
  cycling_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -16.0 
  });
  
  friendChoice_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "player1_3"
  player1_3Clock = new util.Clock();
  polygon_9 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_9', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  p1_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_9',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  Player1_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  writingpic_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  instruments_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  knitting_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  yes1_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnsp1"
  topnsp1Clock = new util.Clock();
  polygon_35 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_35', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.4902), (- 0.5373), (- 0.5059)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  draw = new visual.ImageStim({
    win : psychoJS.window,
    name : 'draw', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  wright = new visual.TextStim({
    win: psychoJS.window,
    name: 'wright',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.087], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  pianoo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pianoo', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_12',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  knit = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knit', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_7',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_5',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_5',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_5',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_5',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  notseen = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notseen', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "player2_3"
  player2_3Clock = new util.Clock();
  polygon_11 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_11', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  player_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  beachpic_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_51 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_51',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  writingpic2_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  cycling_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_4', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnsp2"
  topnsp2Clock = new util.Clock();
  polygon_36 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_36', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.4039), (- 0.3725), (- 0.3569)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  beachh = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachh', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_13',
    text: 'beach\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.087], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  wrightt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'wrightt', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_14',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  cyc = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cyc', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_8',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_6',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_6',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_6',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_6',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  notseen2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notseen2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wait_3"
  wait_3Clock = new util.Clock();
  polygon_3 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_3', 
    width: [4, 4][0], height: [4, 4][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_67 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_67',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ChoiceRoutine_4"
  ChoiceRoutine_4Clock = new util.Clock();
  Who_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who_4',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_48',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  cooking_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cooking_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_54 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_54',
    text: 'cooking\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  movies_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movies_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_55 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_55',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  dancing_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dancing_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_56 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_56',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  fashion_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fashion_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  text_57 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_57',
    text: 'fashion',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -12.0 
  });
  
  movie_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  text_58 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_58',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -14.0 
  });
  
  writing_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writing_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  text_59 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_59',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -16.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "player1_4"
  player1_4Clock = new util.Clock();
  polygon_16 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_16', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cook_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cook_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_11',
    text: 'cooking\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_15',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  dance_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dance_3', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_60 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_60',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_10',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topyesp1_2"
  topyesp1_2Clock = new util.Clock();
  polygon_17 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_17', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cook_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cook_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/cooking.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_16',
    text: 'cooking\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.087], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_17',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  dance_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dance_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/dancing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_61 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_61',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_11',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_7',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_7',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_7',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_7',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  yess_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yess_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.2, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Player2_3"
  Player2_3Clock = new util.Clock();
  polygon_18 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_18', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  player_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player_2', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fashion_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fashion_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/fashion.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_62 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_62',
    text: 'fashion',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  text_63 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_63',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.07)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  writing_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writing_4', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_64 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_64',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  yes1_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_65 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_65',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topyesp2_2"
  topyesp2_2Clock = new util.Clock();
  polygon_19 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_19', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fashion_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fashion_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/fashion.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_18',
    text: 'fashion\n\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  movie_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'movie_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/movies.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_19',
    text: 'dancing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  writ_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writ_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_66 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_66',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_12',
    text: 'Player-2\n\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_8',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_8',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_8',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  participantpic_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_8', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  beach_txt_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_8',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -16.0 
  });
  
  yes_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ChoiceRoutine_5"
  ChoiceRoutine_5Clock = new util.Clock();
  Who_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who_5',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_68 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_68',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_69 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_69',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  writingpic_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_5', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_70 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_70',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  instruments_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_5', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_71 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_71',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  knitting_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_5', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_72 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_72',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  beachpic_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_5', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  writingpic2_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_5', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  text_73 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_73',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  cycling_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_5', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  text_74 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_74',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  friendChoice_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_75 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_75',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -17.0 
  });
  
  // Initialize components for Routine "Play1_4"
  Play1_4Clock = new util.Clock();
  polygon_20 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_20', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  p1_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_13',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  Player1_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_11', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  writingpic_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_76 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_76',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  instruments_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_77 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_77',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  knitting_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  yes1_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_78 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_78',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnop1_2"
  topnop1_2Clock = new util.Clock();
  polygon_21 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_21', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_12', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  writt_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writt_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_20',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  piano_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'piano_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_21',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  knittingg_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knittingg_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_79 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_79',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_14',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_9',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_9',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_9',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_9',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_9', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  no = new visual.ImageStim({
    win : psychoJS.window,
    name : 'no', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "play2_4"
  play2_4Clock = new util.Clock();
  polygon_22 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_22', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_80 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_80',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  player_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  beachpic_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_81 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_81',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  writingpic2_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_82 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_82',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  cycling_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_6', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_83 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_83',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.01,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnop2_2"
  topnop2_2Clock = new util.Clock();
  polygon_23 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_23', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_13', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  beach1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach1_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_22',
    text: 'beach\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  write_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'write_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.13], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_23',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  cycle_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycle_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_84 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_84',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_15',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_10',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_10',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_10',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_10',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_10', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  no_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'no_5', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_down.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_23 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wait_4"
  wait_4Clock = new util.Clock();
  polygon_24 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_24', 
    width: [4, 4][0], height: [4, 4][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_85 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_85',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ChoiceRoutine_6"
  ChoiceRoutine_6Clock = new util.Clock();
  Who_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who_6',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_86 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_86',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_87 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_87',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  writingpic_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_7', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_88 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_88',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  instruments_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_7', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_89 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_89',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  knitting_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_7', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_90 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_90',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  beachpic_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_7', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  writingpic2_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_7', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  text_91 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_91',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  cycling_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_7', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  text_92 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_92',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  friendChoice_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_93',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -17.0 
  });
  
  // Initialize components for Routine "player1_5"
  player1_5Clock = new util.Clock();
  polygon_27 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_27', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  p1_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_18',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  Player1_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_16', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  writingpic_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_8', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_96 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_96',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  instruments_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_8', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_97 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_97',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  knitting_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_8', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  yes1_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_11', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_98 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_98',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_26 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnsp1_2"
  topnsp1_2Clock = new util.Clock();
  polygon_37 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_37', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.4039), (- 0.3725), (- 0.3569)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_14', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  draw_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'draw_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  wright_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wright_2',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  pianoo_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pianoo_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_24',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  knit_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knit_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_94 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_94',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_16',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_11',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_11', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_11',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_11', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_11',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_11', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_11',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_11', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  notseen_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notseen_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "player2_5"
  player2_5Clock = new util.Clock();
  polygon_28 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_28', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_99 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_99',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  player_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player_6', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  beachpic_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_8', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  writingpic2_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_8', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_101 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_101',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  cycling_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_8', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_102 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_102',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_12', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_27 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "topnsp2_2"
  topnsp2_2Clock = new util.Clock();
  polygon_32 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_32', 
    width: [0.4, 0.4][0], height: [0.4, 0.4][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.4039), (- 0.3725), (- 0.3569)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_15', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  beachh_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachh_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_25',
    text: 'beach\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  wrightt_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'wrightt_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_26',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  cyc_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cyc_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_95 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_95',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_17',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_12',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_12', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_12',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_12', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_12',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_12', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_12',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_12', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  notseen2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notseen2_2', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wait_5"
  wait_5Clock = new util.Clock();
  polygon_29 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_29', 
    width: [4, 4][0], height: [4, 4][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_103 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_103',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ChoiceRoutine"
  ChoiceRoutineClock = new util.Clock();
  Who_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Who_7',
    text: 'Who do you want to be friends with? \n\n',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.38], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  text_104 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_104',
    text: '',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_105 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_105',
    text: '',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Player1demo_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1demo_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  Player2demo_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player2demo_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  writingpic_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_9', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_106 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_106',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  instruments_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_9', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_107 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_107',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  knitting_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_9', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_108 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_108',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  beachpic_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_9', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  writingpic2_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_9', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  text_109 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_109',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.086)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  cycling_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_9', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  text_110 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_110',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  friendChoice_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_111 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_111',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -17.0 
  });
  
  // Initialize components for Routine "player1"
  player1Clock = new util.Clock();
  polygon_30 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_30', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [(- 0.4), 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  p1_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_19',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [(- 0.4), 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  Player1_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_17', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  writingpic_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic_10', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_112 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_112',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  instruments_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruments_10', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_113 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_113',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  knitting_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knitting_10', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.3), (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  yes1_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_13', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_114 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_114',
    text: 'knitting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  key_resp_28 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "top1_neededit_nsp"
  top1_neededit_nspClock = new util.Clock();
  polygon_38 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_38', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.4039), (- 0.3725), (- 0.3569)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_18', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  draw_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'draw_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  wright_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'wright_3',
    text: 'writing\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  pianoo_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pianoo_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/instruments.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_27',
    text: 'instruments',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  knit_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'knit_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/knitting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_115 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_115',
    text: 'movies',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_20',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_13',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_13', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_13',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_13', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_13',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_13', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_13',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_13', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  notseen_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notseen_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_29 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "player2"
  player2Clock = new util.Clock();
  polygon_31 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_31', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.4, 0.13],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), 0.0039, (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_117 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_117',
    text: 'Player-2\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.4, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  player_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'player_7', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  beachpic_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachpic_10', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.3, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_118 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_118',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  writingpic2_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'writingpic2_10', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  text_119 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_119',
    text: 'writing\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.08)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  cycling_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cycling_10', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, (- 0.03)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  text_120 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_120',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.07)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  yes1_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes1_14', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/feedback/Thumbs_up.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, 0.13], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  key_resp_31 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "top2_neededit_nsp"
  top2_neededit_nspClock = new util.Clock();
  polygon_33 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_33', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0.0, (- 0.073)],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.4039), (- 0.3725), (- 0.3569)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Player1_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Player1_19', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.2, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  beachh_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beachh_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  var_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_28',
    text: 'beach\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), 0.086], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  wrightt_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'wrightt_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/writing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  var_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'var_29',
    text: 'writing',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  cyc_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cyc_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/icons/cycling.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, 0.14], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  text_116 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_116',
    text: 'cycling',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.1], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  p1_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p1_21',
    text: 'Player-1\n',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -8.0 
  });
  
  you_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'you_14',
    text: 'You',
    font: 'Consolas',
    units: undefined, 
    pos: [0.0, 0.07], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  chatting_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chatting_14', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/chatting.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.13), (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  chat_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'chat_14',
    text: 'chatting',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.13), (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  sports_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sports_14', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/sports.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  sport_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sport_14',
    text: 'sports',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -13.0 
  });
  
  beach_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beach_14', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/icons/beach.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.13, (- 0.2)], size : [0.04, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  beach_txt_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beach_txt_14',
    text: 'beach',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.13, (- 0.24)], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -15.0 
  });
  
  participantpic_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantpic_14', units : undefined, 
    image : 'C:/Users/tur31606/Desktop/pat/stimuli/practice/player1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.073)], size : [0.15, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  notseen2_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'notseen2_3', units : undefined, 
    image : 'C:/Users/tuu20869/Desktop/stimuli/feedback/grey_box.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, (- 0.08)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  key_resp_30 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(wel);
    welcomeComponents.push(key_resp_2);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *wel* updates
    if (t >= 0.0 && wel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wel.tStart = t;  // (not accounting for frame time here)
      wel.frameNStart = frameN;  // exact frame index
      
      wel.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine_1' ---
    t = 0;
    ChoiceRoutine_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine_1.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutine_1Components = [];
    ChoiceRoutine_1Components.push(Who);
    ChoiceRoutine_1Components.push(text_2);
    ChoiceRoutine_1Components.push(text_3);
    ChoiceRoutine_1Components.push(Player1demo);
    ChoiceRoutine_1Components.push(Player2demo);
    ChoiceRoutine_1Components.push(cooking);
    ChoiceRoutine_1Components.push(text_4);
    ChoiceRoutine_1Components.push(movies);
    ChoiceRoutine_1Components.push(text_5);
    ChoiceRoutine_1Components.push(dancing);
    ChoiceRoutine_1Components.push(text_6);
    ChoiceRoutine_1Components.push(fashion);
    ChoiceRoutine_1Components.push(text_7);
    ChoiceRoutine_1Components.push(movie);
    ChoiceRoutine_1Components.push(text_8);
    ChoiceRoutine_1Components.push(writing);
    ChoiceRoutine_1Components.push(text_9);
    ChoiceRoutine_1Components.push(key_resp);
    
    for (const thisComponent of ChoiceRoutine_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine_1' ---
    // get current time
    t = ChoiceRoutine_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who* updates
    if (t >= 0.0 && Who.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who.tStart = t;  // (not accounting for frame time here)
      Who.frameNStart = frameN;  // exact frame index
      
      Who.setAutoDraw(true);
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *Player1demo* updates
    if (t >= 0.0 && Player1demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo.tStart = t;  // (not accounting for frame time here)
      Player1demo.frameNStart = frameN;  // exact frame index
      
      Player1demo.setAutoDraw(true);
    }
    
    
    // *Player2demo* updates
    if (t >= 0.0 && Player2demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo.tStart = t;  // (not accounting for frame time here)
      Player2demo.frameNStart = frameN;  // exact frame index
      
      Player2demo.setAutoDraw(true);
    }
    
    
    // *cooking* updates
    if (t >= 0.0 && cooking.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cooking.tStart = t;  // (not accounting for frame time here)
      cooking.frameNStart = frameN;  // exact frame index
      
      cooking.setAutoDraw(true);
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *movies* updates
    if (t >= 0.0 && movies.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movies.tStart = t;  // (not accounting for frame time here)
      movies.frameNStart = frameN;  // exact frame index
      
      movies.setAutoDraw(true);
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *dancing* updates
    if (t >= 0.0 && dancing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dancing.tStart = t;  // (not accounting for frame time here)
      dancing.frameNStart = frameN;  // exact frame index
      
      dancing.setAutoDraw(true);
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *fashion* updates
    if (t >= 0.0 && fashion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fashion.tStart = t;  // (not accounting for frame time here)
      fashion.frameNStart = frameN;  // exact frame index
      
      fashion.setAutoDraw(true);
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *movie* updates
    if (t >= 0.0 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *writing* updates
    if (t >= 0.0 && writing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writing.tStart = t;  // (not accounting for frame time here)
      writing.frameNStart = frameN;  // exact frame index
      
      writing.setAutoDraw(true);
    }
    
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutine_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutine_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine_1' ---
    for (const thisComponent of ChoiceRoutine_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "ChoiceRoutine_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Player1_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Player1_1' ---
    t = 0;
    Player1_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Player1_1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    if ((key_resp.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Player1_1Components = [];
    Player1_1Components.push(polygon_6);
    Player1_1Components.push(Player1);
    Player1_1Components.push(cook);
    Player1_1Components.push(var_4);
    Player1_1Components.push(movie_2);
    Player1_1Components.push(var_5);
    Player1_1Components.push(dance);
    Player1_1Components.push(text);
    Player1_1Components.push(p1);
    Player1_1Components.push(yes1);
    Player1_1Components.push(key_resp_3);
    
    for (const thisComponent of Player1_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Player1_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Player1_1' ---
    // get current time
    t = Player1_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_6* updates
    if (t >= 0.0 && polygon_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_6.tStart = t;  // (not accounting for frame time here)
      polygon_6.frameNStart = frameN;  // exact frame index
      
      polygon_6.setAutoDraw(true);
    }
    
    
    // *Player1* updates
    if (t >= 0.0 && Player1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1.tStart = t;  // (not accounting for frame time here)
      Player1.frameNStart = frameN;  // exact frame index
      
      Player1.setAutoDraw(true);
    }
    
    
    // *cook* updates
    if (t >= 0.0 && cook.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cook.tStart = t;  // (not accounting for frame time here)
      cook.frameNStart = frameN;  // exact frame index
      
      cook.setAutoDraw(true);
    }
    
    
    // *var_4* updates
    if (t >= 0.0 && var_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_4.tStart = t;  // (not accounting for frame time here)
      var_4.frameNStart = frameN;  // exact frame index
      
      var_4.setAutoDraw(true);
    }
    
    
    // *movie_2* updates
    if (t >= 0.0 && movie_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_2.tStart = t;  // (not accounting for frame time here)
      movie_2.frameNStart = frameN;  // exact frame index
      
      movie_2.setAutoDraw(true);
    }
    
    
    // *var_5* updates
    if (t >= 0.0 && var_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_5.tStart = t;  // (not accounting for frame time here)
      var_5.frameNStart = frameN;  // exact frame index
      
      var_5.setAutoDraw(true);
    }
    
    
    // *dance* updates
    if (t >= 0.0 && dance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dance.tStart = t;  // (not accounting for frame time here)
      dance.frameNStart = frameN;  // exact frame index
      
      dance.setAutoDraw(true);
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *p1* updates
    if (t >= 0.0 && p1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1.tStart = t;  // (not accounting for frame time here)
      p1.frameNStart = frameN;  // exact frame index
      
      p1.setAutoDraw(true);
    }
    
    
    // *yes1* updates
    if (t >= 0.0 && yes1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1.tStart = t;  // (not accounting for frame time here)
      yes1.frameNStart = frameN;  // exact frame index
      
      yes1.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Player1_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Player1_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Player1_1' ---
    for (const thisComponent of Player1_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Player1_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Player1_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topyesp1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topyesp1' ---
    t = 0;
    topyesp1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topyesp1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    if ((key_resp.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    topyesp1Components = [];
    topyesp1Components.push(polygon_5);
    topyesp1Components.push(Player1_2);
    topyesp1Components.push(cook_2);
    topyesp1Components.push(var);
    topyesp1Components.push(movie_4);
    topyesp1Components.push(var_6);
    topyesp1Components.push(dance_2);
    topyesp1Components.push(text_13);
    topyesp1Components.push(p1_2);
    topyesp1Components.push(you);
    topyesp1Components.push(chatting);
    topyesp1Components.push(chat);
    topyesp1Components.push(sports);
    topyesp1Components.push(sport);
    topyesp1Components.push(beach);
    topyesp1Components.push(beach_txt);
    topyesp1Components.push(participantpic);
    topyesp1Components.push(yess);
    topyesp1Components.push(key_resp_4);
    
    for (const thisComponent of topyesp1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topyesp1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topyesp1' ---
    // get current time
    t = topyesp1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_5* updates
    if (t >= 2.5 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_5.tStart = t;  // (not accounting for frame time here)
      polygon_5.frameNStart = frameN;  // exact frame index
      
      polygon_5.setAutoDraw(true);
    }
    
    
    // *Player1_2* updates
    if (t >= 0.0 && Player1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_2.tStart = t;  // (not accounting for frame time here)
      Player1_2.frameNStart = frameN;  // exact frame index
      
      Player1_2.setAutoDraw(true);
    }
    
    
    // *cook_2* updates
    if (t >= 0.0 && cook_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cook_2.tStart = t;  // (not accounting for frame time here)
      cook_2.frameNStart = frameN;  // exact frame index
      
      cook_2.setAutoDraw(true);
    }
    
    
    // *var* updates
    if (t >= 0.0 && var.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var.tStart = t;  // (not accounting for frame time here)
      var.frameNStart = frameN;  // exact frame index
      
      var.setAutoDraw(true);
    }
    
    
    // *movie_4* updates
    if (t >= 0.0 && movie_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_4.tStart = t;  // (not accounting for frame time here)
      movie_4.frameNStart = frameN;  // exact frame index
      
      movie_4.setAutoDraw(true);
    }
    
    
    // *var_6* updates
    if (t >= 0.0 && var_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_6.tStart = t;  // (not accounting for frame time here)
      var_6.frameNStart = frameN;  // exact frame index
      
      var_6.setAutoDraw(true);
    }
    
    
    // *dance_2* updates
    if (t >= 0.0 && dance_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dance_2.tStart = t;  // (not accounting for frame time here)
      dance_2.frameNStart = frameN;  // exact frame index
      
      dance_2.setAutoDraw(true);
    }
    
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    
    // *p1_2* updates
    if (t >= 0.0 && p1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_2.tStart = t;  // (not accounting for frame time here)
      p1_2.frameNStart = frameN;  // exact frame index
      
      p1_2.setAutoDraw(true);
    }
    
    
    // *you* updates
    if (t >= 1.0 && you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you.tStart = t;  // (not accounting for frame time here)
      you.frameNStart = frameN;  // exact frame index
      
      you.setAutoDraw(true);
    }
    
    
    // *chatting* updates
    if (t >= 1.0 && chatting.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting.tStart = t;  // (not accounting for frame time here)
      chatting.frameNStart = frameN;  // exact frame index
      
      chatting.setAutoDraw(true);
    }
    
    
    // *chat* updates
    if (t >= 1.0 && chat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat.tStart = t;  // (not accounting for frame time here)
      chat.frameNStart = frameN;  // exact frame index
      
      chat.setAutoDraw(true);
    }
    
    
    // *sports* updates
    if (t >= 1.0 && sports.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports.tStart = t;  // (not accounting for frame time here)
      sports.frameNStart = frameN;  // exact frame index
      
      sports.setAutoDraw(true);
    }
    
    
    // *sport* updates
    if (t >= 1.0 && sport.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport.tStart = t;  // (not accounting for frame time here)
      sport.frameNStart = frameN;  // exact frame index
      
      sport.setAutoDraw(true);
    }
    
    
    // *beach* updates
    if (t >= 1.0 && beach.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach.tStart = t;  // (not accounting for frame time here)
      beach.frameNStart = frameN;  // exact frame index
      
      beach.setAutoDraw(true);
    }
    
    
    // *beach_txt* updates
    if (t >= 1.0 && beach_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt.tStart = t;  // (not accounting for frame time here)
      beach_txt.frameNStart = frameN;  // exact frame index
      
      beach_txt.setAutoDraw(true);
    }
    
    
    // *participantpic* updates
    if (t >= 1.0 && participantpic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic.tStart = t;  // (not accounting for frame time here)
      participantpic.frameNStart = frameN;  // exact frame index
      
      participantpic.setAutoDraw(true);
    }
    
    
    // *yess* updates
    if (t >= 2.5 && yess.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yess.tStart = t;  // (not accounting for frame time here)
      yess.frameNStart = frameN;  // exact frame index
      
      yess.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topyesp1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topyesp1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topyesp1' ---
    for (const thisComponent of topyesp1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topyesp1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "topyesp1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Player2_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Player2_1' ---
    t = 0;
    Player2_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Player2_1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    if ((key_resp.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    Player2_1Components = [];
    Player2_1Components.push(polygon_7);
    Player2_1Components.push(player);
    Player2_1Components.push(fashion_2);
    Player2_1Components.push(text_10);
    Player2_1Components.push(movie_3);
    Player2_1Components.push(text_11);
    Player2_1Components.push(writing_2);
    Player2_1Components.push(text_12);
    Player2_1Components.push(yes1_2);
    Player2_1Components.push(text_14);
    Player2_1Components.push(key_resp_5);
    
    for (const thisComponent of Player2_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Player2_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Player2_1' ---
    // get current time
    t = Player2_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_7* updates
    if (t >= 0.0 && polygon_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_7.tStart = t;  // (not accounting for frame time here)
      polygon_7.frameNStart = frameN;  // exact frame index
      
      polygon_7.setAutoDraw(true);
    }
    
    
    // *player* updates
    if (t >= 0.0 && player.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player.tStart = t;  // (not accounting for frame time here)
      player.frameNStart = frameN;  // exact frame index
      
      player.setAutoDraw(true);
    }
    
    
    // *fashion_2* updates
    if (t >= 0.0 && fashion_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fashion_2.tStart = t;  // (not accounting for frame time here)
      fashion_2.frameNStart = frameN;  // exact frame index
      
      fashion_2.setAutoDraw(true);
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // *movie_3* updates
    if (t >= 0.0 && movie_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_3.tStart = t;  // (not accounting for frame time here)
      movie_3.frameNStart = frameN;  // exact frame index
      
      movie_3.setAutoDraw(true);
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // *writing_2* updates
    if (t >= 0.0 && writing_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writing_2.tStart = t;  // (not accounting for frame time here)
      writing_2.frameNStart = frameN;  // exact frame index
      
      writing_2.setAutoDraw(true);
    }
    
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    
    // *yes1_2* updates
    if (t >= 0.0 && yes1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_2.tStart = t;  // (not accounting for frame time here)
      yes1_2.frameNStart = frameN;  // exact frame index
      
      yes1_2.setAutoDraw(true);
    }
    
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Player2_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Player2_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Player2_1' ---
    for (const thisComponent of Player2_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Player2_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Player2_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topyesp2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topyesp2' ---
    t = 0;
    topyesp2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topyesp2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    if ((key_resp.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    topyesp2Components = [];
    topyesp2Components.push(polygon_4);
    topyesp2Components.push(Player2_4);
    topyesp2Components.push(fashion_3);
    topyesp2Components.push(var_2);
    topyesp2Components.push(movie_5);
    topyesp2Components.push(var_7);
    topyesp2Components.push(writ);
    topyesp2Components.push(text_31);
    topyesp2Components.push(p1_4);
    topyesp2Components.push(you_2);
    topyesp2Components.push(chatting_2);
    topyesp2Components.push(chat_2);
    topyesp2Components.push(sports_2);
    topyesp2Components.push(sport_2);
    topyesp2Components.push(beach_2);
    topyesp2Components.push(participantpic_5);
    topyesp2Components.push(beach_txt_2);
    topyesp2Components.push(yes);
    topyesp2Components.push(key_resp_6);
    
    for (const thisComponent of topyesp2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topyesp2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topyesp2' ---
    // get current time
    t = topyesp2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_4* updates
    if (t >= 2.5 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }
    
    
    // *Player2_4* updates
    if (t >= 0.0 && Player2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2_4.tStart = t;  // (not accounting for frame time here)
      Player2_4.frameNStart = frameN;  // exact frame index
      
      Player2_4.setAutoDraw(true);
    }
    
    
    // *fashion_3* updates
    if (t >= 0.0 && fashion_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fashion_3.tStart = t;  // (not accounting for frame time here)
      fashion_3.frameNStart = frameN;  // exact frame index
      
      fashion_3.setAutoDraw(true);
    }
    
    
    // *var_2* updates
    if (t >= 0.0 && var_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_2.tStart = t;  // (not accounting for frame time here)
      var_2.frameNStart = frameN;  // exact frame index
      
      var_2.setAutoDraw(true);
    }
    
    
    // *movie_5* updates
    if (t >= 0.0 && movie_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_5.tStart = t;  // (not accounting for frame time here)
      movie_5.frameNStart = frameN;  // exact frame index
      
      movie_5.setAutoDraw(true);
    }
    
    
    // *var_7* updates
    if (t >= 0.0 && var_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_7.tStart = t;  // (not accounting for frame time here)
      var_7.frameNStart = frameN;  // exact frame index
      
      var_7.setAutoDraw(true);
    }
    
    
    // *writ* updates
    if (t >= 0.0 && writ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writ.tStart = t;  // (not accounting for frame time here)
      writ.frameNStart = frameN;  // exact frame index
      
      writ.setAutoDraw(true);
    }
    
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }
    
    
    // *p1_4* updates
    if (t >= 0.0 && p1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_4.tStart = t;  // (not accounting for frame time here)
      p1_4.frameNStart = frameN;  // exact frame index
      
      p1_4.setAutoDraw(true);
    }
    
    
    // *you_2* updates
    if (t >= 1.0 && you_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_2.tStart = t;  // (not accounting for frame time here)
      you_2.frameNStart = frameN;  // exact frame index
      
      you_2.setAutoDraw(true);
    }
    
    
    // *chatting_2* updates
    if (t >= 1.0 && chatting_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_2.tStart = t;  // (not accounting for frame time here)
      chatting_2.frameNStart = frameN;  // exact frame index
      
      chatting_2.setAutoDraw(true);
    }
    
    
    // *chat_2* updates
    if (t >= 1.0 && chat_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_2.tStart = t;  // (not accounting for frame time here)
      chat_2.frameNStart = frameN;  // exact frame index
      
      chat_2.setAutoDraw(true);
    }
    
    
    // *sports_2* updates
    if (t >= 1.0 && sports_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_2.tStart = t;  // (not accounting for frame time here)
      sports_2.frameNStart = frameN;  // exact frame index
      
      sports_2.setAutoDraw(true);
    }
    
    
    // *sport_2* updates
    if (t >= 1.0 && sport_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_2.tStart = t;  // (not accounting for frame time here)
      sport_2.frameNStart = frameN;  // exact frame index
      
      sport_2.setAutoDraw(true);
    }
    
    
    // *beach_2* updates
    if (t >= 1.0 && beach_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_2.tStart = t;  // (not accounting for frame time here)
      beach_2.frameNStart = frameN;  // exact frame index
      
      beach_2.setAutoDraw(true);
    }
    
    
    // *participantpic_5* updates
    if (t >= 1.0 && participantpic_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_5.tStart = t;  // (not accounting for frame time here)
      participantpic_5.frameNStart = frameN;  // exact frame index
      
      participantpic_5.setAutoDraw(true);
    }
    
    
    // *beach_txt_2* updates
    if (t >= 1.0 && beach_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_2.tStart = t;  // (not accounting for frame time here)
      beach_txt_2.frameNStart = frameN;  // exact frame index
      
      beach_txt_2.setAutoDraw(true);
    }
    
    
    // *yes* updates
    if (t >= 2.5 && yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes.tStart = t;  // (not accounting for frame time here)
      yes.frameNStart = frameN;  // exact frame index
      
      yes.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topyesp2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topyesp2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topyesp2' ---
    for (const thisComponent of topyesp2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topyesp2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "topyesp2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function waitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait' ---
    t = 0;
    waitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait.started', globalClock.getTime());
    // keep track of which components have finished
    waitComponents = [];
    waitComponents.push(polygon);
    waitComponents.push(text_16);
    
    for (const thisComponent of waitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function waitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait' ---
    // get current time
    t = waitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 3) {
        continueRoutine = false
    }
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of waitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function waitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait' ---
    for (const thisComponent of waitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait.stopped', globalClock.getTime());
    // the Routine "wait" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine_2' ---
    t = 0;
    ChoiceRoutine_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine_2.started', globalClock.getTime());
    friendChoice.keys = undefined;
    friendChoice.rt = undefined;
    _friendChoice_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutine_2Components = [];
    ChoiceRoutine_2Components.push(Who_2);
    ChoiceRoutine_2Components.push(text_15);
    ChoiceRoutine_2Components.push(text_17);
    ChoiceRoutine_2Components.push(Player1demo_2);
    ChoiceRoutine_2Components.push(Player2demo_2);
    ChoiceRoutine_2Components.push(writingpic);
    ChoiceRoutine_2Components.push(text_18);
    ChoiceRoutine_2Components.push(instruments);
    ChoiceRoutine_2Components.push(text_20);
    ChoiceRoutine_2Components.push(knitting);
    ChoiceRoutine_2Components.push(text_19);
    ChoiceRoutine_2Components.push(beachpic);
    ChoiceRoutine_2Components.push(text_24);
    ChoiceRoutine_2Components.push(writingpic2);
    ChoiceRoutine_2Components.push(text_22);
    ChoiceRoutine_2Components.push(cycling);
    ChoiceRoutine_2Components.push(text_23);
    ChoiceRoutine_2Components.push(friendChoice);
    
    for (const thisComponent of ChoiceRoutine_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine_2' ---
    // get current time
    t = ChoiceRoutine_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who_2* updates
    if (t >= 0.0 && Who_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who_2.tStart = t;  // (not accounting for frame time here)
      Who_2.frameNStart = frameN;  // exact frame index
      
      Who_2.setAutoDraw(true);
    }
    
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    
    // *Player1demo_2* updates
    if (t >= 0.0 && Player1demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo_2.tStart = t;  // (not accounting for frame time here)
      Player1demo_2.frameNStart = frameN;  // exact frame index
      
      Player1demo_2.setAutoDraw(true);
    }
    
    
    // *Player2demo_2* updates
    if (t >= 0.0 && Player2demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo_2.tStart = t;  // (not accounting for frame time here)
      Player2demo_2.frameNStart = frameN;  // exact frame index
      
      Player2demo_2.setAutoDraw(true);
    }
    
    
    // *writingpic* updates
    if (t >= 0.0 && writingpic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic.tStart = t;  // (not accounting for frame time here)
      writingpic.frameNStart = frameN;  // exact frame index
      
      writingpic.setAutoDraw(true);
    }
    
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    
    // *instruments* updates
    if (t >= 0.0 && instruments.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments.tStart = t;  // (not accounting for frame time here)
      instruments.frameNStart = frameN;  // exact frame index
      
      instruments.setAutoDraw(true);
    }
    
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    
    // *knitting* updates
    if (t >= 0.0 && knitting.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting.tStart = t;  // (not accounting for frame time here)
      knitting.frameNStart = frameN;  // exact frame index
      
      knitting.setAutoDraw(true);
    }
    
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    
    // *beachpic* updates
    if (t >= 0.0 && beachpic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic.tStart = t;  // (not accounting for frame time here)
      beachpic.frameNStart = frameN;  // exact frame index
      
      beachpic.setAutoDraw(true);
    }
    
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    
    // *writingpic2* updates
    if (t >= 0.0 && writingpic2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2.tStart = t;  // (not accounting for frame time here)
      writingpic2.frameNStart = frameN;  // exact frame index
      
      writingpic2.setAutoDraw(true);
    }
    
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }
    
    
    // *cycling* updates
    if (t >= 0.0 && cycling.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling.tStart = t;  // (not accounting for frame time here)
      cycling.frameNStart = frameN;  // exact frame index
      
      cycling.setAutoDraw(true);
    }
    
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    
    // *friendChoice* updates
    if (t >= 0.0 && friendChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      friendChoice.tStart = t;  // (not accounting for frame time here)
      friendChoice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { friendChoice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { friendChoice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { friendChoice.clearEvents(); });
    }
    
    if (friendChoice.status === PsychoJS.Status.STARTED) {
      let theseKeys = friendChoice.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _friendChoice_allKeys = _friendChoice_allKeys.concat(theseKeys);
      if (_friendChoice_allKeys.length > 0) {
        friendChoice.keys = _friendChoice_allKeys[_friendChoice_allKeys.length - 1].name;  // just the last key pressed
        friendChoice.rt = _friendChoice_allKeys[_friendChoice_allKeys.length - 1].rt;
        friendChoice.duration = _friendChoice_allKeys[_friendChoice_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutine_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutine_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine_2' ---
    for (const thisComponent of ChoiceRoutine_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(friendChoice.corr, level);
    }
    psychoJS.experiment.addData('friendChoice.keys', friendChoice.keys);
    if (typeof friendChoice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('friendChoice.rt', friendChoice.rt);
        psychoJS.experiment.addData('friendChoice.duration', friendChoice.duration);
        routineTimer.reset();
        }
    
    friendChoice.stop();
    // the Routine "ChoiceRoutine_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Play1_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Play1_2' ---
    t = 0;
    Play1_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Play1_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    if ((friendChoice.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    Play1_2Components = [];
    Play1_2Components.push(polygon_8);
    Play1_2Components.push(p1_3);
    Play1_2Components.push(Player1_3);
    Play1_2Components.push(writingpic_2);
    Play1_2Components.push(text_28);
    Play1_2Components.push(instruments_2);
    Play1_2Components.push(text_29);
    Play1_2Components.push(knitting_2);
    Play1_2Components.push(yes1_4);
    Play1_2Components.push(text_38);
    Play1_2Components.push(key_resp_7);
    
    for (const thisComponent of Play1_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Play1_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Play1_2' ---
    // get current time
    t = Play1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_8* updates
    if (t >= 0.0 && polygon_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_8.tStart = t;  // (not accounting for frame time here)
      polygon_8.frameNStart = frameN;  // exact frame index
      
      polygon_8.setAutoDraw(true);
    }
    
    
    // *p1_3* updates
    if (t >= 0.0 && p1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_3.tStart = t;  // (not accounting for frame time here)
      p1_3.frameNStart = frameN;  // exact frame index
      
      p1_3.setAutoDraw(true);
    }
    
    
    // *Player1_3* updates
    if (t >= 0.0 && Player1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_3.tStart = t;  // (not accounting for frame time here)
      Player1_3.frameNStart = frameN;  // exact frame index
      
      Player1_3.setAutoDraw(true);
    }
    
    
    // *writingpic_2* updates
    if (t >= 0.0 && writingpic_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_2.tStart = t;  // (not accounting for frame time here)
      writingpic_2.frameNStart = frameN;  // exact frame index
      
      writingpic_2.setAutoDraw(true);
    }
    
    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }
    
    
    // *instruments_2* updates
    if (t >= 0.0 && instruments_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_2.tStart = t;  // (not accounting for frame time here)
      instruments_2.frameNStart = frameN;  // exact frame index
      
      instruments_2.setAutoDraw(true);
    }
    
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }
    
    
    // *knitting_2* updates
    if (t >= 0.0 && knitting_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_2.tStart = t;  // (not accounting for frame time here)
      knitting_2.frameNStart = frameN;  // exact frame index
      
      knitting_2.setAutoDraw(true);
    }
    
    
    // *yes1_4* updates
    if (t >= 0.0 && yes1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_4.tStart = t;  // (not accounting for frame time here)
      yes1_4.frameNStart = frameN;  // exact frame index
      
      yes1_4.setAutoDraw(true);
    }
    
    
    // *text_38* updates
    if (t >= 0.0 && text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_38.tStart = t;  // (not accounting for frame time here)
      text_38.frameNStart = frameN;  // exact frame index
      
      text_38.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Play1_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Play1_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Play1_2' ---
    for (const thisComponent of Play1_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Play1_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Play1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnop1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnop1' ---
    t = 0;
    topnop1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnop1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    if ((friendChoice.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    topnop1Components = [];
    topnop1Components.push(polygon_12);
    topnop1Components.push(Player1_5);
    topnop1Components.push(writt);
    topnop1Components.push(var_3);
    topnop1Components.push(piano);
    topnop1Components.push(var_8);
    topnop1Components.push(knittingg);
    topnop1Components.push(text_32);
    topnop1Components.push(p1_5);
    topnop1Components.push(you_3);
    topnop1Components.push(chatting_3);
    topnop1Components.push(chat_3);
    topnop1Components.push(sports_3);
    topnop1Components.push(sport_3);
    topnop1Components.push(beach_3);
    topnop1Components.push(beach_txt_3);
    topnop1Components.push(participantpic_6);
    topnop1Components.push(no_3);
    topnop1Components.push(key_resp_8);
    
    for (const thisComponent of topnop1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnop1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnop1' ---
    // get current time
    t = topnop1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_12* updates
    if (t >= 2.5 && polygon_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_12.tStart = t;  // (not accounting for frame time here)
      polygon_12.frameNStart = frameN;  // exact frame index
      
      polygon_12.setAutoDraw(true);
    }
    
    
    // *Player1_5* updates
    if (t >= 0.0 && Player1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_5.tStart = t;  // (not accounting for frame time here)
      Player1_5.frameNStart = frameN;  // exact frame index
      
      Player1_5.setAutoDraw(true);
    }
    
    
    // *writt* updates
    if (t >= 0.0 && writt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writt.tStart = t;  // (not accounting for frame time here)
      writt.frameNStart = frameN;  // exact frame index
      
      writt.setAutoDraw(true);
    }
    
    
    // *var_3* updates
    if (t >= 0.0 && var_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_3.tStart = t;  // (not accounting for frame time here)
      var_3.frameNStart = frameN;  // exact frame index
      
      var_3.setAutoDraw(true);
    }
    
    
    // *piano* updates
    if (t >= 0.0 && piano.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piano.tStart = t;  // (not accounting for frame time here)
      piano.frameNStart = frameN;  // exact frame index
      
      piano.setAutoDraw(true);
    }
    
    
    // *var_8* updates
    if (t >= 0.0 && var_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_8.tStart = t;  // (not accounting for frame time here)
      var_8.frameNStart = frameN;  // exact frame index
      
      var_8.setAutoDraw(true);
    }
    
    
    // *knittingg* updates
    if (t >= 0.0 && knittingg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knittingg.tStart = t;  // (not accounting for frame time here)
      knittingg.frameNStart = frameN;  // exact frame index
      
      knittingg.setAutoDraw(true);
    }
    
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }
    
    
    // *p1_5* updates
    if (t >= 0.0 && p1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_5.tStart = t;  // (not accounting for frame time here)
      p1_5.frameNStart = frameN;  // exact frame index
      
      p1_5.setAutoDraw(true);
    }
    
    
    // *you_3* updates
    if (t >= 1.0 && you_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_3.tStart = t;  // (not accounting for frame time here)
      you_3.frameNStart = frameN;  // exact frame index
      
      you_3.setAutoDraw(true);
    }
    
    
    // *chatting_3* updates
    if (t >= 1.0 && chatting_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_3.tStart = t;  // (not accounting for frame time here)
      chatting_3.frameNStart = frameN;  // exact frame index
      
      chatting_3.setAutoDraw(true);
    }
    
    
    // *chat_3* updates
    if (t >= 1.0 && chat_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_3.tStart = t;  // (not accounting for frame time here)
      chat_3.frameNStart = frameN;  // exact frame index
      
      chat_3.setAutoDraw(true);
    }
    
    
    // *sports_3* updates
    if (t >= 1.0 && sports_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_3.tStart = t;  // (not accounting for frame time here)
      sports_3.frameNStart = frameN;  // exact frame index
      
      sports_3.setAutoDraw(true);
    }
    
    
    // *sport_3* updates
    if (t >= 1.0 && sport_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_3.tStart = t;  // (not accounting for frame time here)
      sport_3.frameNStart = frameN;  // exact frame index
      
      sport_3.setAutoDraw(true);
    }
    
    
    // *beach_3* updates
    if (t >= 1.0 && beach_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_3.tStart = t;  // (not accounting for frame time here)
      beach_3.frameNStart = frameN;  // exact frame index
      
      beach_3.setAutoDraw(true);
    }
    
    
    // *beach_txt_3* updates
    if (t >= 1.0 && beach_txt_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_3.tStart = t;  // (not accounting for frame time here)
      beach_txt_3.frameNStart = frameN;  // exact frame index
      
      beach_txt_3.setAutoDraw(true);
    }
    
    
    // *participantpic_6* updates
    if (t >= 1.0 && participantpic_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_6.tStart = t;  // (not accounting for frame time here)
      participantpic_6.frameNStart = frameN;  // exact frame index
      
      participantpic_6.setAutoDraw(true);
    }
    
    
    // *no_3* updates
    if (t >= 2.5 && no_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_3.tStart = t;  // (not accounting for frame time here)
      no_3.frameNStart = frameN;  // exact frame index
      
      no_3.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnop1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnop1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnop1' ---
    for (const thisComponent of topnop1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnop1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "topnop1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function play2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'play2_2' ---
    t = 0;
    play2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('play2_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_7
    if ((friendChoice.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    play2_2Components = [];
    play2_2Components.push(polygon_10);
    play2_2Components.push(text_27);
    play2_2Components.push(player_3);
    play2_2Components.push(beachpic_2);
    play2_2Components.push(text_25);
    play2_2Components.push(writingpic2_2);
    play2_2Components.push(text_26);
    play2_2Components.push(cycling_2);
    play2_2Components.push(text_30);
    play2_2Components.push(yes1_3);
    play2_2Components.push(key_resp_9);
    
    for (const thisComponent of play2_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function play2_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'play2_2' ---
    // get current time
    t = play2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_10* updates
    if (t >= 0.0 && polygon_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_10.tStart = t;  // (not accounting for frame time here)
      polygon_10.frameNStart = frameN;  // exact frame index
      
      polygon_10.setAutoDraw(true);
    }
    
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }
    
    
    // *player_3* updates
    if (t >= 0.0 && player_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player_3.tStart = t;  // (not accounting for frame time here)
      player_3.frameNStart = frameN;  // exact frame index
      
      player_3.setAutoDraw(true);
    }
    
    
    // *beachpic_2* updates
    if (t >= 0.0 && beachpic_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_2.tStart = t;  // (not accounting for frame time here)
      beachpic_2.frameNStart = frameN;  // exact frame index
      
      beachpic_2.setAutoDraw(true);
    }
    
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }
    
    
    // *writingpic2_2* updates
    if (t >= 0.0 && writingpic2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_2.tStart = t;  // (not accounting for frame time here)
      writingpic2_2.frameNStart = frameN;  // exact frame index
      
      writingpic2_2.setAutoDraw(true);
    }
    
    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }
    
    
    // *cycling_2* updates
    if (t >= 0.0 && cycling_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_2.tStart = t;  // (not accounting for frame time here)
      cycling_2.frameNStart = frameN;  // exact frame index
      
      cycling_2.setAutoDraw(true);
    }
    
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }
    
    
    // *yes1_3* updates
    if (t >= 0.0 && yes1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_3.tStart = t;  // (not accounting for frame time here)
      yes1_3.frameNStart = frameN;  // exact frame index
      
      yes1_3.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of play2_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function play2_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'play2_2' ---
    for (const thisComponent of play2_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('play2_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "play2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnop2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnop2' ---
    t = 0;
    topnop2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnop2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_8
    if ((friendChoice.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    topnop2Components = [];
    topnop2Components.push(polygon_14);
    topnop2Components.push(Player1_6);
    topnop2Components.push(beach1);
    topnop2Components.push(var_9);
    topnop2Components.push(write);
    topnop2Components.push(var_10);
    topnop2Components.push(cycle);
    topnop2Components.push(text_33);
    topnop2Components.push(p1_6);
    topnop2Components.push(you_4);
    topnop2Components.push(chatting_4);
    topnop2Components.push(chat_4);
    topnop2Components.push(sports_4);
    topnop2Components.push(sport_4);
    topnop2Components.push(beach_4);
    topnop2Components.push(beach_txt_4);
    topnop2Components.push(participantpic_2);
    topnop2Components.push(no_4);
    topnop2Components.push(key_resp_14);
    
    for (const thisComponent of topnop2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnop2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnop2' ---
    // get current time
    t = topnop2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_14* updates
    if (t >= 2.5 && polygon_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_14.tStart = t;  // (not accounting for frame time here)
      polygon_14.frameNStart = frameN;  // exact frame index
      
      polygon_14.setAutoDraw(true);
    }
    
    
    // *Player1_6* updates
    if (t >= 0.0 && Player1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_6.tStart = t;  // (not accounting for frame time here)
      Player1_6.frameNStart = frameN;  // exact frame index
      
      Player1_6.setAutoDraw(true);
    }
    
    
    // *beach1* updates
    if (t >= 0.0 && beach1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach1.tStart = t;  // (not accounting for frame time here)
      beach1.frameNStart = frameN;  // exact frame index
      
      beach1.setAutoDraw(true);
    }
    
    
    // *var_9* updates
    if (t >= 0.0 && var_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_9.tStart = t;  // (not accounting for frame time here)
      var_9.frameNStart = frameN;  // exact frame index
      
      var_9.setAutoDraw(true);
    }
    
    
    // *write* updates
    if (t >= 0.0 && write.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      write.tStart = t;  // (not accounting for frame time here)
      write.frameNStart = frameN;  // exact frame index
      
      write.setAutoDraw(true);
    }
    
    
    // *var_10* updates
    if (t >= 0.0 && var_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_10.tStart = t;  // (not accounting for frame time here)
      var_10.frameNStart = frameN;  // exact frame index
      
      var_10.setAutoDraw(true);
    }
    
    
    // *cycle* updates
    if (t >= 0.0 && cycle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycle.tStart = t;  // (not accounting for frame time here)
      cycle.frameNStart = frameN;  // exact frame index
      
      cycle.setAutoDraw(true);
    }
    
    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }
    
    
    // *p1_6* updates
    if (t >= 0.0 && p1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_6.tStart = t;  // (not accounting for frame time here)
      p1_6.frameNStart = frameN;  // exact frame index
      
      p1_6.setAutoDraw(true);
    }
    
    
    // *you_4* updates
    if (t >= 1.0 && you_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_4.tStart = t;  // (not accounting for frame time here)
      you_4.frameNStart = frameN;  // exact frame index
      
      you_4.setAutoDraw(true);
    }
    
    
    // *chatting_4* updates
    if (t >= 1.0 && chatting_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_4.tStart = t;  // (not accounting for frame time here)
      chatting_4.frameNStart = frameN;  // exact frame index
      
      chatting_4.setAutoDraw(true);
    }
    
    
    // *chat_4* updates
    if (t >= 1.0 && chat_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_4.tStart = t;  // (not accounting for frame time here)
      chat_4.frameNStart = frameN;  // exact frame index
      
      chat_4.setAutoDraw(true);
    }
    
    
    // *sports_4* updates
    if (t >= 1.0 && sports_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_4.tStart = t;  // (not accounting for frame time here)
      sports_4.frameNStart = frameN;  // exact frame index
      
      sports_4.setAutoDraw(true);
    }
    
    
    // *sport_4* updates
    if (t >= 1.0 && sport_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_4.tStart = t;  // (not accounting for frame time here)
      sport_4.frameNStart = frameN;  // exact frame index
      
      sport_4.setAutoDraw(true);
    }
    
    
    // *beach_4* updates
    if (t >= 1.0 && beach_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_4.tStart = t;  // (not accounting for frame time here)
      beach_4.frameNStart = frameN;  // exact frame index
      
      beach_4.setAutoDraw(true);
    }
    
    
    // *beach_txt_4* updates
    if (t >= 1.0 && beach_txt_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_4.tStart = t;  // (not accounting for frame time here)
      beach_txt_4.frameNStart = frameN;  // exact frame index
      
      beach_txt_4.setAutoDraw(true);
    }
    
    
    // *participantpic_2* updates
    if (t >= 1.0 && participantpic_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_2.tStart = t;  // (not accounting for frame time here)
      participantpic_2.frameNStart = frameN;  // exact frame index
      
      participantpic_2.setAutoDraw(true);
    }
    
    
    // *no_4* updates
    if (t >= 2.5 && no_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_4.tStart = t;  // (not accounting for frame time here)
      no_4.frameNStart = frameN;  // exact frame index
      
      no_4.setAutoDraw(true);
    }
    
    
    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }
    
    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        key_resp_14.duration = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnop2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnop2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnop2' ---
    for (const thisComponent of topnop2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnop2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_14.corr, level);
    }
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        psychoJS.experiment.addData('key_resp_14.duration', key_resp_14.duration);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // the Routine "topnop2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function wait_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_2' ---
    t = 0;
    wait_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_2.started', globalClock.getTime());
    // keep track of which components have finished
    wait_2Components = [];
    wait_2Components.push(polygon_2);
    wait_2Components.push(text_36);
    
    for (const thisComponent of wait_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function wait_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_2' ---
    // get current time
    t = wait_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 3) {
        continueRoutine = false
    }
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }
    
    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wait_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function wait_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_2' ---
    for (const thisComponent of wait_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait_2.stopped', globalClock.getTime());
    // the Routine "wait_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine_3' ---
    t = 0;
    ChoiceRoutine_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine_3.started', globalClock.getTime());
    friendChoice_2.keys = undefined;
    friendChoice_2.rt = undefined;
    _friendChoice_2_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutine_3Components = [];
    ChoiceRoutine_3Components.push(Who_3);
    ChoiceRoutine_3Components.push(text_21);
    ChoiceRoutine_3Components.push(text_39);
    ChoiceRoutine_3Components.push(Player1demo_3);
    ChoiceRoutine_3Components.push(Player2demo_3);
    ChoiceRoutine_3Components.push(writingpic_3);
    ChoiceRoutine_3Components.push(text_40);
    ChoiceRoutine_3Components.push(instruments_3);
    ChoiceRoutine_3Components.push(text_41);
    ChoiceRoutine_3Components.push(knitting_3);
    ChoiceRoutine_3Components.push(text_42);
    ChoiceRoutine_3Components.push(beachpic_3);
    ChoiceRoutine_3Components.push(text_45);
    ChoiceRoutine_3Components.push(writingpic2_3);
    ChoiceRoutine_3Components.push(text_43);
    ChoiceRoutine_3Components.push(cycling_3);
    ChoiceRoutine_3Components.push(text_44);
    ChoiceRoutine_3Components.push(friendChoice_2);
    
    for (const thisComponent of ChoiceRoutine_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine_3' ---
    // get current time
    t = ChoiceRoutine_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who_3* updates
    if (t >= 0.0 && Who_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who_3.tStart = t;  // (not accounting for frame time here)
      Who_3.frameNStart = frameN;  // exact frame index
      
      Who_3.setAutoDraw(true);
    }
    
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    
    // *text_39* updates
    if (t >= 0.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_39.tStart = t;  // (not accounting for frame time here)
      text_39.frameNStart = frameN;  // exact frame index
      
      text_39.setAutoDraw(true);
    }
    
    
    // *Player1demo_3* updates
    if (t >= 0.0 && Player1demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo_3.tStart = t;  // (not accounting for frame time here)
      Player1demo_3.frameNStart = frameN;  // exact frame index
      
      Player1demo_3.setAutoDraw(true);
    }
    
    
    // *Player2demo_3* updates
    if (t >= 0.0 && Player2demo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo_3.tStart = t;  // (not accounting for frame time here)
      Player2demo_3.frameNStart = frameN;  // exact frame index
      
      Player2demo_3.setAutoDraw(true);
    }
    
    
    // *writingpic_3* updates
    if (t >= 0.0 && writingpic_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_3.tStart = t;  // (not accounting for frame time here)
      writingpic_3.frameNStart = frameN;  // exact frame index
      
      writingpic_3.setAutoDraw(true);
    }
    
    
    // *text_40* updates
    if (t >= 0.0 && text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_40.tStart = t;  // (not accounting for frame time here)
      text_40.frameNStart = frameN;  // exact frame index
      
      text_40.setAutoDraw(true);
    }
    
    
    // *instruments_3* updates
    if (t >= 0.0 && instruments_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_3.tStart = t;  // (not accounting for frame time here)
      instruments_3.frameNStart = frameN;  // exact frame index
      
      instruments_3.setAutoDraw(true);
    }
    
    
    // *text_41* updates
    if (t >= 0.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_41.tStart = t;  // (not accounting for frame time here)
      text_41.frameNStart = frameN;  // exact frame index
      
      text_41.setAutoDraw(true);
    }
    
    
    // *knitting_3* updates
    if (t >= 0.0 && knitting_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_3.tStart = t;  // (not accounting for frame time here)
      knitting_3.frameNStart = frameN;  // exact frame index
      
      knitting_3.setAutoDraw(true);
    }
    
    
    // *text_42* updates
    if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
    }
    
    
    // *beachpic_3* updates
    if (t >= 0.0 && beachpic_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_3.tStart = t;  // (not accounting for frame time here)
      beachpic_3.frameNStart = frameN;  // exact frame index
      
      beachpic_3.setAutoDraw(true);
    }
    
    
    // *text_45* updates
    if (t >= 0.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_45.tStart = t;  // (not accounting for frame time here)
      text_45.frameNStart = frameN;  // exact frame index
      
      text_45.setAutoDraw(true);
    }
    
    
    // *writingpic2_3* updates
    if (t >= 0.0 && writingpic2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_3.tStart = t;  // (not accounting for frame time here)
      writingpic2_3.frameNStart = frameN;  // exact frame index
      
      writingpic2_3.setAutoDraw(true);
    }
    
    
    // *text_43* updates
    if (t >= 0.0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }
    
    
    // *cycling_3* updates
    if (t >= 0.0 && cycling_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_3.tStart = t;  // (not accounting for frame time here)
      cycling_3.frameNStart = frameN;  // exact frame index
      
      cycling_3.setAutoDraw(true);
    }
    
    
    // *text_44* updates
    if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }
    
    
    // *friendChoice_2* updates
    if (t >= 0.0 && friendChoice_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      friendChoice_2.tStart = t;  // (not accounting for frame time here)
      friendChoice_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { friendChoice_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_2.clearEvents(); });
    }
    
    if (friendChoice_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = friendChoice_2.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _friendChoice_2_allKeys = _friendChoice_2_allKeys.concat(theseKeys);
      if (_friendChoice_2_allKeys.length > 0) {
        friendChoice_2.keys = _friendChoice_2_allKeys[_friendChoice_2_allKeys.length - 1].name;  // just the last key pressed
        friendChoice_2.rt = _friendChoice_2_allKeys[_friendChoice_2_allKeys.length - 1].rt;
        friendChoice_2.duration = _friendChoice_2_allKeys[_friendChoice_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutine_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutine_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine_3' ---
    for (const thisComponent of ChoiceRoutine_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(friendChoice_2.corr, level);
    }
    psychoJS.experiment.addData('friendChoice_2.keys', friendChoice_2.keys);
    if (typeof friendChoice_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('friendChoice_2.rt', friendChoice_2.rt);
        psychoJS.experiment.addData('friendChoice_2.duration', friendChoice_2.duration);
        routineTimer.reset();
        }
    
    friendChoice_2.stop();
    // the Routine "ChoiceRoutine_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player1_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player1_3' ---
    t = 0;
    player1_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player1_3.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_9
    if ((friendChoice_2.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    player1_3Components = [];
    player1_3Components.push(polygon_9);
    player1_3Components.push(p1_9);
    player1_3Components.push(Player1_4);
    player1_3Components.push(writingpic_4);
    player1_3Components.push(text_46);
    player1_3Components.push(instruments_4);
    player1_3Components.push(text_47);
    player1_3Components.push(knitting_4);
    player1_3Components.push(yes1_5);
    player1_3Components.push(text_49);
    player1_3Components.push(key_resp_11);
    
    for (const thisComponent of player1_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player1_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player1_3' ---
    // get current time
    t = player1_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_9* updates
    if (t >= 0.0 && polygon_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_9.tStart = t;  // (not accounting for frame time here)
      polygon_9.frameNStart = frameN;  // exact frame index
      
      polygon_9.setAutoDraw(true);
    }
    
    
    // *p1_9* updates
    if (t >= 0.0 && p1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_9.tStart = t;  // (not accounting for frame time here)
      p1_9.frameNStart = frameN;  // exact frame index
      
      p1_9.setAutoDraw(true);
    }
    
    
    // *Player1_4* updates
    if (t >= 0.0 && Player1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_4.tStart = t;  // (not accounting for frame time here)
      Player1_4.frameNStart = frameN;  // exact frame index
      
      Player1_4.setAutoDraw(true);
    }
    
    
    // *writingpic_4* updates
    if (t >= 0.0 && writingpic_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_4.tStart = t;  // (not accounting for frame time here)
      writingpic_4.frameNStart = frameN;  // exact frame index
      
      writingpic_4.setAutoDraw(true);
    }
    
    
    // *text_46* updates
    if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }
    
    
    // *instruments_4* updates
    if (t >= 0.0 && instruments_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_4.tStart = t;  // (not accounting for frame time here)
      instruments_4.frameNStart = frameN;  // exact frame index
      
      instruments_4.setAutoDraw(true);
    }
    
    
    // *text_47* updates
    if (t >= 0.0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_47.tStart = t;  // (not accounting for frame time here)
      text_47.frameNStart = frameN;  // exact frame index
      
      text_47.setAutoDraw(true);
    }
    
    
    // *knitting_4* updates
    if (t >= 0.0 && knitting_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_4.tStart = t;  // (not accounting for frame time here)
      knitting_4.frameNStart = frameN;  // exact frame index
      
      knitting_4.setAutoDraw(true);
    }
    
    
    // *yes1_5* updates
    if (t >= 0.0 && yes1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_5.tStart = t;  // (not accounting for frame time here)
      yes1_5.frameNStart = frameN;  // exact frame index
      
      yes1_5.setAutoDraw(true);
    }
    
    
    // *text_49* updates
    if (t >= 0.0 && text_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_49.tStart = t;  // (not accounting for frame time here)
      text_49.frameNStart = frameN;  // exact frame index
      
      text_49.setAutoDraw(true);
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player1_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player1_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player1_3' ---
    for (const thisComponent of player1_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player1_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "player1_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnsp1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnsp1' ---
    t = 0;
    topnsp1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnsp1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_11
    if ((friendChoice_2.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    topnsp1Components = [];
    topnsp1Components.push(polygon_35);
    topnsp1Components.push(Player1_7);
    topnsp1Components.push(draw);
    topnsp1Components.push(wright);
    topnsp1Components.push(pianoo);
    topnsp1Components.push(var_12);
    topnsp1Components.push(knit);
    topnsp1Components.push(text_34);
    topnsp1Components.push(p1_7);
    topnsp1Components.push(you_5);
    topnsp1Components.push(chatting_5);
    topnsp1Components.push(chat_5);
    topnsp1Components.push(sports_5);
    topnsp1Components.push(sport_5);
    topnsp1Components.push(beach_5);
    topnsp1Components.push(beach_txt_5);
    topnsp1Components.push(participantpic_3);
    topnsp1Components.push(notseen);
    topnsp1Components.push(key_resp_12);
    
    for (const thisComponent of topnsp1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnsp1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnsp1' ---
    // get current time
    t = topnsp1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_35* updates
    if (t >= 2.5 && polygon_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_35.tStart = t;  // (not accounting for frame time here)
      polygon_35.frameNStart = frameN;  // exact frame index
      
      polygon_35.setAutoDraw(true);
    }
    
    
    // *Player1_7* updates
    if (t >= 0.0 && Player1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_7.tStart = t;  // (not accounting for frame time here)
      Player1_7.frameNStart = frameN;  // exact frame index
      
      Player1_7.setAutoDraw(true);
    }
    
    
    // *draw* updates
    if (t >= 0.0 && draw.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      draw.tStart = t;  // (not accounting for frame time here)
      draw.frameNStart = frameN;  // exact frame index
      
      draw.setAutoDraw(true);
    }
    
    
    // *wright* updates
    if (t >= 0.0 && wright.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wright.tStart = t;  // (not accounting for frame time here)
      wright.frameNStart = frameN;  // exact frame index
      
      wright.setAutoDraw(true);
    }
    
    
    // *pianoo* updates
    if (t >= 0.0 && pianoo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pianoo.tStart = t;  // (not accounting for frame time here)
      pianoo.frameNStart = frameN;  // exact frame index
      
      pianoo.setAutoDraw(true);
    }
    
    
    // *var_12* updates
    if (t >= 0.0 && var_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_12.tStart = t;  // (not accounting for frame time here)
      var_12.frameNStart = frameN;  // exact frame index
      
      var_12.setAutoDraw(true);
    }
    
    
    // *knit* updates
    if (t >= 0.0 && knit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knit.tStart = t;  // (not accounting for frame time here)
      knit.frameNStart = frameN;  // exact frame index
      
      knit.setAutoDraw(true);
    }
    
    
    // *text_34* updates
    if (t >= 0.0 && text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_34.tStart = t;  // (not accounting for frame time here)
      text_34.frameNStart = frameN;  // exact frame index
      
      text_34.setAutoDraw(true);
    }
    
    
    // *p1_7* updates
    if (t >= 0.0 && p1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_7.tStart = t;  // (not accounting for frame time here)
      p1_7.frameNStart = frameN;  // exact frame index
      
      p1_7.setAutoDraw(true);
    }
    
    
    // *you_5* updates
    if (t >= 1.0 && you_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_5.tStart = t;  // (not accounting for frame time here)
      you_5.frameNStart = frameN;  // exact frame index
      
      you_5.setAutoDraw(true);
    }
    
    
    // *chatting_5* updates
    if (t >= 1.0 && chatting_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_5.tStart = t;  // (not accounting for frame time here)
      chatting_5.frameNStart = frameN;  // exact frame index
      
      chatting_5.setAutoDraw(true);
    }
    
    
    // *chat_5* updates
    if (t >= 1.0 && chat_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_5.tStart = t;  // (not accounting for frame time here)
      chat_5.frameNStart = frameN;  // exact frame index
      
      chat_5.setAutoDraw(true);
    }
    
    
    // *sports_5* updates
    if (t >= 1.0 && sports_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_5.tStart = t;  // (not accounting for frame time here)
      sports_5.frameNStart = frameN;  // exact frame index
      
      sports_5.setAutoDraw(true);
    }
    
    
    // *sport_5* updates
    if (t >= 1.0 && sport_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_5.tStart = t;  // (not accounting for frame time here)
      sport_5.frameNStart = frameN;  // exact frame index
      
      sport_5.setAutoDraw(true);
    }
    
    
    // *beach_5* updates
    if (t >= 1.0 && beach_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_5.tStart = t;  // (not accounting for frame time here)
      beach_5.frameNStart = frameN;  // exact frame index
      
      beach_5.setAutoDraw(true);
    }
    
    
    // *beach_txt_5* updates
    if (t >= 1.0 && beach_txt_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_5.tStart = t;  // (not accounting for frame time here)
      beach_txt_5.frameNStart = frameN;  // exact frame index
      
      beach_txt_5.setAutoDraw(true);
    }
    
    
    // *participantpic_3* updates
    if (t >= 1.0 && participantpic_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_3.tStart = t;  // (not accounting for frame time here)
      participantpic_3.frameNStart = frameN;  // exact frame index
      
      participantpic_3.setAutoDraw(true);
    }
    
    
    // *notseen* updates
    if (t >= 2.5 && notseen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notseen.tStart = t;  // (not accounting for frame time here)
      notseen.frameNStart = frameN;  // exact frame index
      
      notseen.setAutoDraw(true);
    }
    
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }
    
    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnsp1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnsp1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnsp1' ---
    for (const thisComponent of topnsp1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnsp1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "topnsp1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player2_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player2_3' ---
    t = 0;
    player2_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player2_3.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_10
    if ((friendChoice_2.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    player2_3Components = [];
    player2_3Components.push(polygon_11);
    player2_3Components.push(text_50);
    player2_3Components.push(player_4);
    player2_3Components.push(beachpic_4);
    player2_3Components.push(text_51);
    player2_3Components.push(writingpic2_4);
    player2_3Components.push(text_52);
    player2_3Components.push(cycling_4);
    player2_3Components.push(text_53);
    player2_3Components.push(yes1_6);
    player2_3Components.push(key_resp_10);
    
    for (const thisComponent of player2_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player2_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player2_3' ---
    // get current time
    t = player2_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_11* updates
    if (t >= 0.0 && polygon_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_11.tStart = t;  // (not accounting for frame time here)
      polygon_11.frameNStart = frameN;  // exact frame index
      
      polygon_11.setAutoDraw(true);
    }
    
    
    // *text_50* updates
    if (t >= 0.0 && text_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_50.tStart = t;  // (not accounting for frame time here)
      text_50.frameNStart = frameN;  // exact frame index
      
      text_50.setAutoDraw(true);
    }
    
    
    // *player_4* updates
    if (t >= 0.0 && player_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player_4.tStart = t;  // (not accounting for frame time here)
      player_4.frameNStart = frameN;  // exact frame index
      
      player_4.setAutoDraw(true);
    }
    
    
    // *beachpic_4* updates
    if (t >= 0.0 && beachpic_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_4.tStart = t;  // (not accounting for frame time here)
      beachpic_4.frameNStart = frameN;  // exact frame index
      
      beachpic_4.setAutoDraw(true);
    }
    
    
    // *text_51* updates
    if (t >= 0.0 && text_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_51.tStart = t;  // (not accounting for frame time here)
      text_51.frameNStart = frameN;  // exact frame index
      
      text_51.setAutoDraw(true);
    }
    
    
    // *writingpic2_4* updates
    if (t >= 0.0 && writingpic2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_4.tStart = t;  // (not accounting for frame time here)
      writingpic2_4.frameNStart = frameN;  // exact frame index
      
      writingpic2_4.setAutoDraw(true);
    }
    
    
    // *text_52* updates
    if (t >= 0.0 && text_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_52.tStart = t;  // (not accounting for frame time here)
      text_52.frameNStart = frameN;  // exact frame index
      
      text_52.setAutoDraw(true);
    }
    
    
    // *cycling_4* updates
    if (t >= 0.0 && cycling_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_4.tStart = t;  // (not accounting for frame time here)
      cycling_4.frameNStart = frameN;  // exact frame index
      
      cycling_4.setAutoDraw(true);
    }
    
    
    // *text_53* updates
    if (t >= 0.0 && text_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_53.tStart = t;  // (not accounting for frame time here)
      text_53.frameNStart = frameN;  // exact frame index
      
      text_53.setAutoDraw(true);
    }
    
    
    // *yes1_6* updates
    if (t >= 0.0 && yes1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_6.tStart = t;  // (not accounting for frame time here)
      yes1_6.frameNStart = frameN;  // exact frame index
      
      yes1_6.setAutoDraw(true);
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player2_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player2_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player2_3' ---
    for (const thisComponent of player2_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player2_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "player2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnsp2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnsp2' ---
    t = 0;
    topnsp2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnsp2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_12
    if ((friendChoice_2.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    topnsp2Components = [];
    topnsp2Components.push(polygon_36);
    topnsp2Components.push(Player1_8);
    topnsp2Components.push(beachh);
    topnsp2Components.push(var_13);
    topnsp2Components.push(wrightt);
    topnsp2Components.push(var_14);
    topnsp2Components.push(cyc);
    topnsp2Components.push(text_35);
    topnsp2Components.push(p1_8);
    topnsp2Components.push(you_6);
    topnsp2Components.push(chatting_6);
    topnsp2Components.push(chat_6);
    topnsp2Components.push(sports_6);
    topnsp2Components.push(sport_6);
    topnsp2Components.push(beach_6);
    topnsp2Components.push(beach_txt_6);
    topnsp2Components.push(participantpic_4);
    topnsp2Components.push(notseen2);
    topnsp2Components.push(key_resp_13);
    
    for (const thisComponent of topnsp2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnsp2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnsp2' ---
    // get current time
    t = topnsp2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_36* updates
    if (t >= 2.5 && polygon_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_36.tStart = t;  // (not accounting for frame time here)
      polygon_36.frameNStart = frameN;  // exact frame index
      
      polygon_36.setAutoDraw(true);
    }
    
    
    // *Player1_8* updates
    if (t >= 0.0 && Player1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_8.tStart = t;  // (not accounting for frame time here)
      Player1_8.frameNStart = frameN;  // exact frame index
      
      Player1_8.setAutoDraw(true);
    }
    
    
    // *beachh* updates
    if (t >= 0.0 && beachh.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachh.tStart = t;  // (not accounting for frame time here)
      beachh.frameNStart = frameN;  // exact frame index
      
      beachh.setAutoDraw(true);
    }
    
    
    // *var_13* updates
    if (t >= 0.0 && var_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_13.tStart = t;  // (not accounting for frame time here)
      var_13.frameNStart = frameN;  // exact frame index
      
      var_13.setAutoDraw(true);
    }
    
    
    // *wrightt* updates
    if (t >= 0.0 && wrightt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrightt.tStart = t;  // (not accounting for frame time here)
      wrightt.frameNStart = frameN;  // exact frame index
      
      wrightt.setAutoDraw(true);
    }
    
    
    // *var_14* updates
    if (t >= 0.0 && var_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_14.tStart = t;  // (not accounting for frame time here)
      var_14.frameNStart = frameN;  // exact frame index
      
      var_14.setAutoDraw(true);
    }
    
    
    // *cyc* updates
    if (t >= 0.0 && cyc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cyc.tStart = t;  // (not accounting for frame time here)
      cyc.frameNStart = frameN;  // exact frame index
      
      cyc.setAutoDraw(true);
    }
    
    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }
    
    
    // *p1_8* updates
    if (t >= 0.0 && p1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_8.tStart = t;  // (not accounting for frame time here)
      p1_8.frameNStart = frameN;  // exact frame index
      
      p1_8.setAutoDraw(true);
    }
    
    
    // *you_6* updates
    if (t >= 1.0 && you_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_6.tStart = t;  // (not accounting for frame time here)
      you_6.frameNStart = frameN;  // exact frame index
      
      you_6.setAutoDraw(true);
    }
    
    
    // *chatting_6* updates
    if (t >= 1.0 && chatting_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_6.tStart = t;  // (not accounting for frame time here)
      chatting_6.frameNStart = frameN;  // exact frame index
      
      chatting_6.setAutoDraw(true);
    }
    
    
    // *chat_6* updates
    if (t >= 1.0 && chat_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_6.tStart = t;  // (not accounting for frame time here)
      chat_6.frameNStart = frameN;  // exact frame index
      
      chat_6.setAutoDraw(true);
    }
    
    
    // *sports_6* updates
    if (t >= 1.0 && sports_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_6.tStart = t;  // (not accounting for frame time here)
      sports_6.frameNStart = frameN;  // exact frame index
      
      sports_6.setAutoDraw(true);
    }
    
    
    // *sport_6* updates
    if (t >= 1.0 && sport_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_6.tStart = t;  // (not accounting for frame time here)
      sport_6.frameNStart = frameN;  // exact frame index
      
      sport_6.setAutoDraw(true);
    }
    
    
    // *beach_6* updates
    if (t >= 1.0 && beach_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_6.tStart = t;  // (not accounting for frame time here)
      beach_6.frameNStart = frameN;  // exact frame index
      
      beach_6.setAutoDraw(true);
    }
    
    
    // *beach_txt_6* updates
    if (t >= 1.0 && beach_txt_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_6.tStart = t;  // (not accounting for frame time here)
      beach_txt_6.frameNStart = frameN;  // exact frame index
      
      beach_txt_6.setAutoDraw(true);
    }
    
    
    // *participantpic_4* updates
    if (t >= 1.0 && participantpic_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_4.tStart = t;  // (not accounting for frame time here)
      participantpic_4.frameNStart = frameN;  // exact frame index
      
      participantpic_4.setAutoDraw(true);
    }
    
    
    // *notseen2* updates
    if (t >= 2.5 && notseen2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notseen2.tStart = t;  // (not accounting for frame time here)
      notseen2.frameNStart = frameN;  // exact frame index
      
      notseen2.setAutoDraw(true);
    }
    
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }
    
    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnsp2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnsp2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnsp2' ---
    for (const thisComponent of topnsp2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnsp2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "topnsp2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function wait_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_3' ---
    t = 0;
    wait_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_3.started', globalClock.getTime());
    // keep track of which components have finished
    wait_3Components = [];
    wait_3Components.push(polygon_3);
    wait_3Components.push(text_67);
    
    for (const thisComponent of wait_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function wait_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_3' ---
    // get current time
    t = wait_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 3) {
        continueRoutine = false
    }
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }
    
    
    // *text_67* updates
    if (t >= 0.0 && text_67.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_67.tStart = t;  // (not accounting for frame time here)
      text_67.frameNStart = frameN;  // exact frame index
      
      text_67.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wait_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function wait_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_3' ---
    for (const thisComponent of wait_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait_3.stopped', globalClock.getTime());
    // the Routine "wait_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine_4' ---
    t = 0;
    ChoiceRoutine_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine_4.started', globalClock.getTime());
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutine_4Components = [];
    ChoiceRoutine_4Components.push(Who_4);
    ChoiceRoutine_4Components.push(text_37);
    ChoiceRoutine_4Components.push(text_48);
    ChoiceRoutine_4Components.push(Player1demo_4);
    ChoiceRoutine_4Components.push(Player2demo_4);
    ChoiceRoutine_4Components.push(cooking_2);
    ChoiceRoutine_4Components.push(text_54);
    ChoiceRoutine_4Components.push(movies_2);
    ChoiceRoutine_4Components.push(text_55);
    ChoiceRoutine_4Components.push(dancing_2);
    ChoiceRoutine_4Components.push(text_56);
    ChoiceRoutine_4Components.push(fashion_4);
    ChoiceRoutine_4Components.push(text_57);
    ChoiceRoutine_4Components.push(movie_6);
    ChoiceRoutine_4Components.push(text_58);
    ChoiceRoutine_4Components.push(writing_3);
    ChoiceRoutine_4Components.push(text_59);
    ChoiceRoutine_4Components.push(key_resp_15);
    
    for (const thisComponent of ChoiceRoutine_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine_4' ---
    // get current time
    t = ChoiceRoutine_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who_4* updates
    if (t >= 0.0 && Who_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who_4.tStart = t;  // (not accounting for frame time here)
      Who_4.frameNStart = frameN;  // exact frame index
      
      Who_4.setAutoDraw(true);
    }
    
    
    // *text_37* updates
    if (t >= 0.0 && text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_37.tStart = t;  // (not accounting for frame time here)
      text_37.frameNStart = frameN;  // exact frame index
      
      text_37.setAutoDraw(true);
    }
    
    
    // *text_48* updates
    if (t >= 0.0 && text_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_48.tStart = t;  // (not accounting for frame time here)
      text_48.frameNStart = frameN;  // exact frame index
      
      text_48.setAutoDraw(true);
    }
    
    
    // *Player1demo_4* updates
    if (t >= 0.0 && Player1demo_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo_4.tStart = t;  // (not accounting for frame time here)
      Player1demo_4.frameNStart = frameN;  // exact frame index
      
      Player1demo_4.setAutoDraw(true);
    }
    
    
    // *Player2demo_4* updates
    if (t >= 0.0 && Player2demo_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo_4.tStart = t;  // (not accounting for frame time here)
      Player2demo_4.frameNStart = frameN;  // exact frame index
      
      Player2demo_4.setAutoDraw(true);
    }
    
    
    // *cooking_2* updates
    if (t >= 0.0 && cooking_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cooking_2.tStart = t;  // (not accounting for frame time here)
      cooking_2.frameNStart = frameN;  // exact frame index
      
      cooking_2.setAutoDraw(true);
    }
    
    
    // *text_54* updates
    if (t >= 0.0 && text_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_54.tStart = t;  // (not accounting for frame time here)
      text_54.frameNStart = frameN;  // exact frame index
      
      text_54.setAutoDraw(true);
    }
    
    
    // *movies_2* updates
    if (t >= 0.0 && movies_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movies_2.tStart = t;  // (not accounting for frame time here)
      movies_2.frameNStart = frameN;  // exact frame index
      
      movies_2.setAutoDraw(true);
    }
    
    
    // *text_55* updates
    if (t >= 0.0 && text_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_55.tStart = t;  // (not accounting for frame time here)
      text_55.frameNStart = frameN;  // exact frame index
      
      text_55.setAutoDraw(true);
    }
    
    
    // *dancing_2* updates
    if (t >= 0.0 && dancing_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dancing_2.tStart = t;  // (not accounting for frame time here)
      dancing_2.frameNStart = frameN;  // exact frame index
      
      dancing_2.setAutoDraw(true);
    }
    
    
    // *text_56* updates
    if (t >= 0.0 && text_56.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_56.tStart = t;  // (not accounting for frame time here)
      text_56.frameNStart = frameN;  // exact frame index
      
      text_56.setAutoDraw(true);
    }
    
    
    // *fashion_4* updates
    if (t >= 0.0 && fashion_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fashion_4.tStart = t;  // (not accounting for frame time here)
      fashion_4.frameNStart = frameN;  // exact frame index
      
      fashion_4.setAutoDraw(true);
    }
    
    
    // *text_57* updates
    if (t >= 0.0 && text_57.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_57.tStart = t;  // (not accounting for frame time here)
      text_57.frameNStart = frameN;  // exact frame index
      
      text_57.setAutoDraw(true);
    }
    
    
    // *movie_6* updates
    if (t >= 0.0 && movie_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_6.tStart = t;  // (not accounting for frame time here)
      movie_6.frameNStart = frameN;  // exact frame index
      
      movie_6.setAutoDraw(true);
    }
    
    
    // *text_58* updates
    if (t >= 0.0 && text_58.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_58.tStart = t;  // (not accounting for frame time here)
      text_58.frameNStart = frameN;  // exact frame index
      
      text_58.setAutoDraw(true);
    }
    
    
    // *writing_3* updates
    if (t >= 0.0 && writing_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writing_3.tStart = t;  // (not accounting for frame time here)
      writing_3.frameNStart = frameN;  // exact frame index
      
      writing_3.setAutoDraw(true);
    }
    
    
    // *text_59* updates
    if (t >= 0.0 && text_59.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_59.tStart = t;  // (not accounting for frame time here)
      text_59.frameNStart = frameN;  // exact frame index
      
      text_59.setAutoDraw(true);
    }
    
    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }
    
    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        key_resp_15.duration = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutine_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutine_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine_4' ---
    for (const thisComponent of ChoiceRoutine_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_15.corr, level);
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        psychoJS.experiment.addData('key_resp_15.duration', key_resp_15.duration);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "ChoiceRoutine_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player1_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player1_4' ---
    t = 0;
    player1_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player1_4.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_13
    if ((key_resp.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    // keep track of which components have finished
    player1_4Components = [];
    player1_4Components.push(polygon_16);
    player1_4Components.push(Player1_9);
    player1_4Components.push(cook_3);
    player1_4Components.push(var_11);
    player1_4Components.push(movie_7);
    player1_4Components.push(var_15);
    player1_4Components.push(dance_3);
    player1_4Components.push(text_60);
    player1_4Components.push(p1_10);
    player1_4Components.push(yes1_7);
    player1_4Components.push(key_resp_16);
    
    for (const thisComponent of player1_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player1_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player1_4' ---
    // get current time
    t = player1_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_16* updates
    if (t >= 0.0 && polygon_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_16.tStart = t;  // (not accounting for frame time here)
      polygon_16.frameNStart = frameN;  // exact frame index
      
      polygon_16.setAutoDraw(true);
    }
    
    
    // *Player1_9* updates
    if (t >= 0.0 && Player1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_9.tStart = t;  // (not accounting for frame time here)
      Player1_9.frameNStart = frameN;  // exact frame index
      
      Player1_9.setAutoDraw(true);
    }
    
    
    // *cook_3* updates
    if (t >= 0.0 && cook_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cook_3.tStart = t;  // (not accounting for frame time here)
      cook_3.frameNStart = frameN;  // exact frame index
      
      cook_3.setAutoDraw(true);
    }
    
    
    // *var_11* updates
    if (t >= 0.0 && var_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_11.tStart = t;  // (not accounting for frame time here)
      var_11.frameNStart = frameN;  // exact frame index
      
      var_11.setAutoDraw(true);
    }
    
    
    // *movie_7* updates
    if (t >= 0.0 && movie_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_7.tStart = t;  // (not accounting for frame time here)
      movie_7.frameNStart = frameN;  // exact frame index
      
      movie_7.setAutoDraw(true);
    }
    
    
    // *var_15* updates
    if (t >= 0.0 && var_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_15.tStart = t;  // (not accounting for frame time here)
      var_15.frameNStart = frameN;  // exact frame index
      
      var_15.setAutoDraw(true);
    }
    
    
    // *dance_3* updates
    if (t >= 0.0 && dance_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dance_3.tStart = t;  // (not accounting for frame time here)
      dance_3.frameNStart = frameN;  // exact frame index
      
      dance_3.setAutoDraw(true);
    }
    
    
    // *text_60* updates
    if (t >= 0.0 && text_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_60.tStart = t;  // (not accounting for frame time here)
      text_60.frameNStart = frameN;  // exact frame index
      
      text_60.setAutoDraw(true);
    }
    
    
    // *p1_10* updates
    if (t >= 0.0 && p1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_10.tStart = t;  // (not accounting for frame time here)
      p1_10.frameNStart = frameN;  // exact frame index
      
      p1_10.setAutoDraw(true);
    }
    
    
    // *yes1_7* updates
    if (t >= 0.0 && yes1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_7.tStart = t;  // (not accounting for frame time here)
      yes1_7.frameNStart = frameN;  // exact frame index
      
      yes1_7.setAutoDraw(true);
    }
    
    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }
    
    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player1_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player1_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player1_4' ---
    for (const thisComponent of player1_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player1_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_16.corr, level);
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "player1_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topyesp1_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topyesp1_2' ---
    t = 0;
    topyesp1_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topyesp1_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_14
    if ((key_resp.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    topyesp1_2Components = [];
    topyesp1_2Components.push(polygon_17);
    topyesp1_2Components.push(Player1_10);
    topyesp1_2Components.push(cook_4);
    topyesp1_2Components.push(var_16);
    topyesp1_2Components.push(movie_8);
    topyesp1_2Components.push(var_17);
    topyesp1_2Components.push(dance_4);
    topyesp1_2Components.push(text_61);
    topyesp1_2Components.push(p1_11);
    topyesp1_2Components.push(you_7);
    topyesp1_2Components.push(chatting_7);
    topyesp1_2Components.push(chat_7);
    topyesp1_2Components.push(sports_7);
    topyesp1_2Components.push(sport_7);
    topyesp1_2Components.push(beach_7);
    topyesp1_2Components.push(beach_txt_7);
    topyesp1_2Components.push(participantpic_7);
    topyesp1_2Components.push(yess_2);
    topyesp1_2Components.push(key_resp_17);
    
    for (const thisComponent of topyesp1_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topyesp1_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topyesp1_2' ---
    // get current time
    t = topyesp1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_17* updates
    if (t >= 2.5 && polygon_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_17.tStart = t;  // (not accounting for frame time here)
      polygon_17.frameNStart = frameN;  // exact frame index
      
      polygon_17.setAutoDraw(true);
    }
    
    
    // *Player1_10* updates
    if (t >= 0.0 && Player1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_10.tStart = t;  // (not accounting for frame time here)
      Player1_10.frameNStart = frameN;  // exact frame index
      
      Player1_10.setAutoDraw(true);
    }
    
    
    // *cook_4* updates
    if (t >= 0.0 && cook_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cook_4.tStart = t;  // (not accounting for frame time here)
      cook_4.frameNStart = frameN;  // exact frame index
      
      cook_4.setAutoDraw(true);
    }
    
    
    // *var_16* updates
    if (t >= 0.0 && var_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_16.tStart = t;  // (not accounting for frame time here)
      var_16.frameNStart = frameN;  // exact frame index
      
      var_16.setAutoDraw(true);
    }
    
    
    // *movie_8* updates
    if (t >= 0.0 && movie_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_8.tStart = t;  // (not accounting for frame time here)
      movie_8.frameNStart = frameN;  // exact frame index
      
      movie_8.setAutoDraw(true);
    }
    
    
    // *var_17* updates
    if (t >= 0.0 && var_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_17.tStart = t;  // (not accounting for frame time here)
      var_17.frameNStart = frameN;  // exact frame index
      
      var_17.setAutoDraw(true);
    }
    
    
    // *dance_4* updates
    if (t >= 0.0 && dance_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dance_4.tStart = t;  // (not accounting for frame time here)
      dance_4.frameNStart = frameN;  // exact frame index
      
      dance_4.setAutoDraw(true);
    }
    
    
    // *text_61* updates
    if (t >= 0.0 && text_61.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_61.tStart = t;  // (not accounting for frame time here)
      text_61.frameNStart = frameN;  // exact frame index
      
      text_61.setAutoDraw(true);
    }
    
    
    // *p1_11* updates
    if (t >= 0.0 && p1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_11.tStart = t;  // (not accounting for frame time here)
      p1_11.frameNStart = frameN;  // exact frame index
      
      p1_11.setAutoDraw(true);
    }
    
    
    // *you_7* updates
    if (t >= 1.0 && you_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_7.tStart = t;  // (not accounting for frame time here)
      you_7.frameNStart = frameN;  // exact frame index
      
      you_7.setAutoDraw(true);
    }
    
    
    // *chatting_7* updates
    if (t >= 1.0 && chatting_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_7.tStart = t;  // (not accounting for frame time here)
      chatting_7.frameNStart = frameN;  // exact frame index
      
      chatting_7.setAutoDraw(true);
    }
    
    
    // *chat_7* updates
    if (t >= 1.0 && chat_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_7.tStart = t;  // (not accounting for frame time here)
      chat_7.frameNStart = frameN;  // exact frame index
      
      chat_7.setAutoDraw(true);
    }
    
    
    // *sports_7* updates
    if (t >= 1.0 && sports_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_7.tStart = t;  // (not accounting for frame time here)
      sports_7.frameNStart = frameN;  // exact frame index
      
      sports_7.setAutoDraw(true);
    }
    
    
    // *sport_7* updates
    if (t >= 1.0 && sport_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_7.tStart = t;  // (not accounting for frame time here)
      sport_7.frameNStart = frameN;  // exact frame index
      
      sport_7.setAutoDraw(true);
    }
    
    
    // *beach_7* updates
    if (t >= 1.0 && beach_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_7.tStart = t;  // (not accounting for frame time here)
      beach_7.frameNStart = frameN;  // exact frame index
      
      beach_7.setAutoDraw(true);
    }
    
    
    // *beach_txt_7* updates
    if (t >= 1.0 && beach_txt_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_7.tStart = t;  // (not accounting for frame time here)
      beach_txt_7.frameNStart = frameN;  // exact frame index
      
      beach_txt_7.setAutoDraw(true);
    }
    
    
    // *participantpic_7* updates
    if (t >= 1.0 && participantpic_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_7.tStart = t;  // (not accounting for frame time here)
      participantpic_7.frameNStart = frameN;  // exact frame index
      
      participantpic_7.setAutoDraw(true);
    }
    
    
    // *yess_2* updates
    if (t >= 2.5 && yess_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yess_2.tStart = t;  // (not accounting for frame time here)
      yess_2.frameNStart = frameN;  // exact frame index
      
      yess_2.setAutoDraw(true);
    }
    
    
    // *key_resp_17* updates
    if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }
    
    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        key_resp_17.duration = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topyesp1_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topyesp1_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topyesp1_2' ---
    for (const thisComponent of topyesp1_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topyesp1_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_17.corr, level);
    }
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
        psychoJS.experiment.addData('key_resp_17.duration', key_resp_17.duration);
        routineTimer.reset();
        }
    
    key_resp_17.stop();
    // the Routine "topyesp1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Player2_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Player2_3' ---
    t = 0;
    Player2_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Player2_3.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_15
    if ((key_resp.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // keep track of which components have finished
    Player2_3Components = [];
    Player2_3Components.push(polygon_18);
    Player2_3Components.push(player_2);
    Player2_3Components.push(fashion_5);
    Player2_3Components.push(text_62);
    Player2_3Components.push(movie_9);
    Player2_3Components.push(text_63);
    Player2_3Components.push(writing_4);
    Player2_3Components.push(text_64);
    Player2_3Components.push(yes1_8);
    Player2_3Components.push(text_65);
    Player2_3Components.push(key_resp_18);
    
    for (const thisComponent of Player2_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Player2_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Player2_3' ---
    // get current time
    t = Player2_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_18* updates
    if (t >= 0.0 && polygon_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_18.tStart = t;  // (not accounting for frame time here)
      polygon_18.frameNStart = frameN;  // exact frame index
      
      polygon_18.setAutoDraw(true);
    }
    
    
    // *player_2* updates
    if (t >= 0.0 && player_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player_2.tStart = t;  // (not accounting for frame time here)
      player_2.frameNStart = frameN;  // exact frame index
      
      player_2.setAutoDraw(true);
    }
    
    
    // *fashion_5* updates
    if (t >= 0.0 && fashion_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fashion_5.tStart = t;  // (not accounting for frame time here)
      fashion_5.frameNStart = frameN;  // exact frame index
      
      fashion_5.setAutoDraw(true);
    }
    
    
    // *text_62* updates
    if (t >= 0.0 && text_62.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_62.tStart = t;  // (not accounting for frame time here)
      text_62.frameNStart = frameN;  // exact frame index
      
      text_62.setAutoDraw(true);
    }
    
    
    // *movie_9* updates
    if (t >= 0.0 && movie_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_9.tStart = t;  // (not accounting for frame time here)
      movie_9.frameNStart = frameN;  // exact frame index
      
      movie_9.setAutoDraw(true);
    }
    
    
    // *text_63* updates
    if (t >= 0.0 && text_63.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_63.tStart = t;  // (not accounting for frame time here)
      text_63.frameNStart = frameN;  // exact frame index
      
      text_63.setAutoDraw(true);
    }
    
    
    // *writing_4* updates
    if (t >= 0.0 && writing_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writing_4.tStart = t;  // (not accounting for frame time here)
      writing_4.frameNStart = frameN;  // exact frame index
      
      writing_4.setAutoDraw(true);
    }
    
    
    // *text_64* updates
    if (t >= 0.0 && text_64.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_64.tStart = t;  // (not accounting for frame time here)
      text_64.frameNStart = frameN;  // exact frame index
      
      text_64.setAutoDraw(true);
    }
    
    
    // *yes1_8* updates
    if (t >= 0.0 && yes1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_8.tStart = t;  // (not accounting for frame time here)
      yes1_8.frameNStart = frameN;  // exact frame index
      
      yes1_8.setAutoDraw(true);
    }
    
    
    // *text_65* updates
    if (t >= 0.0 && text_65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_65.tStart = t;  // (not accounting for frame time here)
      text_65.frameNStart = frameN;  // exact frame index
      
      text_65.setAutoDraw(true);
    }
    
    
    // *key_resp_18* updates
    if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }
    
    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        key_resp_18.duration = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Player2_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Player2_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Player2_3' ---
    for (const thisComponent of Player2_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Player2_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        psychoJS.experiment.addData('key_resp_18.duration', key_resp_18.duration);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    // the Routine "Player2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topyesp2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topyesp2_2' ---
    t = 0;
    topyesp2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topyesp2_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_16
    if ((key_resp.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    // keep track of which components have finished
    topyesp2_2Components = [];
    topyesp2_2Components.push(polygon_19);
    topyesp2_2Components.push(Player2);
    topyesp2_2Components.push(fashion_6);
    topyesp2_2Components.push(var_18);
    topyesp2_2Components.push(movie_10);
    topyesp2_2Components.push(var_19);
    topyesp2_2Components.push(writ_2);
    topyesp2_2Components.push(text_66);
    topyesp2_2Components.push(p1_12);
    topyesp2_2Components.push(you_8);
    topyesp2_2Components.push(chatting_8);
    topyesp2_2Components.push(chat_8);
    topyesp2_2Components.push(sports_8);
    topyesp2_2Components.push(sport_8);
    topyesp2_2Components.push(beach_8);
    topyesp2_2Components.push(participantpic_8);
    topyesp2_2Components.push(beach_txt_8);
    topyesp2_2Components.push(yes_2);
    topyesp2_2Components.push(key_resp_19);
    
    for (const thisComponent of topyesp2_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topyesp2_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topyesp2_2' ---
    // get current time
    t = topyesp2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_19* updates
    if (t >= 2.5 && polygon_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_19.tStart = t;  // (not accounting for frame time here)
      polygon_19.frameNStart = frameN;  // exact frame index
      
      polygon_19.setAutoDraw(true);
    }
    
    
    // *Player2* updates
    if (t >= 0.0 && Player2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2.tStart = t;  // (not accounting for frame time here)
      Player2.frameNStart = frameN;  // exact frame index
      
      Player2.setAutoDraw(true);
    }
    
    
    // *fashion_6* updates
    if (t >= 0.0 && fashion_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fashion_6.tStart = t;  // (not accounting for frame time here)
      fashion_6.frameNStart = frameN;  // exact frame index
      
      fashion_6.setAutoDraw(true);
    }
    
    
    // *var_18* updates
    if (t >= 0.0 && var_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_18.tStart = t;  // (not accounting for frame time here)
      var_18.frameNStart = frameN;  // exact frame index
      
      var_18.setAutoDraw(true);
    }
    
    
    // *movie_10* updates
    if (t >= 0.0 && movie_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_10.tStart = t;  // (not accounting for frame time here)
      movie_10.frameNStart = frameN;  // exact frame index
      
      movie_10.setAutoDraw(true);
    }
    
    
    // *var_19* updates
    if (t >= 0.0 && var_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_19.tStart = t;  // (not accounting for frame time here)
      var_19.frameNStart = frameN;  // exact frame index
      
      var_19.setAutoDraw(true);
    }
    
    
    // *writ_2* updates
    if (t >= 0.0 && writ_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writ_2.tStart = t;  // (not accounting for frame time here)
      writ_2.frameNStart = frameN;  // exact frame index
      
      writ_2.setAutoDraw(true);
    }
    
    
    // *text_66* updates
    if (t >= 0.0 && text_66.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_66.tStart = t;  // (not accounting for frame time here)
      text_66.frameNStart = frameN;  // exact frame index
      
      text_66.setAutoDraw(true);
    }
    
    
    // *p1_12* updates
    if (t >= 0.0 && p1_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_12.tStart = t;  // (not accounting for frame time here)
      p1_12.frameNStart = frameN;  // exact frame index
      
      p1_12.setAutoDraw(true);
    }
    
    
    // *you_8* updates
    if (t >= 1.0 && you_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_8.tStart = t;  // (not accounting for frame time here)
      you_8.frameNStart = frameN;  // exact frame index
      
      you_8.setAutoDraw(true);
    }
    
    
    // *chatting_8* updates
    if (t >= 1.0 && chatting_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_8.tStart = t;  // (not accounting for frame time here)
      chatting_8.frameNStart = frameN;  // exact frame index
      
      chatting_8.setAutoDraw(true);
    }
    
    
    // *chat_8* updates
    if (t >= 1.0 && chat_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_8.tStart = t;  // (not accounting for frame time here)
      chat_8.frameNStart = frameN;  // exact frame index
      
      chat_8.setAutoDraw(true);
    }
    
    
    // *sports_8* updates
    if (t >= 1.0 && sports_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_8.tStart = t;  // (not accounting for frame time here)
      sports_8.frameNStart = frameN;  // exact frame index
      
      sports_8.setAutoDraw(true);
    }
    
    
    // *sport_8* updates
    if (t >= 1.0 && sport_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_8.tStart = t;  // (not accounting for frame time here)
      sport_8.frameNStart = frameN;  // exact frame index
      
      sport_8.setAutoDraw(true);
    }
    
    
    // *beach_8* updates
    if (t >= 1.0 && beach_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_8.tStart = t;  // (not accounting for frame time here)
      beach_8.frameNStart = frameN;  // exact frame index
      
      beach_8.setAutoDraw(true);
    }
    
    
    // *participantpic_8* updates
    if (t >= 1.0 && participantpic_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_8.tStart = t;  // (not accounting for frame time here)
      participantpic_8.frameNStart = frameN;  // exact frame index
      
      participantpic_8.setAutoDraw(true);
    }
    
    
    // *beach_txt_8* updates
    if (t >= 1.0 && beach_txt_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_8.tStart = t;  // (not accounting for frame time here)
      beach_txt_8.frameNStart = frameN;  // exact frame index
      
      beach_txt_8.setAutoDraw(true);
    }
    
    
    // *yes_2* updates
    if (t >= 2.5 && yes_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_2.tStart = t;  // (not accounting for frame time here)
      yes_2.frameNStart = frameN;  // exact frame index
      
      yes_2.setAutoDraw(true);
    }
    
    
    // *key_resp_19* updates
    if (t >= 0.0 && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_19.tStart = t;  // (not accounting for frame time here)
      key_resp_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.clearEvents(); });
    }
    
    if (key_resp_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_19.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_19_allKeys = _key_resp_19_allKeys.concat(theseKeys);
      if (_key_resp_19_allKeys.length > 0) {
        key_resp_19.keys = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_19.rt = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].rt;
        key_resp_19.duration = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topyesp2_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topyesp2_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topyesp2_2' ---
    for (const thisComponent of topyesp2_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topyesp2_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_19.corr, level);
    }
    psychoJS.experiment.addData('key_resp_19.keys', key_resp_19.keys);
    if (typeof key_resp_19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_19.rt', key_resp_19.rt);
        psychoJS.experiment.addData('key_resp_19.duration', key_resp_19.duration);
        routineTimer.reset();
        }
    
    key_resp_19.stop();
    // the Routine "topyesp2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine_5' ---
    t = 0;
    ChoiceRoutine_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine_5.started', globalClock.getTime());
    friendChoice_3.keys = undefined;
    friendChoice_3.rt = undefined;
    _friendChoice_3_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutine_5Components = [];
    ChoiceRoutine_5Components.push(Who_5);
    ChoiceRoutine_5Components.push(text_68);
    ChoiceRoutine_5Components.push(text_69);
    ChoiceRoutine_5Components.push(Player1demo_5);
    ChoiceRoutine_5Components.push(Player2demo_5);
    ChoiceRoutine_5Components.push(writingpic_5);
    ChoiceRoutine_5Components.push(text_70);
    ChoiceRoutine_5Components.push(instruments_5);
    ChoiceRoutine_5Components.push(text_71);
    ChoiceRoutine_5Components.push(knitting_5);
    ChoiceRoutine_5Components.push(text_72);
    ChoiceRoutine_5Components.push(beachpic_5);
    ChoiceRoutine_5Components.push(writingpic2_5);
    ChoiceRoutine_5Components.push(text_73);
    ChoiceRoutine_5Components.push(cycling_5);
    ChoiceRoutine_5Components.push(text_74);
    ChoiceRoutine_5Components.push(friendChoice_3);
    ChoiceRoutine_5Components.push(text_75);
    
    for (const thisComponent of ChoiceRoutine_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine_5' ---
    // get current time
    t = ChoiceRoutine_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who_5* updates
    if (t >= 0.0 && Who_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who_5.tStart = t;  // (not accounting for frame time here)
      Who_5.frameNStart = frameN;  // exact frame index
      
      Who_5.setAutoDraw(true);
    }
    
    
    // *text_68* updates
    if (t >= 0.0 && text_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_68.tStart = t;  // (not accounting for frame time here)
      text_68.frameNStart = frameN;  // exact frame index
      
      text_68.setAutoDraw(true);
    }
    
    
    // *text_69* updates
    if (t >= 0.0 && text_69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_69.tStart = t;  // (not accounting for frame time here)
      text_69.frameNStart = frameN;  // exact frame index
      
      text_69.setAutoDraw(true);
    }
    
    
    // *Player1demo_5* updates
    if (t >= 0.0 && Player1demo_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo_5.tStart = t;  // (not accounting for frame time here)
      Player1demo_5.frameNStart = frameN;  // exact frame index
      
      Player1demo_5.setAutoDraw(true);
    }
    
    
    // *Player2demo_5* updates
    if (t >= 0.0 && Player2demo_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo_5.tStart = t;  // (not accounting for frame time here)
      Player2demo_5.frameNStart = frameN;  // exact frame index
      
      Player2demo_5.setAutoDraw(true);
    }
    
    
    // *writingpic_5* updates
    if (t >= 0.0 && writingpic_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_5.tStart = t;  // (not accounting for frame time here)
      writingpic_5.frameNStart = frameN;  // exact frame index
      
      writingpic_5.setAutoDraw(true);
    }
    
    
    // *text_70* updates
    if (t >= 0.0 && text_70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_70.tStart = t;  // (not accounting for frame time here)
      text_70.frameNStart = frameN;  // exact frame index
      
      text_70.setAutoDraw(true);
    }
    
    
    // *instruments_5* updates
    if (t >= 0.0 && instruments_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_5.tStart = t;  // (not accounting for frame time here)
      instruments_5.frameNStart = frameN;  // exact frame index
      
      instruments_5.setAutoDraw(true);
    }
    
    
    // *text_71* updates
    if (t >= 0.0 && text_71.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_71.tStart = t;  // (not accounting for frame time here)
      text_71.frameNStart = frameN;  // exact frame index
      
      text_71.setAutoDraw(true);
    }
    
    
    // *knitting_5* updates
    if (t >= 0.0 && knitting_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_5.tStart = t;  // (not accounting for frame time here)
      knitting_5.frameNStart = frameN;  // exact frame index
      
      knitting_5.setAutoDraw(true);
    }
    
    
    // *text_72* updates
    if (t >= 0.0 && text_72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_72.tStart = t;  // (not accounting for frame time here)
      text_72.frameNStart = frameN;  // exact frame index
      
      text_72.setAutoDraw(true);
    }
    
    
    // *beachpic_5* updates
    if (t >= 0.0 && beachpic_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_5.tStart = t;  // (not accounting for frame time here)
      beachpic_5.frameNStart = frameN;  // exact frame index
      
      beachpic_5.setAutoDraw(true);
    }
    
    
    // *writingpic2_5* updates
    if (t >= 0.0 && writingpic2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_5.tStart = t;  // (not accounting for frame time here)
      writingpic2_5.frameNStart = frameN;  // exact frame index
      
      writingpic2_5.setAutoDraw(true);
    }
    
    
    // *text_73* updates
    if (t >= 0.0 && text_73.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_73.tStart = t;  // (not accounting for frame time here)
      text_73.frameNStart = frameN;  // exact frame index
      
      text_73.setAutoDraw(true);
    }
    
    
    // *cycling_5* updates
    if (t >= 0.0 && cycling_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_5.tStart = t;  // (not accounting for frame time here)
      cycling_5.frameNStart = frameN;  // exact frame index
      
      cycling_5.setAutoDraw(true);
    }
    
    
    // *text_74* updates
    if (t >= 0.0 && text_74.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_74.tStart = t;  // (not accounting for frame time here)
      text_74.frameNStart = frameN;  // exact frame index
      
      text_74.setAutoDraw(true);
    }
    
    
    // *friendChoice_3* updates
    if (t >= 0.0 && friendChoice_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      friendChoice_3.tStart = t;  // (not accounting for frame time here)
      friendChoice_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { friendChoice_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_3.clearEvents(); });
    }
    
    if (friendChoice_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = friendChoice_3.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _friendChoice_3_allKeys = _friendChoice_3_allKeys.concat(theseKeys);
      if (_friendChoice_3_allKeys.length > 0) {
        friendChoice_3.keys = _friendChoice_3_allKeys[_friendChoice_3_allKeys.length - 1].name;  // just the last key pressed
        friendChoice_3.rt = _friendChoice_3_allKeys[_friendChoice_3_allKeys.length - 1].rt;
        friendChoice_3.duration = _friendChoice_3_allKeys[_friendChoice_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_75* updates
    if (t >= 0.0 && text_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_75.tStart = t;  // (not accounting for frame time here)
      text_75.frameNStart = frameN;  // exact frame index
      
      text_75.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutine_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutine_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine_5' ---
    for (const thisComponent of ChoiceRoutine_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine_5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(friendChoice_3.corr, level);
    }
    psychoJS.experiment.addData('friendChoice_3.keys', friendChoice_3.keys);
    if (typeof friendChoice_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('friendChoice_3.rt', friendChoice_3.rt);
        psychoJS.experiment.addData('friendChoice_3.duration', friendChoice_3.duration);
        routineTimer.reset();
        }
    
    friendChoice_3.stop();
    // the Routine "ChoiceRoutine_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Play1_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Play1_4' ---
    t = 0;
    Play1_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Play1_4.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_17
    if ((friendChoice.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    // keep track of which components have finished
    Play1_4Components = [];
    Play1_4Components.push(polygon_20);
    Play1_4Components.push(p1_13);
    Play1_4Components.push(Player1_11);
    Play1_4Components.push(writingpic_6);
    Play1_4Components.push(text_76);
    Play1_4Components.push(instruments_6);
    Play1_4Components.push(text_77);
    Play1_4Components.push(knitting_6);
    Play1_4Components.push(yes1_9);
    Play1_4Components.push(text_78);
    Play1_4Components.push(key_resp_20);
    
    for (const thisComponent of Play1_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Play1_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Play1_4' ---
    // get current time
    t = Play1_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_20* updates
    if (t >= 0.0 && polygon_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_20.tStart = t;  // (not accounting for frame time here)
      polygon_20.frameNStart = frameN;  // exact frame index
      
      polygon_20.setAutoDraw(true);
    }
    
    
    // *p1_13* updates
    if (t >= 0.0 && p1_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_13.tStart = t;  // (not accounting for frame time here)
      p1_13.frameNStart = frameN;  // exact frame index
      
      p1_13.setAutoDraw(true);
    }
    
    
    // *Player1_11* updates
    if (t >= 0.0 && Player1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_11.tStart = t;  // (not accounting for frame time here)
      Player1_11.frameNStart = frameN;  // exact frame index
      
      Player1_11.setAutoDraw(true);
    }
    
    
    // *writingpic_6* updates
    if (t >= 0.0 && writingpic_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_6.tStart = t;  // (not accounting for frame time here)
      writingpic_6.frameNStart = frameN;  // exact frame index
      
      writingpic_6.setAutoDraw(true);
    }
    
    
    // *text_76* updates
    if (t >= 0.0 && text_76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_76.tStart = t;  // (not accounting for frame time here)
      text_76.frameNStart = frameN;  // exact frame index
      
      text_76.setAutoDraw(true);
    }
    
    
    // *instruments_6* updates
    if (t >= 0.0 && instruments_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_6.tStart = t;  // (not accounting for frame time here)
      instruments_6.frameNStart = frameN;  // exact frame index
      
      instruments_6.setAutoDraw(true);
    }
    
    
    // *text_77* updates
    if (t >= 0.0 && text_77.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_77.tStart = t;  // (not accounting for frame time here)
      text_77.frameNStart = frameN;  // exact frame index
      
      text_77.setAutoDraw(true);
    }
    
    
    // *knitting_6* updates
    if (t >= 0.0 && knitting_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_6.tStart = t;  // (not accounting for frame time here)
      knitting_6.frameNStart = frameN;  // exact frame index
      
      knitting_6.setAutoDraw(true);
    }
    
    
    // *yes1_9* updates
    if (t >= 0.0 && yes1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_9.tStart = t;  // (not accounting for frame time here)
      yes1_9.frameNStart = frameN;  // exact frame index
      
      yes1_9.setAutoDraw(true);
    }
    
    
    // *text_78* updates
    if (t >= 0.0 && text_78.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_78.tStart = t;  // (not accounting for frame time here)
      text_78.frameNStart = frameN;  // exact frame index
      
      text_78.setAutoDraw(true);
    }
    
    
    // *key_resp_20* updates
    if (t >= 0.0 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }
    
    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
        key_resp_20.duration = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Play1_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Play1_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Play1_4' ---
    for (const thisComponent of Play1_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Play1_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_20.corr, level);
    }
    psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
    if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
        psychoJS.experiment.addData('key_resp_20.duration', key_resp_20.duration);
        routineTimer.reset();
        }
    
    key_resp_20.stop();
    // the Routine "Play1_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnop1_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnop1_2' ---
    t = 0;
    topnop1_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnop1_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_18
    if ((friendChoice.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_21.keys = undefined;
    key_resp_21.rt = undefined;
    _key_resp_21_allKeys = [];
    // keep track of which components have finished
    topnop1_2Components = [];
    topnop1_2Components.push(polygon_21);
    topnop1_2Components.push(Player1_12);
    topnop1_2Components.push(writt_2);
    topnop1_2Components.push(var_20);
    topnop1_2Components.push(piano_2);
    topnop1_2Components.push(var_21);
    topnop1_2Components.push(knittingg_2);
    topnop1_2Components.push(text_79);
    topnop1_2Components.push(p1_14);
    topnop1_2Components.push(you_9);
    topnop1_2Components.push(chatting_9);
    topnop1_2Components.push(chat_9);
    topnop1_2Components.push(sports_9);
    topnop1_2Components.push(sport_9);
    topnop1_2Components.push(beach_9);
    topnop1_2Components.push(beach_txt_9);
    topnop1_2Components.push(participantpic_9);
    topnop1_2Components.push(no);
    topnop1_2Components.push(key_resp_21);
    
    for (const thisComponent of topnop1_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnop1_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnop1_2' ---
    // get current time
    t = topnop1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_21* updates
    if (t >= 2.5 && polygon_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_21.tStart = t;  // (not accounting for frame time here)
      polygon_21.frameNStart = frameN;  // exact frame index
      
      polygon_21.setAutoDraw(true);
    }
    
    
    // *Player1_12* updates
    if (t >= 0.0 && Player1_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_12.tStart = t;  // (not accounting for frame time here)
      Player1_12.frameNStart = frameN;  // exact frame index
      
      Player1_12.setAutoDraw(true);
    }
    
    
    // *writt_2* updates
    if (t >= 0.0 && writt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writt_2.tStart = t;  // (not accounting for frame time here)
      writt_2.frameNStart = frameN;  // exact frame index
      
      writt_2.setAutoDraw(true);
    }
    
    
    // *var_20* updates
    if (t >= 0.0 && var_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_20.tStart = t;  // (not accounting for frame time here)
      var_20.frameNStart = frameN;  // exact frame index
      
      var_20.setAutoDraw(true);
    }
    
    
    // *piano_2* updates
    if (t >= 0.0 && piano_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      piano_2.tStart = t;  // (not accounting for frame time here)
      piano_2.frameNStart = frameN;  // exact frame index
      
      piano_2.setAutoDraw(true);
    }
    
    
    // *var_21* updates
    if (t >= 0.0 && var_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_21.tStart = t;  // (not accounting for frame time here)
      var_21.frameNStart = frameN;  // exact frame index
      
      var_21.setAutoDraw(true);
    }
    
    
    // *knittingg_2* updates
    if (t >= 0.0 && knittingg_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knittingg_2.tStart = t;  // (not accounting for frame time here)
      knittingg_2.frameNStart = frameN;  // exact frame index
      
      knittingg_2.setAutoDraw(true);
    }
    
    
    // *text_79* updates
    if (t >= 0.0 && text_79.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_79.tStart = t;  // (not accounting for frame time here)
      text_79.frameNStart = frameN;  // exact frame index
      
      text_79.setAutoDraw(true);
    }
    
    
    // *p1_14* updates
    if (t >= 0.0 && p1_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_14.tStart = t;  // (not accounting for frame time here)
      p1_14.frameNStart = frameN;  // exact frame index
      
      p1_14.setAutoDraw(true);
    }
    
    
    // *you_9* updates
    if (t >= 1.0 && you_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_9.tStart = t;  // (not accounting for frame time here)
      you_9.frameNStart = frameN;  // exact frame index
      
      you_9.setAutoDraw(true);
    }
    
    
    // *chatting_9* updates
    if (t >= 1.0 && chatting_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_9.tStart = t;  // (not accounting for frame time here)
      chatting_9.frameNStart = frameN;  // exact frame index
      
      chatting_9.setAutoDraw(true);
    }
    
    
    // *chat_9* updates
    if (t >= 1.0 && chat_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_9.tStart = t;  // (not accounting for frame time here)
      chat_9.frameNStart = frameN;  // exact frame index
      
      chat_9.setAutoDraw(true);
    }
    
    
    // *sports_9* updates
    if (t >= 1.0 && sports_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_9.tStart = t;  // (not accounting for frame time here)
      sports_9.frameNStart = frameN;  // exact frame index
      
      sports_9.setAutoDraw(true);
    }
    
    
    // *sport_9* updates
    if (t >= 1.0 && sport_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_9.tStart = t;  // (not accounting for frame time here)
      sport_9.frameNStart = frameN;  // exact frame index
      
      sport_9.setAutoDraw(true);
    }
    
    
    // *beach_9* updates
    if (t >= 1.0 && beach_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_9.tStart = t;  // (not accounting for frame time here)
      beach_9.frameNStart = frameN;  // exact frame index
      
      beach_9.setAutoDraw(true);
    }
    
    
    // *beach_txt_9* updates
    if (t >= 1.0 && beach_txt_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_9.tStart = t;  // (not accounting for frame time here)
      beach_txt_9.frameNStart = frameN;  // exact frame index
      
      beach_txt_9.setAutoDraw(true);
    }
    
    
    // *participantpic_9* updates
    if (t >= 1.0 && participantpic_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_9.tStart = t;  // (not accounting for frame time here)
      participantpic_9.frameNStart = frameN;  // exact frame index
      
      participantpic_9.setAutoDraw(true);
    }
    
    
    // *no* updates
    if (t >= 2.5 && no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no.tStart = t;  // (not accounting for frame time here)
      no.frameNStart = frameN;  // exact frame index
      
      no.setAutoDraw(true);
    }
    
    
    // *key_resp_21* updates
    if (t >= 0.0 && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_21.tStart = t;  // (not accounting for frame time here)
      key_resp_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
    }
    
    if (key_resp_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_21.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
      if (_key_resp_21_allKeys.length > 0) {
        key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
        key_resp_21.duration = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnop1_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnop1_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnop1_2' ---
    for (const thisComponent of topnop1_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnop1_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_21.corr, level);
    }
    psychoJS.experiment.addData('key_resp_21.keys', key_resp_21.keys);
    if (typeof key_resp_21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_21.rt', key_resp_21.rt);
        psychoJS.experiment.addData('key_resp_21.duration', key_resp_21.duration);
        routineTimer.reset();
        }
    
    key_resp_21.stop();
    // the Routine "topnop1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function play2_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'play2_4' ---
    t = 0;
    play2_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('play2_4.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_19
    if ((friendChoice.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_22.keys = undefined;
    key_resp_22.rt = undefined;
    _key_resp_22_allKeys = [];
    // keep track of which components have finished
    play2_4Components = [];
    play2_4Components.push(polygon_22);
    play2_4Components.push(text_80);
    play2_4Components.push(player_5);
    play2_4Components.push(beachpic_6);
    play2_4Components.push(text_81);
    play2_4Components.push(writingpic2_6);
    play2_4Components.push(text_82);
    play2_4Components.push(cycling_6);
    play2_4Components.push(text_83);
    play2_4Components.push(yes1_10);
    play2_4Components.push(key_resp_22);
    
    for (const thisComponent of play2_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function play2_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'play2_4' ---
    // get current time
    t = play2_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_22* updates
    if (t >= 0.0 && polygon_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_22.tStart = t;  // (not accounting for frame time here)
      polygon_22.frameNStart = frameN;  // exact frame index
      
      polygon_22.setAutoDraw(true);
    }
    
    
    // *text_80* updates
    if (t >= 0.0 && text_80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_80.tStart = t;  // (not accounting for frame time here)
      text_80.frameNStart = frameN;  // exact frame index
      
      text_80.setAutoDraw(true);
    }
    
    
    // *player_5* updates
    if (t >= 0.0 && player_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player_5.tStart = t;  // (not accounting for frame time here)
      player_5.frameNStart = frameN;  // exact frame index
      
      player_5.setAutoDraw(true);
    }
    
    
    // *beachpic_6* updates
    if (t >= 0.0 && beachpic_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_6.tStart = t;  // (not accounting for frame time here)
      beachpic_6.frameNStart = frameN;  // exact frame index
      
      beachpic_6.setAutoDraw(true);
    }
    
    
    // *text_81* updates
    if (t >= 0.0 && text_81.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_81.tStart = t;  // (not accounting for frame time here)
      text_81.frameNStart = frameN;  // exact frame index
      
      text_81.setAutoDraw(true);
    }
    
    
    // *writingpic2_6* updates
    if (t >= 0.0 && writingpic2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_6.tStart = t;  // (not accounting for frame time here)
      writingpic2_6.frameNStart = frameN;  // exact frame index
      
      writingpic2_6.setAutoDraw(true);
    }
    
    
    // *text_82* updates
    if (t >= 0.0 && text_82.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_82.tStart = t;  // (not accounting for frame time here)
      text_82.frameNStart = frameN;  // exact frame index
      
      text_82.setAutoDraw(true);
    }
    
    
    // *cycling_6* updates
    if (t >= 0.0 && cycling_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_6.tStart = t;  // (not accounting for frame time here)
      cycling_6.frameNStart = frameN;  // exact frame index
      
      cycling_6.setAutoDraw(true);
    }
    
    
    // *text_83* updates
    if (t >= 0.0 && text_83.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_83.tStart = t;  // (not accounting for frame time here)
      text_83.frameNStart = frameN;  // exact frame index
      
      text_83.setAutoDraw(true);
    }
    
    
    // *yes1_10* updates
    if (t >= 0.0 && yes1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_10.tStart = t;  // (not accounting for frame time here)
      yes1_10.frameNStart = frameN;  // exact frame index
      
      yes1_10.setAutoDraw(true);
    }
    
    
    // *key_resp_22* updates
    if (t >= 0.0 && key_resp_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_22.tStart = t;  // (not accounting for frame time here)
      key_resp_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.clearEvents(); });
    }
    
    if (key_resp_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_22.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_22_allKeys = _key_resp_22_allKeys.concat(theseKeys);
      if (_key_resp_22_allKeys.length > 0) {
        key_resp_22.keys = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_22.rt = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].rt;
        key_resp_22.duration = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of play2_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function play2_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'play2_4' ---
    for (const thisComponent of play2_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('play2_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_22.corr, level);
    }
    psychoJS.experiment.addData('key_resp_22.keys', key_resp_22.keys);
    if (typeof key_resp_22.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_22.rt', key_resp_22.rt);
        psychoJS.experiment.addData('key_resp_22.duration', key_resp_22.duration);
        routineTimer.reset();
        }
    
    key_resp_22.stop();
    // the Routine "play2_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnop2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnop2_2' ---
    t = 0;
    topnop2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnop2_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_20
    if ((key_resp.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_23.keys = undefined;
    key_resp_23.rt = undefined;
    _key_resp_23_allKeys = [];
    // keep track of which components have finished
    topnop2_2Components = [];
    topnop2_2Components.push(polygon_23);
    topnop2_2Components.push(Player1_13);
    topnop2_2Components.push(beach1_2);
    topnop2_2Components.push(var_22);
    topnop2_2Components.push(write_2);
    topnop2_2Components.push(var_23);
    topnop2_2Components.push(cycle_2);
    topnop2_2Components.push(text_84);
    topnop2_2Components.push(p1_15);
    topnop2_2Components.push(you_10);
    topnop2_2Components.push(chatting_10);
    topnop2_2Components.push(chat_10);
    topnop2_2Components.push(sports_10);
    topnop2_2Components.push(sport_10);
    topnop2_2Components.push(beach_10);
    topnop2_2Components.push(beach_txt_10);
    topnop2_2Components.push(participantpic_10);
    topnop2_2Components.push(no_5);
    topnop2_2Components.push(key_resp_23);
    
    for (const thisComponent of topnop2_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnop2_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnop2_2' ---
    // get current time
    t = topnop2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_23* updates
    if (t >= 2.5 && polygon_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_23.tStart = t;  // (not accounting for frame time here)
      polygon_23.frameNStart = frameN;  // exact frame index
      
      polygon_23.setAutoDraw(true);
    }
    
    
    // *Player1_13* updates
    if (t >= 0.0 && Player1_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_13.tStart = t;  // (not accounting for frame time here)
      Player1_13.frameNStart = frameN;  // exact frame index
      
      Player1_13.setAutoDraw(true);
    }
    
    
    // *beach1_2* updates
    if (t >= 0.0 && beach1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach1_2.tStart = t;  // (not accounting for frame time here)
      beach1_2.frameNStart = frameN;  // exact frame index
      
      beach1_2.setAutoDraw(true);
    }
    
    
    // *var_22* updates
    if (t >= 0.0 && var_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_22.tStart = t;  // (not accounting for frame time here)
      var_22.frameNStart = frameN;  // exact frame index
      
      var_22.setAutoDraw(true);
    }
    
    
    // *write_2* updates
    if (t >= 0.0 && write_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      write_2.tStart = t;  // (not accounting for frame time here)
      write_2.frameNStart = frameN;  // exact frame index
      
      write_2.setAutoDraw(true);
    }
    
    
    // *var_23* updates
    if (t >= 0.0 && var_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_23.tStart = t;  // (not accounting for frame time here)
      var_23.frameNStart = frameN;  // exact frame index
      
      var_23.setAutoDraw(true);
    }
    
    
    // *cycle_2* updates
    if (t >= 0.0 && cycle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycle_2.tStart = t;  // (not accounting for frame time here)
      cycle_2.frameNStart = frameN;  // exact frame index
      
      cycle_2.setAutoDraw(true);
    }
    
    
    // *text_84* updates
    if (t >= 0.0 && text_84.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_84.tStart = t;  // (not accounting for frame time here)
      text_84.frameNStart = frameN;  // exact frame index
      
      text_84.setAutoDraw(true);
    }
    
    
    // *p1_15* updates
    if (t >= 0.0 && p1_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_15.tStart = t;  // (not accounting for frame time here)
      p1_15.frameNStart = frameN;  // exact frame index
      
      p1_15.setAutoDraw(true);
    }
    
    
    // *you_10* updates
    if (t >= 1.0 && you_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_10.tStart = t;  // (not accounting for frame time here)
      you_10.frameNStart = frameN;  // exact frame index
      
      you_10.setAutoDraw(true);
    }
    
    
    // *chatting_10* updates
    if (t >= 1.0 && chatting_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_10.tStart = t;  // (not accounting for frame time here)
      chatting_10.frameNStart = frameN;  // exact frame index
      
      chatting_10.setAutoDraw(true);
    }
    
    
    // *chat_10* updates
    if (t >= 1.0 && chat_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_10.tStart = t;  // (not accounting for frame time here)
      chat_10.frameNStart = frameN;  // exact frame index
      
      chat_10.setAutoDraw(true);
    }
    
    
    // *sports_10* updates
    if (t >= 1.0 && sports_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_10.tStart = t;  // (not accounting for frame time here)
      sports_10.frameNStart = frameN;  // exact frame index
      
      sports_10.setAutoDraw(true);
    }
    
    
    // *sport_10* updates
    if (t >= 1.0 && sport_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_10.tStart = t;  // (not accounting for frame time here)
      sport_10.frameNStart = frameN;  // exact frame index
      
      sport_10.setAutoDraw(true);
    }
    
    
    // *beach_10* updates
    if (t >= 1.0 && beach_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_10.tStart = t;  // (not accounting for frame time here)
      beach_10.frameNStart = frameN;  // exact frame index
      
      beach_10.setAutoDraw(true);
    }
    
    
    // *beach_txt_10* updates
    if (t >= 1.0 && beach_txt_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_10.tStart = t;  // (not accounting for frame time here)
      beach_txt_10.frameNStart = frameN;  // exact frame index
      
      beach_txt_10.setAutoDraw(true);
    }
    
    
    // *participantpic_10* updates
    if (t >= 1.0 && participantpic_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_10.tStart = t;  // (not accounting for frame time here)
      participantpic_10.frameNStart = frameN;  // exact frame index
      
      participantpic_10.setAutoDraw(true);
    }
    
    
    // *no_5* updates
    if (t >= 2.5 && no_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_5.tStart = t;  // (not accounting for frame time here)
      no_5.frameNStart = frameN;  // exact frame index
      
      no_5.setAutoDraw(true);
    }
    
    
    // *key_resp_23* updates
    if (t >= 0.0 && key_resp_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_23.tStart = t;  // (not accounting for frame time here)
      key_resp_23.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_23.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.clearEvents(); });
    }
    
    if (key_resp_23.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_23.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_23_allKeys = _key_resp_23_allKeys.concat(theseKeys);
      if (_key_resp_23_allKeys.length > 0) {
        key_resp_23.keys = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].name;  // just the last key pressed
        key_resp_23.rt = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].rt;
        key_resp_23.duration = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnop2_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnop2_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnop2_2' ---
    for (const thisComponent of topnop2_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnop2_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_23.corr, level);
    }
    psychoJS.experiment.addData('key_resp_23.keys', key_resp_23.keys);
    if (typeof key_resp_23.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_23.rt', key_resp_23.rt);
        psychoJS.experiment.addData('key_resp_23.duration', key_resp_23.duration);
        routineTimer.reset();
        }
    
    key_resp_23.stop();
    // the Routine "topnop2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function wait_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_4' ---
    t = 0;
    wait_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_4.started', globalClock.getTime());
    // keep track of which components have finished
    wait_4Components = [];
    wait_4Components.push(polygon_24);
    wait_4Components.push(text_85);
    
    for (const thisComponent of wait_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function wait_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_4' ---
    // get current time
    t = wait_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 3) {
        continueRoutine = false
    }
    
    // *polygon_24* updates
    if (t >= 0.0 && polygon_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_24.tStart = t;  // (not accounting for frame time here)
      polygon_24.frameNStart = frameN;  // exact frame index
      
      polygon_24.setAutoDraw(true);
    }
    
    
    // *text_85* updates
    if (t >= 0.0 && text_85.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_85.tStart = t;  // (not accounting for frame time here)
      text_85.frameNStart = frameN;  // exact frame index
      
      text_85.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wait_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function wait_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_4' ---
    for (const thisComponent of wait_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait_4.stopped', globalClock.getTime());
    // the Routine "wait_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine_6' ---
    t = 0;
    ChoiceRoutine_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine_6.started', globalClock.getTime());
    friendChoice_4.keys = undefined;
    friendChoice_4.rt = undefined;
    _friendChoice_4_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutine_6Components = [];
    ChoiceRoutine_6Components.push(Who_6);
    ChoiceRoutine_6Components.push(text_86);
    ChoiceRoutine_6Components.push(text_87);
    ChoiceRoutine_6Components.push(Player1demo_6);
    ChoiceRoutine_6Components.push(Player2demo_6);
    ChoiceRoutine_6Components.push(writingpic_7);
    ChoiceRoutine_6Components.push(text_88);
    ChoiceRoutine_6Components.push(instruments_7);
    ChoiceRoutine_6Components.push(text_89);
    ChoiceRoutine_6Components.push(knitting_7);
    ChoiceRoutine_6Components.push(text_90);
    ChoiceRoutine_6Components.push(beachpic_7);
    ChoiceRoutine_6Components.push(writingpic2_7);
    ChoiceRoutine_6Components.push(text_91);
    ChoiceRoutine_6Components.push(cycling_7);
    ChoiceRoutine_6Components.push(text_92);
    ChoiceRoutine_6Components.push(friendChoice_4);
    ChoiceRoutine_6Components.push(text_93);
    
    for (const thisComponent of ChoiceRoutine_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutine_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine_6' ---
    // get current time
    t = ChoiceRoutine_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who_6* updates
    if (t >= 0.0 && Who_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who_6.tStart = t;  // (not accounting for frame time here)
      Who_6.frameNStart = frameN;  // exact frame index
      
      Who_6.setAutoDraw(true);
    }
    
    
    // *text_86* updates
    if (t >= 0.0 && text_86.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_86.tStart = t;  // (not accounting for frame time here)
      text_86.frameNStart = frameN;  // exact frame index
      
      text_86.setAutoDraw(true);
    }
    
    
    // *text_87* updates
    if (t >= 0.0 && text_87.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_87.tStart = t;  // (not accounting for frame time here)
      text_87.frameNStart = frameN;  // exact frame index
      
      text_87.setAutoDraw(true);
    }
    
    
    // *Player1demo_6* updates
    if (t >= 0.0 && Player1demo_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo_6.tStart = t;  // (not accounting for frame time here)
      Player1demo_6.frameNStart = frameN;  // exact frame index
      
      Player1demo_6.setAutoDraw(true);
    }
    
    
    // *Player2demo_6* updates
    if (t >= 0.0 && Player2demo_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo_6.tStart = t;  // (not accounting for frame time here)
      Player2demo_6.frameNStart = frameN;  // exact frame index
      
      Player2demo_6.setAutoDraw(true);
    }
    
    
    // *writingpic_7* updates
    if (t >= 0.0 && writingpic_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_7.tStart = t;  // (not accounting for frame time here)
      writingpic_7.frameNStart = frameN;  // exact frame index
      
      writingpic_7.setAutoDraw(true);
    }
    
    
    // *text_88* updates
    if (t >= 0.0 && text_88.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_88.tStart = t;  // (not accounting for frame time here)
      text_88.frameNStart = frameN;  // exact frame index
      
      text_88.setAutoDraw(true);
    }
    
    
    // *instruments_7* updates
    if (t >= 0.0 && instruments_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_7.tStart = t;  // (not accounting for frame time here)
      instruments_7.frameNStart = frameN;  // exact frame index
      
      instruments_7.setAutoDraw(true);
    }
    
    
    // *text_89* updates
    if (t >= 0.0 && text_89.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_89.tStart = t;  // (not accounting for frame time here)
      text_89.frameNStart = frameN;  // exact frame index
      
      text_89.setAutoDraw(true);
    }
    
    
    // *knitting_7* updates
    if (t >= 0.0 && knitting_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_7.tStart = t;  // (not accounting for frame time here)
      knitting_7.frameNStart = frameN;  // exact frame index
      
      knitting_7.setAutoDraw(true);
    }
    
    
    // *text_90* updates
    if (t >= 0.0 && text_90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_90.tStart = t;  // (not accounting for frame time here)
      text_90.frameNStart = frameN;  // exact frame index
      
      text_90.setAutoDraw(true);
    }
    
    
    // *beachpic_7* updates
    if (t >= 0.0 && beachpic_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_7.tStart = t;  // (not accounting for frame time here)
      beachpic_7.frameNStart = frameN;  // exact frame index
      
      beachpic_7.setAutoDraw(true);
    }
    
    
    // *writingpic2_7* updates
    if (t >= 0.0 && writingpic2_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_7.tStart = t;  // (not accounting for frame time here)
      writingpic2_7.frameNStart = frameN;  // exact frame index
      
      writingpic2_7.setAutoDraw(true);
    }
    
    
    // *text_91* updates
    if (t >= 0.0 && text_91.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_91.tStart = t;  // (not accounting for frame time here)
      text_91.frameNStart = frameN;  // exact frame index
      
      text_91.setAutoDraw(true);
    }
    
    
    // *cycling_7* updates
    if (t >= 0.0 && cycling_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_7.tStart = t;  // (not accounting for frame time here)
      cycling_7.frameNStart = frameN;  // exact frame index
      
      cycling_7.setAutoDraw(true);
    }
    
    
    // *text_92* updates
    if (t >= 0.0 && text_92.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_92.tStart = t;  // (not accounting for frame time here)
      text_92.frameNStart = frameN;  // exact frame index
      
      text_92.setAutoDraw(true);
    }
    
    
    // *friendChoice_4* updates
    if (t >= 0.0 && friendChoice_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      friendChoice_4.tStart = t;  // (not accounting for frame time here)
      friendChoice_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { friendChoice_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_4.clearEvents(); });
    }
    
    if (friendChoice_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = friendChoice_4.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _friendChoice_4_allKeys = _friendChoice_4_allKeys.concat(theseKeys);
      if (_friendChoice_4_allKeys.length > 0) {
        friendChoice_4.keys = _friendChoice_4_allKeys[_friendChoice_4_allKeys.length - 1].name;  // just the last key pressed
        friendChoice_4.rt = _friendChoice_4_allKeys[_friendChoice_4_allKeys.length - 1].rt;
        friendChoice_4.duration = _friendChoice_4_allKeys[_friendChoice_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_93* updates
    if (t >= 0.0 && text_93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_93.tStart = t;  // (not accounting for frame time here)
      text_93.frameNStart = frameN;  // exact frame index
      
      text_93.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutine_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutine_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine_6' ---
    for (const thisComponent of ChoiceRoutine_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine_6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(friendChoice_4.corr, level);
    }
    psychoJS.experiment.addData('friendChoice_4.keys', friendChoice_4.keys);
    if (typeof friendChoice_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('friendChoice_4.rt', friendChoice_4.rt);
        psychoJS.experiment.addData('friendChoice_4.duration', friendChoice_4.duration);
        routineTimer.reset();
        }
    
    friendChoice_4.stop();
    // the Routine "ChoiceRoutine_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player1_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player1_5' ---
    t = 0;
    player1_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player1_5.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_23
    if ((friendChoice_2.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_26.keys = undefined;
    key_resp_26.rt = undefined;
    _key_resp_26_allKeys = [];
    // keep track of which components have finished
    player1_5Components = [];
    player1_5Components.push(polygon_27);
    player1_5Components.push(p1_18);
    player1_5Components.push(Player1_16);
    player1_5Components.push(writingpic_8);
    player1_5Components.push(text_96);
    player1_5Components.push(instruments_8);
    player1_5Components.push(text_97);
    player1_5Components.push(knitting_8);
    player1_5Components.push(yes1_11);
    player1_5Components.push(text_98);
    player1_5Components.push(key_resp_26);
    
    for (const thisComponent of player1_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player1_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player1_5' ---
    // get current time
    t = player1_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_27* updates
    if (t >= 0.0 && polygon_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_27.tStart = t;  // (not accounting for frame time here)
      polygon_27.frameNStart = frameN;  // exact frame index
      
      polygon_27.setAutoDraw(true);
    }
    
    
    // *p1_18* updates
    if (t >= 0.0 && p1_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_18.tStart = t;  // (not accounting for frame time here)
      p1_18.frameNStart = frameN;  // exact frame index
      
      p1_18.setAutoDraw(true);
    }
    
    
    // *Player1_16* updates
    if (t >= 0.0 && Player1_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_16.tStart = t;  // (not accounting for frame time here)
      Player1_16.frameNStart = frameN;  // exact frame index
      
      Player1_16.setAutoDraw(true);
    }
    
    
    // *writingpic_8* updates
    if (t >= 0.0 && writingpic_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_8.tStart = t;  // (not accounting for frame time here)
      writingpic_8.frameNStart = frameN;  // exact frame index
      
      writingpic_8.setAutoDraw(true);
    }
    
    
    // *text_96* updates
    if (t >= 0.0 && text_96.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_96.tStart = t;  // (not accounting for frame time here)
      text_96.frameNStart = frameN;  // exact frame index
      
      text_96.setAutoDraw(true);
    }
    
    
    // *instruments_8* updates
    if (t >= 0.0 && instruments_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_8.tStart = t;  // (not accounting for frame time here)
      instruments_8.frameNStart = frameN;  // exact frame index
      
      instruments_8.setAutoDraw(true);
    }
    
    
    // *text_97* updates
    if (t >= 0.0 && text_97.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_97.tStart = t;  // (not accounting for frame time here)
      text_97.frameNStart = frameN;  // exact frame index
      
      text_97.setAutoDraw(true);
    }
    
    
    // *knitting_8* updates
    if (t >= 0.0 && knitting_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_8.tStart = t;  // (not accounting for frame time here)
      knitting_8.frameNStart = frameN;  // exact frame index
      
      knitting_8.setAutoDraw(true);
    }
    
    
    // *yes1_11* updates
    if (t >= 0.0 && yes1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_11.tStart = t;  // (not accounting for frame time here)
      yes1_11.frameNStart = frameN;  // exact frame index
      
      yes1_11.setAutoDraw(true);
    }
    
    
    // *text_98* updates
    if (t >= 0.0 && text_98.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_98.tStart = t;  // (not accounting for frame time here)
      text_98.frameNStart = frameN;  // exact frame index
      
      text_98.setAutoDraw(true);
    }
    
    
    // *key_resp_26* updates
    if (t >= 0.0 && key_resp_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_26.tStart = t;  // (not accounting for frame time here)
      key_resp_26.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_26.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_26.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_26.clearEvents(); });
    }
    
    if (key_resp_26.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_26.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_26_allKeys = _key_resp_26_allKeys.concat(theseKeys);
      if (_key_resp_26_allKeys.length > 0) {
        key_resp_26.keys = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].name;  // just the last key pressed
        key_resp_26.rt = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].rt;
        key_resp_26.duration = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player1_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player1_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player1_5' ---
    for (const thisComponent of player1_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player1_5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_26.corr, level);
    }
    psychoJS.experiment.addData('key_resp_26.keys', key_resp_26.keys);
    if (typeof key_resp_26.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_26.rt', key_resp_26.rt);
        psychoJS.experiment.addData('key_resp_26.duration', key_resp_26.duration);
        routineTimer.reset();
        }
    
    key_resp_26.stop();
    // the Routine "player1_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnsp1_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnsp1_2' ---
    t = 0;
    topnsp1_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnsp1_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_21
    if ((friendChoice_2.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_24.keys = undefined;
    key_resp_24.rt = undefined;
    _key_resp_24_allKeys = [];
    // keep track of which components have finished
    topnsp1_2Components = [];
    topnsp1_2Components.push(polygon_37);
    topnsp1_2Components.push(Player1_14);
    topnsp1_2Components.push(draw_2);
    topnsp1_2Components.push(wright_2);
    topnsp1_2Components.push(pianoo_2);
    topnsp1_2Components.push(var_24);
    topnsp1_2Components.push(knit_2);
    topnsp1_2Components.push(text_94);
    topnsp1_2Components.push(p1_16);
    topnsp1_2Components.push(you_11);
    topnsp1_2Components.push(chatting_11);
    topnsp1_2Components.push(chat_11);
    topnsp1_2Components.push(sports_11);
    topnsp1_2Components.push(sport_11);
    topnsp1_2Components.push(beach_11);
    topnsp1_2Components.push(beach_txt_11);
    topnsp1_2Components.push(participantpic_11);
    topnsp1_2Components.push(notseen_2);
    topnsp1_2Components.push(key_resp_24);
    
    for (const thisComponent of topnsp1_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnsp1_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnsp1_2' ---
    // get current time
    t = topnsp1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_37* updates
    if (t >= 2.5 && polygon_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_37.tStart = t;  // (not accounting for frame time here)
      polygon_37.frameNStart = frameN;  // exact frame index
      
      polygon_37.setAutoDraw(true);
    }
    
    
    // *Player1_14* updates
    if (t >= 0.0 && Player1_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_14.tStart = t;  // (not accounting for frame time here)
      Player1_14.frameNStart = frameN;  // exact frame index
      
      Player1_14.setAutoDraw(true);
    }
    
    
    // *draw_2* updates
    if (t >= 0.0 && draw_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      draw_2.tStart = t;  // (not accounting for frame time here)
      draw_2.frameNStart = frameN;  // exact frame index
      
      draw_2.setAutoDraw(true);
    }
    
    
    // *wright_2* updates
    if (t >= 0.0 && wright_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wright_2.tStart = t;  // (not accounting for frame time here)
      wright_2.frameNStart = frameN;  // exact frame index
      
      wright_2.setAutoDraw(true);
    }
    
    
    // *pianoo_2* updates
    if (t >= 0.0 && pianoo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pianoo_2.tStart = t;  // (not accounting for frame time here)
      pianoo_2.frameNStart = frameN;  // exact frame index
      
      pianoo_2.setAutoDraw(true);
    }
    
    
    // *var_24* updates
    if (t >= 0.0 && var_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_24.tStart = t;  // (not accounting for frame time here)
      var_24.frameNStart = frameN;  // exact frame index
      
      var_24.setAutoDraw(true);
    }
    
    
    // *knit_2* updates
    if (t >= 0.0 && knit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knit_2.tStart = t;  // (not accounting for frame time here)
      knit_2.frameNStart = frameN;  // exact frame index
      
      knit_2.setAutoDraw(true);
    }
    
    
    // *text_94* updates
    if (t >= 0.0 && text_94.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_94.tStart = t;  // (not accounting for frame time here)
      text_94.frameNStart = frameN;  // exact frame index
      
      text_94.setAutoDraw(true);
    }
    
    
    // *p1_16* updates
    if (t >= 0.0 && p1_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_16.tStart = t;  // (not accounting for frame time here)
      p1_16.frameNStart = frameN;  // exact frame index
      
      p1_16.setAutoDraw(true);
    }
    
    
    // *you_11* updates
    if (t >= 1.0 && you_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_11.tStart = t;  // (not accounting for frame time here)
      you_11.frameNStart = frameN;  // exact frame index
      
      you_11.setAutoDraw(true);
    }
    
    
    // *chatting_11* updates
    if (t >= 1.0 && chatting_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_11.tStart = t;  // (not accounting for frame time here)
      chatting_11.frameNStart = frameN;  // exact frame index
      
      chatting_11.setAutoDraw(true);
    }
    
    
    // *chat_11* updates
    if (t >= 1.0 && chat_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_11.tStart = t;  // (not accounting for frame time here)
      chat_11.frameNStart = frameN;  // exact frame index
      
      chat_11.setAutoDraw(true);
    }
    
    
    // *sports_11* updates
    if (t >= 1.0 && sports_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_11.tStart = t;  // (not accounting for frame time here)
      sports_11.frameNStart = frameN;  // exact frame index
      
      sports_11.setAutoDraw(true);
    }
    
    
    // *sport_11* updates
    if (t >= 1.0 && sport_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_11.tStart = t;  // (not accounting for frame time here)
      sport_11.frameNStart = frameN;  // exact frame index
      
      sport_11.setAutoDraw(true);
    }
    
    
    // *beach_11* updates
    if (t >= 1.0 && beach_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_11.tStart = t;  // (not accounting for frame time here)
      beach_11.frameNStart = frameN;  // exact frame index
      
      beach_11.setAutoDraw(true);
    }
    
    
    // *beach_txt_11* updates
    if (t >= 1.0 && beach_txt_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_11.tStart = t;  // (not accounting for frame time here)
      beach_txt_11.frameNStart = frameN;  // exact frame index
      
      beach_txt_11.setAutoDraw(true);
    }
    
    
    // *participantpic_11* updates
    if (t >= 1.0 && participantpic_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_11.tStart = t;  // (not accounting for frame time here)
      participantpic_11.frameNStart = frameN;  // exact frame index
      
      participantpic_11.setAutoDraw(true);
    }
    
    
    // *notseen_2* updates
    if (t >= 2.5 && notseen_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notseen_2.tStart = t;  // (not accounting for frame time here)
      notseen_2.frameNStart = frameN;  // exact frame index
      
      notseen_2.setAutoDraw(true);
    }
    
    
    // *key_resp_24* updates
    if (t >= 0.0 && key_resp_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_24.tStart = t;  // (not accounting for frame time here)
      key_resp_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.clearEvents(); });
    }
    
    if (key_resp_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_24.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_24_allKeys = _key_resp_24_allKeys.concat(theseKeys);
      if (_key_resp_24_allKeys.length > 0) {
        key_resp_24.keys = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_24.rt = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].rt;
        key_resp_24.duration = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnsp1_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnsp1_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnsp1_2' ---
    for (const thisComponent of topnsp1_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnsp1_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_24.corr, level);
    }
    psychoJS.experiment.addData('key_resp_24.keys', key_resp_24.keys);
    if (typeof key_resp_24.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_24.rt', key_resp_24.rt);
        psychoJS.experiment.addData('key_resp_24.duration', key_resp_24.duration);
        routineTimer.reset();
        }
    
    key_resp_24.stop();
    // the Routine "topnsp1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player2_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player2_5' ---
    t = 0;
    player2_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player2_5.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_24
    if ((friendChoice_2.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_27.keys = undefined;
    key_resp_27.rt = undefined;
    _key_resp_27_allKeys = [];
    // keep track of which components have finished
    player2_5Components = [];
    player2_5Components.push(polygon_28);
    player2_5Components.push(text_99);
    player2_5Components.push(player_6);
    player2_5Components.push(beachpic_8);
    player2_5Components.push(text_100);
    player2_5Components.push(writingpic2_8);
    player2_5Components.push(text_101);
    player2_5Components.push(cycling_8);
    player2_5Components.push(text_102);
    player2_5Components.push(yes1_12);
    player2_5Components.push(key_resp_27);
    
    for (const thisComponent of player2_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player2_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player2_5' ---
    // get current time
    t = player2_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_28* updates
    if (t >= 0.0 && polygon_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_28.tStart = t;  // (not accounting for frame time here)
      polygon_28.frameNStart = frameN;  // exact frame index
      
      polygon_28.setAutoDraw(true);
    }
    
    
    // *text_99* updates
    if (t >= 0.0 && text_99.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_99.tStart = t;  // (not accounting for frame time here)
      text_99.frameNStart = frameN;  // exact frame index
      
      text_99.setAutoDraw(true);
    }
    
    
    // *player_6* updates
    if (t >= 0.0 && player_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player_6.tStart = t;  // (not accounting for frame time here)
      player_6.frameNStart = frameN;  // exact frame index
      
      player_6.setAutoDraw(true);
    }
    
    
    // *beachpic_8* updates
    if (t >= 0.0 && beachpic_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_8.tStart = t;  // (not accounting for frame time here)
      beachpic_8.frameNStart = frameN;  // exact frame index
      
      beachpic_8.setAutoDraw(true);
    }
    
    
    // *text_100* updates
    if (t >= 0.0 && text_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100.tStart = t;  // (not accounting for frame time here)
      text_100.frameNStart = frameN;  // exact frame index
      
      text_100.setAutoDraw(true);
    }
    
    
    // *writingpic2_8* updates
    if (t >= 0.0 && writingpic2_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_8.tStart = t;  // (not accounting for frame time here)
      writingpic2_8.frameNStart = frameN;  // exact frame index
      
      writingpic2_8.setAutoDraw(true);
    }
    
    
    // *text_101* updates
    if (t >= 0.0 && text_101.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_101.tStart = t;  // (not accounting for frame time here)
      text_101.frameNStart = frameN;  // exact frame index
      
      text_101.setAutoDraw(true);
    }
    
    
    // *cycling_8* updates
    if (t >= 0.0 && cycling_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_8.tStart = t;  // (not accounting for frame time here)
      cycling_8.frameNStart = frameN;  // exact frame index
      
      cycling_8.setAutoDraw(true);
    }
    
    
    // *text_102* updates
    if (t >= 0.0 && text_102.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_102.tStart = t;  // (not accounting for frame time here)
      text_102.frameNStart = frameN;  // exact frame index
      
      text_102.setAutoDraw(true);
    }
    
    
    // *yes1_12* updates
    if (t >= 0.0 && yes1_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_12.tStart = t;  // (not accounting for frame time here)
      yes1_12.frameNStart = frameN;  // exact frame index
      
      yes1_12.setAutoDraw(true);
    }
    
    
    // *key_resp_27* updates
    if (t >= 0.0 && key_resp_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_27.tStart = t;  // (not accounting for frame time here)
      key_resp_27.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_27.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_27.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_27.clearEvents(); });
    }
    
    if (key_resp_27.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_27.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_27_allKeys = _key_resp_27_allKeys.concat(theseKeys);
      if (_key_resp_27_allKeys.length > 0) {
        key_resp_27.keys = _key_resp_27_allKeys[_key_resp_27_allKeys.length - 1].name;  // just the last key pressed
        key_resp_27.rt = _key_resp_27_allKeys[_key_resp_27_allKeys.length - 1].rt;
        key_resp_27.duration = _key_resp_27_allKeys[_key_resp_27_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player2_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player2_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player2_5' ---
    for (const thisComponent of player2_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player2_5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_27.corr, level);
    }
    psychoJS.experiment.addData('key_resp_27.keys', key_resp_27.keys);
    if (typeof key_resp_27.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_27.rt', key_resp_27.rt);
        psychoJS.experiment.addData('key_resp_27.duration', key_resp_27.duration);
        routineTimer.reset();
        }
    
    key_resp_27.stop();
    // the Routine "player2_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function topnsp2_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'topnsp2_2' ---
    t = 0;
    topnsp2_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('topnsp2_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_22
    if ((friendChoice_2.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_25.keys = undefined;
    key_resp_25.rt = undefined;
    _key_resp_25_allKeys = [];
    // keep track of which components have finished
    topnsp2_2Components = [];
    topnsp2_2Components.push(polygon_32);
    topnsp2_2Components.push(Player1_15);
    topnsp2_2Components.push(beachh_2);
    topnsp2_2Components.push(var_25);
    topnsp2_2Components.push(wrightt_2);
    topnsp2_2Components.push(var_26);
    topnsp2_2Components.push(cyc_2);
    topnsp2_2Components.push(text_95);
    topnsp2_2Components.push(p1_17);
    topnsp2_2Components.push(you_12);
    topnsp2_2Components.push(chatting_12);
    topnsp2_2Components.push(chat_12);
    topnsp2_2Components.push(sports_12);
    topnsp2_2Components.push(sport_12);
    topnsp2_2Components.push(beach_12);
    topnsp2_2Components.push(beach_txt_12);
    topnsp2_2Components.push(participantpic_12);
    topnsp2_2Components.push(notseen2_2);
    topnsp2_2Components.push(key_resp_25);
    
    for (const thisComponent of topnsp2_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function topnsp2_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'topnsp2_2' ---
    // get current time
    t = topnsp2_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_32* updates
    if (t >= 2.5 && polygon_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_32.tStart = t;  // (not accounting for frame time here)
      polygon_32.frameNStart = frameN;  // exact frame index
      
      polygon_32.setAutoDraw(true);
    }
    
    
    // *Player1_15* updates
    if (t >= 0.0 && Player1_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_15.tStart = t;  // (not accounting for frame time here)
      Player1_15.frameNStart = frameN;  // exact frame index
      
      Player1_15.setAutoDraw(true);
    }
    
    
    // *beachh_2* updates
    if (t >= 0.0 && beachh_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachh_2.tStart = t;  // (not accounting for frame time here)
      beachh_2.frameNStart = frameN;  // exact frame index
      
      beachh_2.setAutoDraw(true);
    }
    
    
    // *var_25* updates
    if (t >= 0.0 && var_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_25.tStart = t;  // (not accounting for frame time here)
      var_25.frameNStart = frameN;  // exact frame index
      
      var_25.setAutoDraw(true);
    }
    
    
    // *wrightt_2* updates
    if (t >= 0.0 && wrightt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrightt_2.tStart = t;  // (not accounting for frame time here)
      wrightt_2.frameNStart = frameN;  // exact frame index
      
      wrightt_2.setAutoDraw(true);
    }
    
    
    // *var_26* updates
    if (t >= 0.0 && var_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_26.tStart = t;  // (not accounting for frame time here)
      var_26.frameNStart = frameN;  // exact frame index
      
      var_26.setAutoDraw(true);
    }
    
    
    // *cyc_2* updates
    if (t >= 0.0 && cyc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cyc_2.tStart = t;  // (not accounting for frame time here)
      cyc_2.frameNStart = frameN;  // exact frame index
      
      cyc_2.setAutoDraw(true);
    }
    
    
    // *text_95* updates
    if (t >= 0.0 && text_95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_95.tStart = t;  // (not accounting for frame time here)
      text_95.frameNStart = frameN;  // exact frame index
      
      text_95.setAutoDraw(true);
    }
    
    
    // *p1_17* updates
    if (t >= 0.0 && p1_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_17.tStart = t;  // (not accounting for frame time here)
      p1_17.frameNStart = frameN;  // exact frame index
      
      p1_17.setAutoDraw(true);
    }
    
    
    // *you_12* updates
    if (t >= 1.0 && you_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_12.tStart = t;  // (not accounting for frame time here)
      you_12.frameNStart = frameN;  // exact frame index
      
      you_12.setAutoDraw(true);
    }
    
    
    // *chatting_12* updates
    if (t >= 1.0 && chatting_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_12.tStart = t;  // (not accounting for frame time here)
      chatting_12.frameNStart = frameN;  // exact frame index
      
      chatting_12.setAutoDraw(true);
    }
    
    
    // *chat_12* updates
    if (t >= 1.0 && chat_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_12.tStart = t;  // (not accounting for frame time here)
      chat_12.frameNStart = frameN;  // exact frame index
      
      chat_12.setAutoDraw(true);
    }
    
    
    // *sports_12* updates
    if (t >= 1.0 && sports_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_12.tStart = t;  // (not accounting for frame time here)
      sports_12.frameNStart = frameN;  // exact frame index
      
      sports_12.setAutoDraw(true);
    }
    
    
    // *sport_12* updates
    if (t >= 1.0 && sport_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_12.tStart = t;  // (not accounting for frame time here)
      sport_12.frameNStart = frameN;  // exact frame index
      
      sport_12.setAutoDraw(true);
    }
    
    
    // *beach_12* updates
    if (t >= 1.0 && beach_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_12.tStart = t;  // (not accounting for frame time here)
      beach_12.frameNStart = frameN;  // exact frame index
      
      beach_12.setAutoDraw(true);
    }
    
    
    // *beach_txt_12* updates
    if (t >= 1.0 && beach_txt_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_12.tStart = t;  // (not accounting for frame time here)
      beach_txt_12.frameNStart = frameN;  // exact frame index
      
      beach_txt_12.setAutoDraw(true);
    }
    
    
    // *participantpic_12* updates
    if (t >= 1.0 && participantpic_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_12.tStart = t;  // (not accounting for frame time here)
      participantpic_12.frameNStart = frameN;  // exact frame index
      
      participantpic_12.setAutoDraw(true);
    }
    
    
    // *notseen2_2* updates
    if (t >= 2.5 && notseen2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notseen2_2.tStart = t;  // (not accounting for frame time here)
      notseen2_2.frameNStart = frameN;  // exact frame index
      
      notseen2_2.setAutoDraw(true);
    }
    
    
    // *key_resp_25* updates
    if (t >= 0.0 && key_resp_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_25.tStart = t;  // (not accounting for frame time here)
      key_resp_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.clearEvents(); });
    }
    
    if (key_resp_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_25.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_25_allKeys = _key_resp_25_allKeys.concat(theseKeys);
      if (_key_resp_25_allKeys.length > 0) {
        key_resp_25.keys = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_25.rt = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].rt;
        key_resp_25.duration = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of topnsp2_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function topnsp2_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'topnsp2_2' ---
    for (const thisComponent of topnsp2_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('topnsp2_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_25.corr, level);
    }
    psychoJS.experiment.addData('key_resp_25.keys', key_resp_25.keys);
    if (typeof key_resp_25.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_25.rt', key_resp_25.rt);
        psychoJS.experiment.addData('key_resp_25.duration', key_resp_25.duration);
        routineTimer.reset();
        }
    
    key_resp_25.stop();
    // the Routine "topnsp2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function wait_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_5' ---
    t = 0;
    wait_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_5.started', globalClock.getTime());
    // keep track of which components have finished
    wait_5Components = [];
    wait_5Components.push(polygon_29);
    wait_5Components.push(text_103);
    
    for (const thisComponent of wait_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function wait_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_5' ---
    // get current time
    t = wait_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 3) {
        continueRoutine = false
    }
    
    // *polygon_29* updates
    if (t >= 0.0 && polygon_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_29.tStart = t;  // (not accounting for frame time here)
      polygon_29.frameNStart = frameN;  // exact frame index
      
      polygon_29.setAutoDraw(true);
    }
    
    
    // *text_103* updates
    if (t >= 0.0 && text_103.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_103.tStart = t;  // (not accounting for frame time here)
      text_103.frameNStart = frameN;  // exact frame index
      
      text_103.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of wait_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function wait_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_5' ---
    for (const thisComponent of wait_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wait_5.stopped', globalClock.getTime());
    // the Routine "wait_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function RunLoopBegin(RunLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Run = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Run'
    });
    psychoJS.experiment.addLoop(Run); // add the loop to the experiment
    currentLoop = Run;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRun of Run) {
      snapshot = Run.getSnapshot();
      RunLoopScheduler.add(importConditions(snapshot));
      RunLoopScheduler.add(ChoiceRoutineRoutineBegin(snapshot));
      RunLoopScheduler.add(ChoiceRoutineRoutineEachFrame());
      RunLoopScheduler.add(ChoiceRoutineRoutineEnd(snapshot));
      RunLoopScheduler.add(player1RoutineBegin(snapshot));
      RunLoopScheduler.add(player1RoutineEachFrame());
      RunLoopScheduler.add(player1RoutineEnd(snapshot));
      RunLoopScheduler.add(top1_neededit_nspRoutineBegin(snapshot));
      RunLoopScheduler.add(top1_neededit_nspRoutineEachFrame());
      RunLoopScheduler.add(top1_neededit_nspRoutineEnd(snapshot));
      RunLoopScheduler.add(player2RoutineBegin(snapshot));
      RunLoopScheduler.add(player2RoutineEachFrame());
      RunLoopScheduler.add(player2RoutineEnd(snapshot));
      RunLoopScheduler.add(top2_neededit_nspRoutineBegin(snapshot));
      RunLoopScheduler.add(top2_neededit_nspRoutineEachFrame());
      RunLoopScheduler.add(top2_neededit_nspRoutineEnd(snapshot));
      RunLoopScheduler.add(wait_5RoutineBegin(snapshot));
      RunLoopScheduler.add(wait_5RoutineEachFrame());
      RunLoopScheduler.add(wait_5RoutineEnd(snapshot));
      RunLoopScheduler.add(RunLoopEndIteration(RunLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function RunLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Run);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function RunLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ChoiceRoutine' ---
    t = 0;
    ChoiceRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ChoiceRoutine.started', globalClock.getTime());
    text_104.setText('player2');
    text_105.setText('playe5r');
    Player1demo_7.setImage(adolM_img);
    Player2demo_7.setImage(adolM_img);
    knitting_9.setImage(icon_img);
    friendChoice_5.keys = undefined;
    friendChoice_5.rt = undefined;
    _friendChoice_5_allKeys = [];
    // keep track of which components have finished
    ChoiceRoutineComponents = [];
    ChoiceRoutineComponents.push(Who_7);
    ChoiceRoutineComponents.push(text_104);
    ChoiceRoutineComponents.push(text_105);
    ChoiceRoutineComponents.push(Player1demo_7);
    ChoiceRoutineComponents.push(Player2demo_7);
    ChoiceRoutineComponents.push(writingpic_9);
    ChoiceRoutineComponents.push(text_106);
    ChoiceRoutineComponents.push(instruments_9);
    ChoiceRoutineComponents.push(text_107);
    ChoiceRoutineComponents.push(knitting_9);
    ChoiceRoutineComponents.push(text_108);
    ChoiceRoutineComponents.push(beachpic_9);
    ChoiceRoutineComponents.push(writingpic2_9);
    ChoiceRoutineComponents.push(text_109);
    ChoiceRoutineComponents.push(cycling_9);
    ChoiceRoutineComponents.push(text_110);
    ChoiceRoutineComponents.push(friendChoice_5);
    ChoiceRoutineComponents.push(text_111);
    
    for (const thisComponent of ChoiceRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ChoiceRoutine' ---
    // get current time
    t = ChoiceRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Who_7* updates
    if (t >= 0.0 && Who_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Who_7.tStart = t;  // (not accounting for frame time here)
      Who_7.frameNStart = frameN;  // exact frame index
      
      Who_7.setAutoDraw(true);
    }
    
    
    // *text_104* updates
    if (t >= 0.0 && text_104.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_104.tStart = t;  // (not accounting for frame time here)
      text_104.frameNStart = frameN;  // exact frame index
      
      text_104.setAutoDraw(true);
    }
    
    
    // *text_105* updates
    if (t >= 0.0 && text_105.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_105.tStart = t;  // (not accounting for frame time here)
      text_105.frameNStart = frameN;  // exact frame index
      
      text_105.setAutoDraw(true);
    }
    
    
    // *Player1demo_7* updates
    if (t >= 0.0 && Player1demo_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1demo_7.tStart = t;  // (not accounting for frame time here)
      Player1demo_7.frameNStart = frameN;  // exact frame index
      
      Player1demo_7.setAutoDraw(true);
    }
    
    
    // *Player2demo_7* updates
    if (t >= 0.0 && Player2demo_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player2demo_7.tStart = t;  // (not accounting for frame time here)
      Player2demo_7.frameNStart = frameN;  // exact frame index
      
      Player2demo_7.setAutoDraw(true);
    }
    
    
    // *writingpic_9* updates
    if (t >= 0.0 && writingpic_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_9.tStart = t;  // (not accounting for frame time here)
      writingpic_9.frameNStart = frameN;  // exact frame index
      
      writingpic_9.setAutoDraw(true);
    }
    
    
    // *text_106* updates
    if (t >= 0.0 && text_106.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_106.tStart = t;  // (not accounting for frame time here)
      text_106.frameNStart = frameN;  // exact frame index
      
      text_106.setAutoDraw(true);
    }
    
    
    // *instruments_9* updates
    if (t >= 0.0 && instruments_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_9.tStart = t;  // (not accounting for frame time here)
      instruments_9.frameNStart = frameN;  // exact frame index
      
      instruments_9.setAutoDraw(true);
    }
    
    
    // *text_107* updates
    if (t >= 0.0 && text_107.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_107.tStart = t;  // (not accounting for frame time here)
      text_107.frameNStart = frameN;  // exact frame index
      
      text_107.setAutoDraw(true);
    }
    
    
    // *knitting_9* updates
    if (t >= 0.0 && knitting_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_9.tStart = t;  // (not accounting for frame time here)
      knitting_9.frameNStart = frameN;  // exact frame index
      
      knitting_9.setAutoDraw(true);
    }
    
    
    // *text_108* updates
    if (t >= 0.0 && text_108.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_108.tStart = t;  // (not accounting for frame time here)
      text_108.frameNStart = frameN;  // exact frame index
      
      text_108.setAutoDraw(true);
    }
    
    
    // *beachpic_9* updates
    if (t >= 0.0 && beachpic_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_9.tStart = t;  // (not accounting for frame time here)
      beachpic_9.frameNStart = frameN;  // exact frame index
      
      beachpic_9.setAutoDraw(true);
    }
    
    
    // *writingpic2_9* updates
    if (t >= 0.0 && writingpic2_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_9.tStart = t;  // (not accounting for frame time here)
      writingpic2_9.frameNStart = frameN;  // exact frame index
      
      writingpic2_9.setAutoDraw(true);
    }
    
    
    // *text_109* updates
    if (t >= 0.0 && text_109.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_109.tStart = t;  // (not accounting for frame time here)
      text_109.frameNStart = frameN;  // exact frame index
      
      text_109.setAutoDraw(true);
    }
    
    
    // *cycling_9* updates
    if (t >= 0.0 && cycling_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_9.tStart = t;  // (not accounting for frame time here)
      cycling_9.frameNStart = frameN;  // exact frame index
      
      cycling_9.setAutoDraw(true);
    }
    
    
    // *text_110* updates
    if (t >= 0.0 && text_110.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_110.tStart = t;  // (not accounting for frame time here)
      text_110.frameNStart = frameN;  // exact frame index
      
      text_110.setAutoDraw(true);
    }
    
    
    // *friendChoice_5* updates
    if (t >= 0.0 && friendChoice_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      friendChoice_5.tStart = t;  // (not accounting for frame time here)
      friendChoice_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { friendChoice_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { friendChoice_5.clearEvents(); });
    }
    
    if (friendChoice_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = friendChoice_5.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _friendChoice_5_allKeys = _friendChoice_5_allKeys.concat(theseKeys);
      if (_friendChoice_5_allKeys.length > 0) {
        friendChoice_5.keys = _friendChoice_5_allKeys[_friendChoice_5_allKeys.length - 1].name;  // just the last key pressed
        friendChoice_5.rt = _friendChoice_5_allKeys[_friendChoice_5_allKeys.length - 1].rt;
        friendChoice_5.duration = _friendChoice_5_allKeys[_friendChoice_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_111* updates
    if (t >= 0.0 && text_111.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_111.tStart = t;  // (not accounting for frame time here)
      text_111.frameNStart = frameN;  // exact frame index
      
      text_111.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ChoiceRoutine' ---
    for (const thisComponent of ChoiceRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ChoiceRoutine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(friendChoice_5.corr, level);
    }
    psychoJS.experiment.addData('friendChoice_5.keys', friendChoice_5.keys);
    if (typeof friendChoice_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('friendChoice_5.rt', friendChoice_5.rt);
        psychoJS.experiment.addData('friendChoice_5.duration', friendChoice_5.duration);
        routineTimer.reset();
        }
    
    friendChoice_5.stop();
    // the Routine "ChoiceRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player1' ---
    t = 0;
    player1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_25
    if ((friendChoice_2.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_28.keys = undefined;
    key_resp_28.rt = undefined;
    _key_resp_28_allKeys = [];
    // keep track of which components have finished
    player1Components = [];
    player1Components.push(polygon_30);
    player1Components.push(p1_19);
    player1Components.push(Player1_17);
    player1Components.push(writingpic_10);
    player1Components.push(text_112);
    player1Components.push(instruments_10);
    player1Components.push(text_113);
    player1Components.push(knitting_10);
    player1Components.push(yes1_13);
    player1Components.push(text_114);
    player1Components.push(key_resp_28);
    
    for (const thisComponent of player1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player1' ---
    // get current time
    t = player1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_30* updates
    if (t >= 0.0 && polygon_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_30.tStart = t;  // (not accounting for frame time here)
      polygon_30.frameNStart = frameN;  // exact frame index
      
      polygon_30.setAutoDraw(true);
    }
    
    
    // *p1_19* updates
    if (t >= 0.0 && p1_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_19.tStart = t;  // (not accounting for frame time here)
      p1_19.frameNStart = frameN;  // exact frame index
      
      p1_19.setAutoDraw(true);
    }
    
    
    // *Player1_17* updates
    if (t >= 0.0 && Player1_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_17.tStart = t;  // (not accounting for frame time here)
      Player1_17.frameNStart = frameN;  // exact frame index
      
      Player1_17.setAutoDraw(true);
    }
    
    
    // *writingpic_10* updates
    if (t >= 0.0 && writingpic_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic_10.tStart = t;  // (not accounting for frame time here)
      writingpic_10.frameNStart = frameN;  // exact frame index
      
      writingpic_10.setAutoDraw(true);
    }
    
    
    // *text_112* updates
    if (t >= 0.0 && text_112.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_112.tStart = t;  // (not accounting for frame time here)
      text_112.frameNStart = frameN;  // exact frame index
      
      text_112.setAutoDraw(true);
    }
    
    
    // *instruments_10* updates
    if (t >= 0.0 && instruments_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruments_10.tStart = t;  // (not accounting for frame time here)
      instruments_10.frameNStart = frameN;  // exact frame index
      
      instruments_10.setAutoDraw(true);
    }
    
    
    // *text_113* updates
    if (t >= 0.0 && text_113.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_113.tStart = t;  // (not accounting for frame time here)
      text_113.frameNStart = frameN;  // exact frame index
      
      text_113.setAutoDraw(true);
    }
    
    
    // *knitting_10* updates
    if (t >= 0.0 && knitting_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knitting_10.tStart = t;  // (not accounting for frame time here)
      knitting_10.frameNStart = frameN;  // exact frame index
      
      knitting_10.setAutoDraw(true);
    }
    
    
    // *yes1_13* updates
    if (t >= 0.0 && yes1_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_13.tStart = t;  // (not accounting for frame time here)
      yes1_13.frameNStart = frameN;  // exact frame index
      
      yes1_13.setAutoDraw(true);
    }
    
    
    // *text_114* updates
    if (t >= 0.0 && text_114.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_114.tStart = t;  // (not accounting for frame time here)
      text_114.frameNStart = frameN;  // exact frame index
      
      text_114.setAutoDraw(true);
    }
    
    
    // *key_resp_28* updates
    if (t >= 0.0 && key_resp_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_28.tStart = t;  // (not accounting for frame time here)
      key_resp_28.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_28.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.clearEvents(); });
    }
    
    if (key_resp_28.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_28.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_28_allKeys = _key_resp_28_allKeys.concat(theseKeys);
      if (_key_resp_28_allKeys.length > 0) {
        key_resp_28.keys = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].name;  // just the last key pressed
        key_resp_28.rt = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].rt;
        key_resp_28.duration = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player1' ---
    for (const thisComponent of player1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_28.corr, level);
    }
    psychoJS.experiment.addData('key_resp_28.keys', key_resp_28.keys);
    if (typeof key_resp_28.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_28.rt', key_resp_28.rt);
        psychoJS.experiment.addData('key_resp_28.duration', key_resp_28.duration);
        routineTimer.reset();
        }
    
    key_resp_28.stop();
    // the Routine "player1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function top1_neededit_nspRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'top1_neededit_nsp' ---
    t = 0;
    top1_neededit_nspClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('top1_neededit_nsp.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_26
    if ((friendChoice_2.keys !== "n")) {
        continueRoutine = false;
    }
    
    key_resp_29.keys = undefined;
    key_resp_29.rt = undefined;
    _key_resp_29_allKeys = [];
    // keep track of which components have finished
    top1_neededit_nspComponents = [];
    top1_neededit_nspComponents.push(polygon_38);
    top1_neededit_nspComponents.push(Player1_18);
    top1_neededit_nspComponents.push(draw_3);
    top1_neededit_nspComponents.push(wright_3);
    top1_neededit_nspComponents.push(pianoo_3);
    top1_neededit_nspComponents.push(var_27);
    top1_neededit_nspComponents.push(knit_3);
    top1_neededit_nspComponents.push(text_115);
    top1_neededit_nspComponents.push(p1_20);
    top1_neededit_nspComponents.push(you_13);
    top1_neededit_nspComponents.push(chatting_13);
    top1_neededit_nspComponents.push(chat_13);
    top1_neededit_nspComponents.push(sports_13);
    top1_neededit_nspComponents.push(sport_13);
    top1_neededit_nspComponents.push(beach_13);
    top1_neededit_nspComponents.push(beach_txt_13);
    top1_neededit_nspComponents.push(participantpic_13);
    top1_neededit_nspComponents.push(notseen_3);
    top1_neededit_nspComponents.push(key_resp_29);
    
    for (const thisComponent of top1_neededit_nspComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function top1_neededit_nspRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'top1_neededit_nsp' ---
    // get current time
    t = top1_neededit_nspClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_38* updates
    if (t >= 2.5 && polygon_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_38.tStart = t;  // (not accounting for frame time here)
      polygon_38.frameNStart = frameN;  // exact frame index
      
      polygon_38.setAutoDraw(true);
    }
    
    
    // *Player1_18* updates
    if (t >= 0.0 && Player1_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_18.tStart = t;  // (not accounting for frame time here)
      Player1_18.frameNStart = frameN;  // exact frame index
      
      Player1_18.setAutoDraw(true);
    }
    
    
    // *draw_3* updates
    if (t >= 0.0 && draw_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      draw_3.tStart = t;  // (not accounting for frame time here)
      draw_3.frameNStart = frameN;  // exact frame index
      
      draw_3.setAutoDraw(true);
    }
    
    
    // *wright_3* updates
    if (t >= 0.0 && wright_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wright_3.tStart = t;  // (not accounting for frame time here)
      wright_3.frameNStart = frameN;  // exact frame index
      
      wright_3.setAutoDraw(true);
    }
    
    
    // *pianoo_3* updates
    if (t >= 0.0 && pianoo_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pianoo_3.tStart = t;  // (not accounting for frame time here)
      pianoo_3.frameNStart = frameN;  // exact frame index
      
      pianoo_3.setAutoDraw(true);
    }
    
    
    // *var_27* updates
    if (t >= 0.0 && var_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_27.tStart = t;  // (not accounting for frame time here)
      var_27.frameNStart = frameN;  // exact frame index
      
      var_27.setAutoDraw(true);
    }
    
    
    // *knit_3* updates
    if (t >= 0.0 && knit_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      knit_3.tStart = t;  // (not accounting for frame time here)
      knit_3.frameNStart = frameN;  // exact frame index
      
      knit_3.setAutoDraw(true);
    }
    
    
    // *text_115* updates
    if (t >= 0.0 && text_115.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_115.tStart = t;  // (not accounting for frame time here)
      text_115.frameNStart = frameN;  // exact frame index
      
      text_115.setAutoDraw(true);
    }
    
    
    // *p1_20* updates
    if (t >= 0.0 && p1_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_20.tStart = t;  // (not accounting for frame time here)
      p1_20.frameNStart = frameN;  // exact frame index
      
      p1_20.setAutoDraw(true);
    }
    
    
    // *you_13* updates
    if (t >= 1.0 && you_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_13.tStart = t;  // (not accounting for frame time here)
      you_13.frameNStart = frameN;  // exact frame index
      
      you_13.setAutoDraw(true);
    }
    
    
    // *chatting_13* updates
    if (t >= 1.0 && chatting_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_13.tStart = t;  // (not accounting for frame time here)
      chatting_13.frameNStart = frameN;  // exact frame index
      
      chatting_13.setAutoDraw(true);
    }
    
    
    // *chat_13* updates
    if (t >= 1.0 && chat_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_13.tStart = t;  // (not accounting for frame time here)
      chat_13.frameNStart = frameN;  // exact frame index
      
      chat_13.setAutoDraw(true);
    }
    
    
    // *sports_13* updates
    if (t >= 1.0 && sports_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_13.tStart = t;  // (not accounting for frame time here)
      sports_13.frameNStart = frameN;  // exact frame index
      
      sports_13.setAutoDraw(true);
    }
    
    
    // *sport_13* updates
    if (t >= 1.0 && sport_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_13.tStart = t;  // (not accounting for frame time here)
      sport_13.frameNStart = frameN;  // exact frame index
      
      sport_13.setAutoDraw(true);
    }
    
    
    // *beach_13* updates
    if (t >= 1.0 && beach_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_13.tStart = t;  // (not accounting for frame time here)
      beach_13.frameNStart = frameN;  // exact frame index
      
      beach_13.setAutoDraw(true);
    }
    
    
    // *beach_txt_13* updates
    if (t >= 1.0 && beach_txt_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_13.tStart = t;  // (not accounting for frame time here)
      beach_txt_13.frameNStart = frameN;  // exact frame index
      
      beach_txt_13.setAutoDraw(true);
    }
    
    
    // *participantpic_13* updates
    if (t >= 1.0 && participantpic_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_13.tStart = t;  // (not accounting for frame time here)
      participantpic_13.frameNStart = frameN;  // exact frame index
      
      participantpic_13.setAutoDraw(true);
    }
    
    
    // *notseen_3* updates
    if (t >= 2.5 && notseen_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notseen_3.tStart = t;  // (not accounting for frame time here)
      notseen_3.frameNStart = frameN;  // exact frame index
      
      notseen_3.setAutoDraw(true);
    }
    
    
    // *key_resp_29* updates
    if (t >= 0.0 && key_resp_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_29.tStart = t;  // (not accounting for frame time here)
      key_resp_29.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_29.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_29.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_29.clearEvents(); });
    }
    
    if (key_resp_29.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_29.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_29_allKeys = _key_resp_29_allKeys.concat(theseKeys);
      if (_key_resp_29_allKeys.length > 0) {
        key_resp_29.keys = _key_resp_29_allKeys[_key_resp_29_allKeys.length - 1].name;  // just the last key pressed
        key_resp_29.rt = _key_resp_29_allKeys[_key_resp_29_allKeys.length - 1].rt;
        key_resp_29.duration = _key_resp_29_allKeys[_key_resp_29_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of top1_neededit_nspComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function top1_neededit_nspRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'top1_neededit_nsp' ---
    for (const thisComponent of top1_neededit_nspComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('top1_neededit_nsp.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_29.corr, level);
    }
    psychoJS.experiment.addData('key_resp_29.keys', key_resp_29.keys);
    if (typeof key_resp_29.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_29.rt', key_resp_29.rt);
        psychoJS.experiment.addData('key_resp_29.duration', key_resp_29.duration);
        routineTimer.reset();
        }
    
    key_resp_29.stop();
    // the Routine "top1_neededit_nsp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function player2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'player2' ---
    t = 0;
    player2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('player2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_28
    if ((friendChoice_2.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_31.keys = undefined;
    key_resp_31.rt = undefined;
    _key_resp_31_allKeys = [];
    // keep track of which components have finished
    player2Components = [];
    player2Components.push(polygon_31);
    player2Components.push(text_117);
    player2Components.push(player_7);
    player2Components.push(beachpic_10);
    player2Components.push(text_118);
    player2Components.push(writingpic2_10);
    player2Components.push(text_119);
    player2Components.push(cycling_10);
    player2Components.push(text_120);
    player2Components.push(yes1_14);
    player2Components.push(key_resp_31);
    
    for (const thisComponent of player2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function player2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'player2' ---
    // get current time
    t = player2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_31* updates
    if (t >= 0.0 && polygon_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_31.tStart = t;  // (not accounting for frame time here)
      polygon_31.frameNStart = frameN;  // exact frame index
      
      polygon_31.setAutoDraw(true);
    }
    
    
    // *text_117* updates
    if (t >= 0.0 && text_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_117.tStart = t;  // (not accounting for frame time here)
      text_117.frameNStart = frameN;  // exact frame index
      
      text_117.setAutoDraw(true);
    }
    
    
    // *player_7* updates
    if (t >= 0.0 && player_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player_7.tStart = t;  // (not accounting for frame time here)
      player_7.frameNStart = frameN;  // exact frame index
      
      player_7.setAutoDraw(true);
    }
    
    
    // *beachpic_10* updates
    if (t >= 0.0 && beachpic_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachpic_10.tStart = t;  // (not accounting for frame time here)
      beachpic_10.frameNStart = frameN;  // exact frame index
      
      beachpic_10.setAutoDraw(true);
    }
    
    
    // *text_118* updates
    if (t >= 0.0 && text_118.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_118.tStart = t;  // (not accounting for frame time here)
      text_118.frameNStart = frameN;  // exact frame index
      
      text_118.setAutoDraw(true);
    }
    
    
    // *writingpic2_10* updates
    if (t >= 0.0 && writingpic2_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      writingpic2_10.tStart = t;  // (not accounting for frame time here)
      writingpic2_10.frameNStart = frameN;  // exact frame index
      
      writingpic2_10.setAutoDraw(true);
    }
    
    
    // *text_119* updates
    if (t >= 0.0 && text_119.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_119.tStart = t;  // (not accounting for frame time here)
      text_119.frameNStart = frameN;  // exact frame index
      
      text_119.setAutoDraw(true);
    }
    
    
    // *cycling_10* updates
    if (t >= 0.0 && cycling_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cycling_10.tStart = t;  // (not accounting for frame time here)
      cycling_10.frameNStart = frameN;  // exact frame index
      
      cycling_10.setAutoDraw(true);
    }
    
    
    // *text_120* updates
    if (t >= 0.0 && text_120.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_120.tStart = t;  // (not accounting for frame time here)
      text_120.frameNStart = frameN;  // exact frame index
      
      text_120.setAutoDraw(true);
    }
    
    
    // *yes1_14* updates
    if (t >= 0.0 && yes1_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes1_14.tStart = t;  // (not accounting for frame time here)
      yes1_14.frameNStart = frameN;  // exact frame index
      
      yes1_14.setAutoDraw(true);
    }
    
    
    // *key_resp_31* updates
    if (t >= 0.0 && key_resp_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_31.tStart = t;  // (not accounting for frame time here)
      key_resp_31.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_31.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_31.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_31.clearEvents(); });
    }
    
    if (key_resp_31.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_31.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_31_allKeys = _key_resp_31_allKeys.concat(theseKeys);
      if (_key_resp_31_allKeys.length > 0) {
        key_resp_31.keys = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].name;  // just the last key pressed
        key_resp_31.rt = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].rt;
        key_resp_31.duration = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of player2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function player2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'player2' ---
    for (const thisComponent of player2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('player2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_31.corr, level);
    }
    psychoJS.experiment.addData('key_resp_31.keys', key_resp_31.keys);
    if (typeof key_resp_31.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_31.rt', key_resp_31.rt);
        psychoJS.experiment.addData('key_resp_31.duration', key_resp_31.duration);
        routineTimer.reset();
        }
    
    key_resp_31.stop();
    // the Routine "player2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function top2_neededit_nspRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'top2_neededit_nsp' ---
    t = 0;
    top2_neededit_nspClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('top2_neededit_nsp.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_27
    if ((friendChoice_2.keys !== "y")) {
        continueRoutine = false;
    }
    
    key_resp_30.keys = undefined;
    key_resp_30.rt = undefined;
    _key_resp_30_allKeys = [];
    // keep track of which components have finished
    top2_neededit_nspComponents = [];
    top2_neededit_nspComponents.push(polygon_33);
    top2_neededit_nspComponents.push(Player1_19);
    top2_neededit_nspComponents.push(beachh_3);
    top2_neededit_nspComponents.push(var_28);
    top2_neededit_nspComponents.push(wrightt_3);
    top2_neededit_nspComponents.push(var_29);
    top2_neededit_nspComponents.push(cyc_3);
    top2_neededit_nspComponents.push(text_116);
    top2_neededit_nspComponents.push(p1_21);
    top2_neededit_nspComponents.push(you_14);
    top2_neededit_nspComponents.push(chatting_14);
    top2_neededit_nspComponents.push(chat_14);
    top2_neededit_nspComponents.push(sports_14);
    top2_neededit_nspComponents.push(sport_14);
    top2_neededit_nspComponents.push(beach_14);
    top2_neededit_nspComponents.push(beach_txt_14);
    top2_neededit_nspComponents.push(participantpic_14);
    top2_neededit_nspComponents.push(notseen2_3);
    top2_neededit_nspComponents.push(key_resp_30);
    
    for (const thisComponent of top2_neededit_nspComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function top2_neededit_nspRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'top2_neededit_nsp' ---
    // get current time
    t = top2_neededit_nspClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_33* updates
    if (t >= 2.5 && polygon_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_33.tStart = t;  // (not accounting for frame time here)
      polygon_33.frameNStart = frameN;  // exact frame index
      
      polygon_33.setAutoDraw(true);
    }
    
    
    // *Player1_19* updates
    if (t >= 0.0 && Player1_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Player1_19.tStart = t;  // (not accounting for frame time here)
      Player1_19.frameNStart = frameN;  // exact frame index
      
      Player1_19.setAutoDraw(true);
    }
    
    
    // *beachh_3* updates
    if (t >= 0.0 && beachh_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beachh_3.tStart = t;  // (not accounting for frame time here)
      beachh_3.frameNStart = frameN;  // exact frame index
      
      beachh_3.setAutoDraw(true);
    }
    
    
    // *var_28* updates
    if (t >= 0.0 && var_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_28.tStart = t;  // (not accounting for frame time here)
      var_28.frameNStart = frameN;  // exact frame index
      
      var_28.setAutoDraw(true);
    }
    
    
    // *wrightt_3* updates
    if (t >= 0.0 && wrightt_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wrightt_3.tStart = t;  // (not accounting for frame time here)
      wrightt_3.frameNStart = frameN;  // exact frame index
      
      wrightt_3.setAutoDraw(true);
    }
    
    
    // *var_29* updates
    if (t >= 0.0 && var_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      var_29.tStart = t;  // (not accounting for frame time here)
      var_29.frameNStart = frameN;  // exact frame index
      
      var_29.setAutoDraw(true);
    }
    
    
    // *cyc_3* updates
    if (t >= 0.0 && cyc_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cyc_3.tStart = t;  // (not accounting for frame time here)
      cyc_3.frameNStart = frameN;  // exact frame index
      
      cyc_3.setAutoDraw(true);
    }
    
    
    // *text_116* updates
    if (t >= 0.0 && text_116.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_116.tStart = t;  // (not accounting for frame time here)
      text_116.frameNStart = frameN;  // exact frame index
      
      text_116.setAutoDraw(true);
    }
    
    
    // *p1_21* updates
    if (t >= 0.0 && p1_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p1_21.tStart = t;  // (not accounting for frame time here)
      p1_21.frameNStart = frameN;  // exact frame index
      
      p1_21.setAutoDraw(true);
    }
    
    
    // *you_14* updates
    if (t >= 1.0 && you_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      you_14.tStart = t;  // (not accounting for frame time here)
      you_14.frameNStart = frameN;  // exact frame index
      
      you_14.setAutoDraw(true);
    }
    
    
    // *chatting_14* updates
    if (t >= 1.0 && chatting_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chatting_14.tStart = t;  // (not accounting for frame time here)
      chatting_14.frameNStart = frameN;  // exact frame index
      
      chatting_14.setAutoDraw(true);
    }
    
    
    // *chat_14* updates
    if (t >= 1.0 && chat_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chat_14.tStart = t;  // (not accounting for frame time here)
      chat_14.frameNStart = frameN;  // exact frame index
      
      chat_14.setAutoDraw(true);
    }
    
    
    // *sports_14* updates
    if (t >= 1.0 && sports_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sports_14.tStart = t;  // (not accounting for frame time here)
      sports_14.frameNStart = frameN;  // exact frame index
      
      sports_14.setAutoDraw(true);
    }
    
    
    // *sport_14* updates
    if (t >= 1.0 && sport_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_14.tStart = t;  // (not accounting for frame time here)
      sport_14.frameNStart = frameN;  // exact frame index
      
      sport_14.setAutoDraw(true);
    }
    
    
    // *beach_14* updates
    if (t >= 1.0 && beach_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_14.tStart = t;  // (not accounting for frame time here)
      beach_14.frameNStart = frameN;  // exact frame index
      
      beach_14.setAutoDraw(true);
    }
    
    
    // *beach_txt_14* updates
    if (t >= 1.0 && beach_txt_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beach_txt_14.tStart = t;  // (not accounting for frame time here)
      beach_txt_14.frameNStart = frameN;  // exact frame index
      
      beach_txt_14.setAutoDraw(true);
    }
    
    
    // *participantpic_14* updates
    if (t >= 1.0 && participantpic_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantpic_14.tStart = t;  // (not accounting for frame time here)
      participantpic_14.frameNStart = frameN;  // exact frame index
      
      participantpic_14.setAutoDraw(true);
    }
    
    
    // *notseen2_3* updates
    if (t >= 2.5 && notseen2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notseen2_3.tStart = t;  // (not accounting for frame time here)
      notseen2_3.frameNStart = frameN;  // exact frame index
      
      notseen2_3.setAutoDraw(true);
    }
    
    
    // *key_resp_30* updates
    if (t >= 0.0 && key_resp_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_30.tStart = t;  // (not accounting for frame time here)
      key_resp_30.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_30.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_30.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_30.clearEvents(); });
    }
    
    if (key_resp_30.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_30.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_30_allKeys = _key_resp_30_allKeys.concat(theseKeys);
      if (_key_resp_30_allKeys.length > 0) {
        key_resp_30.keys = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].name;  // just the last key pressed
        key_resp_30.rt = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].rt;
        key_resp_30.duration = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of top2_neededit_nspComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function top2_neededit_nspRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'top2_neededit_nsp' ---
    for (const thisComponent of top2_neededit_nspComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('top2_neededit_nsp.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_30.corr, level);
    }
    psychoJS.experiment.addData('key_resp_30.keys', key_resp_30.keys);
    if (typeof key_resp_30.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_30.rt', key_resp_30.rt);
        psychoJS.experiment.addData('key_resp_30.duration', key_resp_30.duration);
        routineTimer.reset();
        }
    
    key_resp_30.stop();
    // the Routine "top2_neededit_nsp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
