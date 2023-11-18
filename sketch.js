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

let point = 0;
let circleX;
let circleY;

function setup() {
  createCanvas(400, 400);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(bgColor);
  noStroke();

  fill(0);
  textSize(20);
  text("Points: " + point, 0, 350);

  //add your conditional statement(s) between this comment and the brace below.
  fill(250,0,0);
  ellipse(circleX, circleY, 20, 20);

  animateShapes();

  // if (mouseIsPressed === true) {
    
  //   //if click 
  //   if (mouseX >= yellowRectX && mouseX <= yellowRectX + 50 && mouseY >= yellowRectY && mouseY <= yellowRectY + 50) {
  //     bgColor = "orange"
  //   } else if (mouseX >= blueRectX && mouseX <= blueRectX + 50 && mouseY >= blueRectY && mouseY <= blueRectY + 50) {
  //     bgColor = 'black'
  //   }

  //   if (d1 < r1) {
  //     bgColor = "darkRed";
  //   } else if (d2 < r2) {
  //     bgColor = "limeGreen";
  //   }
  // } else {
  //   bgColor = "gray";
  // }
}

function keyPressed() {  //how to move circle 
  if(key == 'a' || key == 'A') {
    if (circleX < 0) {
    } else {
      circleX += -10;
    }
  }
  else if(key == 'd' || key == 'D') {
    if (circleX > 380) {
    } else {
      circleX += 10;
    }
  }
  else if(key == 's' || key == 'S') {
    if (circleY > 380) {
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

function animateShapes() {

  //yellow-brown rectangle
  fill(100, 100, 0, 100);
  rect(yellowRectX, yellowRectY, 50, 50);

  //light blue rectangle
  fill(0, 200, 200, 150);
  rect(blueRectX, blueRectY, 50, 50);

  //pink ellipse
  fill(255, 0, 255, 100);
  ellipse(pinkCirX, pinkCirY, pinkCirDiam);

  //purple ellipse
  fill(41, 25, 173, 100);
  ellipse(purpCirX, purpCirY, purpCirDiam);

  //animates the shapes in a straight line
  yellowRectY++;
  blueRectY++;
  pinkCirX++;
  purpCirX--;

  //moves the shapes back when they move off the canvas
  if (yellowRectY > 450) {
    yellowRectY = -50;
  }
  if (blueRectY > 450) {
    blueRectY = -50;
  }
  if (pinkCirX > 425) {
    pinkCirX = -25;
  }
  if (purpCirX < -100) {
    purpCirX = 550;
  }
}