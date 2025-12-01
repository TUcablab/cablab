//------------------------------------//
// BSMAS scale
//------------------------------------//
var bsmas_scale = {
  data: {
    trial_id: "bsmas_scale"
},
    type: jsPsychSurvey,
    survey_json: {
    showQuestionNumbers: false,
    title: 'Here are six statements to consider. For each, answer: (1) Very rarely, (2) Rarely, (3) Sometimes, (4) Often, or (5) Very often.',
    completeText: 'Next',
    elements:
      [
        {
          type: 'radiogroup',
          title: "You spend a lot of time thinking about social media or planning how to use it.", 
          name: 'bsmas_thinking', 
          choices: ['Very rarely', 'Rarely', 'Sometimes', 'Often', 'Very often'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "You feel an urge to use social media more and more.", 
          name: 'bsmas_urge', 
          choices: ['Very rarely', 'Rarely', 'Sometimes', 'Often', 'Very often'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "You use social media in order to forget about personal problems.", 
          name: 'bsmas_problems', 
          choices: ['Very rarely', 'Rarely', 'Sometimes', 'Often', 'Very often'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "You have tried to cut down on the use of social media without success.", 
          name: 'bsmas_cutdown', 
          choices: ['Very rarely', 'Rarely', 'Sometimes', 'Often', 'Very often'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "You become restless or troubled if you are prohibited from using social media.", 
          name: 'bsmas_restless', 
          choices: ['Very rarely', 'Rarely', 'Sometimes', 'Often', 'Very often'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "You use social media so much that it has had a negative impact on your job/studies.", 
          name: 'bsmas_negative', 
          choices: ['Very rarely', 'Rarely', 'Sometimes', 'Often', 'Very often'],
          colCount: 0, 
          isRequired: true,
        }, 
      ]
    },
    on_finish: function (data) {
    // Create mapping for text values to numerical values
    const textToNumber = {
      'Very rarely': 1,
      'Rarely': 2, 
      'Sometimes': 3,
      'Often': 4,
      'Very often': 5,
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
// BSMAS scale Timeline
//------------------------------------//
var bsmas_scale_procedure = {
      timeline: [bsmas_scale]
};