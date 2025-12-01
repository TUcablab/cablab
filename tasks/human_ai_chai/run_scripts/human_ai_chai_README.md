# Human/AI CHAI Task - README

**Task Overview**
The Human/AI CHAI jsPsych experiment (Version 7) presents participants with human- and AI-generated news clips and social media comments and asks them to judge whether they were written by humans or AI.

### Task Structure

The experiment alternates between two trial types:

1. **With Comments Trials**: News clip judgment → Comment discrimination → Sharing intention
2. **Without Comments Trials**: News clip judgment → Sharing intention


### Stimuli Files
- `stimuli/AI_task_stim_comments.js` - Stimuli for trials with social media comments
- `stimuli/AI_task_stim_nocomments.js` - Stimuli for trials without comments


### Trial Exemplar

```
//------------------------------------//
// Human/AI Task -- For Loop 
//------------------------------------//

for (var i=0; i < AI_task_stim_comments.length; i++){

/*randomize order of the comments so that human comments and AI comments alternate between showing on the left and right*/
comment_order = jsPsych.randomization.shuffle([AI_task_stim_comments[i].Human_Comment_comments, AI_task_stim_comments[i].AI_Comment_comments])

  /* Human/AI news clip judgment trial */
  var news_clip_question = {
      data: {
          trial_id: "news_clip_question",
          news_clip_stim: AI_task_stim_comments[i].Clip_comments,
          news_clip_type: AI_task_stim_comments[i].Clip_type_comments,
          news_clip_wordcount: AI_task_stim_comments[i].Clip_WC_comments,
          news_clip_prompt: AI_task_stim_comments[i].Clip_Prompt_comments,
          news_clip_category: AI_task_stim_comments[i].Clip_category_comments,
      },
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p><img src="images/facebook_covered.png" style= "height: 53%; width: 60%; position:fixed; right: 20%; top: 5%;"</img></p>` +
  `<p><div class = "split left" style ='font-size: 1.6vw; font-family: Arial; text-align: left; position: fixed; left: 21%; width: 55%; height: 29%; top: 15%; line-height: 1.2em; border: .1vw transaprent; padding: 1vh;'>${AI_task_stim_comments[i].Clip_comments}</div></p>`,
  choices: ["<p style ='font-size:2vw; position: fixed; left: 27.5vw; bottom: 21.5vh;'><b>Human</b></p>", "<p style ='font-size: 2vw; position: fixed; right: 30.5vw; bottom: 21.5vh;'><b>AI</b></p>"],
  prompt: "<p style ='font-size: 2.7vw; position:fixed; bottom: 6vh; left: 21vw;'><b>Was this news clip written by a human or AI?</b></p>",
  button_html: ['<button class="jspsych-btn" style = "width: 15vw; height: 8vh; position:fixed; left:24vw; bottom: 24vh" >%choice%</button>', '<button class="jspsych-btn" style = "width: 15vw; height: 8vh; position:fixed; right:24vw; bottom: 24vh" >%choice%</button>'],
  on_finish: function (data) {
    if (data.response == 0) {
      data.news_clip_response_category = "Human"
    } else {
      data.news_clip_response_category = "AI"
    }
    if (data.response == 1) {
      data.news_clip_response_category = "AI"
    } else {
      data.news_clip_response_category = "Human"
    }
    }
  }
  
```
  
  
### Breaking down Trial Exemplar code

- var news_clip_question: Name of trial
- data: Tagging trial data
- type: the jsPsych plugin (jsPsychHtmlButtonResponse) used for the trial
- stimulus: the stimulus used in the trial and adjusting size and positioning
- choices: The text of the buttons used in the trial
- prompt: The text prompt displayed to participants
- button_html: The aesthetic design of each button
- on_finish: What happens after the trial ends. Here, if the participant clicks the first button (data.response == 0), tag the data as selecting "Human". If the participant clicks the second button (data.response == 1), tag the data as selecting "AI".



### Visual Styling

- **Font sizes**: Search for `font-size` values throughout CSS and stimulus definitions
- **Button positions**: Modify `position:fixed` coordinates in `button_html` parameters
- **CSS rules**: Adjust custom CSS rules in the <style> part of the code
- **Background color**: Change `body { background-color: white; }` in CSS
- `images/facebook_covered.png` - Social media interface mockup

