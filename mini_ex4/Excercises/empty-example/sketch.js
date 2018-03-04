// Watching_you by Frederik Ditlev Christensen
var illuminati;
var no_net;
var sS = 60; // short for scopeSize
var c; // short for color
var t = 0; // short for transparency
var Clear = false;

function preload() {
  illuminati = loadImage('illuminati.jpg');
  no_net = loadImage('no_net.jpg');
} // preload ends

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noCursor();
  c = color(0,0,0,250-t);
  setTimeout(function(){ alert("You are under surveillance"); }, 100);
} // setup ends

function draw() {
  background(0);
//calling my own functions
  watchingYou();
  scope();
  numbers();
  allClear();
} // draw ends

function mousePressed() {
if(t<72){
  t = t+4;
  c = color(0,0,0,250-t);
  if(t==12){
  setTimeout(function(){ alert("What a great day to click around..."); }, 100);
  }
  if(t==36){
  setTimeout(function(){ alert("The clicks are... so innocent..."); }, 100);
  }
  if(t==56){
  setTimeout(function(){ alert("Don't you feel guilty?"); }, 100);
  }
  if(t==68){
  setTimeout(function(){ alert("Be careful what you do now!"); }, 100);
  }
}
else {
  Clear = true;
  cursor();
  setTimeout(function(){ alert("YOUR COMPUTER IS NOW OURS!!!"); }, 100);
  }
} //mousePressed ends

//My own functions

function windowResized () {
resizeCanvas(windowWidth,windowHeight);

} // function windowResized ends

function watchingYou () {
  push();
    translate(windowWidth/2-illuminati.width/2+30,windowHeight/2-illuminati.height/2-50);
    image(illuminati,0,0);
  pop();


} //watchingYou ends

function numbers () {
  for (var x = 0; x <= windowWidth; x += 20){
    for (var y = 0; y <= windowHeight; y += 20) {
      fill(50,220,50);
      noStroke();
      textSize(15);
      text(Math.floor((Math.random()*2)), x, y);
    }
  }
} // numbers ends

function scope() {
    fill(100,100,100, 80);
    ellipse(mouseX,mouseY,sS*2,sS*2);
  push();
    stroke(0);
    fill(c);
    beginShape();
// Exterior part of shape, clockwise winding
    vertex(0, 0);
    vertex(windowWidth, 0);
    vertex(windowWidth, windowHeight);
    vertex(0, windowHeight);
// Interior part of shape, counter-clockwise winding
  if (mouseY > 0 && mouseY < windowHeight && mouseX > 0 && mouseX < windowWidth){
    beginContour();
    vertex(mouseX-sS, mouseY);
    bezierVertex(mouseX-sS, mouseY,mouseX-sS, mouseY+sS,mouseX,mouseY+sS);
    bezierVertex(mouseX,mouseY+sS, mouseX+sS, mouseY+sS,mouseX+sS,mouseY);
    bezierVertex(mouseX+sS,mouseY,mouseX+sS,mouseY-sS,mouseX,mouseY-sS);
    bezierVertex(mouseX,mouseY-sS, mouseX-sS,mouseY-sS,mouseX-sS, mouseY);
    endContour();
    }
  endShape(CLOSE);
  pop();
} // scope ends

function allClear() {
if (Clear) {
clear();
background(255);
image(no_net,-60,0);
}
} //allClear ends
