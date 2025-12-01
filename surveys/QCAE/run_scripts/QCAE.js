
//------------------------------------//
// QCAE survey
//------------------------------------//
var QCAE_survey = {
  data: {
    trial_id: "QCAE_survey"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  title: "Please indicate the degree to which you agree with each statement",
  completeText: 'Next',
  elements:
    [
      {
        type: 'radiogroup',
        title: "I sometimes find it difficult to see things from the 'other person's' point of view.", 
        name: 'QCAE_Q1', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      }, 
      {
        type: 'radiogroup',
        title: "I am usually objective when I watch a film or play, and I don't often get completely caught up in it.", 
        name: 'QCAE_Q2', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I try to look at everybody's side of a disagreement before I make a decision.", 
        name: 'QCAE_Q3', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I sometimes try to understand my friends better by imagining how things look from their perspective.", 
        name: 'QCAE_Q4', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: 'When I am upset at someone, I usually try to "put myself in their shoes" for a while.', 
        name: 'QCAE_Q5', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "Before criticizing somebody, I try to imagine how I would feel if I was in their place.", 
        name: 'QCAE_Q6', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I often get emotionally involved with my friends' problems.", 
        name: 'QCAE_Q7', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I am inclined to get nervous when others around me seem to be nervous.", 
        name: 'QCAE_Q8', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "People I am with have a strong influence on my mood.", 
        name: 'QCAE_Q9', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "It affects me very much when one of my friends seems upset.", 
        name: 'QCAE_Q10', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
            {
        type: 'radiogroup',
        title: "I often get deeply involved with the feelings of a character in a film, play, or novel.", 
        name: 'QCAE_Q11', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      }, 
      {
        type: 'radiogroup',
        title: "I get very upset when I see someone cry.", 
        name: 'QCAE_Q12', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I am happy when I am with a cheerful group and sad when the others are glum.", 
        name: 'QCAE_Q13', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "It worries me when others are worrying and panicky.", 
        name: 'QCAE_Q14', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: 'I can easily tell if someone else wants to enter a conversation.', 
        name: 'QCAE_Q15', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I can pick up quickly if someone says one thing but means another.", 
        name: 'QCAE_Q16', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "It is hard for me to see why some things upset people so much.", 
        name: 'QCAE_Q17', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I find it easy to put myself in somebody else's shoes.", 
        name: 'QCAE_Q18', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I am good at predicting how someone will feel.", 
        name: 'QCAE_Q19', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I am quick to spot when someone in a group is feeling awkward or uncomfortable.", 
        name: 'QCAE_Q20', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "Other people tell me I am good at understanding how they are feeling and what they are thinking.", 
        name: 'QCAE_Q21', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      }, 
      {
        type: 'radiogroup',
        title: "I can easily tell if someone else is interested or bored with what I am saying.", 
        name: 'QCAE_Q22', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "Friends talk to me about their problems as they say that I am very understanding.", 
        name: 'QCAE_Q23', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I can sense if I am intruding, even if the other person does not tell me.", 
        name: 'QCAE_Q24', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: 'I can easily work out what another person might want to talk about.', 
        name: 'QCAE_Q25', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I can tell if someone is masking their true emotion.", 
        name: 'QCAE_Q26', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I am good at predicting what someone will do.", 
        name: 'QCAE_Q27', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I can usually appreciate the other person's viewpoint, even if I do not agree with it.", 
        name: 'QCAE_Q28', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I usually stay emotionally detached when watching a film.", 
        name: 'QCAE_Q29', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I always try to consider the other fellow's feelings before I do something.", 
        name: 'QCAE_Q30', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "Before I do something I try to consider how my friends will react to it.", 
        name: 'QCAE_Q31', 
        choices: ['Strongly Disagree', 'Slightly Disagree', 'Slightly Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
  ],
},
};



//-------------------------//
// QCAE survey
//-------------------------//
  var QCAE_survey_procedure = {
    timeline: [QCAE_survey]
  };
