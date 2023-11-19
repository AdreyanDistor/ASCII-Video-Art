const ascii_characters = "abcdefg ";

let video;
let asciiDiv

function setup() {
  noCanvas();
  frameRate(12);
  video = createVideo("dinoVid480.mp4");
  video.size(video.width*2, video.height*2);
  asciiDiv = createDiv();
  video.hide();
  video.play();
  video.loop();
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
      let charIndex = floor(map(avg, 0, 255, 0, len-1));
      // document.write(ascii_characters[charIndex]);
      if (ascii_characters[charIndex] == ' ') {
        asciiVideo += "&nbsp;";
      } else {
        asciiVideo += ascii_characters[charIndex];
      }
    }
    asciiVideo += '<br/>';
  }
  asciiDiv.center();
  asciiDiv.html(asciiVideo);
}
