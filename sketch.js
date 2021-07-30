var PLAY =1;
var bow , arrow,background ;
var gameState = PLAY;
var bowImage, arrowImage, greenballoonImage, redballoonImage, pinkballoonImage ,blueballoonImage, backgroundImage;
var arrowGroup,redBalloonGroup,greenBalloonGroup,blueBalloonGroup,pinkBalloonGroup;
var score = 0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  // creating groups of arrow and balloon individually
  arrowGroup = new Group();
  redBalloonGroup = new Group();
  greenBalloonGroup= new Group();
  blueBalloonGroup= new Group();
  pinkBalloonGroup= new Group();
  
}

function draw() {
 background(0);
 if (gameState === PLAY){


  // moving ground
scene.velocityX = -3 
if (scene.x < 0){
  scene.x = scene.width/2;
}
//------------------------------------------------------
bow.y = World.mouseY
//------------------------------------------------------
 // release arrow when space key is pressed
 if (keyDown("space")) {
  createArrow();
}
//------------------------------------------------------
 pinkBalloon();
greenBalloon();
blueBalloon();
redBalloon();
drawSprites();
//-----------------------------------------------------
text("score"+score,270,30);
//----------------------------------------------------------
 if(arrowGroup.isTouching(redBalloonGroup)){
 redBalloonGroup.destroyEach();
 arrowGroup.destroyEach();
  
 }
 //-------------------------------------------------------
 if(arrowGroup.isTouching(blueBalloonGroup)){
  blueBalloonGroup.destroyEach();
  arrowGroup.destroyEach();
  
   }
   //-----------------------------------------------------
   if(arrowGroup.isTouching(greenBalloonGroup)){
    greenBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    
     }

  //-------------------------------------------------
     if(arrowGroup.isTouching(pinkBalloonGroup)){
    pinkBalloonGroup .DestroyEach();
    arrowGroup.DestroyEach();
    
     }
     
}



// Creating  arrow for bow
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}
 }
 function redBalloon() {
  if(frameCount % 60===0){
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(redballoonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
  }
  }
  
  function blueBalloon() {
    //write code for spwaning blue balloons
    if(frameCount % 60===0){
    var blue = createSprite(0,Math.round(random(20,370)),10,10);
    blue.addImage(blueballoonImage);
    blue.velocityX= 3;
    blue.lifetime = 100;
    blue.scale = 0.1;
    }
  }
  
  function greenBalloon() {
    //write code for spwaning green balloons
   if(frameCount % 60===0){
    var green = createSprite(0,Math.round(random(20,370)),10,10);
    green.addImage(greenballoonImage);
    green.velocityX= 3;
    green.lifetime = 100;
    green.scale = 0.1;
   }
   }
  
  function pinkBalloon() {
    //write code for spwaning pink balloons
   if(frameCount % 60===0){
    var pink = createSprite(0,Math.round(random(20,370)),10,10);
    pink.addImage(pinkballoonImage);
    pink.velocityX= 3;
    pink.lifetime = 100;
    pink.scale = 0.1;
   }
  
}


 

