
var sea,ship;
var seaImg,shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  

}

function setup(){
  createCanvas(600,400);

  // Moving background
  sea=createSprite(300,200);
  sea.addImage(seaImg);

  sea.scale = 0.3
  

  
  ship = createSprite(300,250,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

 
}

function draw() {
  background(0);
  
 sea.velocityX = -3;

    
  drawSprites();
}
