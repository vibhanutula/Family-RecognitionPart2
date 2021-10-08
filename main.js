Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("TakeSnap");
Webcam.attach('#camera'); 

function TakeSnap() {
    Webcam.snap(function(data_uri){
        document.getElementById("Snap").innerHTML = "<img id='Snapshot' src='" + data_uri + "'/>";
    });
}

console.log("ml5 version:" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h5B3NICJW/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}