const ascii_characters = ".,~-:;!*$@8%0O  ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  frameRate(24)
  video = createVideo(VIDEO);
  video.size(48, 48);
  asciiDiv = createDiv();
  
}

function draw() {
  video.loadPixels();
  let asciiVideo = "";
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let pixelIndex = (x + (y * video.width) ) * 4;
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
