
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall, paperBallS, boxP1, boxP2, boxP3, ground;

function setup() {
	createCanvas(1200, 400);
    background(255,255,255)

	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(100,300,25)

	boxP1 = new Box(1000,250,150,120)
	
	ground = new Ground(600,325)

	World.add(world,boxP1)
	World.add(world,ground)
	World.add(world,paperBall)

	console.log(paperBall)

  
}


function draw() {
  
  background("lightgrey");

  Engine.update(engine);

  paperBall.display();
  boxP1.display();
  ground.display();
   
  drawSprites();
}



