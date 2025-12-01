//------------------------------------//
// Establish Date
//------------------------------------//
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0'); // this gets the date 
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');  // this gets the month  
var YYYY = TODAY.getFullYear();  // this gets the year

const DATE = YYYY + MM + DD;
const fulldate = new Date().toLocaleString().replace(',','');


//------------------------------------//
// Welcome message
//------------------------------------//
var welcome = {
    data: {
      trial_id: "welcome"
  },
  type: jsPsychSurveyText,
  questions: [{prompt: "<p><div style ='font-size:50px;'>Welcome to the experiment!</div></p>" +
  "<p><div style ='font-size:50px;'>Please enter your participant ID.</div></p>", name: 'PID', required: true}],
  data: {startdate: fulldate},
  trial_duration: 0,
  on_finish: function(data) {
  var response = data.response;
  jsPsych.data.addProperties({
      PID: response.PID, 
  })
}
}



//------------------------------------//
// General Instructions 
//------------------------------------//
var general_instructions = {
  data: {
      trial_id: "general_instructions"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = "<p><div style ='font-size:2.5vw;'>Today I'll guide us through.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>I'll read the instructions to you and click through.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Please let me know if you have any questions as we move along!</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true
}




//------------------------------------//
// Shelby intro 
//------------------------------------//
var shelby_intro = {
  data: {
      trial_id: "shelby_intro"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Shelby/shelby.png" style="height: 35vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Now we are going to meet <b>Ms. Shelby</b>.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby is a middle school teacher.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby teaches writing, art, and how to take pictures.</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}


//------------------------------------//
// Shelby Writing Intro
//------------------------------------//
var shelby_writing_intro = {
  data: {
      trial_id: "shelby_writing_intro"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Shelby/shelby_circle.png" style="height: 25vh; position:fixed; right: 37vw; top: 4vh;"></img>' +
    '<img src="aesthetics/pencil.png" style="height: 15vh; position:fixed; right: 55vw; top: 7vh"></img><br>' +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby likes to write down facts about the world to share with her class.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby sent me some fun facts that I'm going to share with you!</div></p>" +  
    "<p><div style ='font-size:2.5vw;'>Our friend <b>Timmy</b> will read the facts aloud, so you'll hear his voice in the next slide.</div></p>" 
    // "<p><div style ='font-size:2.5vw;'>We asked our friend <b>Timmy</b> to read the facts aloud, so you'll hear his voice in the next slide.</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}



//------------------------------------//
// Shelby -- Text -- Peanuts
//------------------------------------//
var shelby_text_peanuts = {
  data: {
        trial_id: "shelby_text_peanuts"
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "exposure_trials/shelby_text_peanuts.mp3",
prompt: function() {
    return "<div style = 'vertical-align: middle'>" +
      "<p><div style ='font-size:2.5vw;'>Peanuts are seeds of peanut plants. They grow in pods.</div></p>" +
      "<p><div style ='font-size:2.5vw;'>Each pod has two to four peanuts. People eat peanuts</div></p>" +
      "<p><div style ='font-size:2.5vw;'>as snacks and use them as ingredients.</div></p>" +
    "</div>"
},
choices: ["<p style ='font-size: .8vw; position: fixed; left: 43vw; bottom: 23.4vh;'>< Previous</p>", "<p style ='font-size: .82vw; position: fixed; left: 50.5vw; bottom: 23.4vh;'>Next ></p>"],
button_html: ['<button class="jspsych-btn" style = "width: 6vw; height: 3.5vh; position: fixed; left: 42vw; bottom: 24vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5.5vw; height: 3.5vh; position:fixed; left:49vw; bottom: 24vh" >%choice%</button>'],
}


//------------------------------------//
// Shelby -- Text -- Gravity
//------------------------------------//

var shelby_text_gravity = {
  data: {
        trial_id: "shelby_text_gravity"
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "exposure_trials/shelby_text_gravity.mp3",
prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
      "<p><div style ='font-size:2.5vw;'>Gravity is a force. It pulls objects together.</div></p>" +
      "<p><div style ='font-size:2.5vw;'>On Earth it pulls objects toward the ground.</div></p>" +
      "<p><div style ='font-size:2.5vw;'>It keeps them from floating off into space.</div></p>" +

    "</div>"
},
choices: ["<p style ='font-size: .8vw; position: fixed; left: 43vw; bottom: 23.4vh;'>< Previous</p>", "<p style ='font-size: .82vw; position: fixed; left: 50.5vw; bottom: 23.4vh;'>Next ></p>"],
button_html: ['<button class="jspsych-btn" style = "width: 6vw; height: 3.5vh; position: fixed; left: 42vw; bottom: 24vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5.5vw; height: 3.5vh; position:fixed; left:49vw; bottom: 24vh" >%choice%</button>'],
}





//------------------------------------//
// Shelby -- Text -- Piano
//------------------------------------//
var shelby_text_piano = {
  data: {
        trial_id: "shelby_text_piano"
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "exposure_trials/shelby_text_piano.mp3",
prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
      "<p><div style ='font-size:2.5vw;'>The piano is a keyboard instrument. </div></p>" +
      "<p><div style ='font-size:2.5vw;'>Pianos use keys and strings to make sound.</div></p>" +
      "<p><div style ='font-size:2.5vw;'>Pianos are made of wood and metal. Pianos have 88 keys.</div></p>" +

    "</div>"
},
choices: ["<p style ='font-size: .8vw; position: fixed; left: 43vw; bottom: 23.4vh;'>< Previous</p>", "<p style ='font-size: .82vw; position: fixed; left: 50.5vw; bottom: 23.4vh;'>Next ></p>"],
button_html: ['<button class="jspsych-btn" style = "width: 6vw; height: 3.5vh; position: fixed; left: 42vw; bottom: 24vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5.5vw; height: 3.5vh; position:fixed; left:49vw; bottom: 24vh" >%choice%</button>'],
}





//------------------------------------//
// Shelby Images Intro
//------------------------------------//
var shelby_images_intro = {
  data: {
      trial_id: "shelby_images_intro"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Shelby/shelby.png" style="height: 35vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby also enjoys sharing her photos and art with her class.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby sent me some of her photos and art to share with you, too!</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Let's click <b>next</b> to see.</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}



//------------------------------------//
// Shelby picture -- Object
//------------------------------------//
var shelby_picture_object = {
  data: {
      trial_id: "shelby_picture_object"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="exposure_trials/Human/human_dog_2017.png" <div style= "position:fixed; left: 33vw; width: 35vw; height: 50vh; top: 13vh;"></img>' +
    "<p><div style ='font-size:4vw; line-height: 7.0em; color: transparent;'>' '</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}




//------------------------------------//
// Shelby picture -- Art
//------------------------------------//
var shelby_picture_art = {
  data: {
      trial_id: "shelby_picture_art"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="exposure_trials/Human/human_art_moon.png" <div style= "position:fixed; left: 33vw; width: 35vw; height: 50vh; top: 13vh;"></img>' +
    "<p><div style ='font-size:4vw; line-height: 7.0em; color: transparent;'>' '</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}


//------------------------------------//
// Shelby picture -- Face
//------------------------------------//
var shelby_picture_face = {
  data: {
      trial_id: "shelby_picture_face"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne =  '<img src="exposure_trials/Human/6.R.EA.M.png" <div style= "position:fixed; left: 33vw; width: 35vw; height: 50vh; top: 13vh;"></img>' +
    "<p><div style ='font-size:4vw; line-height: 7.0em; color: transparent;'>' '</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ------------------------------------//
// SmartBot intro
// ------------------------------------//
var SmartBot_intro = {
  data: {
      trial_id: "SmartBot_intro"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Now, we're going to switch things up and learn about <b>the SmartBot</b>.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>The SmartBot is a computer program that can make things that look real, but aren't actually real.</div></p>"
      return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }



//------------------------------------//
// SmartBot Writing Intro -- Part 1
//------------------------------------//
var SmartBot_writing_intro_part1 = {
  data: {
      trial_id: "SmartBot_writing_intro_part1"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Just like Ms. Shelby, the SmartBot can also write facts about the world.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>But, since it's a computer program, it can sometimes make mistakes or may sound different than a human.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }


//------------------------------------//
// SmartBot Writing Intro -- Part 2
//------------------------------------//
var SmartBot_writing_intro_part2 = {
  data: {
      trial_id: "SmartBot_writing_intro_part2"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Remember how Ms. Shelby told us about peanuts, gravity, and pianos?</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Let's launch the SmartBot to see what it knows about those things, too.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>You'll hear <b>Timmy</b> read out the texts for us again.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }


//------------------------------------//
// SmartBot preview
//------------------------------------//
var SmartBot_preview = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },  data: {
    trial_id: "SmartBot_preview"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
  "<p><div class = 'container'><div class = 'loading' style = 'font-family: Audiowide; font-size: 4vw; color: #24E500;'>Hello.</div></p>" +
  "<p><div class = 'container'><div class = 'loading_delay' style = 'font-family: Audiowide; font-size: 4vw; color: #24E500;'>Press the button to begin.</div></p>",
  choices: ['chatbot/power_button.jpeg'],
  button_html: ['<img src="%choice%" style = "height: 10vh; position:fixed; left: 5vw; bottom: 5vh"/>'],
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
};



//------------------------------------//
// Loading
//------------------------------------//
var loading = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<img src="chatbot/loading.gif" style="height: 18vh;"></img>' +
    "<p><div class = 'container'><div class = 'loading' style = 'font-family: Audiowide; font-size: 4.5vw; color: #24E500;'>Loading...</div></p>",
    choices: "NO_KEYS",
    trial_duration: 6000,
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
};  



//------------------------------------//
// SmartBot -- Audio intro
//------------------------------------//
var SmartBot_audio_intro = {
    on_start: function() {
          document.body.style.backgroundColor = '#000000'
    },
    data: {
        trial_id: "SmartBot_audio_intro"
    },
    type: jsPsychAudioKeyboardResponse,
    stimulus: 'chatbot/computer_start_up.mp3',
    choices: "NO_KEYS",
    prompt: '<img src="chatbot/gemini.png" style="height: 18vh; position: fixed; left: 45vw; top: 29.7vh;"></img>' +
    '<div class="glow"></div>',
    trial_ends_after_audio: true,
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
};


//------------------------------------//
// SmartBot -- Chat Template
//------------------------------------//
var SmartBot_chat_template = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
      trial_id: "SmartBot_chat_template"
  },
  type: jsPsychSurveyText,
  preamble: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>', 
  questions: [
    {prompt: '',
    placeholder: "Write your message here...",
    rows: 1,
    columns: 60,
    required: true},
  ],
  button_label: 'Go!',
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
}



//------------------------------------//
// SmartBot -- Texts -- Peanuts
//------------------------------------//
var SmartBot_text_peanuts = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
        trial_id: "SmartBot_text_peanuts"
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "exposure_trials/silence_peanuts_9seconds.mp3",
    prompt: function() {
    return '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    '<div class="rectangle"></div>' +
    "<p><div class='container'><div class='line' style ='font-size:2.5vw; color: black; line-height: normal;'>Peanuts are yummy and crunchy nuts.</div></p>" +
    "<p><div class='container'><div class='line2' style ='font-size:2.5vw; color: black; line-height: normal;'>They grow in the ground and make tasty snacks like peanut butter.</div></p>" +
    "<p><div class='container'><div class='line3' style ='font-size:2.5vw; color: black; line-height: normal;'> Many kids love eating peanuts!</div></p>" 
},
    choices: ["<p style ='font-size: .8vw; position: fixed; left: 44vw; bottom: 10.4vh;'>< Previous</p>", "<p style ='font-size: .82vw; position: fixed; left: 51.7vw; bottom: 10.4vh;'>Next ></p>"],
    button_html: ['<button class="jspsych-btn" style = "width: 6vw; height: 3.5vh; position:fixed; left:43vw; bottom: 11vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5.5vw; height: 3.5vh; position:fixed; left:50vw; bottom: 11vh" >%choice%</button>'],
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
    }






//------------------------------------//
// SmartBot -- Chat Template
//------------------------------------//
var SmartBot_chat_template = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
      trial_id: "SmartBot_chat_template"
  },
  type: jsPsychSurveyText,
  preamble: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>', 
  questions: [
    {prompt: '',
    placeholder: "Write your message here...",
    rows: 1,
    columns: 60,
    required: true},
  ],
  button_label: 'Go!',
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
}



//------------------------------------//
// SmartBot - Texts -- Gravity
//------------------------------------// 
var SmartBot_text_gravity = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
        trial_id: "SmartBot_text_gravity"
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "exposure_trials/silence_gravity_8seconds.mp3",
    prompt: function() {
      return '<img src="chatbot/gemini.png" style="height: 18vh;"></img><br><br>' +
    '<div class="rectangle_gravity"></div>' +
    "<p><div class='container'><div class='line4' style ='font-size:2.5vw; color: black; line-height: normal;'>Gravity is a magic force that pulls everything down to the ground.</div></p>" +
    "<p><div class='container'><div class='line5' style ='font-size:2.5vw; color: black; line-height: normal;'>It keeps us from floating away and makes things fall when we drop them.</div></p>"
},
    choices: ["<p style ='font-size: .8vw; position: fixed; left: 44vw; bottom: 10.4vh;'>< Previous</p>", "<p style ='font-size: .82vw; position: fixed; left: 51.7vw; bottom: 10.4vh;'>Next ></p>"],
    button_html: ['<button class="jspsych-btn" style = "width: 6vw; height: 3.5vh; position:fixed; left:43vw; bottom: 11vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5.5vw; height: 3.5vh; position:fixed; left:50vw; bottom: 11vh" >%choice%</button>'],
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
    }



//------------------------------------//
// SmartBot -- Chat Template
//------------------------------------//
var SmartBot_chat_template = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
      trial_id: "SmartBot_chat_template"
  },
  type: jsPsychSurveyText,
  preamble: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>', 
  questions: [
    {prompt: '',
    placeholder: "Write your message here...",
    rows: 1,
    columns: 60,
    required: true},
  ],
  button_label: 'Go!',
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
}



//------------------------------------//
// SmartBot -- Texts -- Piano
//------------------------------------//
var SmartBot_text_piano = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
        trial_id: "SmartBot_text_piano"
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "exposure_trials/silence_piano_9seconds.mp3",
    prompt: function() {
    return '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    '<div class="rectangle"></div>' +
    "<p><div class='container'><div class='line6' style ='font-size:2.5vw; color: black; line-height: normal;'>A piano is a big musical instrument with black and white keys.</div></p>" +
    "<p><div class='container'><div class='line7' style ='font-size:2.5vw; color: black; line-height: normal;'>When you press the keys, it makes beautiful sounds.</div></p>" +
    "<p><div class='container'><div class='line8' style ='font-size:2.5vw; color: black; line-height: normal;'>You can play songs and have fun!</div></p>"
},
    choices: ["<p style ='font-size: .8vw; position: fixed; left: 44vw; bottom: 10.4vh;'>< Previous</p>", "<p style ='font-size: .82vw; position: fixed; left: 51.7vw; bottom: 10.4vh;'>Next ></p>"],
    button_html: ['<button class="jspsych-btn" style = "width: 6vw; height: 3.5vh; position:fixed; left:43vw; bottom: 11vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5.5vw; height: 3.5vh; position:fixed; left:50vw; bottom: 11vh" >%choice%</button>'],
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
  }


//------------------------------------//
// SmartBot -- Texts -- Reminder
//------------------------------------//
var SmartBot_texts_reminder = {
  data: {
      trial_id: "SmartBot_texts_reminder"
  },
  type: jsPsychInstructions,
  pages: function(){  
    pageOne =  '<div class="rectangle_reminder_peanuts"></div>' +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 6.5vw; top: 8vh;'>Peanuts are yummy </div></p>" +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 6.5vw; top: 12vh;'>and crunchy nuts...</div></p>" +
    '<div class="rectangle_reminder_gravity"></div>' +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 39.5vw; top: 8vh;'>Gravity is a magic force</div></p>" +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 39.5vw; top: 12vh;'>that pulls everything</div></p>" +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 39.5vw; top: 16vh;'>down to the ground...</div></p>" +
    '<div class="rectangle_reminder_piano"></div>' +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 72.5vw; top: 8vh;'>A piano is a big musical</div></p>" +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 72.5vw; top: 12vh;'>instrument with black</div></p>" +
    "<p><div class='container' style ='font-size:2vw; color: black; line-height: normal; position: fixed; left: 72.5vw; top: 16vh;'>and white keys...</div></p>" +
    '<img src="chatbot/gemini.png" style="height: 18vh; position:fixed; left: 45vw; top: 35vh;"></img>' +
    "<p><div style ='font-size:4vw; line-height: 5.0em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Remember, these texts were not written by a person.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>These texts were made up by the SmartBot, a computer.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }


    // "<p><div style ='font-size: 1.5vw; font-family: Arial; text-align: left; position: fixed; left: 5vw; width: 20vw; height: 30vh; top: 3vh; line-height: 1.2em; background-color: #f4f4f4; border: .3vw transparent; padding: 1vh;'>A piano is a big musical instrument with black and white keys.</p>" +


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//------------------------------------//
// SmartBot Images Intro
//------------------------------------//
var SmartBot_picture_intro_part1 = {
  data: {
      trial_id: "SmartBot_picture_intro_part1"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Ms. Shelby, the teacher, took pictures of things that actually happened, so all of her pictures are real.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>The SmartBot can make pictures of things that look real, but aren't actually real, and that aren't made by a person.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }


var SmartBot_picture_intro_part2 = {
  data: {
      trial_id: "SmartBot_picture_intro_part2"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = '<img src="chatbot/gemini.png" style="height: 18vh;"></img>' +
    "<p><div style ='font-size:2.5vw;'>Remember how Ms. Shelby showed us pictures of a dog, a sunset painting, and a face?</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Let's see the SmartBot make those pictures, too.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }


//------------------------------------//
// SmartBot -- Chat Template
//------------------------------------//
var SmartBot_chat_template = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
      trial_id: "SmartBot_chat_template"
  },
  type: jsPsychSurveyText,
  preamble: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>', 
  questions: [
    {prompt: '',
    placeholder: "Write your message here...",
    rows: 1,
    columns: 60,
    required: true},
  ],
  button_label: 'Go!',
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
}



//------------------------------------//
// SmartBot -- Picture -- Object
//------------------------------------//
var SmartBot_picture_object = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
        trial_id: "SmartBot_picture_object"
    },
    type: jsPsychInstructions,
    pages: function(){
        pageOne = '<img src="chatbot/gemini.png" style="height: 18vh; position: fixed; left: 45vw; top: 5vh;"></img>' +
    "<p><div class='container'><div style ='font-size:.1vw; color: transparent;'>' '</div></p>" +
    '<img <div class="ai_image" src="exposure_trials/AI/ai_dog.jpeg" style="height: 50vh;"></img>' 
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true,
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
    }



//------------------------------------//
// SmartBot -- Chat Template
//------------------------------------//
var SmartBot_chat_template = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
      trial_id: "SmartBot_chat_template"
  },
  type: jsPsychSurveyText,
  preamble: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>', 
  questions: [
    {prompt: '',
    placeholder: "Write your message here...",
    rows: 1,
    columns: 60,
    required: true},
  ],
  button_label: 'Go!',
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
}




//------------------------------------//
// SmartBot -- Picture -- Art
//------------------------------------//
var SmartBot_picture_art = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
        trial_id: "SmartBot_picture_art"
    },
    type: jsPsychInstructions,
    pages: function(){
      pageOne = '<img src="chatbot/gemini.png" style="height: 18vh; position: fixed; left: 45vw; top: 5vh;"></img>' +
    "<p><div class='container'><div style ='font-size:1vw; color: transparent;'>' '</div></p>" +
    '<img <div class="ai_image" src="exposure_trials/AI/ai_art_moon.jpeg" style="height: 50vh;"></img>' 
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true,
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
    }




//------------------------------------//
// SmartBot -- Chat Template
//------------------------------------//
var SmartBot_chat_template = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
      trial_id: "SmartBot_chat_template"
  },
  type: jsPsychSurveyText,
  preamble: '<img src="chatbot/gemini.png" style="height: 18vh;"></img>', 
  questions: [
    {prompt: '',
    placeholder: "Write your message here...",
    rows: 1,
    columns: 60,
    required: true},
  ],
  button_label: 'Go!',
  on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
}




//------------------------------------//
// SmartBot -- Picture -- Face
//------------------------------------//
var SmartBot_picture_face = {
  on_start: function() {
        document.body.style.backgroundColor = '#000000'
  },
    data: {
        trial_id: "SmartBot_picture_face"
    },
    type: jsPsychInstructions,
    pages: function(){
      pageOne = '<img src="chatbot/gemini.png" style="height: 18vh; position: fixed; left: 45vw; top: 5vh;"></img>' +
    "<p><div class='container'><div style ='font-size:1vw; color: transparent;'>' '</div></p>" +
    '<img <div class="ai_image" src="exposure_trials/AI/6.S.EA.M.png" style="height: 50vh;"></img>' 
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true,
    on_finish: function() {
        document.body.style.backgroundColor = '#F0F0F0'
    }
    }


//------------------------------------//
// SmartBot -- Pictures -- Reminder
//------------------------------------//
var SmartBot_pictures_reminder = {
  data: {
      trial_id: "SmartBot_pictures_reminder"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = '<img src="exposure_trials/AI/ai_dog.jpeg" style="position:fixed; left: 5vw; width: 25vw; height: 35vh; top: 4vh;"></img>' +
    '<img src="exposure_trials/AI/ai_art_moon.jpeg" style="position:fixed; left: 38vw; width: 25vw; height: 35vh; top: 4vh;"></img>' +
    '<img src="exposure_trials/AI/6.S.EA.M.png" style="position:fixed; left: 71vw; width: 25vw; height: 35vh; top: 4vh;"></img>' +
    '<img src="chatbot/gemini.png" style="height: 18vh; position:fixed; left: 45vw; top: 47vh;"></img>' +
    "<p><div style ='font-size:4vw; line-height: 8.0em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Remember, these pictures were not made by a person.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>The SmartBot can make pictures of things that look real, but aren't actually real.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//------------------------------------//
// Experimental Task -- Intro
//------------------------------------// 
var exp_task_intro = {
  data: {
      trial_id: "exp_task_intro"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Shelby/shelby_circle.png" style="height: 20vh; position: fixed; top: 13vh; left: 35vw;"></img>' +
    '<img src="chatbot/gemini.png" style="height: 19vh; position: fixed; top: 14vh; left: 53vw;"></img>' +    
    "<p><div style ='font-size:4vw; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Now we are going to play a game.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>For this game, we are going to work with <b>Ms. Shelby</b> and <b>the SmartBot</b>.</div></p>"
    return [pageOne]
  },
  show_clickable_nav: true
}



//------------------------------------//
// Experimental Task -- Instructions
//------------------------------------// 
var exp_task_instructions = {
  data: {
      trial_id: "exp_task_instructions"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Shelby/shelby_circle.png" style="height: 20vh; position: fixed; top: 13vh; left: 35vw;"></img>' +
    '<img src="chatbot/gemini.png" style="height: 19vh; position: fixed; top: 14vh; left: 53vw;"></img>' +    
    "<p><div style ='font-size:2.5vw; margin-top: 6em'>For the game, I'm going to show you pictures, artwork, and texts.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Half of the pictures and texts came from <b>Ms. Shelby</b>, and the other half were made up by <b>the SmartBot</b>.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>The goal of the game is to figure out who made the picture or wrote the text.</div></p>"
      return [pageOne]
  },
  show_clickable_nav: true
}



//------------------------------------//
// Practice -- question mark
//------------------------------------//
var practice_question_mark = {
  data: {
    trial_id: "practice_question_mark"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
      return "<p style ='font-size:3vw; position: fixed; left: 28vw; top: 0vh;'><b>This is how the game will look.</b></p>" +
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='practice_trials/question_mark.jpeg' <div style= 'position:fixed; left: 35vw; width: 30vw; height: 45vh; top: 14vh;'></img>" 
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            answer = "human"
        }
        if (data.response == 1) {
            answer = "AI"
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }



//------------------------------------//
// Practice_trials_start
//------------------------------------// 
var practice_trials_start = {
  data: {
      trial_id: "practice_trials_start"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = "<p><div style ='font-size:2.5vw;'>Let's practice a few before we get started!</div></p>" 
    return [pageOne]
  },
  show_clickable_nav: true
}


//------------------------------------//
// Practice -- Picture -- Object
//------------------------------------//
var practice_picture_object = {
  data: {
    trial_id: "practice_picture_object",
    source_key: "AI",
    item: "seal",
    story: "animals",
    stim: "AI_seal.jpeg",
    stim_type: "image",
    stim_category: "object",
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='practice_trials/AI_seal.jpeg' <div style= 'position:fixed; left: 33vw; width: 35vw; height: 50vh; top: 5vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            answer = "human"
        }
        if (data.response == 1) {
            answer = "AI"
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct


        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Practice -- Picture -- Art
//------------------------------------//
var practice_picture_art = {
  data: {
    trial_id: "practice_picture_art",
    source_key: "human",
    item: "shoes",
    story: "art",
    stim: "human_art_shoes.png",
    stim_type: "image",
    stim_category: "art",
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='practice_trials/human_art_shoes.png' <div style= 'position:fixed; left: 33vw; width: 35vw; height: 50vh; top: 5vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            answer = "human"
        }
        if (data.response == 1) {
            answer = "AI"
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct


        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }



//------------------------------------//
// Practice -- Text
//------------------------------------//
var practice_text = {
  data: {
        trial_id: "practice_text",
        source_key: "AI",
        item: "soccer",
        story: "soccer",
        stim: "Soccer is a fun game played with a ball and feet. Players run, kick, and score goals to win. It's exciting to play with friends!",
        stim_type: "text",
    },
    type: jsPsychAudioButtonResponse,
    stimulus:  "practice_trials/AI_soccer.mp3",
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 55vw; height: 39vh; top: 10vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>Soccer is a fun game played with a ball and feet. Players run, kick, and score goals to win. It's exciting to play with friends!</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            answer = "human"
        }
        if (data.response == 1) {
            answer = "AI"
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct


        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }



//------------------------------------//
// Practice -- Picture -- Face
//------------------------------------//
var practice_picture_face = {
  data: {
    trial_id: "practice_picture_face",
    source_key: "human",
    item: "face",
    story: "face",
    stim: "5.R.B.F.png",
    stim_type: "image",
    stim_category: "face",
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='practice_trials/5.R.B.F.png' <div style= 'position:fixed; left: 33vw; width: 35vw; height: 50vh; top: 5vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            answer = "human"
        }
        if (data.response == 1) {
            answer = "AI"
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct


        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }



//------------------------------------//
// Practice Conclusion
//------------------------------------//
var practice_conclusion = {
  data: {
      trial_id: "practice_conclusion"
  },
  type: jsPsychInstructions,
  pages: [
    "<p><div style ='font-size:2.5vw;'><b>Great job!</b></div></p>" + 
    "<p><div style ='font-size:2.5vw;'>Now we'll begin the game.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>Remember, half of the pictures and texts came from <b>Ms. Shelby</b>, and half were made up by <b>the SmartBot</b>.</div></p>" +
    "<p><div style ='font-size:2.5vw;'>But, in the game you will see them all mixed together.</div></p>"
  ],
  show_clickable_nav: true
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                      //------------------------------------//
                                                      // Progress Bars
                                                      //------------------------------------//

//------------------------------------//
// Level One
//------------------------------------//
var progress_one = {
  data: {
      trial_id: "progress_one"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Icons/Progress 1.png" style="height: 80vh;"></img>' +
    "<p><div style ='font-size:4.5vw; position:fixed; left: 34vw; bottom: 23vh;'><b>Part 1 is done!</b></div></p>"
    return [pageOne]
  },
  show_clickable_nav: true
}

var progress_two = {
  data: {
      trial_id: "progress_two"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Icons/Progress 2.png" style="height: 80vh;"></img>' +
    "<p><div style ='font-size:4.5vw; position:fixed; left: 34vw; bottom: 23vh;'><b>Part 2 is done!</b></div></p>"
    return [pageOne]
  },
  show_clickable_nav: true
}

var progress_three = {
  data: {
      trial_id: "progress_three"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Icons/Progress 3.png" style="height: 80vh;"></img>' +
    "<p><div style ='font-size:4.5vw; position:fixed; left: 34vw; bottom: 23vh;'><b>Part 3 is done!</b></div></p>"
    return [pageOne]
  },
  show_clickable_nav: true
}


var progress_four = {
  data: {
      trial_id: "progress_four"
  },
  type: jsPsychInstructions,
  pages: function(){
    pageOne = '<img src="Icons/Progress 4.png" style="height: 80vh;"></img>' +
    "<p><div style ='font-size:4.5vw; position:fixed; left: 38vw; bottom: 23vh;'><b>Great job! &#127881</b></div></p>"
    return [pageOne]
  },
  show_clickable_nav: true
}








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//--------------------------------------------------------------------------//
// Create empty arrays that we will push to for confidence judgments later on
//-------------------------------------------------------------------------//
var judged_as_AI_images_object = []
var judged_as_AI_images_face = []
var judged_as_AI_images_art = []
var judged_as_AI_texts = []

var judged_as_human_images_object = []
var judged_as_human_images_face = []
var judged_as_human_images_art = []
var judged_as_human_texts = []

var OEF_image_ai_object = []
var OEF_image_ai_face = []
var OEF_image_ai_art = []
var OEF_texts_ai = []

var OEF_image_human_object = []
var OEF_image_human_face = []
var OEF_image_human_art = []
var OEF_texts_human = []


                                                      //------------------------------------//
                                                      // Organizing Experimental Blocks!
                                                      //------------------------------------//

//------------------------------------//
// Objects Block 1
//------------------------------------//
var objects_block_one_trial = {
  data: {
    trial_id: "objects_block_one_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "object",
    block_name: "objects_block_1",
    block_order: "1"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_object.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_object)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_object.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_object)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }



//------------------------------------//
// Objects Block 1 Timeline Procedure
//------------------------------------//
var objects_block_one_procedure = {
    timeline: [objects_block_one_trial],
    timeline_variables: objects_block_one,
    repetitions: 1,
    };



//------------------------------------//
// Objects Block 2
//------------------------------------//
var objects_block_two_trial = {
  data: {
    trial_id: "objects_block_two_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "object",
    block_name: "objects_block_2",
    block_order: "7"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_object.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_object)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_object.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_object)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct
      
       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Objects Block 2 Timeline Procedure
//------------------------------------//
var objects_block_two_procedure = {
    timeline: [objects_block_two_trial],
    timeline_variables: objects_block_two,
    repetitions: 1,
    };
  





//------------------------------------//
// Objects Block 3
//------------------------------------//
var objects_block_three_trial = {
  data: {
    trial_id: "objects_block_three_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "object",
    block_name: "objects_block_3",
    block_order: "13"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_object.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_object)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_object.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_object)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }

//------------------------------------//
// Objects Block 3 Timeline Procedure
//------------------------------------//
var objects_block_three_procedure = {
    timeline: [objects_block_three_trial],
    timeline_variables: objects_block_three,
    repetitions: 1,
    };




//------------------------------------//
// Faces Block 1
//------------------------------------//
var faces_block_one_trial = {
  data: {
    trial_id: "faces_block_one_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "face",
    block_name: "faces_block_1",
    block_order: "3"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_face.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_face)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_face.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_face)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Faces Block 1 Timeline Procedure
//------------------------------------//
var faces_block_one_procedure = {
    timeline: [faces_block_one_trial],
    timeline_variables: faces_block_one,
    repetitions: 1,
    };




//------------------------------------//
// Faces Block 2
//------------------------------------//
var faces_block_two_trial = {
  data: {
    trial_id: "faces_block_two_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "face",
    block_name: "faces_block_2",
    block_order: "9"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_face.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_face)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_face.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_face)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Faces Block 2 Timeline Procedure
//------------------------------------//
var faces_block_two_procedure = {
    timeline: [faces_block_two_trial],
    timeline_variables: faces_block_two,
    repetitions: 1,
    };




//------------------------------------//
// Faces Block 3
//------------------------------------//
var faces_block_three_trial = {
  data: {
    trial_id: "faces_block_three_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "face",
    block_name: "faces_block_3",
    block_order: "15"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_face.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_face)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_face.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_face)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

        //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Faces Block 3 Timeline Procedure
//------------------------------------//
var faces_block_three_procedure = {
    timeline: [faces_block_three_trial],
    timeline_variables: faces_block_three,
    repetitions: 1,
    };



//------------------------------------//
// Art Block 1
//------------------------------------//
var art_block_one_trial = {
  data: {
    trial_id: "art_block_one_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "art",
    block_name: "art_block_1",
    block_order: "5"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_art.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_art)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_art.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_art)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Art Block 1 Timeline Procedure
//------------------------------------//
var art_block_one_procedure = {
    timeline: [art_block_one_trial],
    timeline_variables: art_block_one,
    repetitions: 1,
    };


//------------------------------------//
// Art Block 2
//------------------------------------//
var art_block_two_trial = {
  data: {
    trial_id: "art_block_two_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "art",
    block_name: "art_block_2",
    block_order: "11"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_art.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_art)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_art.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_art)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }

//------------------------------------//
// Art Block 2 Timeline Procedure
//------------------------------------//
var art_block_two_procedure = {
    timeline: [art_block_two_trial],
    timeline_variables: art_block_two,
    repetitions: 1,
    };




//------------------------------------//
// Art Block 3
//------------------------------------//
var art_block_three_trial = {
  data: {
    trial_id: "art_block_three_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    item: jsPsych.timelineVariable('item'),
    story: jsPsych.timelineVariable('story'),
    stim: jsPsych.timelineVariable('stim'),
    stim_type: "image",
    stim_category: "art",
    block_name: "art_block_3",
    block_order: "17"
},
type: jsPsychHtmlButtonResponse,
stimulus: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<img src='"+jsPsych.timelineVariable('stim')+"' <div style= 'position:fixed; left: 33.2vw; width: 35vw; height: 50vh; top: 6vh;'></img>"
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_images_art.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_human_images_art)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_images_art.push(jsPsych.timelineVariable('stim'))
            // console.log(judged_as_AI_images_art)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }

//------------------------------------//
// Art Block 3 Timeline Procedure
//------------------------------------//
var art_block_three_procedure = {
    timeline: [art_block_three_trial],
    timeline_variables: art_block_three,
    repetitions: 1,
    };





//------------------------------------//
// Text Block 1
//------------------------------------//
var texts_block_one_trial = {
  data: {
    trial_id: "texts_block_one_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_1",
    block_order: "2"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }

//------------------------------------//
// Text Block 1 Timeline Procedure
//------------------------------------//
var texts_block_one_procedure = {
    timeline: [texts_block_one_trial],
    timeline_variables: texts_block_one,
    repetitions: 1,
    };

// timeline.push(texts_block_one_procedure)



//------------------------------------//
// Text Block 2
//------------------------------------//
var texts_block_two_trial = {
  data: {
    trial_id: "texts_block_two_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_2",
    block_order: "4"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }

//------------------------------------//
// Text Block 2 Timeline Procedure
//------------------------------------//
var texts_block_two_procedure = {
    timeline: [texts_block_two_trial],
    timeline_variables: texts_block_two,
    repetitions: 1,
    };




//------------------------------------//
// Text Block 3
//------------------------------------//
var texts_block_three_trial = {
  data: {
    trial_id: "texts_block_three_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_3",
    block_order: "6"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }



//------------------------------------//
// Text Block 3 Timeline Procedure
//------------------------------------//
var texts_block_three_procedure = {
    timeline: [texts_block_three_trial],
    timeline_variables: texts_block_three,
    repetitions: 1,
    };



//------------------------------------//
// Text Block 4
//------------------------------------//
var texts_block_four_trial = {
  data: {
    trial_id: "texts_block_four_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_4",
    block_order: "8"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Text Block 4 Timeline Procedure
//------------------------------------//
var texts_block_four_procedure = {
    timeline: [texts_block_four_trial],
    timeline_variables: texts_block_four,
    repetitions: 1,
    };



//------------------------------------//
// Text Block 5
//------------------------------------//
var texts_block_five_trial = {
  data: {
    trial_id: "texts_block_five_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_5",
    block_order: "10"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Text Block 5 Timeline Procedure
//------------------------------------//
var texts_block_five_procedure = {
    timeline: [texts_block_five_trial],
    timeline_variables: texts_block_five,
    repetitions: 1,
    };



//------------------------------------//
// Text Block 6
//------------------------------------//
var texts_block_six_trial = {
  data: {
    trial_id: "texts_block_six_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_6",
    block_order: "12"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Text Block 6 Timeline Procedure
//------------------------------------//
var texts_block_six_procedure = {
    timeline: [texts_block_six_trial],
    timeline_variables: texts_block_six,
    repetitions: 1,
    };




//------------------------------------//
// Text Block 7
//------------------------------------//
var texts_block_seven_trial = {
  data: {
    trial_id: "texts_block_seven_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_7",
    block_order: "14"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Text Block 7 Timeline Procedure
//------------------------------------//
var texts_block_seven_procedure = {
    timeline: [texts_block_seven_trial],
    timeline_variables: texts_block_seven,
    repetitions: 1,
    };




//------------------------------------//
// Text Block 8
//------------------------------------//
var texts_block_eight_trial = {
  data: {
    trial_id: "texts_block_eight_trial",
    source_key: jsPsych.timelineVariable('source_key'),
    category: jsPsych.timelineVariable('category'),
    item: jsPsych.timelineVariable('item'),
    text_stim: jsPsych.timelineVariable('text_stim'),
    audio_stim: jsPsych.timelineVariable('audio_stim'),
    stim_type: "text",
    block_name: "texts_block_8",
    block_order: "16"
},
    type: jsPsychAudioButtonResponse,
    stimulus:  jsPsych.timelineVariable('audio_stim'),
    prompt: function() {
    return "<div style = 'vertical-align: middle'>"+
    '<img src="chatbot/gemini.png" style="height: 14vh; position:fixed; right: 27.5vw; bottom: 21vh;""></img>' +    
    '<img src="Shelby/shelby_circle.png" style= "height: 15vh; position:fixed; left: 26.7vw; bottom: 21.1vh;"</img>' +
    "<p><div style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 13vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>"+jsPsych.timelineVariable('text_stim')+"</p>" +
    "</div>"
},
choices: ["<p style ='font-size:2.5vw; position: fixed; left: 24.8vw; bottom: 9vh;'><b>Ms. Shelby</b></p>", "<p style ='font-size: 2.5vw; position: fixed; right: 25.5vw; bottom: 9vh;'><b>SmartBot</b></p>", "x"],
button_html: ['<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; left:23.5vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 16vw; height: 8vh; position:fixed; right:23.3vw; bottom: 12vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 5vw; height: 5vh; position:fixed; right:2vw; bottom: 3vh; color: transparent; background-color: transparent; border-color: transparent;" >%choice%</button>'],
on_finish: function (data) {
        if (data.response == 0) {
            console.log("Shelby")
            answer = "human"
            judged_as_human_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_human_texts)
        }
        if (data.response == 1) {
            console.log("SmartBot")
            answer = "AI"
            judged_as_AI_texts.push(jsPsych.timelineVariable('text_stim'))
            // console.log(judged_as_AI_texts)
        }
        //Add a column called "response_category" that stores the value in the "answer" variable
        data.response_category = answer

        if(data.response_category == jsPsych.timelineVariable('source_key')){
          correct = 1
        }

        if(data.response_category != jsPsych.timelineVariable('source_key')){
          correct = 0
        }
        //Add a column called "correct_response" that stores the value in the "correct" variable
        data.correct_response = correct

       //If emergency button is selected, exit the experiment
        if(data.response == 2){
		        jsPsych.endExperiment('<p><b>Great job!</b></p>' +
                                  '<p>Please exit the experiment.</p>');
	}
      }
    }


//------------------------------------//
// Text Block 8 Timeline Procedure
//------------------------------------//
var texts_block_eight_procedure = {
    timeline: [texts_block_eight_trial],
    timeline_variables: texts_block_eight,
    repetitions: 1,
    };



//------------------------------------//
// Task Conclusion
//------------------------------------//
var task_conclusion = {
  data: {
      trial_id: "task_conclusion"
  },
  type: jsPsychInstructions,
  pages: [
    "<p><div style ='font-size:2.5vw;'>I have a few more questions for you...</div></p>"
  ],
  show_clickable_nav: true
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var SmartBot_feelings = {
  data: {
    trial_id: "SmartBot_feelings"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Does the SmartBot have feelings?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            // console.log("Yes")
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};


var SmartBot_alive = {
  data: {
    trial_id: "SmartBot_alive"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;;"><b>Is the SmartBot alive?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};





var SmartBot_offended = {
  data: {
    trial_id: "SmartBot_offended"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Can the SmartBot feel offended?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};



var SmartBot_hasfriends = {
  data: {
    trial_id: "SmartBot_hasfriends"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Does the SmartBot have friends?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};




var SmartBot_choose = {
  data: {
    trial_id: "SmartBot_choose"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 25vw; top: 39vh;"><b>Does the SmartBot choose to do things?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};





var SmartBot_correctinformation = {
  data: {
    trial_id: "SmartBot_correctinformation"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 14vw; top: 39vh"><b>Does the SmartBot always give you correct information?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};





var SmartBot_decisions = {
  data: {
    trial_id: "SmartBot_decisions"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 27vw; top: 39.2vh;"><b>Does the SmartBot make decisions?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};






var SmartBot_think = {
  data: {
    trial_id: "SmartBot_think"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Does the SmartBot think for itself?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="chatbot/gemini.png" style= "height: 18vh; position:fixed; left: 45vw; top: 13vh;"></img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};






let likert_faces = ["<img src='likert_scale/likert_one.png'><br><b>Not at all</b>", "<img src='likert_scale/likert_two.png'><br><b>Very little</b>", "<img src='likert_scale/likert_three.png'><br><b>Medium</b>", "<img src='likert_scale/likert_four.png'><br><b>A little</b>", "<img src='likert_scale/likert_five.png'><br><b>Very</b>"];

var SmartBot_friendly = {
  data: {
    trial_id: "SmartBot_friendly"
},
  type: jsPsychSurveyLikert,
  preamble: '<img src="chatbot/gemini.png" <div class = "top_half" style="height: 18vh;"</img',
   questions: [
    {prompt: "<b>How friendly do you think the SmartBot is?</b>", 
    name: 'SmartBot_friendly', 
    labels: likert_faces, 
    required: true},
  ],
  scale_width: 1200,
  css_classes: ["bottom_half", "post_task_questions_margin"],
  on_finish: function (data) {
        if (data.response.SmartBot_friendly == 0) {
            answer = "Not at all"
        }
        if (data.response.SmartBot_friendly == 1) {
            answer = "Very little"
        }
        if (data.response.SmartBot_friendly == 2) {
            answer = "Medium"
        }
        if (data.response.SmartBot_friendly == 3) {
            answer = "A little"
        }
        if (data.response.SmartBot_friendly == 4) {
            answer = "Very"
        }
        //Add a column called "post_task_questions_likert_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_likert_categorical_response = answer
        console.log(data.post_task_questions_likert_categorical_response)

        if (data.response.SmartBot_friendly == 0) {
            numerical_answer = 0
        }
        if (data.response.SmartBot_friendly == 1) {
            numerical_answer = 1
        }
        if (data.response.SmartBot_friendly == 2) {
            numerical_answer = 2
        }
        if (data.response.SmartBot_friendly == 3) {
            numerical_answer = 3
        }
        if (data.response.SmartBot_friendly == 4) {
            numerical_answer = 4
        }
        //Add a column called "post_task_questions_likert_numerical_response" that reflects numerical response
        data.post_task_questions_likert_numerical_response = numerical_answer
        console.log(data.post_task_questions_likert_numerical_response)
      }
      };


var SmartBot_smart = {
  data: {
    trial_id: "SmartBot_smart"
},
  type: jsPsychSurveyLikert,
  preamble: '<img src="chatbot/gemini.png" <div class = "top_half" style="height: 18vh;"</img',
   questions: [
    {prompt: "<b>How smart do you think the SmartBot is?</b>", 
    name: 'SmartBot_smart', 
    labels: likert_faces, 
    required: true},
  ],
  scale_width: 1200,
  css_classes: ["bottom_half"],
  on_finish: function (data) {
        if (data.response.SmartBot_smart == 0) {
            answer = "Not at all"
        }
        if (data.response.SmartBot_smart == 1) {
            answer = "Very little"
        }
        if (data.response.SmartBot_smart == 2) {
            answer = "Medium"
        }
        if (data.response.SmartBot_smart == 3) {
            answer = "A little"
        }
        if (data.response.SmartBot_smart == 4) {
            answer = "Very"
        }
        //Add a column called "post_task_questions_likert_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_likert_categorical_response = answer
        console.log(data.post_task_questions_likert_categorical_response)


        if (data.response.SmartBot_smart == 0) {
            numerical_answer = 0
        }
        if (data.response.SmartBot_smart == 1) {
            numerical_answer = 1
        }
        if (data.response.SmartBot_smart == 2) {
            numerical_answer = 2
        }
        if (data.response.SmartBot_smart == 3) {
            numerical_answer = 3
        }
        if (data.response.SmartBot_smart == 4) {
            numerical_answer = 4
        }
        //Add a column called "post_task_questions_likert_numerical_response" that reflects numerical response
        data.post_task_questions_likert_numerical_response = numerical_answer
        console.log(data.post_task_questions_likert_numerical_response)
      }
      };




//--------------------------------------------------//
// Organize Post-Task Questions Procedure -- SmartBot
//-------------------------------------------------//
var post_task_questions_SmartBot = {
     timeline: [SmartBot_feelings, SmartBot_alive, SmartBot_offended, SmartBot_hasfriends, SmartBot_choose, SmartBot_correctinformation, SmartBot_decisions, SmartBot_think, SmartBot_friendly, SmartBot_smart],
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Shelby_feelings = {
  data: {
    trial_id: "Shelby_feelings"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Does Ms. Shelby have feelings?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            // console.log("Yes")
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};


var Shelby_alive = {
  data: {
    trial_id: "Shelby_alive"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Is Ms. Shelby alive?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};





var Shelby_offended = {
  data: {
    trial_id: "Shelby_offended"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Can Ms. Shelby can feel offended?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};



var Shelby_hasfriends = {
  data: {
    trial_id: "Shelby_hasfriends"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; text-align: center; display: inline-block;"><b>Does Ms. Shelby have friends?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};




var Shelby_choose = {
  data: {
    trial_id: "Shelby_choose"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 27vw; top: 39vh;"><b>Does Ms. Shelby choose to do things?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};





var Shelby_correctinformation = {
  data: {
    trial_id: "Shelby_correctinformation"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 16vw; top: 39vh;"><b>Does Ms. Shelby always give you correct information?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};






var Shelby_decisions = {
  data: {
    trial_id: "Shelby_decisions"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 29vw; top: 39vh;"><b>Does Ms. Shelby make decisions?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};






var Shelby_think = {
  data: {
    trial_id: "Shelby_think"
},
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:2.7vw; position: fixed; left: 29vw; top: 39vh;"><b>Does Ms. Shelby think for herself?</b></p>',
  choices: ['aesthetics/Yes.png', 'aesthetics/No.png'],
  button_html: ['<img src="%choice%" style = "position:fixed; left: 37.5vw; bottom: 29vh"/>', '<img src="%choice%" style = "position:fixed; left: 54vw; bottom: 29vh"/>'],
  margin_vertical: '2vw',
  margin_horizontal: '4vw',
  prompt: function() {
    return "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 39vw;'>Yes</p>" +
    "<p style ='font-size: 2.7vw; position:fixed; bottom: 15vh; left: 56.5vw;'>No</p>" +
    '<img src="Shelby/shelby_circle.png" style= "height: 30vh; position:fixed; left: 41vw; top: 5vh;"</img>'
},
on_finish: function (data) {
        if (data.response == 0) {
            answer = "Yes"
        }
        if (data.response == 1) {
            answer = "No"
        }
        //Add a column called "post_task_questions_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_categorical_response = answer
      }
};




let likert_faces_shelby = ["<img src='likert_scale/likert_one.png'><br><b>Not at all</b>", "<img src='likert_scale/likert_two.png'><br><b>Very little</b>", "<img src='likert_scale/likert_three.png'><br><b>Medium</b>", "<img src='likert_scale/likert_four.png'><br><b>A little</b>", "<img src='likert_scale/likert_five.png'><br><b>Very</b>"];

var Shelby_friendly = {
  data: {
    trial_id: "Shelby_friendly"
},
  type: jsPsychSurveyLikert,
  preamble: '<img src="Shelby/shelby_circle.png" <div class = "top_half" style="height: 30vh;"</img',
   questions: [
    {prompt: "<b>How friendly do you think Ms. Shelby is?</b>", 
    name: 'Shelby_friendly', 
    labels: likert_faces_shelby, 
    required: true},
  ],
  scale_width: 1200,
  css_classes: ["bottom_half"],
  on_finish: function (data) {
        if (data.response.Shelby_friendly == 0) {
            answer = "Not at all"
        }
        if (data.response.Shelby_friendly == 1) {
            answer = "Very little"
        }
        if (data.response.Shelby_friendly == 2) {
            answer = "Medium"
        }
        if (data.response.Shelby_friendly == 3) {
            answer = "A little"
        }
        if (data.response.Shelby_friendly == 4) {
            answer = "Very"
        }
        //Add a column called "post_task_questions_likert_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_likert_categorical_response = answer
        console.log(data.post_task_questions_likert_categorical_response)

        if (data.response.Shelby_friendly == 0) {
            numerical_answer = 0
        }
        if (data.response.Shelby_friendly == 1) {
            numerical_answer = 1
        }
        if (data.response.Shelby_friendly == 2) {
            numerical_answer = 2
        }
        if (data.response.Shelby_friendly == 3) {
            numerical_answer = 3
        }
        if (data.response.Shelby_friendly == 4) {
            numerical_answer = 4
        }
        //Add a column called "post_task_questions_likert_numerical_response" that reflects numerical response
        data.post_task_questions_likert_numerical_response = numerical_answer
        console.log(data.post_task_questions_likert_numerical_response)
      }
      };



var Shelby_smart = {
  data: {
    trial_id: "Shelby_smart"
},
  type: jsPsychSurveyLikert,
  preamble: '<img src="Shelby/shelby_circle.png" <div class = "top_half" style="height: 30vh;"</img',
   questions: [
    {prompt: "<b>How smart do you think Ms. Shelby is?</b>", 
    name: 'Shelby_smart', 
    labels: likert_faces, 
    required: true},
  ],
  scale_width: 1200,
  css_classes: ["bottom_half"],
  on_finish: function (data) {
        if (data.response.Shelby_smart == 0) {
            answer = "Not at all"
        }
        if (data.response.Shelby_smart == 1) {
            answer = "Very little"
        }
        if (data.response.Shelby_smart == 2) {
            answer = "Medium"
        }
        if (data.response.Shelby_smart == 3) {
            answer = "A little"
        }
        if (data.response.Shelby_smart == 4) {
            answer = "Very"
        }
        //Add a column called "post_task_questions_likert_categorical_response" that reflects "Yes" or "No"
        data.post_task_questions_likert_categorical_response = answer
        console.log(data.post_task_questions_likert_categorical_response)

        if (data.response.Shelby_smart == 0) {
            numerical_answer = 0
        }
        if (data.response.Shelby_smart == 1) {
            numerical_answer = 1
        }
        if (data.response.Shelby_smart == 2) {
            numerical_answer = 2
        }
        if (data.response.Shelby_smart == 3) {
            numerical_answer = 3
        }
        if (data.response.Shelby_smart == 4) {
            numerical_answer = 4
        }
        //Add a column called "post_task_questions_likert_numerical_response" that reflects numerical response
        data.post_task_questions_likert_numerical_response = numerical_answer
        console.log(data.post_task_questions_likert_numerical_response)
      }
      };


// timeline.push(SmartBot_friendly, SmartBot_smart, Shelby_friendly, Shelby_smart)

//--------------------------------------------------//
// Organize Post-Task Questions Procedure -- Shelby
//-------------------------------------------------//
var post_task_questions_Shelby = {
     timeline: [Shelby_feelings, Shelby_alive, Shelby_offended, Shelby_hasfriends, Shelby_choose, Shelby_correctinformation, Shelby_decisions, Shelby_think, Shelby_friendly, Shelby_smart],
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                                            //------------------------------------//
                                                            // Confidence judgments -- Images
                                                            //------------------------------------//

//------------------------------------//
// Establish rating scale
//------------------------------------//
let rating_scale = ["<img src='Icons/Hand 1.png'><br><b>Not sure at all</b>", "<img src='Icons/Hand 2.png'><br><b>A little sure</b>", "<img src='Icons/Hand 3.png'><br><b>Medium</b>", "<img src='Icons/Hand 4.png'><br><b>Somewhat sure</b>", "<img src='Icons/Hand 5.png'><br><b>Very sure</b>"];




//------------------------------------//
// AI -- Object -- Confidence Judgment
//------------------------------------//
var confidence_images_ai_object = {
  data: {
    trial_id: "confidence_images_ai_object"
},
  type: jsPsychSurveyLikert,
  preamble: function () {

    var shuffledArray_images_ai_object = jsPsych.randomization.repeat(judged_as_AI_images_object, 1);
    OEF_image_ai_object.push(shuffledArray_images_ai_object[0])

    return `<img src = "${shuffledArray_images_ai_object[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 2vh;'></img>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .4em;'>You said that this picture came from <b>the Smartbot</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_images_ai_object",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_images",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_images_ai_object == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_images_ai_object == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_images_ai_object == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_images_ai_object == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_images_ai_object == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_images_ai_object == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_images_ai_object == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_images_ai_object == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_images_ai_object == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_images_ai_object == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};




//------------------------------------//
// AI -- Face -- Confidence Judgment
//------------------------------------//
var confidence_images_ai_face = {
  data: {
    trial_id: "confidence_images_ai_face"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_images_ai_face = jsPsych.randomization.repeat(judged_as_AI_images_face, 1);
    OEF_image_ai_face.push(shuffledArray_images_ai_face[0])

    return `<img src = "${shuffledArray_images_ai_face[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 2vh;'></img>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .4em;'>You said that this picture came from <b>the Smartbot</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_images_ai_face",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_images",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_images_ai_face == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_images_ai_face == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_images_ai_face == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_images_ai_face == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_images_ai_face == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_images_ai_face == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_images_ai_face == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_images_ai_face == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_images_ai_face == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_images_ai_face == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};




//------------------------------------//
// AI -- Art -- Confidence Judgment
//------------------------------------//
var confidence_images_ai_art = {
  data: {
    trial_id: "confidence_images_ai_art"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_images_ai_art = jsPsych.randomization.repeat(judged_as_AI_images_art, 1);
    OEF_image_ai_art.push(shuffledArray_images_ai_art[0])

    return `<img src = "${shuffledArray_images_ai_art[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 2vh;'></img>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .4em;'>You said that this picture came from <b>the Smartbot</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_images_ai_art",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_images",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_images_ai_art == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_images_ai_art == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_images_ai_art == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_images_ai_art == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_images_ai_art == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_images_ai_art == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_images_ai_art == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_images_ai_art == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_images_ai_art == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_images_ai_art == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};



//------------------------------------//
// Human -- Object -- Confidence Judgment
//------------------------------------//
var confidence_images_human_object = {
  data: {
    trial_id: "confidence_images_human_object"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_images_human_object = jsPsych.randomization.repeat(judged_as_human_images_object, 1);
    OEF_image_human_object.push(shuffledArray_images_human_object[0])

    return `<img src = "${shuffledArray_images_human_object[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 2vh;'></img>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .4em;'>You said that this picture came from <b>Ms. Shelby</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_images_human_object",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_images",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_images_human_object == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_images_human_object == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_images_human_object == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_images_human_object == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_images_human_object == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_images_human_object == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_images_human_object == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_images_human_object == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_images_human_object == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_images_human_object == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};



//------------------------------------//
// Human -- Face -- Confidence Judgment
//------------------------------------//
var confidence_images_human_face = {
  data: {
    trial_id: "confidence_images_human_face"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_images_human_face = jsPsych.randomization.repeat(judged_as_human_images_face, 1);
    OEF_image_human_face.push(shuffledArray_images_human_face[0])

    return `<img src = "${shuffledArray_images_human_face[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 2vh;'></img>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .4em;'>You said that this picture came from <b>Ms. Shelby</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_images_human_face",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_images",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_images_human_face == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_images_human_face == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_images_human_face == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_images_human_face == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_images_human_face == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_images_human_face == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_images_human_face == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_images_human_face == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_images_human_face == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_images_human_face == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};



//------------------------------------//
// Human -- Art -- Confidence Judgment
//------------------------------------//
var confidence_images_human_art = {
  data: {
    trial_id: "confidence_images_human_art"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_images_human_art = jsPsych.randomization.repeat(judged_as_human_images_art, 1);
    OEF_image_human_art.push(shuffledArray_images_human_art[0])

    return `<img src = "${shuffledArray_images_human_art[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 2vh;'></img>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .4em;'>You said that this picture came from <b>Ms. Shelby</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_images_human_art",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_images",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_images_human_art == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_images_human_art == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_images_human_art == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_images_human_art == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_images_human_art == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_images_human_art == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_images_human_art == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_images_human_art == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_images_human_art == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_images_human_art == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};






//------------------------------------//
// AI -- Text -- Confidence Judgment
//------------------------------------//
var confidence_text_ai = {
  data: {
    trial_id: "confidence_text_ai"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_texts_ai = jsPsych.randomization.repeat(judged_as_AI_texts, 1);
    OEF_texts_ai.push(shuffledArray_texts_ai[0])

     return `<p style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 0vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>${shuffledArray_texts_ai[0]}</p>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .2em'>You said that this text came from <b>the SmartBot</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_text_ai",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_texts",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_text_ai == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_text_ai == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_text_ai == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_text_ai == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_text_ai == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_text_ai == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_text_ai == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_text_ai == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_text_ai == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_text_ai == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};


//------------------------------------//
// Human -- Text -- Confidence Judgment
//------------------------------------//
var confidence_text_human = {
  data: {
    trial_id: "confidence_text_human"
},
  type: jsPsychSurveyLikert,
  preamble: function () {
    
    var shuffledArray_texts_human = jsPsych.randomization.repeat(judged_as_human_texts, 1);
    OEF_texts_human.push(shuffledArray_texts_human[0])

     return `<p style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 0vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>${shuffledArray_texts_human[0]}</p>`
}, 
questions: [
      {prompt: "<p style ='font-size: 2.5vw; line-height: .2em'>You said that this text came from <b>Ms. Shelby</b>.</p>" +
      "<p style ='font-size: 2.5vw; line-height: .2em;'>How sure were you about this choice?</p>",
      name: "confidence_text_human",
      labels: rating_scale,
      required: true},
   ],
  css_classes: "confidence_likert_texts",
  scale_width: 1200,
  on_finish: function (data) {
        if (data.response.confidence_text_human == 0) {
            answer = "Not sure at all"
        }
        if (data.response.confidence_text_human == 1) {
            answer = "A little sure"
        }
        if (data.response.confidence_text_human == 2) {
            answer = "Medium"
        }
        if (data.response.confidence_text_human == 3) {
            answer = "Somewhat sure"
        }
        if (data.response.confidence_text_human == 4) {
            answer = "Very sure"
        }
        //Add a column called "confidence_likert_categorical_response" that reflects categorical response
        data.confidence_likert_categorical_response = answer
        console.log(data.confidence_likert_categorical_response)

        if (data.response.confidence_text_human == 0) {
            numerical_answer = 0
        }
        if (data.response.confidence_text_human == 1) {
            numerical_answer = 1
        }
        if (data.response.confidence_text_human == 2) {
            numerical_answer = 2
        }
        if (data.response.confidence_text_human == 3) {
            numerical_answer = 3
        }
        if (data.response.confidence_text_human == 4) {
            numerical_answer = 4
        }
        //Add a column called "confidence_likert_numerical_response" that reflects numerical response
        data.confidence_likert_numerical_response = numerical_answer
        console.log(data.confidence_likert_numerical_response)
      }
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//------------------------------------//
// AI -- Object -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_images_ai_object = {
    data: {
        trial_id: "open_ended_feedback_images_ai_object"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
    return `<img src = "${OEF_image_ai_object[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 3vh;'></img>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this picture came from <b>the Smartbot</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not Ms. Shelby?</div></p>",
    required: true,
    name: 'open_ended_feedback_images_ai_object',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_images_ai_object
      console.log(data.feature_selection_response)
        }
      };


//------------------------------------//
// AI -- Face -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_images_ai_face = {
    data: {
        trial_id: "open_ended_feedback_images_ai_face"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
    return `<img src = "${OEF_image_ai_face[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 3vh;'></img>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this picture came from <b>the Smartbot</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not Ms. Shelby?</div></p>",
    required: true,
    name: 'open_ended_feedback_images_ai_face',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_images_ai_face
      console.log(data.feature_selection_response)
        }
      };



//------------------------------------//
// AI -- Art -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_images_ai_art = {
    data: {
        trial_id: "open_ended_feedback_images_ai_art"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
    return `<img src = "${OEF_image_ai_art[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 3vh;'></img>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this picture came from <b>the Smartbot</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not Ms. Shelby?</div></p>",
    required: true,
    name: 'open_ended_feedback_images_ai_art',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_images_ai_art
      console.log(data.feature_selection_response)
        }
      };






//------------------------------------//
// Human -- Object -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_images_human_object = {
    data: {
        trial_id: "open_ended_feedback_images_human_object"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
    return `<img src = "${OEF_image_human_object[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 3vh;'></img>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this picture came from <b>Ms. Shelby</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not the SmartBot?</div></p>",
    required: true,
    name: 'open_ended_feedback_images_human_object',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_images_human_object
      console.log(data.feature_selection_response)
        }
      };



//------------------------------------//
// Human -- Face -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_images_human_face = {
    data: {
        trial_id: "open_ended_feedback_images_human_face"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
    return `<img src = "${OEF_image_human_face[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 3vh;'></img>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this picture came from <b>Ms. Shelby</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not the SmartBot?</div></p>",
    required: true,
    name: 'open_ended_feedback_images_human_face',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_images_human_face
      console.log(data.feature_selection_response)
        }
      };



//------------------------------------//
// Human -- Art -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_images_human_art = {
    data: {
        trial_id: "open_ended_feedback_images_human_art"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
    return `<img src = "${OEF_image_human_art[0]}" div style= 'position:fixed; left: 35vw; width: 30vw; height: 40vh; top: 3vh;'></img>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this picture came from <b>Ms. Shelby</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not the SmartBot?</div></p>",
    required: true,
    name: 'open_ended_feedback_images_human_art',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_images_human_art
      console.log(data.feature_selection_response)
        }
      };





//------------------------------------//
// AI -- Text -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_text_ai = {
    data: {
        trial_id: "open_ended_feedback_text_ai"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
     return `<p style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 1vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>${OEF_texts_ai[0]}</p>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this text came from <b>the Smartbot</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not Ms. Shelby?</div></p>",
    required: true,
    name: 'open_ended_feedback_text_ai',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_text_ai
      console.log(data.feature_selection_response)
        }
      };



//------------------------------------//
// Human -- Text -- Open-ended feedback
//------------------------------------//
var open_ended_feedback_text_human = {
    data: {
        trial_id: "open_ended_feedback_text_human"
    },
    type: jsPsychSurveyText,
    preamble: function () {
    
     return `<p style ='font-size: 3vw; font-family: Arial; text-align: left; position: fixed; left: 24vw; width: 56vw; height: 39vh; top: 1vh; line-height: 1.2em; border: .3vw transparent; padding: 1vh;'>${OEF_texts_human[0]}</p>`
}, 
    questions: [{prompt: "<p><div style ='font-size:4vw; line-height: 5.5em; color: transparent;'>' '</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .2em;'>Can you tell me about why you think this text came from <b>Ms. Shelby</b>,</div></p>" +
    "<p><div style ='font-size:2.5vw; line-height: .6em;'>and not the SmartBot?</div></p>",
    required: true,
    name: 'open_ended_feedback_text_human',
    rows: 15,
    columns: 70}],
    button_label: 'Next',
    on_finish: function (data) {
      data.feature_selection_response = data.response.open_ended_feedback_text_human
      console.log(data.feature_selection_response)
        }
      };



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//------------------------------------//
// Conclusion Slide
//------------------------------------//
var conclusion = {
  data: {
      trial_id: "conclusion"
  },
  type: jsPsychInstructions,
  pages: function(){
        pageOne = "<p><div style ='font-size:2.5vw;'><b>All done!</b></div></p>" +
    "<p><div style ='font-size:2.5vw;'>Click <b>next</b> to exit.</div></p>"
    return [pageOne]
    },
    button_label_next: "Next",
    show_clickable_nav: true
    }




//------------------------------------//
// Organize ACAI procedure
//------------------------------------//
var acai_procedure = {
    timeline: [welcome, general_instructions, shelby_intro, shelby_writing_intro, shelby_text_peanuts, shelby_text_gravity, shelby_text_piano, shelby_images_intro, shelby_picture_object, shelby_picture_art, shelby_picture_face, SmartBot_intro, SmartBot_writing_intro_part1, SmartBot_writing_intro_part2, SmartBot_preview, loading, SmartBot_audio_intro, SmartBot_chat_template, SmartBot_text_peanuts, SmartBot_chat_template, SmartBot_text_gravity, SmartBot_chat_template, SmartBot_text_piano, SmartBot_texts_reminder, SmartBot_picture_intro_part1, SmartBot_picture_intro_part2, SmartBot_chat_template, SmartBot_picture_object, SmartBot_chat_template, SmartBot_picture_art, SmartBot_chat_template, SmartBot_picture_face, SmartBot_pictures_reminder, exp_task_intro, exp_task_instructions, practice_question_mark, practice_trials_start, practice_picture_object, practice_picture_art, practice_text, practice_picture_face, practice_conclusion, objects_block_one_procedure, texts_block_one_procedure, faces_block_one_procedure, texts_block_two_procedure, progress_one, art_block_one_procedure, texts_block_three_procedure, objects_block_two_procedure, texts_block_four_procedure, progress_two, faces_block_two_procedure, texts_block_five_procedure, art_block_two_procedure, texts_block_six_procedure, progress_three, objects_block_three_procedure, texts_block_seven_procedure, faces_block_three_procedure, texts_block_eight_procedure, art_block_three_procedure, progress_four, task_conclusion, confidence_images_ai_object, open_ended_feedback_images_ai_object, confidence_images_ai_face, open_ended_feedback_images_ai_face, confidence_images_ai_art, open_ended_feedback_images_ai_art, confidence_images_human_object, open_ended_feedback_images_human_object, confidence_images_human_face, open_ended_feedback_images_human_face, confidence_images_human_art, open_ended_feedback_images_human_art, confidence_text_ai, open_ended_feedback_text_ai, confidence_text_human, open_ended_feedback_text_human, post_task_questions_SmartBot, post_task_questions_Shelby, conclusion],

}