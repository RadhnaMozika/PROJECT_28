
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, tree;
var boy, stone1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var launcher1;


function preload()
{
	//loading image for boy
	boy = loadImage("images/boy.png");
}


function setup() {
	createCanvas(1200, 550);

	engine = Engine.create();
	world = engine.world;

	//creating tree and ground by using blueprint
	ground = new Ground(600, height-20, 1200, 10);
	tree = new Tree(950, 285, 400, 500);

	//creating mangoes by using blueprint
	mango1 = new Mango(950, 200, 20);
	mango2 = new Mango(1000, 100, 20);
	mango3 = new Mango(830, 210, 20);
	mango4 = new Mango(1100, 180, 30);
	mango5 = new Mango(1030, 200, 30);
	mango6 = new Mango(890, 230, 20);
	mango7 = new Mango(900, 100, 20);
	mango8 = new Mango(880, 170, 30);
	mango9 = new Mango(950, 140, 30);
	mango10 = new Mango(1020, 140, 20);

	//creating stone using blueprint
	stone1 = new Stone(145, 403, 30);

	//creating launcher
	launcher1 = new Launcher(stone1.body, {x:145, y:403});

	Engine.run(engine);
}


function draw() {
	background(200);

	//displaying text
	textSize(20);
 	text("PRESS SPACE TO GET ANOTHER CHANCE", 150, 60);

	//displaying ground and tree
	rectMode(CENTER);
	ground.display();

	imageMode(CENTER);
	tree.display();
	
	//displaying mangoes
	imageMode(RADIUS);
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	//displaying boy and stone
	image(boy, 200, height-90, 180, 250);

	imageMode(RADIUS);
	stone1.display();
	launcher1.display();

	//calling function to detect collision of mango and stone
	detectCollision(stone1, mango1);
	detectCollision(stone1, mango2);
	detectCollision(stone1, mango3);
	detectCollision(stone1, mango4);
	detectCollision(stone1, mango5);
	detectCollision(stone1, mango6);
	detectCollision(stone1, mango7);
	detectCollision(stone1, mango8);
	detectCollision(stone1, mango9);
	detectCollision(stone1, mango10);

	}


	//making the stone fly when dragged and released
	function mouseDragged(){
		Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
	}

	function mouseReleased(){
		launcher1.fly();
	}


	//defining function to return stone to boy's hand when space key is pressed
	function keyPressed(){
		if(keyCode === 32){
			Matter.Body.setPosition(stone1.body, {x:145, y:403})
			launcher1.attach(stone1.body);
		}
	}


	//defining function to detect collision of mango and stone
	function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if (distance<=lmango.radius+lstone.radius){
		Body.setStatic(lmango.body, false);
		}

	}

