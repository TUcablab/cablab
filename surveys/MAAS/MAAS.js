//------------------------------------//
// MAAS scale
//------------------------------------//
var maas_scale = {
  data: {
    trial_id: "maas_scale"
},
    type: jsPsychSurvey,
    survey_json: {
    showQuestionNumbers: false,
    title: 'Below is a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.',
    completeText: 'Next',
    elements:
      [
        {
          type: 'radiogroup',
          title: "I could be experiencing some emotion and not be conscious of it until some time later.", 
          name: 'maas_emotion', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I break or spill things because of carelessness, not paying attention, or thinking of something else.", 
          name: 'maas_spill', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I find it difficult to stay focused on what's happening in the present.", 
          name: 'maas_present', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I tend to walk quickly to get where I'm going without paying attention to what I experience along the way.", 
          name: 'maas_walk', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I tend not to notice feelings of physical tension or discomfort until they really grab my attention.", 
          name: 'maas_tension', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I forget a person's name almost as soon as I've been told it for the first time.", 
          name: 'maas_name', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "It seems I am 'running on automatic', without much awareness of what I'm doing.", 
          name: 'maas_automatic', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I rush through activities without being really attentive to them.", 
          name: 'maas_activities', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I get so focused on the goal I want to achieve that I lose touch with what I'm doing right now to get there.", 
          name: 'maas_focused', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I do jobs or tasks automatically, without being aware of what I'm doing.", 
          name: 'maas_jobs', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I find myself listening to someone with one ear, doing something else at the same time.", 
          name: 'maas_listening', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I drive places on 'automatic pilot' and then wonder why I went there.", 
          name: 'maas_drive', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I find myself preoccupied with the future or the past.", 
          name: 'maas_preoccupied', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I find myself doing things without paying attention.", 
          name: 'maas_doingthings', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I snack without being aware that I'm eating.", 
          name: 'maas_snack', 
          choices: ['Almost always', 'Very frequently', 'Somewhat frequently', 'Somewhat infrequently', 'Very infrequently', 'Almost never'],
          colCount: 0, 
          isRequired: true,
        }, 
      ]
    },
    on_finish: function (data) {
    // Create mapping for text values to numerical values
    const textToNumber = {
      'Almost always': 1,
      'Very frequently': 2, 
      'Somewhat frequently': 3,
      'Somewhat infrequently': 4,
      'Very infrequently': 5,
      'Almost never': 6,
    };
    
    // Store individual numerical and text variables for each question
    for (const key in data.response) {
      const textValue = data.response[key];
      const numericalValue = textToNumber[textValue];
      
      // Create separate variables for numerical and text responses
      data[key + '_text'] = textValue;
      data[key + '_numerical'] = numericalValue;
    }
  }
  };


//------------------------------------//
// MAAS scale timeline
//------------------------------------//
var maas_scale_procedure = {
      timeline: [maas_scale]
};