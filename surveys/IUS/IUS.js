var IUS = {
  type: jsPsychSurvey,
  survey_json: {
    title: 'You will find below a series of statements which describe how people may react to the uncertainties of life. Please use the scale below to describe to what extent each item is characteristic of you.',
    showQuestionNumbers: false,
    pages: [
      {
        elements: [
          {
            type: 'matrix',
            titleLocation: 'hidden',
            name: 'IUS_survey',
            alternateRows: true,
            isAllRowRequired: true,
            rows: [
              {text: 'Unforeseen events upset me greatly.', value: 'PA_IUS_1'},
              {text: 'It frustrates me not having all the information I need.', value: 'PA_IUS_2'},
              {text: 'Being uncertain allows me to foresee the consequences beforehand and prepare for them.', value: 'IA_IUS_3'},
              {text: 'One should always look ahead so as to avoid surprises.', value: 'PA_IUS_4'},
              {text: 'A small unforeseen event can spoil anything, even with the best of planning.', value: 'PA_IUS_5'},
              {text: "When it's time to act uncertainty paralyses me.", value: 'IA_IUS_6'},
              {text: "When I am uncertain I can't function very well.", value: 'IA_IUS_7'},
              {text: 'I always want to know what the future has in store for me.', value: 'PA_IUS_8'},
              {text: 'I hate being taken by surprise.', value: 'PA_IUS_9'},
              {text: 'The smallest doubt stops me from acting.', value: 'IA_IUS_10'},
              {text: 'I should be able to organize everything in advance.', value: 'PA_IUS_11'},
              {text: 'I must get away from uncertain situations.', value: 'IA_IUS_12'},
            ],
            columns: [{
              "value": 0,
              "text": "Not at all"
            }, {
              "value": 1,
              "text": "A little"
            }, {
              "value": 2,
              "text": "Somewhat"
            }, {
              "value": 3,
              "text": "Very"
            }, {
              "value": 4,
              "text": "Entirely"
            }]
          }
        ]
      }
    ]
  },
  on_finish: function (data) {
      for (const key in data.response.IUS_survey) {
    // console.log(`${key}: ${data.response.IUS_survey[key]}`);
    
    /**** For "PA_IUS_1" question ****/
    /*If the question is "PA_IUS_1" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_1" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_1_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_1" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_1" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_1_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_1" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_1" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_1_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_1" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_1" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_1_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_1" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_1" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_1_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_1" question*/
    if (`${key}` == "PA_IUS_1") {
      PA_IUS_1_numerical_answer = `${data.response.IUS_survey[key]}`
    }




    /**** For "PA_IUS_2" question ****/
    /*If the question is "PA_IUS_2" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_2" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_2_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_2" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_2" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_2_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_2" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_2" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_2_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_2" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_2" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_2_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_2" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_2" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_2_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_2" question*/
    if (`${key}` == "PA_IUS_2") {
      PA_IUS_2_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "PA_IUS_4" question ****/
    /*If the question is "PA_IUS_4" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_4" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_4_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_4" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_4" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_4_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_4" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_4" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_4_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_4" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_4" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_4_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_4" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_4" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_4_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_4" question*/
    if (`${key}` == "PA_IUS_4") {
      PA_IUS_4_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "PA_IUS_5" question ****/
    /*If the question is "PA_IUS_5" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_5" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_5_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_5" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_5" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_5_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_5" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_5" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_5_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_5" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_5" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_5_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_5" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_5" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_5_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_5" question*/
    if (`${key}` == "PA_IUS_5") {
      PA_IUS_5_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "PA_IUS_8" question ****/
    /*If the question is "PA_IUS_8" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_8" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_8_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_8" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_8" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_8_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_8" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_8" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_8_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_8" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_8" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_8_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_8" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_8" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_8_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_8" question*/
    if (`${key}` == "PA_IUS_8") {
      PA_IUS_8_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "PA_IUS_9" question ****/
    /*If the question is "PA_IUS_9" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_9" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_9_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_9" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_9" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_9_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_9" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_9" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_9_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_9" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_9" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_9_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_9" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_9" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_9_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_9" question*/
    if (`${key}` == "PA_IUS_9") {
      PA_IUS_9_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "PA_IUS_11" question ****/
    /*If the question is "PA_IUS_11" and participant answers "Not at all"*/
    if (`${key}` == "PA_IUS_11" && `${data.response.IUS_survey[key]}` == 0) {
      PA_IUS_11_categorical_answer = "Not at all"
    }

    /*If the question is "PA_IUS_11" and participant answers "A little"*/
    if (`${key}` == "PA_IUS_11" && `${data.response.IUS_survey[key]}` == 1) {
      PA_IUS_11_categorical_answer = "A little"
    }

    /*If the question is "PA_IUS_11" and participant answers "Somewhat"*/
    if (`${key}` == "PA_IUS_11" && `${data.response.IUS_survey[key]}` == 2) {
      PA_IUS_11_categorical_answer = "Somewhat"
    }

    /*If the question is "PA_IUS_11" and participant answers "Very"*/
    if (`${key}` == "PA_IUS_11" && `${data.response.IUS_survey[key]}` == 3) {
      PA_IUS_11_categorical_answer = "Very"
    }

    /*If the question is "PA_IUS_11" and participant answers "Entirely"*/
    if (`${key}` == "PA_IUS_11" && `${data.response.IUS_survey[key]}` == 4) {
      PA_IUS_11_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "PA_IUS_11" question*/
    if (`${key}` == "PA_IUS_11") {
      PA_IUS_11_numerical_answer = `${data.response.IUS_survey[key]}`
    }


    //////////////////////////////////////////////////////////////////////

    /**** For "IA_IUS_3" question ****/
    /*If the question is "IA_IUS_3" and participant answers "Not at all"*/
    if (`${key}` == "IA_IUS_3" && `${data.response.IUS_survey[key]}` == 0) {
      IA_IUS_3_categorical_answer = "Not at all"
    }

    /*If the question is "IA_IUS_3" and participant answers "A little"*/
    if (`${key}` == "IA_IUS_3" && `${data.response.IUS_survey[key]}` == 1) {
      IA_IUS_3_categorical_answer = "A little"
    }

    /*If the question is "IA_IUS_3" and participant answers "Somewhat"*/
    if (`${key}` == "IA_IUS_3" && `${data.response.IUS_survey[key]}` == 2) {
      IA_IUS_3_categorical_answer = "Somewhat"
    }

    /*If the question is "IA_IUS_3" and participant answers "Very"*/
    if (`${key}` == "IA_IUS_3" && `${data.response.IUS_survey[key]}` == 3) {
      IA_IUS_3_categorical_answer = "Very"
    }

    /*If the question is "IA_IUS_3" and participant answers "Entirely"*/
    if (`${key}` == "IA_IUS_3" && `${data.response.IUS_survey[key]}` == 4) {
      IA_IUS_3_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "IA_IUS_3" question*/
    if (`${key}` == "IA_IUS_3") {
      IA_IUS_3_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "IA_IUS_6" question ****/
    /*If the question is "IA_IUS_6" and participant answers "Not at all"*/
    if (`${key}` == "IA_IUS_6" && `${data.response.IUS_survey[key]}` == 0) {
      IA_IUS_6_categorical_answer = "Not at all"
    }

    /*If the question is "IA_IUS_6" and participant answers "A little"*/
    if (`${key}` == "IA_IUS_6" && `${data.response.IUS_survey[key]}` == 1) {
      IA_IUS_6_categorical_answer = "A little"
    }

    /*If the question is "IA_IUS_6" and participant answers "Somewhat"*/
    if (`${key}` == "IA_IUS_6" && `${data.response.IUS_survey[key]}` == 2) {
      IA_IUS_6_categorical_answer = "Somewhat"
    }

    /*If the question is "IA_IUS_6" and participant answers "Very"*/
    if (`${key}` == "IA_IUS_6" && `${data.response.IUS_survey[key]}` == 3) {
      IA_IUS_6_categorical_answer = "Very"
    }

    /*If the question is "IA_IUS_6" and participant answers "Entirely"*/
    if (`${key}` == "IA_IUS_6" && `${data.response.IUS_survey[key]}` == 4) {
      IA_IUS_6_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "IA_IUS_6" question*/
    if (`${key}` == "IA_IUS_6") {
      IA_IUS_6_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "IA_IUS_7" question ****/
    /*If the question is "IA_IUS_7" and participant answers "Not at all"*/
    if (`${key}` == "IA_IUS_7" && `${data.response.IUS_survey[key]}` == 0) {
      IA_IUS_7_categorical_answer = "Not at all"
    }

    /*If the question is "IA_IUS_7" and participant answers "A little"*/
    if (`${key}` == "IA_IUS_7" && `${data.response.IUS_survey[key]}` == 1) {
      IA_IUS_7_categorical_answer = "A little"
    }

    /*If the question is "IA_IUS_7" and participant answers "Somewhat"*/
    if (`${key}` == "IA_IUS_7" && `${data.response.IUS_survey[key]}` == 2) {
      IA_IUS_7_categorical_answer = "Somewhat"
    }

    /*If the question is "IA_IUS_7" and participant answers "Very"*/
    if (`${key}` == "IA_IUS_7" && `${data.response.IUS_survey[key]}` == 3) {
      IA_IUS_7_categorical_answer = "Very"
    }

    /*If the question is "IA_IUS_7" and participant answers "Entirely"*/
    if (`${key}` == "IA_IUS_7" && `${data.response.IUS_survey[key]}` == 4) {
      IA_IUS_7_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "IA_IUS_7" question*/
    if (`${key}` == "IA_IUS_7") {
      IA_IUS_7_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "IA_IUS_10" question ****/
    /*If the question is "IA_IUS_10" and participant answers "Not at all"*/
    if (`${key}` == "IA_IUS_10" && `${data.response.IUS_survey[key]}` == 0) {
      IA_IUS_10_categorical_answer = "Not at all"
    }

    /*If the question is "IA_IUS_10" and participant answers "A little"*/
    if (`${key}` == "IA_IUS_10" && `${data.response.IUS_survey[key]}` == 1) {
      IA_IUS_10_categorical_answer = "A little"
    }

    /*If the question is "IA_IUS_10" and participant answers "Somewhat"*/
    if (`${key}` == "IA_IUS_10" && `${data.response.IUS_survey[key]}` == 2) {
      IA_IUS_10_categorical_answer = "Somewhat"
    }

    /*If the question is "IA_IUS_10" and participant answers "Very"*/
    if (`${key}` == "IA_IUS_10" && `${data.response.IUS_survey[key]}` == 3) {
      IA_IUS_10_categorical_answer = "Very"
    }

    /*If the question is "IA_IUS_10" and participant answers "Entirely"*/
    if (`${key}` == "IA_IUS_10" && `${data.response.IUS_survey[key]}` == 4) {
      IA_IUS_10_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "IA_IUS_10" question*/
    if (`${key}` == "IA_IUS_10") {
      IA_IUS_10_numerical_answer = `${data.response.IUS_survey[key]}`
    }



    /**** For "IA_IUS_12" question ****/
    /*If the question is "IA_IUS_12" and participant answers "Not at all"*/
    if (`${key}` == "IA_IUS_12" && `${data.response.IUS_survey[key]}` == 0) {
      IA_IUS_12_categorical_answer = "Not at all"
    }

    /*If the question is "IA_IUS_12" and participant answers "A little"*/
    if (`${key}` == "IA_IUS_12" && `${data.response.IUS_survey[key]}` == 1) {
      IA_IUS_12_categorical_answer = "A little"
    }

    /*If the question is "IA_IUS_12" and participant answers "Somewhat"*/
    if (`${key}` == "IA_IUS_12" && `${data.response.IUS_survey[key]}` == 2) {
      IA_IUS_12_categorical_answer = "Somewhat"
    }

    /*If the question is "IA_IUS_12" and participant answers "Very"*/
    if (`${key}` == "IA_IUS_12" && `${data.response.IUS_survey[key]}` == 3) {
      IA_IUS_12_categorical_answer = "Very"
    }

    /*If the question is "IA_IUS_12" and participant answers "Entirely"*/
    if (`${key}` == "IA_IUS_12" && `${data.response.IUS_survey[key]}` == 4) {
      IA_IUS_12_categorical_answer = "Entirely"
    }

    /*Store numerical answer for "IA_IUS_12" question*/
    if (`${key}` == "IA_IUS_12") {
      IA_IUS_12_numerical_answer = `${data.response.IUS_survey[key]}`
    }

  }

  ProspectiveAnxiety = +PA_IUS_1_numerical_answer + +PA_IUS_2_numerical_answer + +PA_IUS_4_numerical_answer + +PA_IUS_5_numerical_answer + +PA_IUS_8_numerical_answer + +PA_IUS_9_numerical_answer + +PA_IUS_11_numerical_answer
  InhibitoryAnxiety = +IA_IUS_3_numerical_answer + +IA_IUS_6_numerical_answer + +IA_IUS_7_numerical_answer + +IA_IUS_10_numerical_answer + +IA_IUS_12_numerical_answer
  Total_IUS = ProspectiveAnxiety + InhibitoryAnxiety

    //Add categorical and numerical columns for "PA_IUS_1" question
    data.PA_IUS_1_categorical_response = PA_IUS_1_categorical_answer
    data.PA_IUS_1_numerical_response = PA_IUS_1_numerical_answer

    //Add categorical and numerical columns for "PA_IUS_2" question
    data.PA_IUS_2_categorical_response = PA_IUS_2_categorical_answer
    data.PA_IUS_2_numerical_response = PA_IUS_2_numerical_answer

    //Add categorical and numerical columns for "PA_IUS_4" question
    data.PA_IUS_4_categorical_response = PA_IUS_4_categorical_answer
    data.PA_IUS_4_numerical_response = PA_IUS_4_numerical_answer

    //Add categorical and numerical columns for "PA_IUS_5" question
    data.PA_IUS_5_categorical_response = PA_IUS_5_categorical_answer
    data.PA_IUS_5_numerical_response = PA_IUS_5_numerical_answer

    //Add categorical and numerical columns for "PA_IUS_8" question
    data.PA_IUS_8_categorical_response = PA_IUS_8_categorical_answer
    data.PA_IUS_8_numerical_response = PA_IUS_8_numerical_answer

    //Add categorical and numerical columns for "PA_IUS_9" question
    data.PA_IUS_9_categorical_response = PA_IUS_9_categorical_answer
    data.PA_IUS_9_numerical_response = PA_IUS_9_numerical_answer

    //Add categorical and numerical columns for "PA_IUS_11" question
    data.PA_IUS_11_categorical_response = PA_IUS_11_categorical_answer
    data.PA_IUS_11_numerical_response = PA_IUS_11_numerical_answer

    //Add categorical and numerical columns for "IA_IUS_3" question
    data.IA_IUS_3_categorical_response = IA_IUS_3_categorical_answer
    data.IA_IUS_3_numerical_response = IA_IUS_3_numerical_answer

    //Add categorical and numerical columns for "IA_IUS_6" question
    data.IA_IUS_6_categorical_response = IA_IUS_6_categorical_answer
    data.IA_IUS_6_numerical_response = IA_IUS_6_numerical_answer

    //Add categorical and numerical columns for "IA_IUS_7" question
    data.IA_IUS_7_categorical_response = IA_IUS_7_categorical_answer
    data.IA_IUS_7_numerical_response = IA_IUS_7_numerical_answer

    //Add categorical and numerical columns for "IA_IUS_10" question
    data.IA_IUS_10_categorical_response = IA_IUS_10_categorical_answer
    data.IA_IUS_10_numerical_response = IA_IUS_10_numerical_answer

    //Add categorical and numerical columns for "IA_IUS_12" question
    data.IA_IUS_12_categorical_response = IA_IUS_12_categorical_answer
    data.IA_IUS_12_numerical_response = IA_IUS_12_numerical_answer


    //Add IUS summary scores
    data.ProspectiveAnxiety = ProspectiveAnxiety
    data.InhibitoryAnxiety = InhibitoryAnxiety
    data.Total_IUS = Total_IUS

}
};


//------------------------------------//
// Organize IUS procedure
//------------------------------------//
var IUS_procedure = {
    timeline: [IUS]
};
  