
const ascii_characters = ".,~-:;!*$@8%0O  ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  frameRate(24);
  video = createCapture(VIDEO);
  video.size(video.width/3, video.height/3);

  createCanvas(400, 400);
  asciiDiv = createDiv();
  video.hide();
}

function draw() {
  video.loadPixels();
  let asciiVideo = "";

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {

      let pixelIndex = (i + j * video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      let avg = (r + g + b) / 3;
      let len = ascii_characters.length;
      let charIndex = floor(map(avg, 0, 255, 0, len));

      let textColor = color(r, g, b);
      let hexColor = "#" + textColor.toString("#rrggbb").substring(1);

      let character = `<span style="color:${hexColor};">${ascii_characters.charAt(charIndex)}</span>`;

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