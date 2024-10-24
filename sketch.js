function setup() {
  createCanvas(710, 400);
  background(200);
  strokeWeight(10);
  colorMode(RGB);
  //describe('A blank canvas where the user draws by dragging the mouse');
}

function mouseDragged() {
  //let lineHue = mouseX - mouseY;
  stroke(0, 255, 0);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

