//------------------------------------//
// Function to Randomize stimuli
//------------------------------------//
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



//------------------------------------//
// Organize Intervention stimuli
//------------------------------------//
/*Subset rows that reflect human or AI stim*/
var intervention_stim_text_human = intervention_stim_text.filter(x => x.listing_type === 'Human')
var intervention_stim_text_ai = intervention_stim_text.filter(x => x.listing_type === 'AI')

var intervention_stim_multifeatured_human = intervention_stim_multifeatured.filter(x => x.listing_type === 'Human')
var intervention_stim_multifeatured_ai = intervention_stim_multifeatured.filter(x => x.listing_type === 'AI')


/*Intervention 1 -- text*/
/* Randomize intervention stim text human and AI arrays*/
var intervention_stim_text_human_randomized = shuffle(intervention_stim_text_human)
var intervention_stim_text_ai_randomized = shuffle(intervention_stim_text_ai)

/*Subset rows from human and AI text arrays*/
var intervention_one_stim_text_human = intervention_stim_text_human_randomized.slice(0, 10)
var intervention_one_stim_text_ai = intervention_stim_text_ai_randomized.slice(0, 10)

/* Remove stim that has already been selected for Intervention 1 text */
intervention_stim_text_human_randomized = intervention_stim_text_human_randomized.filter(val => !intervention_one_stim_text_human.includes(val))
intervention_stim_text_ai_randomized = intervention_stim_text_ai_randomized.filter(val => !intervention_one_stim_text_ai.includes(val))

/*Concatenate stims into final Intervention 1 stim text array*/
intervention_one_stim_text = intervention_one_stim_text_human.concat(intervention_one_stim_text_ai);

/*Randomize intervention one text stim*/
intervention_one_stim_text = shuffle(intervention_one_stim_text)




/*Intervention 1 -- multifeatured*/
/* Randomize intervention stim multifeatured human and AI arrays*/
var intervention_stim_multifeatured_human_randomized = shuffle(intervention_stim_multifeatured_human)
var intervention_stim_multifeatured_ai_randomized = shuffle(intervention_stim_multifeatured_ai)

/*Subset rows from human and AI multifeatured arrays*/
var intervention_one_stim_multifeatured_human = intervention_stim_multifeatured_human_randomized.slice(0, 10)
var intervention_one_stim_multifeatured_ai = intervention_stim_multifeatured_ai_randomized.slice(0, 10)

/* Remove stim that has already been selected for Intervention 1 multifeatured */
intervention_stim_multifeatured_human_randomized = intervention_stim_multifeatured_human_randomized.filter(val => !intervention_one_stim_multifeatured_human.includes(val))
intervention_stim_multifeatured_ai_randomized = intervention_stim_multifeatured_ai_randomized.filter(val => !intervention_one_stim_multifeatured_ai.includes(val))

/*Concatenate stims into final Intervention 1 stim multifeatured array*/
intervention_one_stim_multifeatured = intervention_one_stim_multifeatured_human.concat(intervention_one_stim_multifeatured_ai);

/*Randomize intervention one multifeatured stim*/
intervention_one_stim_multifeatured = shuffle(intervention_one_stim_multifeatured)




/*Intervention 2 -- text*/
/*Subset rows from human and AI text arrays*/
var intervention_two_stim_text_human = intervention_stim_text_human_randomized.slice(0, 10)
var intervention_two_stim_text_ai = intervention_stim_text_ai_randomized.slice(0, 10)

/*Concatenate stims into final Intervention 2 stim text array*/
intervention_two_stim_text = intervention_two_stim_text_human.concat(intervention_two_stim_text_ai);

/*Randomize intervention two text stim*/
intervention_two_stim_text = shuffle(intervention_two_stim_text)


/*Intervention 2 -- multifeatured*/
/*Subset rows from human and AI multifeatured arrays*/
var intervention_two_stim_multifeatured_human = intervention_stim_multifeatured_human_randomized.slice(0, 10)
var intervention_two_stim_multifeatured_ai = intervention_stim_multifeatured_ai_randomized.slice(0, 10)

/*Concatenate stims into final Intervention 2 stim multifeatured array*/
intervention_two_stim_multifeatured = intervention_two_stim_multifeatured_human.concat(intervention_two_stim_multifeatured_ai);

/*Randomize intervention two multifeatured stim*/
intervention_two_stim_multifeatured = shuffle(intervention_two_stim_multifeatured)


// console.log(intervention_one_stim_text)
// console.log(intervention_one_stim_multifeatured)
// console.log(intervention_two_stim_text)
// console.log(intervention_two_stim_multifeatured)


//------------------------------------//
// Organize Assessment stimuli
//------------------------------------//
/*Subset rows that reflect human or AI stim*/
var assessment_stim_multifeatured_human = assessment_stim_multifeatured.filter(x => x.listing_type === 'Human')
var assessment_stim_multifeatured_ai = assessment_stim_multifeatured.filter(x => x.listing_type === 'AI')

var assessment_stim_text_human = assessment_stim_text.filter(x => x.listing_type === 'Human')
var assessment_stim_text_ai = assessment_stim_text.filter(x => x.listing_type === 'AI')


/* Randomize assessment stim text human and AI arrays*/
var assessment_stim_multifeatured_human_randomized = shuffle(assessment_stim_multifeatured_human)
var assessment_stim_multifeatured_ai_randomized = shuffle(assessment_stim_multifeatured_ai)

var assessment_stim_text_human_randomized = shuffle(assessment_stim_text_human)
var assessment_stim_text_ai_randomized = shuffle(assessment_stim_text_ai)



/*Assessment 1*/
var assessment_one_stim_multifeatured_human = assessment_stim_multifeatured_human_randomized.slice(0, 8)
var assessment_one_stim_multifeatured_ai = assessment_stim_multifeatured_ai_randomized.slice(0, 8)
var assessment_one_stim_text_human = assessment_stim_text_human_randomized.slice(0, 8)
var assessment_one_stim_text_ai = assessment_stim_text_ai_randomized.slice(0, 8)

/* Remove stim that has already been selected for Assessment 1 */
assessment_stim_multifeatured_human_randomized = assessment_stim_multifeatured_human_randomized.filter(val => !assessment_one_stim_multifeatured_human.includes(val))
assessment_stim_multifeatured_ai_randomized = assessment_stim_multifeatured_ai_randomized.filter(val => !assessment_one_stim_multifeatured_ai.includes(val))
assessment_stim_text_human_randomized = assessment_stim_text_human_randomized.filter(val => !assessment_one_stim_text_human.includes(val))
assessment_stim_text_ai_randomized = assessment_stim_text_ai_randomized.filter(val => !assessment_one_stim_text_ai.includes(val))

/*Concatenate stims into final Assessment 1 array*/
assessment_one_stim = assessment_one_stim_multifeatured_human.concat(assessment_one_stim_multifeatured_ai, assessment_one_stim_text_human, assessment_one_stim_text_ai);

/*Randomize assessment three stim*/
assessment_one_stim = shuffle(assessment_one_stim)




/*Assessment 2*/
var assessment_two_stim_multifeatured_human = assessment_stim_multifeatured_human_randomized.slice(0, 8)
var assessment_two_stim_multifeatured_ai = assessment_stim_multifeatured_ai_randomized.slice(0, 8)
var assessment_two_stim_text_human = assessment_stim_text_human_randomized.slice(0, 8)
var assessment_two_stim_text_ai = assessment_stim_text_ai_randomized.slice(0, 8)

/* Remove stim that has already been selected for Assessment 2 */
assessment_stim_multifeatured_human_randomized = assessment_stim_multifeatured_human_randomized.filter(val => !assessment_two_stim_multifeatured_human.includes(val))
assessment_stim_multifeatured_ai_randomized = assessment_stim_multifeatured_ai_randomized.filter(val => !assessment_two_stim_multifeatured_ai.includes(val))
assessment_stim_text_human_randomized = assessment_stim_text_human_randomized.filter(val => !assessment_two_stim_text_human.includes(val))
assessment_stim_text_ai_randomized = assessment_stim_text_ai_randomized.filter(val => !assessment_two_stim_text_ai.includes(val))


/*Concatenate stims into final Assessment 2 array*/
assessment_two_stim = assessment_two_stim_multifeatured_human.concat(assessment_two_stim_multifeatured_ai, assessment_two_stim_text_human, assessment_two_stim_text_ai);

/*Randomize assessment two stim*/
assessment_two_stim = shuffle(assessment_two_stim)



/*Assessment 3*/
var assessment_three_stim_multifeatured_human = assessment_stim_multifeatured_human_randomized.slice(0, 8)
var assessment_three_stim_multifeatured_ai = assessment_stim_multifeatured_ai_randomized.slice(0, 8)
var assessment_three_stim_text_human = assessment_stim_text_human_randomized.slice(0, 8)
var assessment_three_stim_text_ai = assessment_stim_text_ai_randomized.slice(0, 8)

/* Remove stim that has already been selected for Assessment 3 */
assessment_stim_multifeatured_human_randomized = assessment_stim_multifeatured_human_randomized.filter(val => !assessment_three_stim_multifeatured_human.includes(val))
assessment_stim_multifeatured_ai_randomized = assessment_stim_multifeatured_ai_randomized.filter(val => !assessment_three_stim_multifeatured_ai.includes(val))
assessment_stim_text_human_randomized = assessment_stim_text_human_randomized.filter(val => !assessment_three_stim_text_human.includes(val))
assessment_stim_text_ai_randomized = assessment_stim_text_ai_randomized.filter(val => !assessment_three_stim_text_ai.includes(val))


/*Concatenate stims into final Assessment 3 array*/
assessment_three_stim = assessment_three_stim_multifeatured_human.concat(assessment_three_stim_multifeatured_ai, assessment_three_stim_text_human, assessment_three_stim_text_ai);

/*Randomize assessment three stim*/
assessment_three_stim = shuffle(assessment_three_stim)

// console.log(assessment_one_stim)
// console.log(assessment_two_stim)
// console.log(assessment_three_stim)