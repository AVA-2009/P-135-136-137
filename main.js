video=""
status=""
function setup(){
    canvas=createCanvas(480,380);
    canvas.position(400,200);
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    loaded=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="detecting object..."
}
function modelLoaded(){
    console.log("model loaded")
    status=true
}