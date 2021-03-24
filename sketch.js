var canvas, backgroundImage;

var bike,bikeImage,car,carImage,bus,busImage,road,girl,girlImage;
var button1,button1Image,button2,button2Image;

var gameState=0;




function preload(){
 carImage= loadImage("sprites/car.png");
 busImage= loadImage("sprites/bus.png");
 bikeImage= loadImage("sprites/bike.png");
 road= loadImage("sprites/road.png");
 girlImage=loadImage("sprites/girl.png");
 button1Image=loadImage("sprites/PRESS1.png");
 //button2Image=loadImage("sprites/PRESS2.png");


}

function setup(){
  canvas = createCanvas(500,500);
  
  bike=createSprite(175,490,50,50);
  bike.addImage(bikeImage);
  bike.scale=0.05;

  button1=createSprite(70,86,50,50);
  button1.shapeColor="orange";
  button1.addImage(button1Image);
  button1.visible=false;


// button2=createSprite(400,90,50,50);
//button2.shapeColor="red";
//  button2.addImage(button2Image);
//button2.visible=false;





  
}


function draw(){
 background(road);
 
if (gameState===0){

  if (keyDown("up")){
    bike.y=bike.y-5;
    console.log(bike.y);
   }
 
   girl=createSprite(90,150,50,50);
   girl.addImage(girlImage);
   girl.scale=0.03; 
 
 spawnVehicle();
 if (bike.y<=180){
   button1.visible=true;
 }
  

  if (mousePressedOver(button1)){
    gameState=1;
  }

  if (bike.y<=0){  
    gameState=2;
  }
 
  drawSprites();
}
 
if (gameState===1){
  textSize(20);
  fill("black")
   text("Congratulations on being Human and Helping Lady",20,250);
 }
 if (gameState===2){
  textSize(20);
  fill("black")
   text("Helping the Lady will Make You a Human",60,250);
 }

}

function spawnVehicle(){

  if (frameCount%100===0){

    bus=createSprite(320,550,50,50);
    bus.addImage(busImage);
    bus.scale=0.2;
    bus.velocityY=-5;
  
   }
  
   if (frameCount%130===0){

  
    car=createSprite(240,500,50,50);
    car.addImage(carImage);
    car.scale=0.1;
    car.velocityY=-4;
   }
  
  
}
