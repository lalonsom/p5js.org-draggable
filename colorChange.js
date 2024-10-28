let circleX, circleY;
let circleRadius = 50;
let dragging = false;
let offsetX, offsetY;
let circleColor;

function setup() {
  createCanvas(400, 400);
  // Initial position of the circle
  circleX = width / 2;
  circleY = height / 2;
  circleColor = color(255, 0, 0);
}

function draw() {
  background(220);

  // Draw the circle with the current color
  fill(circleColor);
  ellipse(circleX, circleY, circleRadius * 2);

  // If dragging, update the circle position
  if (dragging) {
    circleX = mouseX + offsetX;
    circleY = mouseY + offsetY;
  }
}

function mousePressed() {
  // Check if the mouse is inside the circle
  let distance = dist(mouseX, mouseY, circleX, circleY);
  if (distance < circleRadius) {
    dragging = true;
    // Calculate the offset from the circle's center to where the mouse clicked
    offsetX = circleX - mouseX;
    offsetY = circleY - mouseY;

    // Change the color of the circle when clicked
    circleColor = color(random(255), random(255), random(255));
  }
}

function mouseReleased() {
  // Stop dragging when the mouse is released
  dragging = false;
}
