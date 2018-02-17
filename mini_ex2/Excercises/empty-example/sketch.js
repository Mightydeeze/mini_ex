var on = false; // Variable "on" is defined as false
var randomnr; // Variable "randomnr" is declared
var color = randomnr; // Variable "color" is set to "randomnr"
var boldnr = 1; // Variable "boldnr" defined as 1

// Variable "x(1-5)" is declared
var x1;
var x2;
var x3;
var x4;
var x5;

var xnum = x1;

// Variable "y(1-5)" is declared
var y1;
var y2;
var y3;
var y4;
var y5;

var ynum = y1

var speed = -10; // Variable "speed" is defined as -10
// Variable "s(1-5)" is declared
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;

function setup() { // function setup begins #1
createCanvas(500,500);
} // function setup ends #1

function draw() {  // function draw begins #2
  background('teal');
  fill('green');
  noStroke();
  rect(0,400,width,320);
if (on==false) { // if (on==false) begins #3
  translate(width/2,height/2);
  translate(-150,-35);
  noFill();
  if(mouseX<401 && mouseX>99 && mouseY<286 && mouseY>214){ // if(mouseX,mouseY) begins #4
  fill('brown');
} // if(mouseX,mouseY) ends #4

  stroke('white');
  rect(0,0,300,70);
  translate(75,0);
  textSize(60);
  fill('white');
  text('Start', 10, 60);
} // if (on==false) ends #3

if (on==true) { // if (on==true) begins #5
  stroke('black');
  fill(150);
  rect(mouseX-25,340,50,100);
  stroke(0);
  fill(50);
ellipse(mouseX,340,50,30);
randomnr = Math.floor((Math.random() * 10) + 1);

if(color == 1){
fill ('blue');
}
if(color == 2){
fill ('red');
}
if(color == 3){
fill ('pink');
}
if(color == 4){
fill ('green');
}
if(color == 5){
fill ('yellow');
}
if(color == 6){
fill ('orange');
}
if(color == 7){
fill ('cyan');
}
if(color == 8){
fill ('purple');
}
if(color == 9){
fill (175,60,20);
}
if(color == 10){
fill (40,189,0);
}
ellipse(x1,y1+s1,20,20);
ellipse(x2,y2+s2,20,20);
ellipse(x3,y3+s3,20,20);
ellipse(x4,y4+s4,20,20);
ellipse(x5,y5+s5,20,20);

s1 = s1+speed;
s2 = s2+speed;
s3 = s3+speed;
s4 = s4+speed;
s5 = s5+speed;

} // if (on==true) ends #5


} //function draw ends #2

function mousePressed() { //function mousePressed begins #

if(on==false){ // if (on==true) begins #
if(mouseX<401 && mouseX>99 && mouseY<286 && mouseY>214){ // if(mouseX,mouseY) begins #
on = !on; // Variable "on" turns from 'false' to 'true' or from 'true' to 'false'

} //if (on==false) ends #
} // if (mouseX,mouseY) ends #

if(on==true){ // if(on==true) begins #
color = randomnr;

// xnum
if(xnum==x1){ // (xnum==x1) --> x2 #
x2 = mouseX;
xnum = x2;
s2 = 0;
console.log("x2");
}
else if(xnum==x2){ // (xnum==x2) --> x3 #
x3 = mouseX+1;
xnum = x3;
s3 = 0;
console.log("x3");
}
else if(xnum==x3){ // (xnum==x3) --> x4 #
x4 = mouseX-1;
xnum = x4;
s4 = 0;
console.log("x4");
}
else if(xnum==x4){ // (xnum==x4) --> x5 #
x5 = mouseX+2;
xnum = x5;
s5 = 0;
console.log("x5");
}
else if(xnum==x5){ // (xnum==x5) --> x1 #
x1 = mouseX-2;
xnum = x1;
s1 = 0;
console.log("x1");
}


// ynum
if(ynum==y1){ // (ynum==y1) --> y2 #
y2 = 320;
ynum = y2;
console.log("y2");
}
else if(ynum==y2){ // (ynum==y2) --> y3 #
y3 = 321;
ynum = y3;
console.log("y3");
}
else if(ynum==y3){ // (ynum==y3) --> y4 #
y4 = 319;
ynum = y4;
console.log("y4");
}
else if(ynum==y4){ // (ynum==y4) --> y5 #
y5 = 322;
ynum = y5;
console.log("y5");
}
else if(ynum==y5){ // (ynum==y5) --> y1 #
y1 = 318;
ynum = y1;
console.log("y1");
}


} // if(on==true) ends #


} //function mousePressed ends #
