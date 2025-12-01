var ADEXI = {
  type: jsPsychSurvey,
  survey_json: {
    title: "Below	you	will find	a number of statements. Please circle	a	number to	the	right	of each statement to indicate how well that statement describes how you are as a person. People that you know might feel differently about you \u2014 we want to know what you think about yourself. Try to respond as honestly as possible.",
    showQuestionNumbers: false,
    pages: [
      {
        elements: [
          {
            type: 'matrix',
            titleLocation: 'hidden',
            name: 'ADEXI_survey',
            alternateRows: true,
            isAllRowRequired: true,
            rows: [
              {text: 'I	have difficulty remembering lengthy instructions', value: 'ADEXI_WM_1'},
              {text: 'I sometimes have difficulty remembering what I am doing in the middle of an activity', value: 'ADEXI_WM_2'},
              {text: 'I have a tendency to do things without first thinking about what could happen', value: 'ADEXI_I_3'},
              {text: 'I sometimes have difficulty stopping myself from doing something that I like even though someone tells me that it is not allowed', value: 'ADEXI_I_4'},
              {text: 'When someone asks me to do several things, I sometimes remember only the first or last', value: 'ADEXI_WM_5'},
              {text: 'I sometimes have difficulty refraining from smiling or laughing in situations where it is inappropriate', value: 'ADEXI_I_6'},
              {text: "I have difficulty coming up with a different way of solving a problem when I get stuck", value: 'ADEXI_WM_7'},
              {text: "When someone asks me to fetch something, I sometimes forget what I am supposed to fetch", value: 'ADEXI_WM_8'},
              {text: 'I have difficulty planning for an activity (E.g., remembering to bring everything necessary when going on a trip/to work/to school)', value: 'ADEXI_WM_9'},
              {text: 'I sometimes have difficulty stopping an activity that I like (e.g., I watch TV or sit in front of the computer in the evening even though it is time to go to bed)', value: 'ADEXI_I_10'},
              {text: 'I sometimes have difficulty understanding verbal instructions unless I am also shown <u>how</u> to do something', value: 'ADEXI_WM_11'},
              {text: 'I have difficulties with tasks or activities that involve several steps', value: 'ADEXI_WM_12'},
              {text: 'I have difficulty thinking ahead or learning from experience', value: 'ADEXI_WM_13'},
              {text: 'People that I meet sometimes seem to think that I am more lively/wilder compared to other people my age', value: 'ADEXI_I_14'},
            ],
            columns: [{
              "value": 0,
              "text": "Definitely not true"
            }, {
              "value": 1,
              "text": "Not true"
            }, {
              "value": 2,
              "text": "Partially true"
            }, {
              "value": 3,
              "text": "True"
            }, {
              "value": 4,
              "text": "Definitely true"
            }]
          }
        ]
      }
    ]
  },
  on_finish: function (data) {
      for (const key in data.response.ADEXI_survey) {
    // console.log(`${key}: ${data.response.ADEXI_survey[key]}`);
    
    /**** For "ADEXI_WM_1" question ****/
    /*If the question is "ADEXI_WM_1" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_1" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_1_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_1" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_1" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_1_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_1" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_1" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_1_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_1" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_1" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_1_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_1" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_1" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_1_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_1" question*/
    if (`${key}` == "ADEXI_WM_1") {
      ADEXI_WM_1_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_WM_2" question ****/
    /*If the question is "ADEXI_WM_2" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_2" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_2_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_2" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_2" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_2_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_2" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_2" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_2_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_2" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_2" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_2_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_2" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_2" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_2_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_2" question*/
    if (`${key}` == "ADEXI_WM_2") {
      ADEXI_WM_2_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }


    /**** For "ADEXI_WM_5" question ****/
    /*If the question is "ADEXI_WM_5" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_5" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_5_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_5" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_5" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_5_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_5" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_5" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_5_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_5" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_5" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_5_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_5" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_5" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_5_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_5" question*/
    if (`${key}` == "ADEXI_WM_5") {
      ADEXI_WM_5_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_WM_7" question ****/
    /*If the question is "ADEXI_WM_7" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_7" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_7_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_7" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_7" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_7_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_7" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_7" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_7_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_7" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_7" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_7_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_7" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_7" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_7_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_7" question*/
    if (`${key}` == "ADEXI_WM_7") {
      ADEXI_WM_7_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }


    /**** For "ADEXI_WM_8" question ****/
    /*If the question is "ADEXI_WM_8" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_8" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_8_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_8" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_8" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_8_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_8" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_8" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_8_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_8" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_8" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_8_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_8" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_8" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_8_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_8" question*/
    if (`${key}` == "ADEXI_WM_8") {
      ADEXI_WM_8_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_WM_9" question ****/
    /*If the question is "ADEXI_WM_9" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_9" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_9_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_9" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_9" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_9_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_9" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_9" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_9_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_9" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_9" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_9_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_9" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_9" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_9_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_9" question*/
    if (`${key}` == "ADEXI_WM_9") {
      ADEXI_WM_9_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_WM_11" question ****/
    /*If the question is "ADEXI_WM_11" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_11" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_11_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_11" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_11" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_11_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_11" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_11" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_11_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_11" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_11" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_11_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_11" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_11" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_11_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_11" question*/
    if (`${key}` == "ADEXI_WM_11") {
      ADEXI_WM_11_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_WM_12" question ****/
    /*If the question is "ADEXI_WM_12" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_12" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_12_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_12" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_12" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_12_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_12" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_12" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_12_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_12" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_12" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_12_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_12" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_12" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_12_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_12" question*/
    if (`${key}` == "ADEXI_WM_12") {
      ADEXI_WM_12_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_WM_13" question ****/
    /*If the question is "ADEXI_WM_13" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_WM_13" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_WM_13_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_WM_13" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_WM_13" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_WM_13_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_WM_13" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_WM_13" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_WM_13_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_WM_13" and participant answers "True"*/
    if (`${key}` == "ADEXI_WM_13" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_WM_13_categorical_answer = "True"
    }

    /*If the question is "ADEXI_WM_13" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_WM_13" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_WM_13_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_WM_13" question*/
    if (`${key}` == "ADEXI_WM_13") {
      ADEXI_WM_13_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }

    ///////////////////////////////////////////////////////////////////////////////



    /**** For "ADEXI_I_3" question ****/
    /*If the question is "ADEXI_I_3" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_I_3" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_I_3_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_I_3" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_I_3" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_I_3_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_I_3" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_I_3" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_I_3_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_I_3" and participant answers "True"*/
    if (`${key}` == "ADEXI_I_3" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_I_3_categorical_answer = "True"
    }

    /*If the question is "ADEXI_I_3" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_I_3" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_I_3_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_I_3" question*/
    if (`${key}` == "ADEXI_I_3") {
      ADEXI_I_3_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }




    /**** For "ADEXI_I_4" question ****/
    /*If the question is "ADEXI_I_4" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_I_4" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_I_4_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_I_4" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_I_4" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_I_4_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_I_4" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_I_4" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_I_4_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_I_4" and participant answers "True"*/
    if (`${key}` == "ADEXI_I_4" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_I_4_categorical_answer = "True"
    }

    /*If the question is "ADEXI_I_4" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_I_4" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_I_4_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_I_4" question*/
    if (`${key}` == "ADEXI_I_4") {
      ADEXI_I_4_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_I_6" question ****/
    /*If the question is "ADEXI_I_6" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_I_6" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_I_6_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_I_6" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_I_6" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_I_6_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_I_6" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_I_6" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_I_6_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_I_6" and participant answers "True"*/
    if (`${key}` == "ADEXI_I_6" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_I_6_categorical_answer = "True"
    }

    /*If the question is "ADEXI_I_6" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_I_6" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_I_6_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_I_6" question*/
    if (`${key}` == "ADEXI_I_6") {
      ADEXI_I_6_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_I_10" question ****/
    /*If the question is "ADEXI_I_10" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_I_10" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_I_10_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_I_10" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_I_10" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_I_10_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_I_10" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_I_10" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_I_10_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_I_10" and participant answers "True"*/
    if (`${key}` == "ADEXI_I_10" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_I_10_categorical_answer = "True"
    }

    /*If the question is "ADEXI_I_10" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_I_10" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_I_10_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_I_10" question*/
    if (`${key}` == "ADEXI_I_10") {
      ADEXI_I_10_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }



    /**** For "ADEXI_I_14" question ****/
    /*If the question is "ADEXI_I_14" and participant answers "Definitely not true"*/
    if (`${key}` == "ADEXI_I_14" && `${data.response.ADEXI_survey[key]}` == 0) {
      ADEXI_I_14_categorical_answer = "Definitely not true"
    }

    /*If the question is "ADEXI_I_14" and participant answers "Not true"*/
    if (`${key}` == "ADEXI_I_14" && `${data.response.ADEXI_survey[key]}` == 1) {
      ADEXI_I_14_categorical_answer = "Not true"
    }

    /*If the question is "ADEXI_I_14" and participant answers "Partially true"*/
    if (`${key}` == "ADEXI_I_14" && `${data.response.ADEXI_survey[key]}` == 2) {
      ADEXI_I_14_categorical_answer = "Partially true"
    }

    /*If the question is "ADEXI_I_14" and participant answers "True"*/
    if (`${key}` == "ADEXI_I_14" && `${data.response.ADEXI_survey[key]}` == 3) {
      ADEXI_I_14_categorical_answer = "True"
    }

    /*If the question is "ADEXI_I_14" and participant answers "Definitely true"*/
    if (`${key}` == "ADEXI_I_14" && `${data.response.ADEXI_survey[key]}` == 4) {
      ADEXI_I_14_categorical_answer = "Definitely true"
    }

    /*Store numerical answer for "ADEXI_I_14" question*/
    if (`${key}` == "ADEXI_I_14") {
      ADEXI_I_14_numerical_answer = `${data.response.ADEXI_survey[key]}`
    }
  }

  ADEXI_WM_score = +ADEXI_WM_1_numerical_answer + +ADEXI_WM_2_numerical_answer + +ADEXI_WM_5_numerical_answer + +ADEXI_WM_7_numerical_answer + +ADEXI_WM_8_numerical_answer + +ADEXI_WM_9_numerical_answer + +ADEXI_WM_11_numerical_answer + +ADEXI_WM_12_numerical_answer + +ADEXI_WM_13_numerical_answer
  ADEXI_I_score = +ADEXI_I_3_numerical_answer + +ADEXI_I_4_numerical_answer + +ADEXI_I_6_numerical_answer + +ADEXI_I_10_numerical_answer + +ADEXI_I_14_numerical_answer
  Total_ADEXI = ADEXI_WM_score + ADEXI_I_score

    //Add categorical and numerical columns for "ADEXI_WM_1" question
    data.ADEXI_WM_1_categorical_response = ADEXI_WM_1_categorical_answer
    data.ADEXI_WM_1_numerical_response = ADEXI_WM_1_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_2" question
    data.ADEXI_WM_2_categorical_response = ADEXI_WM_2_categorical_answer
    data.ADEXI_WM_2_numerical_response = ADEXI_WM_2_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_5" question
    data.ADEXI_WM_5_categorical_response = ADEXI_WM_5_categorical_answer
    data.ADEXI_WM_5_numerical_response = ADEXI_WM_5_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_7" question
    data.ADEXI_WM_7_categorical_response = ADEXI_WM_7_categorical_answer
    data.ADEXI_WM_7_numerical_response = ADEXI_WM_7_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_8" question
    data.ADEXI_WM_8_categorical_response = ADEXI_WM_8_categorical_answer
    data.ADEXI_WM_8_numerical_response = ADEXI_WM_8_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_9" question
    data.ADEXI_WM_9_categorical_response = ADEXI_WM_9_categorical_answer
    data.ADEXI_WM_9_numerical_response = ADEXI_WM_9_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_11" question
    data.ADEXI_WM_11_categorical_response = ADEXI_WM_11_categorical_answer
    data.ADEXI_WM_11_numerical_response = ADEXI_WM_11_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_12" question
    data.ADEXI_WM_12_categorical_response = ADEXI_WM_12_categorical_answer
    data.ADEXI_WM_12_numerical_response = ADEXI_WM_12_numerical_answer

    //Add categorical and numerical columns for "ADEXI_WM_13" question
    data.ADEXI_WM_13_categorical_response = ADEXI_WM_13_categorical_answer
    data.ADEXI_WM_13_numerical_response = ADEXI_WM_13_numerical_answer




    
    //Add categorical and numerical columns for "ADEXI_I_3" question
    data.ADEXI_I_3_categorical_response = ADEXI_I_3_categorical_answer
    data.ADEXI_I_3_numerical_response = ADEXI_I_3_numerical_answer

    //Add categorical and numerical columns for "ADEXI_I_4" question
    data.ADEXI_I_4_categorical_response = ADEXI_I_4_categorical_answer
    data.ADEXI_I_4_numerical_response = ADEXI_I_4_numerical_answer

    //Add categorical and numerical columns for "ADEXI_I_6" question
    data.ADEXI_I_6_categorical_response = ADEXI_I_6_categorical_answer
    data.ADEXI_I_6_numerical_response = ADEXI_I_6_numerical_answer

     //Add categorical and numerical columns for "ADEXI_I_10" question
    data.ADEXI_I_10_categorical_response = ADEXI_I_10_categorical_answer
    data.ADEXI_I_10_numerical_response = ADEXI_I_10_numerical_answer

    //Add categorical and numerical columns for "ADEXI_I_14" question
    data.ADEXI_I_14_categorical_response = ADEXI_I_14_categorical_answer
    data.ADEXI_I_14_numerical_response = ADEXI_I_14_numerical_answer


    //Add ADEXI summary scores
    data.ADEXI_WM_score = ADEXI_WM_score
    data.ADEXI_I_score = ADEXI_I_score
    data.Total_ADEXI = Total_ADEXI

}
};


//------------------------------------//
// Organize ADEXI procedure
//------------------------------------//
var ADEXI_procedure = {
    timeline: [ADEXI]
};
  