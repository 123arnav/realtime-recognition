//https://teachablemachine.withgoogle.com/models/XehrBLTBr/
function perload(){

}
function setup(){
canvas=createCanvas(225,225);
canvas.position(600,340);
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,0,0,225,225);
}