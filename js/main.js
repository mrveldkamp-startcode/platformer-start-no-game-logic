// Maze Game by Mr. V

// Global Variables
let player = newPlayer(0, 275, 50, 50, "red", 5, 37, 39, 38);
let walls = [];
initWalls(walls);

// Set Canvas Size
canvasSize(800, 600);

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  // LOGIC
  movePlayer(player);
  checkWallCollision(player, walls);

  // DRAWING
  background("skyblue");
  drawPlayer(player);
  drawWalls(walls);

  requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  jumpPlayer(player, event.keyCode);
}