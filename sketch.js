var canvas;
var music;
var box1, box2, box3, box4;
var object,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(0,580,360,30);
    box1.shapeColor = rgb(0,0,255);

    box2 = createSprite(295,580,200,30);
    box2.shapeColor = rgb(255,128,0);

    box3 = createSprite(515,580,200,30);
    box3.shapeColor = rgb(153,0,76);

    box4 = createSprite(740,580,220,30);
    box4.shapeColor = rgb(0,100,0);

    object = createSprite(random(20,750),100, 40,40);
    object.shapeColor = rgb(255,255,255);
    object.velocityX = 4;
    object.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    object.bounceOff(edges);

    if(box1.isTouching(object) && object.bounceOff(box1)){
        object.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(box2.isTouching(object)&& object.bounceOff(box2)){
        object.shapeColor = rgb(255,128,0);
        object.velocityX = 0;
        object.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(object) && object.bounceOff(box3)){
        object.shapeColor = rgb(153,0,76);
    }

    if(box4.isTouching(object) && object.bounceOff(box4)){
        object.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
