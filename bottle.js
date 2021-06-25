img = ""

function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
    }
function preload(){
img = loadImage("bottle.jpg");
}   

function draw(){
    image(img,0,0,640,420)
    fill("red")
    text("bottle",45,75)
    noFill();
    stroke("red")
    rect(30,60,450,350);
    
}