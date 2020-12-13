var redballon,greenballon,blueballon,pinkballon
var ground,bow,aarow
var redbaloonimage,greenbaloonimage,bluebaloonimage,pinkbaloonimage,groundimage,bowimage

function preload(){
 //load your images here 
 groundImage=loadImage("background0.png")
 bowImage=loadImage("bow0.png")
 redbaloonImage=loadImage("red_balloon0.png")
 bluebaloonImage=loadImage("blue_balloon0.png")
 greenbaloonImage=loadImage("green_balloon0.png")
 pinkbaloonImage=loadImage("pink_balloon0.png")
 aarowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(500,500);
ground=createSprite(250,250,500,500)
ground.addImage("ground",groundImage)
ground.scale=1.3
bow=createSprite(450,250,10,10)
bow.addImage("bow",bowImage)
  
}

function draw() {
background("lightblue")
for (var i = 50; i < 500; i=i+60) {
redballoon=createSprite(50,i,10,10)
redballoon.addImage("redballoon",redbaloonImage)
redballoon.scale=0.1
}
  for (var i = 100; i < 450; i=i+60) {
blueballoon=createSprite(100,i,10,10)
blueballoon.addImage("blueballoon",bluebaloonImage)
blueballoon.scale=0.1
} 
for (var i = 150; i < 400; i=i+60) {
greenballoon=createSprite(150,i,10,10)
greenballoon.addImage("greenballoon",greenbaloonImage)
greenballoon.scale=0.1

}
for (var i = 200; i < 350; i=i+60) {
pinkballoon=createSprite(200,i,10,10)
pinkballoon.addImage("pinkballoon",pinkbaloonImage)

}
if(keyDown("space")){
  Aarows()
}
  bow.y=mouseY

  drawSprites()
  }
function Aarows(){
aarow=createSprite(450,250,10,10)
aarow.addImage(aarowImage)
aarow.velocityX=-7
aarow.scale=0.5
}

