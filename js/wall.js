// Wall Functions
function newWall(initX, initY, initW, initH) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH
  }
}

function initWalls(walls) {
  walls.push(newWall(100, 400, 100, 20));
  walls.push(newWall(400, 450, 200, 20));
  walls.push(newWall(300, 250, 150, 20));
}

function drawWall(aWall) {
  fill("grey");
  rect(aWall.x, aWall.y, aWall.w, aWall.h, "fill");
}

function drawWalls(walls) {
  for (let i = 0; i < walls.length; i++) {
    drawWall(walls[i]);
  }
}