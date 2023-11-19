
export function resize() {
let dawg;

function preload() {
  dawg = loadImage("dawg.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  image(dawg,0,0, width, height);
} 
}