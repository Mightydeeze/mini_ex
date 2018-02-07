function setup() {
  // put setup code here
  createCanvas(1280,720);
}

function draw() {
  // put drawing code here
ellipse(50,50,50,50);

{
noStroke();
var c = color(0, 126, 255, 102);
fill(c);
ellipse(15, 15, 35, 70);
var value = alpha(c); // Sets 'value' to 102
fill(value);
ellipse(50, 15, 35, 70);
}
}
