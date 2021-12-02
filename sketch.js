const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;

var ground_bottom, ground_top, ground_left, ground_right;
var ball;

function setup() {
  createCanvas(1100,600);
  engine = Engine.create();
  world = engine.world;

  ground_bottom = new Ground(390,570,1500,10);
  ground_top = new Ground(390,20,1500,10);  
  ground_left = new Ground(680,514,14,100);
  ground_right = new Ground(892,514,14,100);

  var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

}
  
  

function draw() 
{
  background(51);
  Engine.update(engine);
  ground_bottom.show();
  ground_right.show();
  ground_left.show();
  ellipseMode(RADIUS);
  
  ellipse(ball.position.x,ball.position.y,20);


}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce( ball,{x:ball.position.x, y: ball.position.y}, {x:60, y:-60});
  }
}

