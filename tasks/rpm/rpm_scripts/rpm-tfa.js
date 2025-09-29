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
var preload_rpm_tfa = [
  'rpm_images/a11_1.png',
  'rpm_images/a24.png',
  'rpm_images/a28.png',
  'rpm_images/a36.png',
  'rpm_images/a43.png',
  'rpm_images/a48.png',
  'rpm_images/a49.png',
  'rpm_images/a53.png',
  'rpm_images/a55.png',
  [...Array(6).keys()].map(i => 'rpm_images/a11_' + (i+1) + '.png'),
  [...Array(6).keys()].map(i => 'rpm_images/a24_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a28_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a36_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a43_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a48_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a49_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a53_' + (i+1) + '.png'),
  [...Array(8).keys()].map(i => 'rpm_images/a55_' + (i+1) + '.png')
];

//------------------------------------//
// Define RPM task.
//------------------------------------//

// Define task timeline
var timeline_variables_tfa = [
  {
    stimulus: 'rpm_images/a11_1.png',
    choices: [...Array(6).keys()].map(i => 'rpm_images/a11_' + (i+1) + '.png'),
    correct: 4,
    col_wrap: 3
  },
  {
    stimulus: 'rpm_images/a24.png',
    choices: [...Array(6).keys()].map(i => 'rpm_images/a24_' + (i+1) + '.png'),
    correct: 4,
    col_wrap: 3
  },
  {
    stimulus: 'rpm_images/a28.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a28_' + (i+1) + '.png'),
    correct: 7,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/a36.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a36_' + (i+1) + '.png'),
    correct: 1,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/a43.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a43_' + (i+1) + '.png'),
    correct: 4,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/a48.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a48_' + (i+1) + '.png'),
    correct: 5,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/a49.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a49_' + (i+1) + '.png'),
    correct: 6,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/a53.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a53_' + (i+1) + '.png'),
    correct: 0,
    col_wrap: 4
  },
  {
    stimulus: 'rpm_images/a55.png',
    choices: [...Array(8).keys()].map(i => 'rpm_images/a55_' + (i+1) + '.png'),
    correct: 1,
    col_wrap: 4
  },
]


var rpm_task_tfa = {
  timeline: [
    {
      data: {
        trial_id: "rpm_task_tfa_screencheck"
    },
      type: jsPsychScreenCheck,
      min_width: min_width,
      min_height: min_height
    },
    {
      data: {
        trial_id: "rpm_task_tfa_keyboardresponse"
    },
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '',
      choices: 'NO_KEYS',
      trial_duration: 1200,
      on_start: function(trial) {
        const k = jsPsych.data.get().filter({trial_type: 'rpm', test_form: 'a'}).count();
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
      data: {test_form: 'a',
            trial_id: 'rpm_task_tfa'},
    }
  ],
  timeline_variables: timeline_variables_tfa
}

//------------------------------------//
// Define RPM scoring.
//------------------------------------//

var dot_product = function(x, y) {
  var sum = 0;
  for (let i = 0; i < x.length; i++) { sum += x[i] * y[i]; }
  return sum;
}

var score_rpm_tfa = function() {

  // Summarize RPM.
  const rpm_raw = jsPsych.data.get().filter({trial_type: 'rpm'}).select('accuracy').sum();
  const rpm_err = 9 - rpm_raw;
  const rpm_rt = jsPsych.data.get().filter({trial_type: 'rpm'}).select('rt').sum();

  // Fetch accuracy.
  var accuracy = jsPsych.data.get().filter({trial_type: 'rpm'}).select('accuracy').values;
  var errors = accuracy.map(x => 1 - x);

  // Score RPM (Bilker et al. 2012).
  const weights = [0.198,0.216,0.237,0.142,0.374,0.304,0.178,0.458,0.289];
  var rpm_adj = 60 - (rpm_err + Math.exp(1.323 + dot_product(errors, weights)));

  return {rpm_raw: rpm_raw, rpm_err: rpm_err, rpm_adj:rpm_adj, rpm_rt: rpm_rt};
}

var rpm_score_tfa = {
  data: {
    trial_id: "rpm_score_tfa"
},
  type: jsPsychCallFunction,
  func: score_rpm_tfa
}

//------------------------------------//
// Define RPM block
//------------------------------------//

var RPM_TFa = {
  timeline: [rpm_task_tfa, rpm_score_tfa]
}
