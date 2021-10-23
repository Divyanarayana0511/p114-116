let img;
let xpos,ypos;
function preload(){
    img=loadImage("hair-moustache-drawing.png");

}
function setup()
{
    canvas=createCanvas(1000,1000);
    canvas.position(100,100);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}
function draw(){
    background("purple");
    image(video, 200,200,500,500);
   
   stroke("white");
   strokeWeight(7);
   line(120,120,800,120);
   line(800,120,800,800);
   line(800,800,120,800);
   line(120,800,120,120);
   fill("red");
    stroke("green");
    strokeWeight(3);
   circle(120,120,30);
   circle(800,120,30);
   circle(800,800,30);
   circle(120,800,30);
   image(img,xpos,ypos,50,30);
    
}

function modelLoaded(){
    console.log("poseNet is initialised");
}
function takesnapshot(){
 save("myselfie.png");   
}
function gotPoses(results){
    if(results.length>0){
       console.log(results);
        xpos=results[0].pose.nose.x+100;
        ypos=results[0].pose.nose.y+220;
        console.log("X ="+xpos + "  Y = "+ypos);
    }else{
        console.error("error in posenet model");
    }
}