const ascii_characters = ".,~-:;!*$@8%0O  ";

let video;
let asciiDiv;
let pic;

function setup() {
  noCanvas();
  frameRate(24)
  video = createCapture(VIDEO);
  video.size(48, 48);
  button = createButton('snap');
  createCanvas(400, 400);
  asciiDiv = createDiv();
  button.mousePressed(takeSnap);
}

function takeSnap() {
  pic = image(video, 0, 0, width, height);
}

function draw() {
  background(220);
  pic.loadPixels();
  for (let i = 0; i < pic.height; i++) {
    for (let j = 0; j < pic.width; j++) {
      const pixelIndex = (i + j * pic.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r +g + b) / 3;
      
      noStroke();
      fill(r, g, b);
      // square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * .5, j * h + h * .5);
    }
  }
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
