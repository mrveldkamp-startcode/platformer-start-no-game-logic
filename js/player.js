// Player Functions

function newPlayer(initX, initY, initW, initH, initColor, initSpeed, initlKey, initrKey, inituKey) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH,
    color: initColor,
    dx: initSpeed,
    dy: 0,
    a: 1,
    launchSpeed: -20,
    lKey: initlKey,
    rKey: initrKey,
    uKey: inituKey,
  }
}

function drawPlayer(aPlayer) {
  fill(aPlayer.color);
  rect(aPlayer.x, aPlayer.y, aPlayer.w, aPlayer.h, "fill");
}

function movePlayer(aPlayer) {
  // Horizontal Movement
  if (keyIsDown[aPlayer.lKey]) {
    aPlayer.x += -aPlayer.dx;
  } else if (keyIsDown[aPlayer.rKey]) {
    aPlayer.x += aPlayer.dx;
  }

  // Vertical Movement
  aPlayer.y += aPlayer.dy; // Move Vertically
  aPlayer.dy += aPlayer.a; // Apply acceleration (gravity)

  // Check Collision with Ground
  if (aPlayer.y + aPlayer.h > cnv.height) {
    aPlayer.y = cnv.height - aPlayer.h;
    aPlayer.dy = 0;
  }

}

function jumpPlayer(aPlayer, keyCode) {
  // Jump if keyCode is the player's up key
  if (aPlayer.uKey === keyCode) {
    aPlayer.dy = aPlayer.launchSpeed;
  }
}

function platformTop(aPlayer, wall) {
  aPlayer.y = wall.y - aPlayer.h; // Teleport to top of platform
  aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
}

function checkWallCollision(aPlayer, walls) {
  for (let i = 0; i < walls.length; i++) {
    if (rectCollide(aPlayer, walls[i])) {
      platformTop(aPlayer, walls[i]);
      break;
    }
  }
}