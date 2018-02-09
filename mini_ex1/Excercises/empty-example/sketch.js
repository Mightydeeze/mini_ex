

function setup() {
  createCanvas(1600, 1000, WEBGL);
  var fov = 60 / 180 * PI;
  var cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);
}
function draw() {
  background('brown');

  for (var i = -1; i < 20; i++) {
    for (var j = -2; j < 20; j++) {
      push();
      translate(i * 160, 0, j * 150);
      c = color('#222222');
      fill(c); // Use 'c' as fill color
      noStroke();
      sphere(5, 40, 40);
      pop();
     
  camera(750, 10, sin(frameCount * 0.0009) * 600, 0, -200, 200, 0, 4, 0);
  var c = color('orange'); // Define color 'c'
  fill(c); // Use color variable 'c' as fill color
  noStroke(); // Don't draw a stroke around shapes
sphere(150);




    }
  }
}
