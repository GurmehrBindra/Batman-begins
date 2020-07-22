const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const World= Matter.World;
var drops=[];
var umbrella;
var maxDrops=100;
var nightImage;
var thunder1,thunder2,thunder3;


function preload(){
    nightImage= loadImage("night.jpg");
    thunder1= loadImage('thunderImg/thunder1.jpg');
    thunder2= loadImage('thunderImg/thunder2.jpg');
    thunder3= loadImage('thunderImg/thunder3.jpg');
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    umbrella= new Umbrella(200,350);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }
    
}

function draw(){
    background(nightImage);
    Engine.update(engine);
    umbrella.display();
    drops.display();
    drops.update();
    createThunder();
    drawSprites();
}

function createThunder(){
    if(frameCount%300===0){
        var thunder= createSprite(random(1,400),10);
        thunder.lifetime=30;
        var rand = Math.round(random(1,3));
        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder3);
                  break;
          default: break;
        } 
    }   
}

