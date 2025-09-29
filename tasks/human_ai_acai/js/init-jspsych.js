//------------------------------------//
// Initialize jsPsych
//------------------------------------//
function startExp() {}
var jsPsych = initJsPsych({
    on_finish: function() {
        var csv = jsPsych.data.get().csv();
        var filename = jsPsych.data.get().values()[0].PID + "_" + DATE + ".csv";
        downloadCSV(csv, filename);
        jsPsych.data.displayData()
    }
})
