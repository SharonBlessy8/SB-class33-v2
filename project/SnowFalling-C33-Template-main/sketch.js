const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

var ss;
var snowimg;
var man1, manimg;
function preload(){
  snowimg= loadImage("snow1.jpg")
  manimg = loadImage("bird.png")
}





function setup() {
 var canvas = createCanvas(800,400);
 man1 = createSprite(350, 300, 50, 100);
  man1.addImage(manimg);
  engine = Engine.create();
  world = engine.world;

 

 ss= new Snow(100,100,10,10)
}

function draw() {
  background(snowimg); 
   
  if(keyCode === 32){
    man1.x = man1.x +20;
    
  }
  
  
  Engine.update(engine);


  ss.display();

  drawSprites();
}