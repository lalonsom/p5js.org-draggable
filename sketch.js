let circleX, circleY;  // Position of the circle
let circleRadius = 50; // Radius of the circle
let dragging = false;  // Is the circle being dragged?
let offsetX, offsetY;  // Offset to track dragging distance

function setup() {
  createCanvas(400, 400);
  // Initial position of the circle
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  background(220);
 
  // Draw the circle
  fill(255, 0, 0);
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
  }
}

function mouseReleased() {
  // Stop dragging when the mouse is released
  dragging = false;
}
