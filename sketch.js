// const ascii_characters = ".,~-:;!*$@8%0O  ";
const ascii_characters = "#@%OHLTI)i=+;:,."

let video;
let asciiDiv;

function setup() {
  noCanvas();
  frameRate(24)
  video = createCapture(VIDEO);
  video.size(48, 48);
  createCanvas(400, 400);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiVideo = "";
  for (let i = 0; i < video.height; i++) {
    for (let j = 0; j < video.width; j++) {
      let pixelIndex = (i + j * video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      let avg = (r + g + b) / 3;
      let len = ascii_characters.length;
      let charIndex = floor(map(avg, 0, 255, 0, len));

      let character = ascii_characters.charAt(charIndex);
      console.log(character);
      if (character == ' ') {
        asciiVideo += "&nbsp;";
      } else {
        asciiVideo += character;
      }
    }
    asciiVideo += '<br/>';
  }
  asciiDiv.html(asciiVideo);
}
