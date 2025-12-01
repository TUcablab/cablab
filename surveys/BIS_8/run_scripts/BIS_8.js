var BIS_8 = {
  type: jsPsychSurvey,
  survey_json: {
    title: 'People differ in the ways they act and think in different situations. This is a test to measure some of the ways in which you act and think. Read each statement and select the appropriate number on the right side of this page. Do not spend too much time on any statement. Answer quickly and honestly.',
    showQuestionNumbers: false,
    pages: [
      {
        elements: [
          {
            type: 'matrix',
            titleLocation: 'hidden',
            name: 'BIS_8_survey',
            alternateRows: true,
            isAllRowRequired: true,
            rows: [
              {text: 'I plan tasks carefully.', value: 'BIS_8_Q1'},
              {text: 'I do things without thinking.', value: 'BIS_8_Q2'},
              {text: "I don't pay attention.", value: 'BIS_8_Q3'},
              {text: 'I am self-controlled.', value: 'BIS_8_Q4'},
              {text: 'I concentrate easily.', value: 'BIS_8_Q5'},
              {text: "I am a careful thinker.", value: 'BIS_8_Q6'},
              {text: "I say things without thinking.", value: 'BIS_8_Q7'},
              {text: 'I act on the spur of the moment (meaning I act without thinking).', value: 'BIS_8_Q8'},
            ],
            columns: [{
              "value": 0,
              "text": "Rarely/Never"
            }, {
              "value": 1,
              "text": "Occasionally"
            }, {
              "value": 2,
              "text": "Often"
            }, {
              "value": 3,
              "text": "Almost Always/Always"
            }]
          }
        ]
      }
    ]
  },
  on_finish: function (data) {
      for (const key in data.response.BIS_8_survey) {
    // console.log(`${key}: ${data.response.BIS_8_Q1[key]}`);
    
    /**** For "BIS_8_Q1" question ****/
    /*If the question is "BIS_8_Q1" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q1" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q1_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q1" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q1" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q1_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q1" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q1" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q1_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q1" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q1" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q1_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q1" question*/
    if (`${key}` == "BIS_8_Q1") {
      BIS_8_Q1_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }



    /**** For "BIS_8_Q2" question ****/
    /*If the question is "BIS_8_Q2" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q2" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q2_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q2" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q2" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q2_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q2" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q2" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q2_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q2" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q2" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q2_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q2" question*/
    if (`${key}` == "BIS_8_Q2") {
      BIS_8_Q2_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }



    /**** For "BIS_8_Q3" question ****/
    /*If the question is "BIS_8_Q3" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q3" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q3_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q3" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q3" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q3_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q3" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q3" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q3_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q3" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q3" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q3_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q3" question*/
    if (`${key}` == "BIS_8_Q3") {
      BIS_8_Q3_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }



    /**** For "BIS_8_Q4" question ****/
    /*If the question is "BIS_8_Q4" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q4" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q4_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q4" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q4" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q4_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q4" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q4" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q4_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q4" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q4" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q4_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q4" question*/
    if (`${key}` == "BIS_8_Q4") {
      BIS_8_Q4_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }




    /**** For "BIS_8_Q5" question ****/
    /*If the question is "BIS_8_Q5" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q5" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q5_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q5" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q5" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q5_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q5" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q5" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q5_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q5" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q5" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q5_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q5" question*/
    if (`${key}` == "BIS_8_Q5") {
      BIS_8_Q5_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }



    /**** For "BIS_8_Q6" question ****/
    /*If the question is "BIS_8_Q6" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q6" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q6_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q6" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q6" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q6_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q6" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q6" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q6_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q6" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q6" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q6_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q6" question*/
    if (`${key}` == "BIS_8_Q6") {
      BIS_8_Q6_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }



    /**** For "BIS_8_Q7" question ****/
    /*If the question is "BIS_8_Q7" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q7" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q7_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q7" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q7" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q7_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q7" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q7" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q7_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q7" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q7" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q7_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q7" question*/
    if (`${key}` == "BIS_8_Q7") {
      BIS_8_Q7_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }



    /**** For "BIS_8_Q8" question ****/
    /*If the question is "BIS_8_Q8" and participant answers "Rarely/Never"*/
    if (`${key}` == "BIS_8_Q8" && `${data.response.BIS_8_survey[key]}` == 0) {
      BIS_8_Q8_categorical_answer = "Rarely/Never"
    }

    /*If the question is "BIS_8_Q8" and participant answers "Occasionally"*/
    if (`${key}` == "BIS_8_Q8" && `${data.response.BIS_8_survey[key]}` == 1) {
      BIS_8_Q8_categorical_answer = "Occasionally"
    }

    /*If the question is "BIS_8_Q8" and participant answers "Often"*/
    if (`${key}` == "BIS_8_Q8" && `${data.response.BIS_8_survey[key]}` == 2) {
      BIS_8_Q8_categorical_answer = "Often"
    }

    /*If the question is "BIS_8_Q8" and participant answers "Almost Always/Always"*/
    if (`${key}` == "BIS_8_Q8" && `${data.response.BIS_8_survey[key]}` == 3) {
      BIS_8_Q8_categorical_answer = "Almost Always/Always"
    }

    /*Store numerical answer for "BIS_8_Q8" question*/
    if (`${key}` == "BIS_8_Q8") {
      BIS_8_Q8_numerical_answer = `${data.response.BIS_8_survey[key]}`
    }
  }

    //Add categorical and numerical columns for "BIS_8_Q1" question
    data.BIS_8_Q1_categorical_answer = BIS_8_Q1_categorical_answer
    data.BIS_8_Q1_numerical_answer = BIS_8_Q1_numerical_answer

    //Add categorical and numerical columns for "BIS_8_Q2" question
    data.BIS_8_Q2_categorical_answer = BIS_8_Q2_categorical_answer
    data.BIS_8_Q2_numerical_answer = BIS_8_Q2_numerical_answer


    //Add categorical and numerical columns for "BIS_8_Q3" question
    data.BIS_8_Q3_categorical_answer = BIS_8_Q3_categorical_answer
    data.BIS_8_Q3_numerical_answer = BIS_8_Q3_numerical_answer

    //Add categorical and numerical columns for "BIS_8_Q4" question
    data.BIS_8_Q4_categorical_answer = BIS_8_Q4_categorical_answer
    data.BIS_8_Q4_numerical_answer = BIS_8_Q4_numerical_answer

    //Add categorical and numerical columns for "BIS_8_Q5" question
    data.BIS_8_Q5_categorical_answer = BIS_8_Q5_categorical_answer
    data.BIS_8_Q5_numerical_answer = BIS_8_Q5_numerical_answer

    //Add categorical and numerical columns for "BIS_8_Q6" question
    data.BIS_8_Q6_categorical_answer = BIS_8_Q6_categorical_answer
    data.BIS_8_Q6_numerical_answer = BIS_8_Q6_numerical_answer

    //Add categorical and numerical columns for "BIS_8_Q7" question
    data.BIS_8_Q7_categorical_answer = BIS_8_Q7_categorical_answer
    data.BIS_8_Q7_numerical_answer = BIS_8_Q7_numerical_answer

    //Add categorical and numerical columns for "BIS_8_Q8" question
    data.BIS_8_Q8_categorical_answer = BIS_8_Q8_categorical_answer
    data.BIS_8_Q8_numerical_answer = BIS_8_Q8_numerical_answer

}
};


//------------------------------------//
// Organize BIS_8 procedure
//------------------------------------//
var BIS_8_procedure = {
    timeline: [BIS_8]
};
  