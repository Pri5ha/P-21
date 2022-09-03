
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1, ground2, ground3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	ball = Bodies.circle(30,20,20,ball_options);
	World.add(world,ball)

	ground1 = new Ground(width/2,670,width,20);
	ground2 = new Ground(1100,600,20,120);
	ground3 = new Ground(1300,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode == 38){
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-100})
	}
}

