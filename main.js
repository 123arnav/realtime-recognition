//https://teachablemachine.withgoogle.com/models/XehrBLTBr/
function perload(){

}
function setup(){
canvas=createCanvas(225,225);
canvas.position(600,340);
video=createCapture(VIDEO);
video.hide();
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XehrBLTBr/model.json",modelloaded);
}
function modelloaded(){
    console.log("model");
}
function draw(){
image(video,0,0,225,225);
classifier.classify(video,gotresult);
}
function gotresult(error,result){
if (error){
    console.log(error);
}
else{
    console.log(result)
    document.getElementById("object").innerHTML=result[0].label;
    document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2);
}
}