const ascii_characters = ".,~-:;!*$@8%0O  ";

let video;
let asciiDiv;

var marks = [];
var markers = [];

var pen;
var sharpie;

var buttons = [];

var stateRadius;


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

function drawPen() {
  // if (mouseIsPressed) {
  //   pen.markings();
  //   pen.displayMarkings();
  // }
  
}

function draw() {
  // background(220);

  // fill(0, 0, 0);

  if (key === '1') strokeWeight(1);
  if (key === '2') strokeWeight(12);
  if (key === '3') strokeWeight(24);
  
  if (mouseIsPressed) line(mouseX, mouseY, pmouseX, pmouseY);
  
  if (key === 'x') stroke( 0, 0, 0 ); // black
  if (key === 'w') stroke(0, 0, 100); // white
  if (key === 'r') stroke(0, 100, 100); // red
  if (key === 'b') stroke(225, 100, 100); // blue
  if (key === 'y') stroke(50, 100, 100); // yellow
  if (key === 'g') stroke(80, 100, 70); // green
  if (key === 'n') stroke(15, 100, 50); // brown

  // pen = new Marker(mouseX, mouseY, 6, 0);
  // button2 = createButton('pen');
  // button2.mousePressed(drawPen);

	// strokeWeight(1);

  // for (i = 0; i < buttons.length; i++) {
  //   buttons[i].displayButton();

  //   if (mouseIsPressed && dist(mouseX, mouseY, buttons[i].x, buttons[i].y) < buttons[i].radius) {
  //     stateRadius = buttons[i].radius;
  //     marks = [];
  //   } else if (mouseIsPressed == false) {
  //     marks.push(mouseX, mouseY);
  //   }
  // }


  // if (stateRadius == sharpie.radius) {
  //   sharpie.markings();
  //   sharpie.displayMarkings();
  // } else if (stateRadius == pen.radius) {
  //   pen.markings();
  //   pen.displayMarkings();
  // } else if (stateRadius == paintMarker.radius) {
  //   paintMarker.markings();
  //   paintMarker.displayMarkings();
  // }

  // let w = width /video.width;
  // let h = height / video.height;
  // video.loadPixels();
  // for (let i = 0; i < video.height; i++) {
  //   for (let j = 0; j < video.width; j++) {
  //     const pixelIndex = (i + j * video.width) * 4;
  //     const r = video.pixels[pixelIndex + 0];
  //     const g = video.pixels[pixelIndex + 1];
  //     const b = video.pixels[pixelIndex + 2];
  //     const avg = (r +g + b) / 3;
      
  //     noStroke();
  //     fill(255);
  //     // square(i * w, j * h, w);

  //     const len = density.length;
  //     const charIndex = floor(map(avg, 0, 255, 0, len));

  //     textSize(w);
  //     textAlign(CENTER, CENTER);
  //     text(density.charAt(charIndex), i * w + w * .5, j * h + h * .5);
  //   }
  // }



  // video.loadPixels();
  // let asciiVideo = "";
  // for (let i = 0; i < video.height; i++) {
  //   for (let j = 0; j < video.width; j++) {
  //     let pixelIndex = (i + j * video.width) * 4;
  //     let r = video.pixels[pixelIndex + 0];
  //     let g = video.pixels[pixelIndex + 1];
  //     let b = video.pixels[pixelIndex + 2];
  //     let avg = (r + g + b) / 3;
  //     let len = ascii_characters.length;
  //     let charIndex = floor(map(avg, 0, 255, 0, len));

  //     let character = ascii_characters.charAt(charIndex);
  //     console.log(character);
  //     if (character == ' ') {
  //       asciiVideo += "&nbsp;";
  //     } else {
  //       asciiVideo += character;
  //     }
  //   }
  //   asciiVideo += '<br/>';
  // }
  // asciiDiv.html(asciiVideo);
}
