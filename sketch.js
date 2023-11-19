let video;
let model;
let face;
let firstFace = true;
const ascii_characters = ".,~-:;!*$@8%0O  ";
let asciiDiv;

function setup() {
  frameRate(24);
  createCanvas(640, 480);
  video = createCapture(VIDEO, async () => {
    await loadFaceModel();
  });
  video.hide();
  asciiDiv = createDiv();
}

async function loadFaceModel() {
  model = await blazeface.load();
}

async function getFace() {
  const estimations = await model.estimateFaces(video.elt, false);
  face = estimations[0];
}

function draw() {
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }

  if (face !== undefined) {
    image(video, 0, 0, width, height);

    if (firstFace) {
      console.log(face);
      firstFace = false;
    }

    let rEye = scaling(face.landmarks[0]);
    let lEye = scaling(face.landmarks[1]);

    let squareX = (rEye.x + lEye.x) * 0.5;
    let squareY = (rEye.y + lEye.y - 300) * 0.5;
    let squareSize = Math.abs(rEye.x - lEye.x) * 3;

    square(squareX, squareY, squareSize);

    let asciiVideo = generateASCIIArt(squareX, squareY, squareSize);
  
    asciiDiv.html(asciiVideo);
  }
}

function scaling(pt) {
  return createVector(map(pt[0], 0, video.width, 0, width), map(pt[1], 0, video.height, 0, height));
}

function generateASCIIArt(squareX, squareY, squareSize) {
  video.loadPixels();
  let asciiVideo = "";
  const len = ascii_characters.length;

  for (let j = squareY - 100, yEnd = squareY + squareSize; j < yEnd; j++) {
    for (let i = squareX, xEnd = squareX + squareSize; i < xEnd; i++) {
      let pixelIndex = (i + j * video.width) * 4;
      let avg = (video.pixels[pixelIndex] + video.pixels[pixelIndex + 1] + video.pixels[pixelIndex + 2]) / 3;
      let charIndex = floor(map(avg, 0, 255, 0, len));

      let textColor = color(video.pixels[pixelIndex], video.pixels[pixelIndex + 1], video.pixels[pixelIndex + 2]);
      let hexColor = "#" + textColor.toString("#rrggbb").substring(1);

      let character = `<span style="color:${hexColor};">${ascii_characters.charAt(charIndex)}</span>`;

      if (character === ' ') {
        asciiVideo += "&nbsp;";
      } else {
        asciiVideo += character;
      }
    }
    asciiVideo += '<br/>';
  }

  return asciiVideo;
}
