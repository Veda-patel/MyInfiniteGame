var dryground;
var Greencharacter;
var squareCharacter,squareCharacterG;
var triangleCharacter,triangleCharacterG;
var circleCharacter,circleCharacterG;
var gameOverImg;
var PLAY= 0 
var END= 1
var gameState = PLAY;
var drygroundImg, GreencharacterImg, squareCharacterImg, triangleCharacterImg, circleCharacterImg;



function preload(){
 drygroundImg = loadImage("30666.jpg");
 GreencharacterImg = loadImage("MyGreenCharacter.png");
 squareCharacterImg = loadImage("MySquareCharacter-V.png");
 triangleCharacterImg = loadImage("MyTriangleCharacter-V.png");
 circleCharacterImg = loadImage("MyCircleCharacter-V.png");
  gameOverImg = loadImage("MyGameOverV.png")
}

function setup() {
    createCanvas(windowWidth , windowHeight);

    dryground = createSprite(600,600,600,500);
    dryground.addImage(drygroundImg);
    
    Greencharacter = createSprite(50,160,20,50);
    Greencharacter.scale = 0.4;
    Greencharacter.addImage(GreencharacterImg);
    Greencharacter.setCollider("rectangle", 0,0,50,200)

    gameOver = createSprite(width/2,height/2);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.8;
    gameOver. visible = false
// added groups here
    squareCharacterG = new Group();
    triangleCharacterG = new Group();
    circleCharacterG = new Group();
 
}

function draw() {
  drawSprites();
 
if(gameState===PLAY){

  Greencharacter.y = World.mouseY;

  edges = createEdgeSprites();
  Greencharacter.collide(edges);

  if(dryground.x<0){
    dryground.x = width/2;
  }
    
    
  var select_oppPlayer = Math.round(random(1,3));

  
    if(select_oppPlayer == 1) {
      squareCharacterFunc();
    } else if(select_oppPlayer == 2){
      triangleCharacterFunc();
    } else {
      circleCharacterFunc();
    }
  
  //added groups for isTouching
  if(squareCharacterG.isTouching(Greencharacter)){
    gameState = END;
  }

  if(triangleCharacterG.isTouching(Greencharacter)){
    gameState = END;
  }

  if(circleCharacterG.isTouching(Greencharacter)){
    gameState = END;
  }}
   else if(gameState === END){
    gameOver.visible = true;

    
    
  
   textSize(20);
   fill("black")
   text("Press Up Arrow To Restart The Game!" ,width/2-200,height/2+100);

   dryground.velocityX = 0;
   Greencharacter.velocityY = 0;
   
   squareCharacterG.setVelocityXEach(0);
   squareCharacterG.setLifetimeEach(-1);

   triangleCharacterG.setVelocityXEach(0);
   triangleCharacterG.setLifetimeEach(-1);

   circleCharacterG.setVelocityXEach(0);
   circleCharacterG.setLifetimeEach(-1);
  }
   if(keyDown("UP_ARROW")) {
     reset();
   }
  
}


  function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    
    squareCharacterG.destroyEach();
    triangleCharacterG.destroyEach();
    circleCharacterG.destroyEach();
  }
//create three functions to spawn these characters
  function squareCharacterFunc(){
   if(frameCount%70==0){
   squareCharacter=createSprite(width,160,20,50);
   squareCharacter.addImage("MySquareCharacter-V.png",squareCharacterImg)
   squareCharacter.velocityX=-4
   squareCharacter.scale=0.4
   var r=Math.round(random(50, height-50))
   squareCharacter.y=r
   squareCharacterG.add(squareCharacter);
  }
}
  function triangleCharacterFunc(){
    if(frameCount%70==0){
      triangleCharacter=createSprite(width,160,20,50);
      triangleCharacter.addImage("MyTriangleCharacter-V.png",triangleCharacterImg)
      triangleCharacter.velocityX=-4
      triangleCharacter.scale=0.4
      var r=Math.round(random(50, height-50))
      triangleCharacter.y=r
      triangleCharacterG.add(triangleCharacter);
  }
  }

  function circleCharacterFunc(){
    if(frameCount%70==0){
      circleCharacter=createSprite(width,160,20,50);
      circleCharacter.addImage("MyCircleCharacter-V.png",circleCharacterImg)
      circleCharacter.velocityX=-4
      circleCharacter.scale=0.4
      var r=Math.round(random(50, height-50))
      circleCharacter.y=r
      circleCharacterG.add(circleCharacter);

  }
  }














