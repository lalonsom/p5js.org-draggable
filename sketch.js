 let zoomCircle = 1;
let zoomSquare = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  // Zoom and draw circle
  push();
  translate(300, 200); // Move to circle's position
  scale(zoomCircle); // Apply zoom for circle
  fill(255, 0, 0);
  ellipse(0, 0, 50, 50); // Circle centered at (300, 200)
  pop();
  
  // Zoom and draw square
  push();
  translate(400, 300); // Move to square's position
  scale(zoomSquare); // Apply zoom for square
  fill(0, 0, 255);
  rect(-50, -50, 100, 100); // Square centered at (400, 300)
  pop();
}

function mousePressed() {
  // Check if the circle is clicked
  let dCircle = dist(mouseX, mouseY, 300, 200);
  if (dCircle < 50) { // Clicked inside the circle
    zoomCircle += 0.1; // Zoom in the circle
  }
  
  // Check if the square is clicked
  if (mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 350) { // Clicked inside the square
    zoomSquare += 0.1; // Zoom in the square
  }
}

function mouseWheel(event) {
  // Scroll to zoom out the circle or square
  let dCircle = dist(mouseX, mouseY, 300, 200);
  if (dCircle < 50) { // Mouse over circle
    zoomCircle += event.delta > 0 ? -0.1 : 0.1; // Zoom out/in circle
    zoomCircle = constrain(zoomCircle, 0.5, 3); // Limit zoom level
  }

  if (mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 350) { // Mouse over
zoomSquare += event.delta > 0 ? -0.1 : 0.1; // Zoom out/in square
    zoomSquare = constrain(zoomSquare, 0.5, 3); // Limit zoom level
  }
}