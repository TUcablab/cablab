//------------------------------------//
// Global variables
//------------------------------------//
var bnat_D;
var bnat_target_RT;

/*The timing of events within a trial is depicted in Figure 2.*/

/*Timing for the two versions differed in three respects:*/

/*(1) ****COMPLETED**** D, the duration of the ﬁrst ﬁxation cross was random, ranging from 400 to 1600 ms (Java-ANT) vs 400 to 1200 ms (CRSD-ANT); */
/*(2) ****COMPLETED**** the maximum allowable response time (RT) was reduced from 1700 (Java-ANT) to 1500 ms (CRSD-ANT); */
/*(3) ****COMPLETED**** the duration of the ﬁnal ﬁxation cross was set to 3000 – D – RT (CRSD-ANT) rather than 3500 – D – RT (Java-ANT).*/

const rand_iti = (min, max) => Math.floor(Math.random() * (max - min)) + min; //to generate a random ITI



//------------------------------------//
// Timeline Variables
//------------------------------------//
//We need to repeat each trial type here 6x to directly replicate Berman et al. (2008), which used 288 trials
/*There are 32 trials here*/
/*16 Congruent trials*/
/*16 Incongruent trials*/

/*32 practice trials. Feedback (Correct/Incorrect) provided after each practice trial, but not for test trials*/

/*Test trials appear in 2 blocks of 64 --- 128 test trials*/

/*Prompts to begin the next block appear after the practice trials and in between the two test blocks, thus allowing participants to have short rest breaks if they wish.*/
/*In both versions of the ANT, ordering of trial types within blocks is random.*/
var bnat_trialvars = [
  {cue: 'img/fixation.jpg',  targ: 'img/bottom-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/bottom-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/bottom-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN',cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/bottom-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/top-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/top-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/top-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'NO-CUE'},
  {cue: 'img/fixation.jpg',  targ: 'img/top-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'NO-CUE'},
  {cue: 'img/center-cue.jpg',  targ: 'img/bottom-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/bottom-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/bottom-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/bottom-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/top-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/top-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/top-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'CENTER'},
  {cue: 'img/center-cue.jpg',  targ: 'img/top-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'CENTER'},
  {cue: 'img/both-cue.jpg',  targ: 'img/bottom-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/bottom-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/bottom-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/bottom-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/top-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/top-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/top-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'DOUBLE'},
  {cue: 'img/both-cue.jpg',  targ: 'img/top-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'DOUBLE'},
  {cue: 'img/bottom-cue.jpg',  targ: 'img/bottom-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'SPATIAL'},
  {cue: 'img/bottom-cue.jpg',  targ: 'img/bottom-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'SPATIAL'},
  {cue: 'img/bottom-cue.jpg',  targ: 'img/bottom-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'DOWN', cue_type: 'SPATIAL'},
  {cue: 'img/bottom-cue.jpg',  targ: 'img/bottom-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'DOWN', cue_type: 'SPATIAL'},
  {cue: 'img/top-cue.jpg',  targ: 'img/top-congruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'CONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'SPATIAL'},
  {cue: 'img/top-cue.jpg',  targ: 'img/top-congruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'CONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'SPATIAL'},
  {cue: 'img/top-cue.jpg',  targ: 'img/top-incongruent-l.jpg', correct_resp: 'ArrowLeft', flanker_type: 'INCONGRUENT', flanker_middle: 'L', flanker_loc: 'UP', cue_type: 'SPATIAL'},
  {cue: 'img/top-cue.jpg',  targ: 'img/top-incongruent-r.jpg', correct_resp: 'ArrowRight', flanker_type: 'INCONGRUENT', flanker_middle: 'R', flanker_loc: 'UP', cue_type: 'SPATIAL'},
];



bnat_trialvars_practice = jsPsych.randomization.repeat(bnat_trialvars,1); //repeat each trial type 1 times for 32 trals in practice block
bnat_trialvars_block1 = jsPsych.randomization.repeat(bnat_trialvars,2); //repeat each trial type 2 times for 64 trals in block 1
bnat_trialvars_block2 = jsPsych.randomization.repeat(bnat_trialvars,2); //repeat each trial type 2 times for 64 trals in block 2



//------------------------------------//
// BNAT Instructions
//------------------------------------//
var bnat_inst = {
  data: {
      trial_id: "bnat_inst"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>This test measures some aspects of attention, and takes about 10 minutes to complete.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>You will see <b>5 arrows</b> on the computer screen.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>(<b>&#8594; &#8594; &#8592; &#8594; &#8594;</b>)</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>You must pay attention to the <b><i>CENTRAL</i></b> arrow, and indicate which way it is pointing by pressing the left or right arrow keys on the keyboard.</div></p>"
    
    pageTwo = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>There will always be a cross in the center of the screen, and the arrows will appear just above the cross, like this</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'><b>&#8594; &#8594; &#8594; &#8594; &#8594;</b></div></p>" +
    '<p><div style="font-size:100px; margin-bottom: 8vh;"<b>+</b></div><p>' +
    "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>or the arrows will appear just below the cross, like this</div></p>" +
    '<p><div style="font-size:100px; margin-bottom: 4vh;"<b>+</b></div><p>' +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'><b>&#8594; &#8594; &#8594; &#8594; &#8594;</b></div></p>" +
    "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>Please try to keep your eyes fixed on the cross during the test, rather than moving them to look at the <u>arrows</u>.</div></p>"
    
    pageThree = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>Sometimes, one or more asterisks <img src='img/star.png' style='vertical-align: middle;'/> will appear shortly before the arrows.</div></p>" +
    "<p><div style ='line-height: 1.5; font-size:2.5vw; margin-bottom: 4vh;'>When they are presented, the asterisks always appear exactly one half second before the arrows.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>If only one asterisk appears, and it is above or below the cross, it also tells you the location in which the arrows will appear.</div></p>"

    pageFour = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>As mentioned earlier, you must pay attention to the central arrow, and indicate which way it is pointing by pressing the left or right arrow keys on the keyboard.</div></p>" +
    "<p><div style ='line-height: 1.5; font-size:2.5vw; margin-bottom: 4vh;'>This test measures both your reaction time and your accuracy, so it is important to respond as quickly as you can, but without making too many errors.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>To facilitate quick responding, keep your left and right index fingers over the left and right arrow keys, respectively.</div></p>"

    pageFive = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>There are 3 blocks of trials, with short breaks in between.</div></p>" +
    "<p><div style ='line-height: 1.5; font-size:2.5vw; margin-bottom: 4vh;'>The first block is for practice, and takes about 2 minutes.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>If you make a mistake during the practice block, an error message will appear. If no error message appears, you will know that you responded correctly.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>No feedback is given during the 2 test blocks.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 4vh;'>Press <b>Next</b> when you are ready to begin the practice block!</div></p>"

     return [pageOne, pageTwo, pageThree, pageFour, pageFive]
  },
  show_clickable_nav: true,
  allow_backward: true,
  css_classes: ['custom_padding'],
}




//------------------------------------//
// BNAT Practice trials
//------------------------------------//
/*These procedures follow the Weaver et al., 2013 paper*/
var setHeight=500;


var bnat_first_fixation_practice = {
      data: {
      trial_id: "bnat_first_fixation_practice",
      },
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function(){
    bnat_D_trial_duration = rand_iti(400, 1200);
    return bnat_D_trial_duration;
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_D_trial_duration;

    /*Store bnat_D duration*/
    bnat_D = bnat_D_trial_duration
  }
};

var bnat_cue_practice = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('cue'),
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_cue_trial_duration = 100;
    return bnat_cue_trial_duration
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_cue_trial_duration;
  }
};

var bnat_second_fixation_practice = {
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_second_fixation_trial_duration = 400;
    return bnat_second_fixation_trial_duration
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_second_fixation_trial_duration;
  }
};

var bnat_target_practice = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('targ'),
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_target_trial_duration = 1500;
    return bnat_target_trial_duration
  },
  choices: ['ArrowRight', 'ArrowLeft'],
  data: {
    designation: 'ANT-RESPONSE',
    correct_resp: jsPsych.timelineVariable('correct_resp'),
    flanker_type: jsPsych.timelineVariable('flanker_type'),
    flanker_middle: jsPsych.timelineVariable('flanker_middle'),
    flanker_loc: jsPsych.timelineVariable('flanker_loc'),
    ANT_trialType: jsPsych.timelineVariable('cue_type')
  },
  on_finish: function(data){

    /*Store target RT*/
    if (data.rt != null) {
    bnat_target_RT = data.rt
    } else {
    bnat_target_RT = 1500
    }

    /*Store trial duration*/
    data.trial_duration = bnat_target_trial_duration;

    if(data.response == data.correct_resp){
      gotitright = 1
    } 

    if(data.response != data.correct_resp){
      gotitright = 0
    } 

    jsPsych.data.addDataToLastTrial({
      correct: gotitright
    });
  }
};


var bnat_final_fixation_practice = {
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function(){
    bnat_final_fixation_trial_duration = 3000 - bnat_D - bnat_target_RT
    return bnat_final_fixation_trial_duration;
},
  choices: "NO_KEYS",
  on_finish: function (data) {
  data.trial_duration = bnat_final_fixation_trial_duration;
  }
};






//-------------------//
//  CORRECT
//-------------------//
var bnat_target_practice_correct = {
  data: {
    trial_id: "bnat_target_practice_correct",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p><div style ='line-height: 1.25; font-size:3vw; color: #3e9c35; position: fixed; top: 32vh; left: 44.5vw; z-index: 2;'><b>Correct</b></div></p>" +
    "<img src='img/fixation.jpg' <div style= 'height: 501px;'></img>"+
    "<p><div style ='line-height: 1.25; font-size:3vw; color: #3e9c35; position: fixed; top: 60vh; left: 44.5vw; z-index: 2;'><b>Correct</b></div></p>",
    choices: "NO_KEYS",
    trial_duration: 1500,
};   


var bnat_target_practice_correct_conditional = {
    timeline: [bnat_target_practice_correct],
    conditional_function: function() {
      if (gotitright === 1) {
        return true;
      } else {
        return false;
      }
    }
  }


//-------------------//
//  INCORRECT
//-------------------//
var bnat_target_practice_incorrect = {
  data: {
    trial_id: "bnat_target_practice_incorrect",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p><div style ='line-height: 1.25; font-size:3vw; color: red; position: fixed; top: 32vh; left: 43.5vw; z-index: 2;'><b>Incorrect</b></div></p>" +
    "<img src='img/fixation.jpg' <div style= 'height: 501px;'></img>"+
    "<p><div style ='line-height: 1.25; font-size:3vw; color: red; position: fixed; top: 60vh; left: 43.5vw; z-index: 2;'><b>Incorrect</b></div></p>",
    choices: "NO_KEYS",
    trial_duration: 1500,
};   

var bnat_target_practice_incorrect_conditional = {
    timeline: [bnat_target_practice_incorrect],
    conditional_function: function() {
      if (gotitright === 0) {
        return true;
      } else {
        return false;
      }
    }
  }




var bnat_procedure_practice = {
  timeline: [bnat_first_fixation_practice, bnat_cue_practice, bnat_second_fixation_practice, bnat_target_practice, bnat_target_practice_correct_conditional, bnat_target_practice_incorrect_conditional, bnat_final_fixation_practice],
  timeline_variables: bnat_trialvars_practice,
};




//------------------------------------//
// Test Trials Prompt -- One
//------------------------------------//
var test_trials_prompt_one = {
  data: {
      trial_id: "test_trials_prompt_one"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 1.25; font-size: 3vw;'>Are you ready to start <b>Test #1?</b></div></p>" +
    "<p><div style='line-height: 1.25; font-size: 3vw;'>Pres <b>Next</b> when you are ready to begin.</div></p>" 
     return [pageOne]
  },
  show_clickable_nav: true,
  allow_backward: true,
  css_classes: ['custom_padding'],
}



//------------------------------------//
// BNAT Block 1
//------------------------------------//
/*These procedures follow the Weaver et al., 2013 paper*/
var setHeight=500;


var bnat_first_fixation_block1 = {
      data: {
      trial_id: "bnat_first_fixation_block1",
      },
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function(){
    bnat_D_trial_duration = rand_iti(400, 1200);
    return bnat_D_trial_duration;
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_D_trial_duration;

    /*Store bnat_D duration*/
    bnat_D = bnat_D_trial_duration
  }
};

var bnat_cue_block1 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('cue'),
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_cue_trial_duration = 100;
    return bnat_cue_trial_duration
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_cue_trial_duration;
  }
};

var bnat_second_fixation_block1 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_second_fixation_trial_duration = 400;
    return bnat_second_fixation_trial_duration
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_second_fixation_trial_duration;
  }
};

var bnat_target_block1 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('targ'),
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_target_trial_duration = 1500;
    return bnat_target_trial_duration
  },
  choices: ['ArrowRight', 'ArrowLeft'],
  data: {
    designation: 'ANT-RESPONSE',
    correct_resp: jsPsych.timelineVariable('correct_resp'),
    flanker_type: jsPsych.timelineVariable('flanker_type'),
    flanker_middle: jsPsych.timelineVariable('flanker_middle'),
    flanker_loc: jsPsych.timelineVariable('flanker_loc'),
    ANT_trialType: jsPsych.timelineVariable('cue_type')
  },
  on_finish: function(data){

    /*Store target RT*/
    if (data.rt != null) {
    bnat_target_RT = data.rt
    } else {
    bnat_target_RT = 1500
    }

    /*Store trial duration*/
    data.trial_duration = bnat_target_trial_duration;

    if(data.response == data.correct_resp){
      var gotitright = 1;
    } else {
      var gotitright = 0;
    }
    jsPsych.data.addDataToLastTrial({
      correct: gotitright
    });
  }
};


var bnat_final_fixation_block1 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function(){
    bnat_final_fixation_trial_duration = 3000 - bnat_D - bnat_target_RT
    return bnat_final_fixation_trial_duration;
},
  choices: "NO_KEYS",
  on_finish: function (data) {
  data.trial_duration = bnat_final_fixation_trial_duration;
  }
};


var bnat_procedure_block1 = {
  timeline: [bnat_first_fixation_block1, bnat_cue_block1, bnat_second_fixation_block1, bnat_target_block1, bnat_final_fixation_block1],
  timeline_variables: bnat_trialvars_block1,
};





//------------------------------------//
// Test Trials Prompt -- Two
//------------------------------------//
var test_trials_prompt_two = {
  data: {
      trial_id: "test_trials_prompt_two"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 1.25; font-size: 3vw;'>Are you ready to start Test #2?</div></p>" +
    "<p><div style='line-height: 1.25; font-size: 3vw;'>Pres <b>Next</b> when you are ready to begin.</div></p>" 
     return [pageOne]
  },
  show_clickable_nav: true,
  allow_backward: true,
  css_classes: ['custom_padding'],
}





//------------------------------------//
// BNAT Block 2
//------------------------------------//
/*These procedures follow the Weaver et al., 2013 paper*/
var setHeight=500;


var bnat_first_fixation_block2 = {
      data: {
      trial_id: "bnat_first_fixation_block2",
      },
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function(){
    bnat_D_trial_duration = rand_iti(400, 1200);
    return bnat_D_trial_duration;
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_D_trial_duration;

    /*Store bnat_D duration*/
    bnat_D = bnat_D_trial_duration
  }
};

var bnat_cue_block2 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('cue'),
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_cue_trial_duration = 100;
    return bnat_cue_trial_duration
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_cue_trial_duration;
  }
};

var bnat_second_fixation_block2 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_second_fixation_trial_duration = 400;
    return bnat_second_fixation_trial_duration
  },
  choices: "NO_KEYS",
  on_finish: function (data) {

    /*Store trial duration*/
    data.trial_duration = bnat_second_fixation_trial_duration;
  }
};

var bnat_target_block2 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: jsPsych.timelineVariable('targ'),
  stimulus_height: function(){return setHeight;},
  trial_duration: function () {
    bnat_target_trial_duration = 1500;
    return bnat_target_trial_duration
  },
  choices: ['ArrowRight', 'ArrowLeft'],
  data: {
    designation: 'ANT-RESPONSE',
    correct_resp: jsPsych.timelineVariable('correct_resp'),
    flanker_type: jsPsych.timelineVariable('flanker_type'),
    flanker_middle: jsPsych.timelineVariable('flanker_middle'),
    flanker_loc: jsPsych.timelineVariable('flanker_loc'),
    ANT_trialType: jsPsych.timelineVariable('cue_type')
  },
  on_finish: function(data){

    /*Store target RT*/
    if (data.rt != null) {
    bnat_target_RT = data.rt
    } else {
    bnat_target_RT = 1500
    }

    /*Store trial duration*/
    data.trial_duration = bnat_target_trial_duration;

    if(data.response == data.correct_resp){
      var gotitright = 1;
    } else {
      var gotitright = 0;
    }
    jsPsych.data.addDataToLastTrial({
      correct: gotitright
    });
  }
};


var bnat_final_fixation_block2 = {
  type: jsPsychImageKeyboardResponse,
  stimulus: 'img/fixation.jpg',
  stimulus_height: function(){return setHeight;},
  trial_duration: function(){
    bnat_final_fixation_trial_duration = 3000 - bnat_D - bnat_target_RT
    return bnat_final_fixation_trial_duration;
},
  choices: "NO_KEYS",
  on_finish: function (data) {
  data.trial_duration = bnat_final_fixation_trial_duration;
  }
};


var bnat_procedure_block2 = {
  timeline: [bnat_first_fixation_block2, bnat_cue_block2, bnat_second_fixation_block2, bnat_target_block2, bnat_final_fixation_block2],
  timeline_variables: bnat_trialvars_block2,
};






//------------------------------------//
// Wrap up screen
//------------------------------------//
var bnat_finish = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p>Thank you for your responses!</p>',
  choices: ['Finish']
};



//------------------------------------//
// Organize ANT task procedure
//------------------------------------//
var bnat_task = {
    timeline: [bnat_inst, bnat_procedure_practice, test_trials_prompt_one, bnat_procedure_block1, test_trials_prompt_two, bnat_procedure_block2, bnat_finish]
};
