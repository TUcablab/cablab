//------------------------------------------//
// Define Constants
//------------------------------------------//
var MINIMUM_CORRECT_TO_CONTINUE = 15;
var fixation_time = 500;


//------------------------------------------//
// Correct/Incorrect Feedback
//------------------------------------------//
// Executed when a correct key press is executed during the first 5
var correct_first_5 = {
    data: {
        trial_id: "correct_first_5"
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<img src='flanker_images/correct.png' width='400', height='400', class='center'><\img>",
    stimulus_duration: 2000,
    trial_duration: 2300,
    response_ends_trial: false,
    on_finish: function(data) {
        data.trial_type = "instruction"
    }
}

// Executed when a incorrect key press is executed during the first 5
var incorrect_first_5 = {
    data: {
        trial_id: "incorrect_first_5"
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<img src='flanker_images/incorrect.png', width='400', height='400', class='center'><\img>",
    stimulus_duration: 2000,
    trial_duration: 2300,
    response_ends_trial: false,
}

var correct_pressed_first_5 = true;
var number_correct_pressed_first_40 = 0;




//---------------------//
// Flanker Intro
//---------------------//
var flanker_intro = {
    data: {
        trial_id: "flanker_intro"
    },
    type: jsPsychInstructions,
    pages: [
      "<p><div style ='font-size:40px;'>Next, we will ask you to complete a short task.</div></p>" +
      "<p><div style ='font-size:40px;'>Click <b>next</b> to begin reading the instructions.</div></p>"
    ],
    show_clickable_nav: true
}


//---------------------//
// Welcome message
//---------------------//
var flanker_instruction = {
    data: {
        trial_id: "flanker_instruction"
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>We will start by practicing some flanker tasks. Soon you will be seeing some arrows.</p>" +
        "<p>If the MIDDLE arrow points left, press 'F'. If the MIDDLE arrow points right, press 'J'.</p>" +
        "<p>Press the <b>space bar</b> to continue.</p>",
    choices: [' '],
    response_ends_trial: true,
};
   


//---------------------//
// Flanker Instructions
//---------------------//
var flanker_left_instruction = {
    data: {
        trial_id: "flanker_left_instruction"
    },
    type: jsPsychImageKeyboardResponse,
    stimulus: "flanker_images/instruction1.png",
    choices: ['f'],
    response_ends_trial: true,
};

var flanker_right_instruction = {
    data: {
        trial_id: "flanker_right_instruction"
    },
    type: jsPsychImageKeyboardResponse,
    stimulus: "flanker_images/instruction2.png",
    choices: ['j'],
    response_ends_trial: true,
};


var first_5_flankers_instruction = {
    data: {
        trial_id: "first_5_flankers_instruction"
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>Great! We'll now try 5 of these tasks. You will receive feedback after each one.</p>" +
    "<p>Press the <b>space bar</b> to continue.</p>",
    choices: [' '],
    response_ends_trial: true,
};




//---------------------//
// Flanker Practice
//---------------------//
var first_5_flankers_practice = {
    timeline: [
        {
            data: {
                trial_id: "first_5_flankers_practice_fixation"
            },
            type: jsPsychHtmlKeyboardResponse,
            stimulus: '<p style="font-size: 48px;">+</p><br>',
            choices: "NO_KEYS",
            trial_duration: fixation_time,
            on_finish: function(data) {
                data.trial_type = "practice"
            }
        },
        {
            data: {
                trial_id: "first_5_flankers_practice_responses"
            },
            type: jsPsychImageKeyboardResponse,
            stimulus: jsPsych.timelineVariable('image'),
            choices: ['f', 'j'],
            response_ends_trial: true,
            on_finish: function(data) {
                data.trial_type = "practice";
                data.congruency = jsPsych.timelineVariable('congruency');
                data.direction_correct_arrow = jsPsych.timelineVariable('image').includes("left") ? "left" : "right";
                data.direction_surrounding_arrows = (data.direction_correct_arrow === "left" && data.congruency === "congruent")
                                                    || (data.direction_correct_arrow === "right" && data.congruency === "incongruent")
                                                    ? "left"
                                                    : "right";
                data.correct_key_response = jsPsych.timelineVariable('image').includes("left") ? "f" : "j";
                data.is_correct = jsPsych.pluginAPI.compareKeys(data.response, jsPsych.timelineVariable("correct_response") );
            }
        },
        { // Correct key pressed
            timeline: [correct_first_5],
            conditional_function: function(){
                // get the data from the previous trial,
                // and check which key was pressed
                var data = jsPsych.data.get().last(1).values()[0];
                var correct = jsPsych.timelineVariable('correct_response');
                if(jsPsych.pluginAPI.compareKeys(data.response, correct) ){
                    correct_pressed_first_5 = true;
                    return true;
                } else {
                    correct_pressed_first_5 = false;
                    return false;
                }
            }
        },
        { // Incorrect key pressed
            timeline: [incorrect_first_5],
            conditional_function: function(){
                // get the data from the previous trial,
                // and check which key was pressed
                return !correct_pressed_first_5;
            }
        }
    ],
    timeline_variables: [
        {image: 'flanker_images/left_consistent.png', correct_response: 'f', congruency: "congruent"},
        {image: 'flanker_images/left_inconsistent.png', correct_response: 'f', congruency: "incongruent"},
        {image: 'flanker_images/right_consistent.png', correct_response: 'j', congruency: "congruent"},
        {image: 'flanker_images/left_inconsistent.png', correct_response: 'f', congruency: "incongruent"},
        {image: 'flanker_images/right_inconsistent.png', correct_response: 'j', congruency: "incongruent"},
    ],
}
    



//--------------------------------------------//
// Flanker Experimental Trials -- Instructions
//-------------------------------------------//
var first_40_flankers_instruction = {
    data: {
        trial_id: "first_40_flankers_instruction"
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>Great! You'll now practice 40 more.</p>" +
    "<p>Press the <b>space bar</b> to continue.</p>",
    choices: [' '],
    response_ends_trial: true,
}
    

var _40_flankers_exptrials = {
    timeline: [
        {
            data: {
                trial_id: "_40_flankers_exptrials_fixation"
            },
            type: jsPsychHtmlKeyboardResponse,
            stimulus: '<p style="font-size: 48px;">+</p><br>',
            choices: "NO_KEYS",
            trial_duration: fixation_time,
            on_finish: function(data) {
                data.trial_type = "test_fixation"
            }
        },
        {
            data: {
                trial_id: "_40_flankers_exptrials_response"
            },
            type: jsPsychImageKeyboardResponse,
            stimulus: jsPsych.timelineVariable('image'),
            choices: ['f', 'j'],
            response_ends_trial: true,
            on_finish: function(data) {
                data.trial_type = "test_trials";
                // Increase if the correct key is pressed
                var key_response = data.response;
                var correct = jsPsych.timelineVariable('correct_response');
                if(jsPsych.pluginAPI.compareKeys(key_response, correct) ){
                    number_correct_pressed_first_40++;
                }

                // Add data info
                data.congruency = jsPsych.timelineVariable('congruency');
                data.direction_correct_arrow = jsPsych.timelineVariable('image').includes("left") ? "left" : "right";
                data.direction_surrounding_arrows = (data.direction_correct_arrow === "left" && data.congruency === "congruent")
                                                    || (data.direction_correct_arrow === "right" && data.congruency === "incongruent")
                                                    ? "left"
                                                    : "right";
                data.correct_key_response = jsPsych.timelineVariable('image').includes("left") ? "f" : "j";
                data.is_correct = jsPsych.pluginAPI.compareKeys(data.response, jsPsych.timelineVariable("correct_response") );
            }
        }
    ],
    timeline_variables: [
        {image: 'flanker_images/left_consistent.png', correct_response: 'f', congruency: "congruent"},
        {image: 'flanker_images/right_consistent.png', correct_response: 'j', congruency: "congruent"},
        {image: 'flanker_images/left_inconsistent.png', correct_response: 'f', congruency: "incongruent"},
        {image: 'flanker_images/right_inconsistent.png', correct_response: 'j', congruency: "incongruent"},
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 10
    }
}


// Trial that occurs after the first 40 practice flankers
// IF number_correct_pressed_first_40 >= MINIMUM_CORRECT_TO_CONTINUE, we move on directly to the next trial
// OTHERWISE we repeat the first 40
var after_first_40_instructions = {
    timeline: [
        { // Pass first 40
            timeline: [
                {
                    data: {
                        trial_id: "after_first_40_instructions_passed_first_twenty"
                    },
                    type: jsPsychHtmlKeyboardResponse,
                    stimulus: "<p>Perfect! You will now move on to the next part of the experiment.</p>" +
                    "<p>Press the <b>space bar</b> to continue.</p>",
                    choices: [' '],
                    response_ends_trial: true,
                    on_finish: function(data) {
                        data.trial_type = "instruction"
                    }
                }
            ],
            conditional_function: function(){
                // get the data from the previous trial,
                // and check which key was pressed
                return number_correct_pressed_first_40 >= MINIMUM_CORRECT_TO_CONTINUE;
            }
        },
        { // Doesn't pass first 40
            timeline: [
                {
                    data: {
                        trial_id: "after_first_40_instructions_failed_first_twenty"
                    },
                    type: jsPsychHtmlKeyboardResponse,
                    stimulus: "<p>Ok! We will now practice 40 more flankers before continuing.</p>" +
                    "<p>Press the <b>space bar</b> to continue.</p>",
                    choices: [' '],
                    response_ends_trial: true,
                    on_finish: function(data) {
                        number_correct_pressed_first_40 = 0;
                        data.trial_type = "instruction"
                    }
                },
                _40_flankers_exptrials
            ],
            conditional_function: function(){
                // get the data from the previous trial,
                // and check which key was pressed
                return number_correct_pressed_first_40 < MINIMUM_CORRECT_TO_CONTINUE;
            }
        }
    ]
}
    




//------------------------------------------//
// Create Flanker Task experimental timeline
//------------------------------------------//
var flanker_task = {
  timeline: [flanker_intro, flanker_instruction, flanker_left_instruction, flanker_right_instruction, first_5_flankers_instruction, first_5_flankers_practice, first_40_flankers_instruction, _40_flankers_exptrials]
};
