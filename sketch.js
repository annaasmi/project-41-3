const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunder,thunderImg,thunder2Img,thunder3Img,thunder4Img;
var boy,test;
var drops = [];
var maxDrops = 100;

function preload(){
    thunderImg = loadImage("images/thunder.png");
    thunder2Img = loadImage("images/thunder2.png");
    thunder3Img = loadImage("images/thunder3.png");
    thunder4Img = loadImage("images/thunder4.png");
}

function setup(){
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella(250,500);
   
    Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    background(0);
    if(frameCount%20 === 0){
        thunder = createSprite(random(10,400),random(10,30),10,10);
        thunder.shapeColor = "black";
        thunder.scale = 0.5;
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1:  thunder.addImage("thunder",thunderImg);
            thunder.lifetime = 10;
            break;
            case 2:thunder.addImage("thunder",thunder2Img);
            thunder.lifetime = 10;
            break;
            case 3:thunder.addImage("thunder",thunder3Img);
            thunder.lifetime = 10;
            break;
            case 4: thunder.addImage("thunder",thunder4Img);
            thunder.lifetime = 10;
        }
    }
    
   
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
    for (var i = 0; i < maxDrops; i++) {
     
        drops[i].display();
        drops[i].updatePosition();
        
      }

    

    boy.display();

    drawSprites();
}   

