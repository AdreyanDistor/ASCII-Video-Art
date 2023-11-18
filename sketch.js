let yellowRectX = 100;
let yellowRectY = -50;

let blueRectX = 300;
let blueRectY = -250;

let pinkCirX = -100;
let pinkCirY = 100;
let pinkCirDiam = 50;

let purpCirX = 600;
let purpCirY = 300;
let purpCirDiam = 50;



let bgColor = "gray";

let r1
let d1
let r2
let d2

let circleX = -50;
let circleY = 195;

function setup() {
  createCanvas(600, 400);
  // circleX = width/2;
  // circleY = height/2;
}

function draw() {
  background(220);
  noStroke();

  fill(0);
  textSize(20);
  text("Flying Dot", 0, 50);

  //add your conditional statement(s) between this comment and the brace below.
  fill(250,0,0);
  ellipse(circleX, circleY, 20, 20);

  drawShapes();

  if((circleX >= 130 && circleX <= 170 && circleY <= 170 ) || (circleX >= 130 && circleX <= 170 && circleY >= 220 )||
  (circleX >= 260 && circleX <= 300 && circleY <= 230 ) || (circleX >= 260 && circleX <= 300 && circleY >= 280 )||
  (circleX >= 390 && circleX <= 430 && circleY <= 140 ) || (circleX >= 390 && circleX <= 430 && circleY >= 190 )||
  (circleX >= 520 && circleX <= 560 && circleY <= 55 ) || (circleX >= 520 && circleX <= 560 && circleY >= 105 )){
    circleX = 600;
  } 
    
}   


function keyPressed() {  //how to move circle 
  if(key == 's' || key == 'S') {
    if (circleY > 580) {
    } else {
      circleY += 10;
    }
  }
  else if(key == 'w' || key == 'W') {
    if (circleY < 0) {
    } else {
      circleY += -10;
    }
  }
}

function drawShapes() {

  //yellow-brown rectangle
  fill(100, 100, 0, 200);
  rect(130, 0, 40, 170);

  fill(100, 100, 0, 200);
  rect(130, 220, 40, 180);

  //light blue rectangle 
  fill(0, 200, 200, 150);
  rect(260, 0, 40, 230);

  fill(0, 200, 200, 150);
  rect(260, 280, 40, 120);

  //yellow-brown rectangle
  fill(100, 100, 0, 200);
  rect(390, 0, 40, 140);

  fill(100, 100, 0, 200);
  rect(390, 190, 40, 210);

  //light blue rectangle 
  fill(0, 200, 200, 150);
  rect(520, 0, 40, 55);

  fill(0, 200, 200, 150);
  rect(520, 105, 40, 295);
  
  


  if (circleX < 590) {
    circleX++;
  } else if (circleX = 600) {
    fill(0);
    textSize(40);
    text("Failed, try again", 180, 200);
  }
  else {
    fill(0);
    textSize(40);
    text("You did it!", 200, 200);
  }
}