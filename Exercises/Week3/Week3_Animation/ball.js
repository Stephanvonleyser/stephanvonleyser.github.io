// this function makes a ball with position and velocity set

function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
  ball = document.createElement("div");
  ball.style.backgroundColor = color;
  ball.className = "ball";
  ball.style.height = ball.style.width = size;
  ball.style.top = ycoord;
  ball.style.left = xcoord;
  document.body.appendChild(ball);
  if (!fixed) {
    // only free balls will be updated
    balls.push(ball);
    x.push(xcoord);
    y.push(ycoord);
    velocity_x.push(velx);
    velocity_y.push(vely);
  }
}
