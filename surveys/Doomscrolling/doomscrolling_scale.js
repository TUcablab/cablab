//------------------------------------//
// Doomscrolling scale
//------------------------------------//
var doomscrolling_scale = {
  data: {
    trial_id: "doomscrolling_scale"
},
    type: jsPsychSurvey,
    survey_json: {
    showQuestionNumbers: false,
    title: 'Please rate the following statements based on how much you agree with them on a scale of "Strongly Disagree" to "Strongly Agree".',
    completeText: 'Next',
    elements:
      [
        {
          type: 'radiogroup',
          title: "I feel an urge to seek bad news on social media, more and more often", 
          name: 'doomscrolling_urge', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'],
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I lose track of time when I read bad news on social media", 
          name: 'doomscrolling_time', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I constantly refresh my newsfeeds to see if something bad happened", 
          name: 'doomscrolling_refresh', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I stay up late at night trying to find more negative news", 
          name: 'doomscrolling_stayuplate', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "Reading negative news on social media is more of a habit now", 
          name: 'doomscrolling_reading', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "When I am online, I feel tense as if something bad is going to happen soon", 
          name: 'doomscrolling_tense', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I constantly feel panicked while scrolling on my device", 
          name: 'doomscrolling_panicked', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I unconsciously check my newsfeeds for bad news", 
          name: 'doomscrolling_unconsciously', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "Even if my newsfeed says I am all caught up, I just keep scrolling for negative news", 
          name: 'doomscrolling_keepscrolling', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I find myself continuously browsing negative news", 
          name: 'doomscrolling_browsing', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I check social media in the morning to see what bad things have happened", 
          name: 'doomscrolling_morning', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I feel like I am addicted to negative news", 
          name: 'doomscrolling_addicted', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "My social media searches probably make my newsfeeds more negative", 
          name: 'doomscrolling_searches', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "I am terrified by what I see on social media but I cannot look away", 
          name: 'doomscrolling_terrified', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "It's difficult to stop reading negative news on social media", 
          name: 'doomscrolling_difficult', 
          choices: ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree'], 
          colCount: 0, 
          isRequired: true,
        }, 
      ],
    },
 on_finish: function (data) {
    // Create mapping for text values to numerical values
    const textToNumber = {
      'Strongly Disagree': 1,
      'Disagree': 2, 
      'Somewhat Disagree': 3,
      'Neither Agree nor Disagree': 4,
      'Somewhat Agree': 5,
      'Agree': 6,
      'Strongly Agree': 7
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
// Doomscrolling scale Timeline
//------------------------------------//
var doomscrolling_scale_procedure = {
      timeline: [doomscrolling_scale]
};