peterpan="";
harrypotter="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
leftWrist_score=0;
rightWrist_score=0;
songpeter_status="";
songharry_status="";

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
pose=ml5.poseNet(webcam,modelloded);
pose.on("pose",getresults);

}

function draw(){
 image(webcam,0,0,500,500);
 fill("red");
 stroke("blue");
 songpeter_status=peterpan.isPlaying();
 if(leftWrist_score>0.2){
     circle(leftwristx,leftwristy,20);
     harrypotter.stop()
     if(songpeter_status==false){
         peterpan.play()
         document.getElementById("song").innerHTML="peterpan playing";
     }
 }
songharry_status=harrypotter.isPlaying();
if(rightWrist_score>0.2){
    circle(rightwristx,rightwristy,20);
    peterpan.stop();
    if(songharry_status==false){
        harrypotter.play();
        document.getElementById("song").innerHTML="harrypotter playing";
    }
}
 

 
}
function modelloded(){
console.log("model loaded succsesfuly");

}
function getresults(r){
    if (r.length>0){
        console.log(r);
        leftwristx=r[0].pose.leftWrist.x;
        leftwristy=r[0].pose.leftWrist.y;
        rightwristx=r[0].pose.rightWrist.x;
        rightwristy=r[0].pose.rightWrist.y;
        leftWrist_score= r[0].pose.keypoints[9].score;
        rightWrist_score=r[0].pose.keypoints[10].score;

    }
}