const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);

    console.log(ball);

    ball = Bodies.circle(200,100,30);

    World.add(world,ground);
    World.add(world,ball);

}

function draw(){
    background(0);

    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}