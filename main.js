peterpan="";
harrypotter="";

function preload(){
peterpan=loadSound("music2.mp3");
harrypotter=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(500,500);
canvas.center();
webcam=createCapture(VIDEO);
webcam.size(500,500);
webcam.hide();
}

function draw(){
 image(webcam,0,0,500,500);
}