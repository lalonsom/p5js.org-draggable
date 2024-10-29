function setup() {
  createCanvas(400, 400);
  background(200);
  strokeWeight(10);
  //colorMode is not needed to get a single color pen
  colorMode(RGB);
  stroke("black");
  rect(100,100,200,200);
}



function mouseDragged() {
  stroke(0, 255, 0);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
