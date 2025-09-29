//------------------------------------//
// Define parameters.
//------------------------------------//

// Define timing parameters.
var trial_duration = 30000;     // 30 seconds

// Define screen size parameters.
var min_width = 700;
var min_height = 600;

//------------------------------------//
// Define images for preloading.
//------------------------------------//

// Define images to preload
var preload_rpm_tfb = [
  'rpm_images/b10.png',
  'rpm_images/b16.png',
  'rpm_images/b21.png',
  'rpm_images/b30.png',
  'rpm_images/b34.png',
  'rpm_images/b44.png',
  'rpm_images/b50.png',
  'rpm_images/b52.png',
  'rpm_images/b57.png',
  [...Array(6).keys()].map(i => 'rpm_images/b10_' + (i+1) + '.png'),
  [...Array(6).keys()].map(i => 'rpm_images/b16_' + (i+1) + '.png'),
  [...Array(6).keys()].map(i => 'rpm_images/b21_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/b30_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/b34_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/b44_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/b50_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/b52_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/b57_' + (i+1) + '.png'),
];

//------------------------------------//
// Define RPM task.
//------------------------------------//

// Define task timeline
var timeline_variables_tfb = [
  {
    stimulus: 'rpm_images/b10.png',
    choices: [...Array(6).keys()].map(i => 'rpm_images/b10_' + (i+1) + '.png'),
    correct: 2,
    col_wrap: 3
  },
  {
    stimulus: 'rpm_images/b16.png',
    choices: [...Array(6).keys()].map(i => 'rpm_images/b16_' + (i+1) + '.png'),
    correct: 1,
    col_wrap: 3
  },
  {
    stimulus: 'rpm_images/b21.png',
    choices: [...Array(6).keys()].map(i => 'rpm_images/b21_' + (i+1) + '.png'),
    correct: 3,
    col_wrap: 3
  },
  {
    stimulus: 'rpm_images/b30.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/b30_' + (i+1) + '.png'),
    correct: 3,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/b34.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/b34_' + (i+1) + '.png'),
    correct: 5,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/b44.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/b44_' + (i+1) + '.png'),
    correct: 3,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/b50.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/b50_' + (i+1) + '.png'),
    correct: 5,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/b52.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/b52_' + (i+1) + '.png'),
    correct: 1,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/b57.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/b57_' + (i+1) + '.png'),
    correct: 0,
    col_wrap: 4
  },
]


var rpm_task_tfb = {
  timeline: [
    {
        data: {
          trial_id: "rpm_task_tfb_screencheck"
      },
      type: jsPsychScreenCheck,
      min_width: min_width,
      min_height: min_height
    },
    {
      data: {
        trial_id: "rpm_task_tfb_keyboardresponse"
    },
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '',
      choices: 'NO_KEYS',
      trial_duration: 1200,
      on_start: function(trial) {
        const k = jsPsych.data.get().filter({trial_type: 'rpm', test_form: 'b'}).count();
        trial.stimulus = `<div style="font-size:24px;">Loading puzzle:<br>${k+1} / 9</div>`;
      }
    },
    {
      type: jsPsychRpm,
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: jsPsych.timelineVariable('choices'),
      correct: jsPsych.timelineVariable('correct'),
      col_wrap: jsPsych.timelineVariable('col_wrap'),
      countdown: true,
      trial_duration: trial_duration,
      randomize_choice_order: true,
      data: {test_form: 'b',
             trial_id: "rpm_task_tfb"},
    }
  ],
  timeline_variables: timeline_variables_tfb
}

//------------------------------------//
// Define RPM scoring.
//------------------------------------//

var dot_product = function(x, y) {
  var sum = 0;
  for (let i = 0; i < x.length; i++) { sum += x[i] * y[i]; }
  return sum;
}

var score_rpm_tfb = function() {

  // Summarize RPM.
  const rpm_raw = jsPsych.data.get().filter({trial_type: 'rpm'}).select('accuracy').sum();
  const rpm_err = 9 - rpm_raw;
  const rpm_rt = jsPsych.data.get().filter({trial_type: 'rpm'}).select('rt').sum();

  // Fetch accuracy.
  var accuracy = jsPsych.data.get().filter({trial_type: 'rpm'}).select('accuracy').values;
  var errors = accuracy.map(x => 1 - x);

  // Score RPM (Bilker et al. 2012).
  const weights = [0.168,0.212,0.247,0.189,0.203,0.135,0.243,0.316,0.193];
  var rpm_adj = 60 - (rpm_err + Math.exp(1.875 + dot_product(errors, weights)));

  return {rpm_raw: rpm_raw, rpm_err: rpm_err, rpm_adj:rpm_adj, rpm_rt: rpm_rt};
}

var rpm_score_tfb = {
  data: {
    trial_id: "rpm_score_tfb"
},
  type: jsPsychCallFunction,
  func: score_rpm_tfb
}

//------------------------------------//
// Define RPM block
//------------------------------------//

var RPM_TFb = {
  timeline: [rpm_task_tfb, rpm_score_tfb]
}
