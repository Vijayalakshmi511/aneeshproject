const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
var engine, ground, ball, crate;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(6200,1000);
  ground = new Ground(500, 800, 3000, 20);
 // barricade = new Ground(1000, 620, 20, 70)
  ballObject = new Ball(100,100,20)
  crate = new Crate(500, 40, 100, 100);
 
}

function draw() {
 
  background(255,255,255);  
  Engine.update(engine)
  ground.display();
  ballObject.display();
  crate.display();
 // barricade.display();
  //drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW )
  {
       Matter.Body.applyForce(ballObject.body, ballObject.body.position, {x:20, y:-80})
  }
  
  }
  