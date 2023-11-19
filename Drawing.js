export function drawing(){

let video;


function setup() {
  noCanvas();
  frameRate(24)
  video = createCapture(VIDEO);
  video.size(48, 48);
  button = createButton('snap');
  createCanvas(400, 400);
  colorMode(HSB);
  button.mousePressed(takeSnap);

  
}

function takeSnap() {
  image(video, 0, 0, width, height);
}

function keyPressed() {
  if (key == 's') {
    save('img.png')
    return false;
  }
}

function draw() {
  strokeWeight(12);
  
  if (mouseIsPressed) line(mouseX, mouseY, pmouseX, pmouseY);
  
  if (key === 'x') stroke( 0, 0, 0 ); // black
  if (key === 'w') stroke(0, 0, 100); // white
  if (key === 'r') stroke(0, 100, 100); // red
  if (key === 'b') stroke(225, 100, 100); // blue
  if (key === 'y') stroke(50, 100, 100); // yellow
  if (key === 'g') stroke(80, 100, 70); // green
  if (key === 'n') stroke(15, 100, 50); // brown
}
}