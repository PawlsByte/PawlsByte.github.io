/*
   js/app.js
   Handles lightning sprite animation on the hero canvas.
*/

const canvas = document.getElementById("lightning");
const ctx = canvas.getContext("2d");

// Set up the sprite for the lightning effect
const sprite = new Image();
sprite.src = "images/lightning-sprite.png";

// Animation parameters
let frame = 0;
const totalFrames = 8;    // total frames in the sprite sheet
const frameW = 1024;      // width of each frame in the sprite
const frameH = 1024;      // height of each frame in the sprite
const scale = 0.33;       // scaling factor so the playback doesn't dominate the screen

// Resize the canvas to always cover the hero section
function resize() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}

window.addEventListener("resize", resize);
resize();

// Draw loop: updates the canvas with a new frame from the sprite sheet at random positions
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pick a random position within the canvas, leaving room for the scaled sprite
  const x = Math.random() * (canvas.width - frameW * scale);
  const y = Math.random() * (canvas.height - frameH * scale);

  // Compute the x coordinate of the current frame in the sprite sheet
  const srcX = frame * frameW;

  // Draw this frame onto the canvas
  ctx.drawImage(
    sprite,
    srcX,
    0,
    frameW,
    frameH,
    x,
    y,
    frameW * scale,
    frameH * scale
  );

  // Cycle to the next frame
  frame = (frame + 1) % totalFrames;
}

// Start the animation loop every 200 milliseconds
setInterval(draw, 200);