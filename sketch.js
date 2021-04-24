var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();
    
    block1 = createSprite(0,600,360,50);
    block1.shapeColor = "blue";

    block2 = createSprite(290,600,200,50);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(500,600,200,50);
    block3.shapeColor = "red";

    block4 = createSprite(710,600,200,50);
    block4.shapeColor = "green";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 4;
    ball.velocityY = 4;

  }

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }

    

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();

        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
    }

    //write code to bounce off ball from the block3
        

    //write code to bounce off ball from the block4

    drawSprites();
}

