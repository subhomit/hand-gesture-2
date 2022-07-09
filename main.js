prediction_1 = "";
prediction_2 = "";
Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function start_capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_image").innerHTML = "<img id='capturedImg' src = '" + data_uri + "'>";
    });
}
console.log("ml5 version :",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wNBLIf1jN/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function speak(){
    synth = window.speechSynthesis;
    speakSynth1 = "The first Prediction is " + prediction_1;
    speakSynth2 = "The second Prediction is " + prediction_2;
    tts = new SpeechSynthesisUtterance(speakSynth1 + speakSynth2);
    synth.speak(tts);
}
