
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5,roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,400);
	bobObject2 = new Bob(450,400);
	bobObject3 = new Bob(500,400);
	bobObject4 = new Bob(350,400);
	bobObject5 = new Bob(300,400);
    roofObject = new Roof(400,600,600,40); 
    rope1 = new Rope(bobObject1.body, roofObject.body, 0, 0);
  	rope2 = new Rope(bobObject2.body, roofObject.body,100,0);
  	rope3 = new Rope(bobObject3.body, roofObject.body,150, 0);
  	rope4 = new Rope(bobObject4.body, roofObject.body, -100, 0);
  	rope5 = new Rope(bobObject5.body, roofObject.body, -150, 0);


var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
});


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject3.body, bobObject5.body.position,{x:55,y:-55});
	 }
   }
  


