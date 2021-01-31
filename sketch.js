var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var score = 0;
var particle;
var turn = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  groundObject = new Ground(400,795,800,10);
  leftWall = new Ground(5,400,10,800);
  rightWall  = new Ground(795,400,10,800);
  topWall = new Ground(400,5,800,10);

  createArrays();
}
 


function draw() {
  background("black");

  Engine.update(engine);

  groundObject.display();
  leftWall.display();
  rightWall.display();
  topWall.display();

  scoreText();
  drawArrays();
  //console.log(gameState);
  divisions500();
  divisions100();
  divisions200();
  gameEnd();

}

function scoreText(){
  fill("white")
  textSize(40);
  text("Score : "+score,20,40);
  textSize(20);
  text("500",25,500);
  text("500",105,500);
  text("500",185,500);
  text("500",265,500);
  text("100",345,500);
  text("100",425,500);
  text("100",505,500);
  text("200",585,500);
  text("200",665,500);
  text("200",745,500);
}

function mousePressed(){
  if (gameState !== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10,10);
    particle.display();
  }
}

function divisions500(){
  if (particle!= null){
    particle.display();
    if (particle.body.position.y > 750){
      if (particle.body.position.x < 320 && particle.body.position.x > 0){
        score = score+500;
        particle = null;
        if(turn >= 5)gameState = "end";
      }
    }
  }
}

function divisions100(){
  if (particle != null){
    particle.display();
    if (particle.body.position.y > 750){
      if (particle.body.position.x < 560 && particle.body.position.x > 320){
        score = score+100;
        particle = null;
        if (turn >= 5) gameState = "end";

      }
    }
  }
}

function divisions200(){
  if (particle != null){
    particle.display();
    if (particle.body.position.y > 750){
      if (particle.body.position.x > 560 && particle.body.position.x < 800){
        score = score+200;
        particle = null;
        if (turn >= 5) gameState = "end";
      }
    }
    
  }

}

function gameEnd(){
  if (gameState === "end"){
    textSize(100);
    fill ("white");
    text("Game Over!", 125, 250);
    textSize(40);
    fill("red");
    text("Your Score is: " + score, 225, 350);
  }
}




function createArrays(){
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }
}

function drawArrays(){
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-100, width/2+100), 10,10));
    score++;
  }

  for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }*/
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}