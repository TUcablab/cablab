/********************* 
 * Rewardgonogo *
 *********************/


// store info about the experiment session:
let expName = 'RewardGoNoGo';  // from the Builder filename that created this script
let expInfo = {
    'mriMode': 'Scan',
    'runOrder': 'A',
    'hand': 'right',
    'session': '001',
    'stimType': 'c',
    'participant': 'test',
    'colorVersion': '1crater',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'deg',
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
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(text1RoutineBegin());
flowScheduler.add(text1RoutineEachFrame());
flowScheduler.add(text1RoutineEnd());
flowScheduler.add(text2RoutineBegin());
flowScheduler.add(text2RoutineEachFrame());
flowScheduler.add(text2RoutineEnd());
flowScheduler.add(image1RoutineBegin());
flowScheduler.add(image1RoutineEachFrame());
flowScheduler.add(image1RoutineEnd());
flowScheduler.add(text3RoutineBegin());
flowScheduler.add(text3RoutineEachFrame());
flowScheduler.add(text3RoutineEnd());
flowScheduler.add(image2RoutineBegin());
flowScheduler.add(image2RoutineEachFrame());
flowScheduler.add(image2RoutineEnd());
flowScheduler.add(text4RoutineBegin());
flowScheduler.add(text4RoutineEachFrame());
flowScheduler.add(text4RoutineEnd());
flowScheduler.add(text5RoutineBegin());
flowScheduler.add(text5RoutineEachFrame());
flowScheduler.add(text5RoutineEnd());
flowScheduler.add(image3RoutineBegin());
flowScheduler.add(image3RoutineEachFrame());
flowScheduler.add(image3RoutineEnd());
flowScheduler.add(text6RoutineBegin());
flowScheduler.add(text6RoutineEachFrame());
flowScheduler.add(text6RoutineEnd());
flowScheduler.add(image4RoutineBegin());
flowScheduler.add(image4RoutineEachFrame());
flowScheduler.add(image4RoutineEnd());
flowScheduler.add(text7RoutineBegin());
flowScheduler.add(text7RoutineEachFrame());
flowScheduler.add(text7RoutineEnd());
flowScheduler.add(text8RoutineBegin());
flowScheduler.add(text8RoutineEachFrame());
flowScheduler.add(text8RoutineEnd());
const runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(runsLoopBegin(runsLoopScheduler));
flowScheduler.add(runsLoopScheduler);
flowScheduler.add(runsLoopEnd);














flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions/PlanetRuns.xlsx', 'path': 'conditions/PlanetRuns.xlsx'},
    {'name': 'instructionimages/gng_moons.jpg', 'path': 'instructionimages/gng_moons.jpg'},
    {'name': 'instructionimages/gng_planets.jpg', 'path': 'instructionimages/gng_planets.jpg'},
    {'name': 'instructionimages/gng_starcue1.jpg', 'path': 'instructionimages/gng_starcue1.jpg'},
    {'name': 'instructionimages/gng_starcue2.jpg', 'path': 'instructionimages/gng_starcue2.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + (("data" + "/") + `${expInfo["participant"]}_${expInfo["date"]}`));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var welcomeScreen;
var advanceScreen;
var polygon;
var text1Clock;
var advanceScreen_2;
var directionText_1;
var colorTrialsFile;
var runOrderFile;
var text2Clock;
var advanceScreen_3;
var directionText_2;
var image1Clock;
var advanceScreen_4;
var moonExampleImage;
var text3Clock;
var advanceScreen_5;
var directionsText_3;
var image2Clock;
var advanceScreen_6;
var planetExampleImage;
var text4Clock;
var advanceScreen_7;
var directionText_3;
var text5Clock;
var advanceScreen_8;
var directionText_4;
var image3Clock;
var advanceScreen_9;
var cueExampleImage_1;
var text6Clock;
var advanceScreen_10;
var directionText_5;
var image4Clock;
var advanceScreen_11;
var cueExampleImage_2;
var text7Clock;
var advanceScreen_12;
var directionText_6;
var text8Clock;
var advanceScreen_13;
var directionText_7;
var triggerClock;
var waitForTrigger;
var receiveTrigger;
var waitForScannerClock;
var trial_cueClock;
var Cue2;
var frame1;
var frame2;
var drawCircle;
var fixationClock;
var fixation1;
var fixationFrame1;
var fixationFrame2;
var trialClock;
var trialFrame;
var trialFrame2;
var Target;
var targetResp;
var jitterClock;
var jitteredISI;
var jitterFrame1;
var jitterFrame2;
var lateResp;
var feedbackClock;
var reward;
var rewardFrame1;
var rewardFrame2;
var endBlockClock;
var breakFixation;
var runEndClock;
var breakText;
var SpaceToEndRun;
var EndClock;
var endTask;
var SpaceToExit;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  welcomeScreen = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeScreen',
    text: 'Welcome to the planets game!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 2,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  advanceScreen = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [(- 15), 12],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "text1"
  text1Clock = new util.Clock();
  advanceScreen_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_1',
    text: 'In this game, you will be traveling through different galaxies in space. In these galaxies, you will see planets or moons.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from setConditionsFile
  colorTrialsFile = os.path.join("conditions", `RewardGoNoGo_Version${expInfo["colorVersion"]}`);
  logging.exp(`Using trial color file: ${colorTrialsFile}`);
  runOrderFile = os.path.join("conditions", `GalaxyValues${expInfo["runOrder"]}`);
  logging.exp(`Using run order file: ${runOrderFile}`);
  
  // Initialize components for Routine "text2"
  text2Clock = new util.Clock();
  advanceScreen_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_2',
    text: 'Moons have craters. When you see a moon, do NOTHING. Here are some examples of the moons you may see:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "image1"
  image1Clock = new util.Clock();
  advanceScreen_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  moonExampleImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'moonExampleImage', units : undefined, 
    image : 'instructionimages/gng_moons.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [30, 30],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "text3"
  text3Clock = new util.Clock();
  advanceScreen_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionsText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionsText_3',
    text: 'Planets have stripes. Here are some examples of planets you may see:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "image2"
  image2Clock = new util.Clock();
  advanceScreen_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  planetExampleImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'planetExampleImage', units : undefined, 
    image : 'instructionimages/gng_planets.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [30, 30],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "text4"
  text4Clock = new util.Clock();
  advanceScreen_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_3',
    text: 'When you see a planet, click your pointer finger as quickly as possible. Remember to press the button all the way down, and then let it go right after.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "text5"
  text5Clock = new util.Clock();
  advanceScreen_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_4',
    text: "You're going to see four different galaxies. Before each galaxy, you're going to see either one star or two stars.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "image3"
  image3Clock = new util.Clock();
  advanceScreen_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cueExampleImage_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cueExampleImage_1', units : undefined, 
    image : 'instructionimages/gng_starcue1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [30, 30],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "text6"
  text6Clock = new util.Clock();
  advanceScreen_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_5',
    text: "If you see one star before you enter a galaxy, that means you can win 200 points when you click a planet.\n\nBut when you don't click a planet, or you click a moon, you lose 100 points.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "image4"
  image4Clock = new util.Clock();
  advanceScreen_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cueExampleImage_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cueExampleImage_2', units : undefined, 
    image : 'instructionimages/gng_starcue2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [30, 30],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "text7"
  text7Clock = new util.Clock();
  advanceScreen_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_6',
    text: "If you see two stars before you enter a galaxy, that means you can win 1000 points when you click a planet.\n\nBut when you don't click a planet, or you click a moon, you lose 500 points.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "text8"
  text8Clock = new util.Clock();
  advanceScreen_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  directionText_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'directionText_7',
    text: "At the end of each galaxy, you'll see how many points you earned, and between each galaxy you'll get to take a short break. \n\nRemember, use your pointer finger, and click ONLY for planets. \n\nDo you have any questions?",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trigger"
  triggerClock = new util.Clock();
  waitForTrigger = new visual.TextStim({
    win: psychoJS.window,
    name: 'waitForTrigger',
    text: 'Get Ready!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  receiveTrigger = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "waitForScanner"
  waitForScannerClock = new util.Clock();
  // Initialize components for Routine "trial_cue"
  trial_cueClock = new util.Clock();
  Cue2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Cue2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0], size : [12.5, 10],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  frame1 = new visual.Rect ({
    win: psychoJS.window, name: 'frame1', 
    width: [18, 18][0], height: [18, 18][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  frame2 = new visual.Rect ({
    win: psychoJS.window, name: 'frame2', 
    width: [19, 19][0], height: [19, 19][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  drawCircle = new visual.Polygon ({
    win: psychoJS.window, name: 'drawCircle', 
    edges: 90, size:[16.5, 16.5],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 5, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  fixationFrame1 = new visual.Rect ({
    win: psychoJS.window, name: 'fixationFrame1', 
    width: [18, 18][0], height: [18, 18][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  fixationFrame2 = new visual.Rect ({
    win: psychoJS.window, name: 'fixationFrame2', 
    width: [19, 19][0], height: [19, 19][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialFrame = new visual.Rect ({
    win: psychoJS.window, name: 'trialFrame', 
    width: [18, 18][0], height: [18, 18][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  trialFrame2 = new visual.Rect ({
    win: psychoJS.window, name: 'trialFrame2', 
    width: [19, 19][0], height: [19, 19][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  Target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Target', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : [15, 15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : true, flipVert : false,
    texRes : 256, interpolate : true, depth : -6.0 
  });
  targetResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "jitter"
  jitterClock = new util.Clock();
  jitteredISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'jitteredISI',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  jitterFrame1 = new visual.Rect ({
    win: psychoJS.window, name: 'jitterFrame1', 
    width: [18, 18][0], height: [18, 18][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  jitterFrame2 = new visual.Rect ({
    win: psychoJS.window, name: 'jitterFrame2', 
    width: [19, 19][0], height: [19, 19][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  lateResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  reward = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 2,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  rewardFrame1 = new visual.Rect ({
    win: psychoJS.window, name: 'rewardFrame1', 
    width: [18, 18][0], height: [18, 18][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  rewardFrame2 = new visual.Rect ({
    win: psychoJS.window, name: 'rewardFrame2', 
    width: [19, 19][0], height: [19, 19][1],
    ori: 0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "endBlock"
  endBlockClock = new util.Clock();
  breakFixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakFixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "runEnd"
  runEndClock = new util.Clock();
  breakText = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakText',
    text: 'You finished this round!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  SpaceToEndRun = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  endTask = new visual.TextStim({
    win: psychoJS.window,
    name: 'endTask',
    text: 'Congratulations! You finished the game!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  SpaceToExit = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _advanceScreen_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    advanceScreen.keys = undefined;
    advanceScreen.rt = undefined;
    _advanceScreen_allKeys = [];
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(welcomeScreen);
    WelcomeComponents.push(advanceScreen);
    WelcomeComponents.push(polygon);
    
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcomeScreen* updates
    if (t >= 0.0 && welcomeScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeScreen.tStart = t;  // (not accounting for frame time here)
      welcomeScreen.frameNStart = frameN;  // exact frame index
      
      welcomeScreen.setAutoDraw(true);
    }
    
    
    // *advanceScreen* updates
    if (t >= 0.0 && advanceScreen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen.tStart = t;  // (not accounting for frame time here)
      advanceScreen.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen.clearEvents(); });
    }
    
    if (advanceScreen.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_allKeys = _advanceScreen_allKeys.concat(theseKeys);
      if (_advanceScreen_allKeys.length > 0) {
        advanceScreen.keys = _advanceScreen_allKeys[_advanceScreen_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen.rt = _advanceScreen_allKeys[_advanceScreen_allKeys.length - 1].rt;
        advanceScreen.duration = _advanceScreen_allKeys[_advanceScreen_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
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
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    WelcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    advanceScreen.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_2_allKeys;
var text1Components;
function text1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text1' ---
    t = 0;
    text1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text1.started', globalClock.getTime());
    advanceScreen_2.keys = undefined;
    advanceScreen_2.rt = undefined;
    _advanceScreen_2_allKeys = [];
    // keep track of which components have finished
    text1Components = [];
    text1Components.push(advanceScreen_2);
    text1Components.push(directionText_1);
    
    text1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text1' ---
    // get current time
    t = text1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_2* updates
    if (t >= 0.0 && advanceScreen_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_2.tStart = t;  // (not accounting for frame time here)
      advanceScreen_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_2.clearEvents(); });
    }
    
    if (advanceScreen_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_2.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_2_allKeys = _advanceScreen_2_allKeys.concat(theseKeys);
      if (_advanceScreen_2_allKeys.length > 0) {
        advanceScreen_2.keys = _advanceScreen_2_allKeys[_advanceScreen_2_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_2.rt = _advanceScreen_2_allKeys[_advanceScreen_2_allKeys.length - 1].rt;
        advanceScreen_2.duration = _advanceScreen_2_allKeys[_advanceScreen_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_1* updates
    if (t >= 0.0 && directionText_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_1.tStart = t;  // (not accounting for frame time here)
      directionText_1.frameNStart = frameN;  // exact frame index
      
      directionText_1.setAutoDraw(true);
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
    text1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text1' ---
    text1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text1.stopped', globalClock.getTime());
    advanceScreen_2.stop();
    // the Routine "text1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_3_allKeys;
var text2Components;
function text2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text2' ---
    t = 0;
    text2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text2.started', globalClock.getTime());
    advanceScreen_3.keys = undefined;
    advanceScreen_3.rt = undefined;
    _advanceScreen_3_allKeys = [];
    // keep track of which components have finished
    text2Components = [];
    text2Components.push(advanceScreen_3);
    text2Components.push(directionText_2);
    
    text2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text2' ---
    // get current time
    t = text2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_3* updates
    if (t >= 0.0 && advanceScreen_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_3.tStart = t;  // (not accounting for frame time here)
      advanceScreen_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_3.clearEvents(); });
    }
    
    if (advanceScreen_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_3.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_3_allKeys = _advanceScreen_3_allKeys.concat(theseKeys);
      if (_advanceScreen_3_allKeys.length > 0) {
        advanceScreen_3.keys = _advanceScreen_3_allKeys[_advanceScreen_3_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_3.rt = _advanceScreen_3_allKeys[_advanceScreen_3_allKeys.length - 1].rt;
        advanceScreen_3.duration = _advanceScreen_3_allKeys[_advanceScreen_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_2* updates
    if (t >= 0.0 && directionText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_2.tStart = t;  // (not accounting for frame time here)
      directionText_2.frameNStart = frameN;  // exact frame index
      
      directionText_2.setAutoDraw(true);
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
    text2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text2' ---
    text2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text2.stopped', globalClock.getTime());
    advanceScreen_3.stop();
    // the Routine "text2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_4_allKeys;
var image1Components;
function image1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'image1' ---
    t = 0;
    image1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('image1.started', globalClock.getTime());
    advanceScreen_4.keys = undefined;
    advanceScreen_4.rt = undefined;
    _advanceScreen_4_allKeys = [];
    // keep track of which components have finished
    image1Components = [];
    image1Components.push(advanceScreen_4);
    image1Components.push(moonExampleImage);
    
    image1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function image1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'image1' ---
    // get current time
    t = image1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_4* updates
    if (t >= 0.0 && advanceScreen_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_4.tStart = t;  // (not accounting for frame time here)
      advanceScreen_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_4.clearEvents(); });
    }
    
    if (advanceScreen_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_4.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_4_allKeys = _advanceScreen_4_allKeys.concat(theseKeys);
      if (_advanceScreen_4_allKeys.length > 0) {
        advanceScreen_4.keys = _advanceScreen_4_allKeys[_advanceScreen_4_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_4.rt = _advanceScreen_4_allKeys[_advanceScreen_4_allKeys.length - 1].rt;
        advanceScreen_4.duration = _advanceScreen_4_allKeys[_advanceScreen_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *moonExampleImage* updates
    if (t >= 0.0 && moonExampleImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moonExampleImage.tStart = t;  // (not accounting for frame time here)
      moonExampleImage.frameNStart = frameN;  // exact frame index
      
      moonExampleImage.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (moonExampleImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      moonExampleImage.setAutoDraw(false);
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
    image1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function image1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'image1' ---
    image1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('image1.stopped', globalClock.getTime());
    advanceScreen_4.stop();
    // the Routine "image1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_5_allKeys;
var text3Components;
function text3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text3' ---
    t = 0;
    text3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text3.started', globalClock.getTime());
    advanceScreen_5.keys = undefined;
    advanceScreen_5.rt = undefined;
    _advanceScreen_5_allKeys = [];
    // keep track of which components have finished
    text3Components = [];
    text3Components.push(advanceScreen_5);
    text3Components.push(directionsText_3);
    
    text3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text3' ---
    // get current time
    t = text3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_5* updates
    if (t >= 0.0 && advanceScreen_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_5.tStart = t;  // (not accounting for frame time here)
      advanceScreen_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_5.clearEvents(); });
    }
    
    if (advanceScreen_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_5.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_5_allKeys = _advanceScreen_5_allKeys.concat(theseKeys);
      if (_advanceScreen_5_allKeys.length > 0) {
        advanceScreen_5.keys = _advanceScreen_5_allKeys[_advanceScreen_5_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_5.rt = _advanceScreen_5_allKeys[_advanceScreen_5_allKeys.length - 1].rt;
        advanceScreen_5.duration = _advanceScreen_5_allKeys[_advanceScreen_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionsText_3* updates
    if (t >= 0.0 && directionsText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionsText_3.tStart = t;  // (not accounting for frame time here)
      directionsText_3.frameNStart = frameN;  // exact frame index
      
      directionsText_3.setAutoDraw(true);
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
    text3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text3' ---
    text3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text3.stopped', globalClock.getTime());
    advanceScreen_5.stop();
    // the Routine "text3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_6_allKeys;
var image2Components;
function image2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'image2' ---
    t = 0;
    image2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('image2.started', globalClock.getTime());
    advanceScreen_6.keys = undefined;
    advanceScreen_6.rt = undefined;
    _advanceScreen_6_allKeys = [];
    // keep track of which components have finished
    image2Components = [];
    image2Components.push(advanceScreen_6);
    image2Components.push(planetExampleImage);
    
    image2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function image2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'image2' ---
    // get current time
    t = image2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_6* updates
    if (t >= 0.0 && advanceScreen_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_6.tStart = t;  // (not accounting for frame time here)
      advanceScreen_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_6.clearEvents(); });
    }
    
    if (advanceScreen_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_6.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_6_allKeys = _advanceScreen_6_allKeys.concat(theseKeys);
      if (_advanceScreen_6_allKeys.length > 0) {
        advanceScreen_6.keys = _advanceScreen_6_allKeys[_advanceScreen_6_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_6.rt = _advanceScreen_6_allKeys[_advanceScreen_6_allKeys.length - 1].rt;
        advanceScreen_6.duration = _advanceScreen_6_allKeys[_advanceScreen_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *planetExampleImage* updates
    if (t >= 0.0 && planetExampleImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      planetExampleImage.tStart = t;  // (not accounting for frame time here)
      planetExampleImage.frameNStart = frameN;  // exact frame index
      
      planetExampleImage.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (planetExampleImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      planetExampleImage.setAutoDraw(false);
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
    image2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function image2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'image2' ---
    image2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('image2.stopped', globalClock.getTime());
    advanceScreen_6.stop();
    // the Routine "image2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_7_allKeys;
var text4Components;
function text4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text4' ---
    t = 0;
    text4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text4.started', globalClock.getTime());
    advanceScreen_7.keys = undefined;
    advanceScreen_7.rt = undefined;
    _advanceScreen_7_allKeys = [];
    // keep track of which components have finished
    text4Components = [];
    text4Components.push(advanceScreen_7);
    text4Components.push(directionText_3);
    
    text4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text4' ---
    // get current time
    t = text4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_7* updates
    if (t >= 0.0 && advanceScreen_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_7.tStart = t;  // (not accounting for frame time here)
      advanceScreen_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_7.clearEvents(); });
    }
    
    if (advanceScreen_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_7.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_7_allKeys = _advanceScreen_7_allKeys.concat(theseKeys);
      if (_advanceScreen_7_allKeys.length > 0) {
        advanceScreen_7.keys = _advanceScreen_7_allKeys[_advanceScreen_7_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_7.rt = _advanceScreen_7_allKeys[_advanceScreen_7_allKeys.length - 1].rt;
        advanceScreen_7.duration = _advanceScreen_7_allKeys[_advanceScreen_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_3* updates
    if (t >= 0.0 && directionText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_3.tStart = t;  // (not accounting for frame time here)
      directionText_3.frameNStart = frameN;  // exact frame index
      
      directionText_3.setAutoDraw(true);
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
    text4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text4' ---
    text4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text4.stopped', globalClock.getTime());
    advanceScreen_7.stop();
    // the Routine "text4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_8_allKeys;
var text5Components;
function text5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text5' ---
    t = 0;
    text5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text5.started', globalClock.getTime());
    advanceScreen_8.keys = undefined;
    advanceScreen_8.rt = undefined;
    _advanceScreen_8_allKeys = [];
    // keep track of which components have finished
    text5Components = [];
    text5Components.push(advanceScreen_8);
    text5Components.push(directionText_4);
    
    text5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text5' ---
    // get current time
    t = text5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_8* updates
    if (t >= 0.0 && advanceScreen_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_8.tStart = t;  // (not accounting for frame time here)
      advanceScreen_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_8.clearEvents(); });
    }
    
    if (advanceScreen_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_8.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_8_allKeys = _advanceScreen_8_allKeys.concat(theseKeys);
      if (_advanceScreen_8_allKeys.length > 0) {
        advanceScreen_8.keys = _advanceScreen_8_allKeys[_advanceScreen_8_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_8.rt = _advanceScreen_8_allKeys[_advanceScreen_8_allKeys.length - 1].rt;
        advanceScreen_8.duration = _advanceScreen_8_allKeys[_advanceScreen_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_4* updates
    if (t >= 0.0 && directionText_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_4.tStart = t;  // (not accounting for frame time here)
      directionText_4.frameNStart = frameN;  // exact frame index
      
      directionText_4.setAutoDraw(true);
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
    text5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text5' ---
    text5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text5.stopped', globalClock.getTime());
    advanceScreen_8.stop();
    // the Routine "text5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_9_allKeys;
var image3Components;
function image3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'image3' ---
    t = 0;
    image3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('image3.started', globalClock.getTime());
    advanceScreen_9.keys = undefined;
    advanceScreen_9.rt = undefined;
    _advanceScreen_9_allKeys = [];
    // keep track of which components have finished
    image3Components = [];
    image3Components.push(advanceScreen_9);
    image3Components.push(cueExampleImage_1);
    
    image3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function image3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'image3' ---
    // get current time
    t = image3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_9* updates
    if (t >= 0.0 && advanceScreen_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_9.tStart = t;  // (not accounting for frame time here)
      advanceScreen_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_9.clearEvents(); });
    }
    
    if (advanceScreen_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_9.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_9_allKeys = _advanceScreen_9_allKeys.concat(theseKeys);
      if (_advanceScreen_9_allKeys.length > 0) {
        advanceScreen_9.keys = _advanceScreen_9_allKeys[_advanceScreen_9_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_9.rt = _advanceScreen_9_allKeys[_advanceScreen_9_allKeys.length - 1].rt;
        advanceScreen_9.duration = _advanceScreen_9_allKeys[_advanceScreen_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *cueExampleImage_1* updates
    if (t >= 0.0 && cueExampleImage_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cueExampleImage_1.tStart = t;  // (not accounting for frame time here)
      cueExampleImage_1.frameNStart = frameN;  // exact frame index
      
      cueExampleImage_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cueExampleImage_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cueExampleImage_1.setAutoDraw(false);
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
    image3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function image3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'image3' ---
    image3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('image3.stopped', globalClock.getTime());
    advanceScreen_9.stop();
    // the Routine "image3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_10_allKeys;
var text6Components;
function text6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text6' ---
    t = 0;
    text6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text6.started', globalClock.getTime());
    advanceScreen_10.keys = undefined;
    advanceScreen_10.rt = undefined;
    _advanceScreen_10_allKeys = [];
    // keep track of which components have finished
    text6Components = [];
    text6Components.push(advanceScreen_10);
    text6Components.push(directionText_5);
    
    text6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text6' ---
    // get current time
    t = text6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_10* updates
    if (t >= 0.0 && advanceScreen_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_10.tStart = t;  // (not accounting for frame time here)
      advanceScreen_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_10.clearEvents(); });
    }
    
    if (advanceScreen_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_10.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_10_allKeys = _advanceScreen_10_allKeys.concat(theseKeys);
      if (_advanceScreen_10_allKeys.length > 0) {
        advanceScreen_10.keys = _advanceScreen_10_allKeys[_advanceScreen_10_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_10.rt = _advanceScreen_10_allKeys[_advanceScreen_10_allKeys.length - 1].rt;
        advanceScreen_10.duration = _advanceScreen_10_allKeys[_advanceScreen_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_5* updates
    if (t >= 0.0 && directionText_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_5.tStart = t;  // (not accounting for frame time here)
      directionText_5.frameNStart = frameN;  // exact frame index
      
      directionText_5.setAutoDraw(true);
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
    text6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text6' ---
    text6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text6.stopped', globalClock.getTime());
    advanceScreen_10.stop();
    // the Routine "text6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_11_allKeys;
var image4Components;
function image4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'image4' ---
    t = 0;
    image4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('image4.started', globalClock.getTime());
    advanceScreen_11.keys = undefined;
    advanceScreen_11.rt = undefined;
    _advanceScreen_11_allKeys = [];
    // keep track of which components have finished
    image4Components = [];
    image4Components.push(advanceScreen_11);
    image4Components.push(cueExampleImage_2);
    
    image4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function image4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'image4' ---
    // get current time
    t = image4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_11* updates
    if (t >= 0.0 && advanceScreen_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_11.tStart = t;  // (not accounting for frame time here)
      advanceScreen_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_11.clearEvents(); });
    }
    
    if (advanceScreen_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_11.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_11_allKeys = _advanceScreen_11_allKeys.concat(theseKeys);
      if (_advanceScreen_11_allKeys.length > 0) {
        advanceScreen_11.keys = _advanceScreen_11_allKeys[_advanceScreen_11_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_11.rt = _advanceScreen_11_allKeys[_advanceScreen_11_allKeys.length - 1].rt;
        advanceScreen_11.duration = _advanceScreen_11_allKeys[_advanceScreen_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *cueExampleImage_2* updates
    if (t >= 0.0 && cueExampleImage_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cueExampleImage_2.tStart = t;  // (not accounting for frame time here)
      cueExampleImage_2.frameNStart = frameN;  // exact frame index
      
      cueExampleImage_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cueExampleImage_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cueExampleImage_2.setAutoDraw(false);
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
    image4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function image4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'image4' ---
    image4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('image4.stopped', globalClock.getTime());
    advanceScreen_11.stop();
    // the Routine "image4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_12_allKeys;
var text7Components;
function text7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text7' ---
    t = 0;
    text7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text7.started', globalClock.getTime());
    advanceScreen_12.keys = undefined;
    advanceScreen_12.rt = undefined;
    _advanceScreen_12_allKeys = [];
    // keep track of which components have finished
    text7Components = [];
    text7Components.push(advanceScreen_12);
    text7Components.push(directionText_6);
    
    text7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text7' ---
    // get current time
    t = text7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_12* updates
    if (t >= 0.0 && advanceScreen_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_12.tStart = t;  // (not accounting for frame time here)
      advanceScreen_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_12.clearEvents(); });
    }
    
    if (advanceScreen_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_12.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_12_allKeys = _advanceScreen_12_allKeys.concat(theseKeys);
      if (_advanceScreen_12_allKeys.length > 0) {
        advanceScreen_12.keys = _advanceScreen_12_allKeys[_advanceScreen_12_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_12.rt = _advanceScreen_12_allKeys[_advanceScreen_12_allKeys.length - 1].rt;
        advanceScreen_12.duration = _advanceScreen_12_allKeys[_advanceScreen_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_6* updates
    if (t >= 0.0 && directionText_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_6.tStart = t;  // (not accounting for frame time here)
      directionText_6.frameNStart = frameN;  // exact frame index
      
      directionText_6.setAutoDraw(true);
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
    text7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text7' ---
    text7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text7.stopped', globalClock.getTime());
    advanceScreen_12.stop();
    // the Routine "text7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _advanceScreen_13_allKeys;
var text8Components;
function text8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text8' ---
    t = 0;
    text8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('text8.started', globalClock.getTime());
    advanceScreen_13.keys = undefined;
    advanceScreen_13.rt = undefined;
    _advanceScreen_13_allKeys = [];
    // keep track of which components have finished
    text8Components = [];
    text8Components.push(advanceScreen_13);
    text8Components.push(directionText_7);
    
    text8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function text8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text8' ---
    // get current time
    t = text8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *advanceScreen_13* updates
    if (t >= 0.0 && advanceScreen_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      advanceScreen_13.tStart = t;  // (not accounting for frame time here)
      advanceScreen_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { advanceScreen_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { advanceScreen_13.clearEvents(); });
    }
    
    if (advanceScreen_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = advanceScreen_13.getKeys({keyList: ['space'], waitRelease: false});
      _advanceScreen_13_allKeys = _advanceScreen_13_allKeys.concat(theseKeys);
      if (_advanceScreen_13_allKeys.length > 0) {
        advanceScreen_13.keys = _advanceScreen_13_allKeys[_advanceScreen_13_allKeys.length - 1].name;  // just the last key pressed
        advanceScreen_13.rt = _advanceScreen_13_allKeys[_advanceScreen_13_allKeys.length - 1].rt;
        advanceScreen_13.duration = _advanceScreen_13_allKeys[_advanceScreen_13_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *directionText_7* updates
    if (t >= 0.0 && directionText_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      directionText_7.tStart = t;  // (not accounting for frame time here)
      directionText_7.frameNStart = frameN;  // exact frame index
      
      directionText_7.setAutoDraw(true);
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
    text8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text8' ---
    text8Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text8.stopped', globalClock.getTime());
    advanceScreen_13.stop();
    // the Routine "text8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var runs;
function runsLoopBegin(runsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    runs = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/PlanetRuns.xlsx',
      seed: undefined, name: 'runs'
    });
    psychoJS.experiment.addLoop(runs); // add the loop to the experiment
    currentLoop = runs;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    runs.forEach(function() {
      snapshot = runs.getSnapshot();
    
      runsLoopScheduler.add(importConditions(snapshot));
      runsLoopScheduler.add(triggerRoutineBegin(snapshot));
      runsLoopScheduler.add(triggerRoutineEachFrame());
      runsLoopScheduler.add(triggerRoutineEnd(snapshot));
      runsLoopScheduler.add(waitForScannerRoutineBegin(snapshot));
      runsLoopScheduler.add(waitForScannerRoutineEachFrame());
      runsLoopScheduler.add(waitForScannerRoutineEnd(snapshot));
      const blocksLoopScheduler = new Scheduler(psychoJS);
      runsLoopScheduler.add(blocksLoopBegin(blocksLoopScheduler, snapshot));
      runsLoopScheduler.add(blocksLoopScheduler);
      runsLoopScheduler.add(blocksLoopEnd);
      runsLoopScheduler.add(runEndRoutineBegin(snapshot));
      runsLoopScheduler.add(runEndRoutineEachFrame());
      runsLoopScheduler.add(runEndRoutineEnd(snapshot));
      runsLoopScheduler.add(runsLoopEndIteration(runsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: runOrderFile,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks.forEach(function() {
      snapshot = blocks.getSnapshot();
    
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(trial_cueRoutineBegin(snapshot));
      blocksLoopScheduler.add(trial_cueRoutineEachFrame());
      blocksLoopScheduler.add(trial_cueRoutineEnd(snapshot));
      blocksLoopScheduler.add(fixationRoutineBegin(snapshot));
      blocksLoopScheduler.add(fixationRoutineEachFrame());
      blocksLoopScheduler.add(fixationRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(feedbackRoutineBegin(snapshot));
      blocksLoopScheduler.add(feedbackRoutineEachFrame());
      blocksLoopScheduler.add(feedbackRoutineEnd(snapshot));
      blocksLoopScheduler.add(endBlockRoutineBegin(snapshot));
      blocksLoopScheduler.add(endBlockRoutineEachFrame());
      blocksLoopScheduler.add(endBlockRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: colorTrialsFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(jitterRoutineBegin(snapshot));
      trialsLoopScheduler.add(jitterRoutineEachFrame());
      trialsLoopScheduler.add(jitterRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
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


async function runsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(runs);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function runsLoopEndIteration(scheduler, snapshot) {
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


var _receiveTrigger_allKeys;
var triggerComponents;
function triggerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trigger' ---
    t = 0;
    triggerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trigger.started', globalClock.getTime());
    receiveTrigger.keys = undefined;
    receiveTrigger.rt = undefined;
    _receiveTrigger_allKeys = [];
    // keep track of which components have finished
    triggerComponents = [];
    triggerComponents.push(waitForTrigger);
    triggerComponents.push(receiveTrigger);
    
    triggerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function triggerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trigger' ---
    // get current time
    t = triggerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *waitForTrigger* updates
    if (t >= 0.0 && waitForTrigger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waitForTrigger.tStart = t;  // (not accounting for frame time here)
      waitForTrigger.frameNStart = frameN;  // exact frame index
      
      waitForTrigger.setAutoDraw(true);
    }
    
    
    // *receiveTrigger* updates
    if (t >= 0.0 && receiveTrigger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      receiveTrigger.tStart = t;  // (not accounting for frame time here)
      receiveTrigger.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { receiveTrigger.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { receiveTrigger.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { receiveTrigger.clearEvents(); });
    }
    
    if (receiveTrigger.status === PsychoJS.Status.STARTED) {
      let theseKeys = receiveTrigger.getKeys({keyList: ['equal'], waitRelease: false});
      _receiveTrigger_allKeys = _receiveTrigger_allKeys.concat(theseKeys);
      if (_receiveTrigger_allKeys.length > 0) {
        receiveTrigger.keys = _receiveTrigger_allKeys[_receiveTrigger_allKeys.length - 1].name;  // just the last key pressed
        receiveTrigger.rt = _receiveTrigger_allKeys[_receiveTrigger_allKeys.length - 1].rt;
        receiveTrigger.duration = _receiveTrigger_allKeys[_receiveTrigger_allKeys.length - 1].duration;
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
    triggerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function triggerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trigger' ---
    triggerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trigger.stopped', globalClock.getTime());
    receiveTrigger.stop();
    // the Routine "trigger" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var waitForScannerComponents;
function waitForScannerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'waitForScanner' ---
    t = 0;
    waitForScannerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('waitForScanner.started', globalClock.getTime());
    // Run 'Begin Routine' code from logVersionName
    runs.addData("TaskVersion", runOrderFile);
    
    // keep track of which components have finished
    waitForScannerComponents = [];
    
    waitForScannerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function waitForScannerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'waitForScanner' ---
    // get current time
    t = waitForScannerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    waitForScannerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waitForScannerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'waitForScanner' ---
    waitForScannerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('waitForScanner.stopped', globalClock.getTime());
    // the Routine "waitForScanner" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_cueComponents;
function trial_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_cue' ---
    t = 0;
    trial_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial_cue.started', globalClock.getTime());
    Cue2.setImage(os.path.join('images', cueImage));
    // keep track of which components have finished
    trial_cueComponents = [];
    trial_cueComponents.push(Cue2);
    trial_cueComponents.push(frame1);
    trial_cueComponents.push(frame2);
    trial_cueComponents.push(drawCircle);
    
    trial_cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_cue' ---
    // get current time
    t = trial_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Cue2* updates
    if (t >= 0.0 && Cue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cue2.tStart = t;  // (not accounting for frame time here)
      Cue2.frameNStart = frameN;  // exact frame index
      
      Cue2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cue2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cue2.setAutoDraw(false);
    }
    
    // *frame1* updates
    if (t >= 0.0 && frame1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      frame1.tStart = t;  // (not accounting for frame time here)
      frame1.frameNStart = frameN;  // exact frame index
      
      frame1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (frame1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      frame1.setAutoDraw(false);
    }
    
    // *frame2* updates
    if (t >= 0.0 && frame2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      frame2.tStart = t;  // (not accounting for frame time here)
      frame2.frameNStart = frameN;  // exact frame index
      
      frame2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (frame2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      frame2.setAutoDraw(false);
    }
    
    // *drawCircle* updates
    if (t >= 0.0 && drawCircle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drawCircle.tStart = t;  // (not accounting for frame time here)
      drawCircle.frameNStart = frameN;  // exact frame index
      
      drawCircle.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (drawCircle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      drawCircle.setAutoDraw(false);
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
    trial_cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_cue' ---
    trial_cueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_cue.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixation1.setColor(new util.Color('white'));
    fixation1.setText('+');
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation1);
    fixationComponents.push(fixationFrame1);
    fixationComponents.push(fixationFrame2);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation1* updates
    if (t >= 0 && fixation1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation1.tStart = t;  // (not accounting for frame time here)
      fixation1.frameNStart = frameN;  // exact frame index
      
      fixation1.setAutoDraw(true);
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation1.setAutoDraw(false);
    }
    
    // *fixationFrame1* updates
    if (t >= 0.0 && fixationFrame1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationFrame1.tStart = t;  // (not accounting for frame time here)
      fixationFrame1.frameNStart = frameN;  // exact frame index
      
      fixationFrame1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationFrame1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationFrame1.setAutoDraw(false);
    }
    
    // *fixationFrame2* updates
    if (t >= 0.0 && fixationFrame2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationFrame2.tStart = t;  // (not accounting for frame time here)
      fixationFrame2.frameNStart = frameN;  // exact frame index
      
      fixationFrame2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationFrame2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationFrame2.setAutoDraw(false);
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
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISI;
var _targetResp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // Run 'Begin Routine' code from setJitter
    ISI = ISIs.pop();
    
    Target.setOri(rotation);
    Target.setImage(os.path.join('images', stimPic));
    targetResp.keys = undefined;
    targetResp.rt = undefined;
    _targetResp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialFrame);
    trialComponents.push(trialFrame2);
    trialComponents.push(Target);
    trialComponents.push(targetResp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialFrame* updates
    if (t >= 0 && trialFrame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialFrame.tStart = t;  // (not accounting for frame time here)
      trialFrame.frameNStart = frameN;  // exact frame index
      
      trialFrame.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialFrame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialFrame.setAutoDraw(false);
    }
    
    // *trialFrame2* updates
    if (t >= 0 && trialFrame2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialFrame2.tStart = t;  // (not accounting for frame time here)
      trialFrame2.frameNStart = frameN;  // exact frame index
      
      trialFrame2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialFrame2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialFrame2.setAutoDraw(false);
    }
    
    // *Target* updates
    if (t >= 0 && Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Target.tStart = t;  // (not accounting for frame time here)
      Target.frameNStart = frameN;  // exact frame index
      
      Target.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Target.setAutoDraw(false);
    }
    
    // *targetResp* updates
    if (t >= 0 && targetResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetResp.tStart = t;  // (not accounting for frame time here)
      targetResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { targetResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { targetResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { targetResp.clearEvents(); });
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (targetResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      targetResp.status = PsychoJS.Status.FINISHED;
        }
      
    if (targetResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = targetResp.getKeys({keyList: ['1', '2', '6', '7'], waitRelease: false});
      _targetResp_allKeys = _targetResp_allKeys.concat(theseKeys);
      if (_targetResp_allKeys.length > 0) {
        targetResp.keys = _targetResp_allKeys[0].name;  // just the first key pressed
        targetResp.rt = _targetResp_allKeys[0].rt;
        targetResp.duration = _targetResp_allKeys[0].duration;
        // was this correct?
        if (targetResp.keys == correct) {
            targetResp.corr = 1;
        } else {
            targetResp.corr = 0;
        }
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
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (targetResp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         targetResp.corr = 1;  // correct non-response
      } else {
         targetResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(targetResp.corr, level);
    }
    psychoJS.experiment.addData('targetResp.keys', targetResp.keys);
    psychoJS.experiment.addData('targetResp.corr', targetResp.corr);
    if (typeof targetResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('targetResp.rt', targetResp.rt);
        psychoJS.experiment.addData('targetResp.duration', targetResp.duration);
        }
    
    targetResp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _lateResp_allKeys;
var jitterComponents;
function jitterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'jitter' ---
    t = 0;
    jitterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('jitter.started', globalClock.getTime());
    lateResp.keys = undefined;
    lateResp.rt = undefined;
    _lateResp_allKeys = [];
    // keep track of which components have finished
    jitterComponents = [];
    jitterComponents.push(jitteredISI);
    jitterComponents.push(jitterFrame1);
    jitterComponents.push(jitterFrame2);
    jitterComponents.push(lateResp);
    
    jitterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var outcomeText;
var outcomeNumber;
var Accuracy;
function jitterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'jitter' ---
    // get current time
    t = jitterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *jitteredISI* updates
    if (t >= 0.0 && jitteredISI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jitteredISI.tStart = t;  // (not accounting for frame time here)
      jitteredISI.frameNStart = frameN;  // exact frame index
      
      jitteredISI.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (jitteredISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      jitteredISI.setAutoDraw(false);
    }
    
    // *jitterFrame1* updates
    if (t >= 0.0 && jitterFrame1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jitterFrame1.tStart = t;  // (not accounting for frame time here)
      jitterFrame1.frameNStart = frameN;  // exact frame index
      
      jitterFrame1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (jitterFrame1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      jitterFrame1.setAutoDraw(false);
    }
    
    // *jitterFrame2* updates
    if (t >= 0.0 && jitterFrame2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jitterFrame2.tStart = t;  // (not accounting for frame time here)
      jitterFrame2.frameNStart = frameN;  // exact frame index
      
      jitterFrame2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (jitterFrame2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      jitterFrame2.setAutoDraw(false);
    }
    
    // *lateResp* updates
    if (t >= 0.0 && lateResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lateResp.tStart = t;  // (not accounting for frame time here)
      lateResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { lateResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { lateResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { lateResp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (lateResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      lateResp.status = PsychoJS.Status.FINISHED;
        }
      
    if (lateResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = lateResp.getKeys({keyList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'space'], waitRelease: false});
      _lateResp_allKeys = _lateResp_allKeys.concat(theseKeys);
      if (_lateResp_allKeys.length > 0) {
        lateResp.keys = _lateResp_allKeys[0].name;  // just the first key pressed
        lateResp.rt = _lateResp_allKeys[0].rt;
        lateResp.duration = _lateResp_allKeys[0].duration;
        // was this correct?
        if (lateResp.keys == correct) {
            lateResp.corr = 1;
        } else {
            lateResp.corr = 0;
        }
      }
    }
    
    // Run 'Each Frame' code from writeFeedbackOutcome
    if (targetResp.keys) {
        if ((targetResp.corr === 1)) {
            if ((valueCondition === "low")) {
                outcomeText = "+ 200";
                outcomeNumber = 200;
            } else {
                outcomeText = "+ $1000";
                outcomeNumber = 1000;
            }
        } else {
            if ((targetType === "nogo")) {
                if ((valueCondition === "low")) {
                    outcomeText = "- 100";
                    outcomeNumber = (- 100);
                } else {
                    outcomeText = "- 500";
                    outcomeNumber = (- 500);
                }
            }
        }
    }
    if ((! targetResp.keys)) {
        if ((targetType === "go")) {
            if ((lateResp.corr === 1)) {
                if ((valueCondition === "low")) {
                    outcomeText = "+ 200";
                    outcomeNumber = 200;
                } else {
                    outcomeText = "+ 1000";
                    outcomeNumber = 1000;
                }
            } else {
                if ((valueCondition === "low")) {
                    outcomeText = "- 100";
                    outcomeNumber = (- 100);
                } else {
                    outcomeText = "- 500";
                    outcomeNumber = (- 500);
                }
            }
        } else {
            if ((targetType === "nogo")) {
                rt_array = np.array(lateResp.rt);
                if ((rt_array.size === 0)) {
                    if ((valueCondition === "low")) {
                        outcomeText = "+ 200";
                        outcomeNumber = 200;
                    } else {
                        outcomeText = "+ 1000";
                        outcomeNumber = 1000;
                    }
                } else {
                    if ((valueCondition === "low")) {
                        outcomeText = "- 100";
                        outcomeNumber = (- 100);
                    } else {
                        outcomeText = "- 500";
                        outcomeNumber = (- 500);
                    }
                }
            }
        }
    }
    if (((outcomeNumber === 1000) || (outcomeNumber === 200))) {
        Accuracy = 1;
    } else {
        Accuracy = 0;
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
    jitterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function jitterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'jitter' ---
    jitterComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('jitter.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (lateResp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         lateResp.corr = 1;  // correct non-response
      } else {
         lateResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(lateResp.corr, level);
    }
    psychoJS.experiment.addData('lateResp.keys', lateResp.keys);
    psychoJS.experiment.addData('lateResp.corr', lateResp.corr);
    if (typeof lateResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('lateResp.rt', lateResp.rt);
        psychoJS.experiment.addData('lateResp.duration', lateResp.duration);
        }
    
    lateResp.stop();
    // the Routine "jitter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var borderColor;
var outcomeTotal;
var outcomeType;
var rewardColor;
var outcomeDisplay;
var msg;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from rewardFrames
    if ((valueCondition === "low")) {
        borderColor = "black";
    } else {
        borderColor = "white";
    }
    rewardFrame2.setLineColor(borderColor);
    outcomeTotal = trials.data["outcomeNumber"].sum();
    if ((outcomeTotal >= 0)) {
        if ((outcomeTotal === 0)) {
            outcomeType = "got";
        } else {
            outcomeType = "won";
        }
    }
    if ((outcomeTotal < 0)) {
        outcomeType = "lost";
    }
    if ((outcomeType === "won")) {
        rewardColor = "lawngreen";
    } else {
        rewardColor = "orangered";
    }
    outcomeDisplay = Math.abs(outcomeTotal);
    msg = `You ${outcomeType} ${outcomeDisplay}`;
    
    reward.setColor(new util.Color(rewardColor));
    reward.setText(msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(reward);
    feedbackComponents.push(rewardFrame1);
    feedbackComponents.push(rewardFrame2);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reward* updates
    if (t >= 0 && reward.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward.tStart = t;  // (not accounting for frame time here)
      reward.frameNStart = frameN;  // exact frame index
      
      reward.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward.setAutoDraw(false);
    }
    
    // *rewardFrame1* updates
    if (t >= 0.0 && rewardFrame1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardFrame1.tStart = t;  // (not accounting for frame time here)
      rewardFrame1.frameNStart = frameN;  // exact frame index
      
      rewardFrame1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rewardFrame1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rewardFrame1.setAutoDraw(false);
    }
    
    // *rewardFrame2* updates
    if (t >= 0.0 && rewardFrame2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardFrame2.tStart = t;  // (not accounting for frame time here)
      rewardFrame2.frameNStart = frameN;  // exact frame index
      
      rewardFrame2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rewardFrame2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rewardFrame2.setAutoDraw(false);
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
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endBlockComponents;
function endBlockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endBlock' ---
    t = 0;
    endBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('endBlock.started', globalClock.getTime());
    // keep track of which components have finished
    endBlockComponents = [];
    endBlockComponents.push(breakFixation);
    
    endBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endBlockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endBlock' ---
    // get current time
    t = endBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakFixation* updates
    if (t >= 0.0 && breakFixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakFixation.tStart = t;  // (not accounting for frame time here)
      breakFixation.frameNStart = frameN;  // exact frame index
      
      breakFixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (breakFixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      breakFixation.setAutoDraw(false);
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
    endBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endBlockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endBlock' ---
    endBlockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('endBlock.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _SpaceToEndRun_allKeys;
var runEndComponents;
function runEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'runEnd' ---
    t = 0;
    runEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('runEnd.started', globalClock.getTime());
    SpaceToEndRun.keys = undefined;
    SpaceToEndRun.rt = undefined;
    _SpaceToEndRun_allKeys = [];
    // keep track of which components have finished
    runEndComponents = [];
    runEndComponents.push(breakText);
    runEndComponents.push(SpaceToEndRun);
    
    runEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function runEndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'runEnd' ---
    // get current time
    t = runEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakText* updates
    if (t >= 0 && breakText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakText.tStart = t;  // (not accounting for frame time here)
      breakText.frameNStart = frameN;  // exact frame index
      
      breakText.setAutoDraw(true);
    }
    
    
    // *SpaceToEndRun* updates
    if (t >= 0 && SpaceToEndRun.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpaceToEndRun.tStart = t;  // (not accounting for frame time here)
      SpaceToEndRun.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SpaceToEndRun.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SpaceToEndRun.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SpaceToEndRun.clearEvents(); });
    }
    
    if (SpaceToEndRun.status === PsychoJS.Status.STARTED) {
      let theseKeys = SpaceToEndRun.getKeys({keyList: ['space'], waitRelease: false});
      _SpaceToEndRun_allKeys = _SpaceToEndRun_allKeys.concat(theseKeys);
      if (_SpaceToEndRun_allKeys.length > 0) {
        SpaceToEndRun.keys = _SpaceToEndRun_allKeys[_SpaceToEndRun_allKeys.length - 1].name;  // just the last key pressed
        SpaceToEndRun.rt = _SpaceToEndRun_allKeys[_SpaceToEndRun_allKeys.length - 1].rt;
        SpaceToEndRun.duration = _SpaceToEndRun_allKeys[_SpaceToEndRun_allKeys.length - 1].duration;
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
    runEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function runEndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'runEnd' ---
    runEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('runEnd.stopped', globalClock.getTime());
    SpaceToEndRun.stop();
    // the Routine "runEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _SpaceToExit_allKeys;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    SpaceToExit.keys = undefined;
    SpaceToExit.rt = undefined;
    _SpaceToExit_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(endTask);
    EndComponents.push(SpaceToExit);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endTask* updates
    if (t >= 0 && endTask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endTask.tStart = t;  // (not accounting for frame time here)
      endTask.frameNStart = frameN;  // exact frame index
      
      endTask.setAutoDraw(true);
    }
    
    
    // *SpaceToExit* updates
    if (t >= 0 && SpaceToExit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SpaceToExit.tStart = t;  // (not accounting for frame time here)
      SpaceToExit.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SpaceToExit.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SpaceToExit.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SpaceToExit.clearEvents(); });
    }
    
    if (SpaceToExit.status === PsychoJS.Status.STARTED) {
      let theseKeys = SpaceToExit.getKeys({keyList: ['space'], waitRelease: false});
      _SpaceToExit_allKeys = _SpaceToExit_allKeys.concat(theseKeys);
      if (_SpaceToExit_allKeys.length > 0) {
        SpaceToExit.keys = _SpaceToExit_allKeys[_SpaceToExit_allKeys.length - 1].name;  // just the last key pressed
        SpaceToExit.rt = _SpaceToExit_allKeys[_SpaceToExit_allKeys.length - 1].rt;
        SpaceToExit.duration = _SpaceToExit_allKeys[_SpaceToExit_allKeys.length - 1].duration;
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
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    SpaceToExit.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
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
