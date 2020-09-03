
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;


function preload() {

}

function setup() {
	createCanvas(1100, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new wasteoftrees(200, 200);
	bobObject2 = new wasteoftrees(400, 200);
	bobObject3 = new wasteoftrees(600, 200);
	bobObject4 = new wasteoftrees(800, 200);
	bobObject5 = new wasteoftrees(100, 200)

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


	drawSprites();

}



