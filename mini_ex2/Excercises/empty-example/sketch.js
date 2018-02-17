var on = false; // Variable "on" is defined as false
var randomnr; // Variable "randomnr" is declared

// Variable "x(1-5)" is declared
var x1;
var x2;
var x3;
var x4;
var x5;

// Variable "y(1-5)" is defined as 490
var y1 = 490;
var y2 = 490;
var y3 = 490;
var y4 = 490;
var y5 = 490;

var speed = -10; // Variable "speed" is defined as -10
var color = randomnr; // Variable "color" set to "randomnr"
var boldnr = 1;
var ec1;
var ec2;
var ec3;
var ec4;
var ec5;


function setup() {
  // put setup code here
createCanvas(720,720);
ec1 = ellipse(x1,y1+speed,20,20);
ec2 = ellipse(x2,y2+speed,20,20);
ec3 = ellipse(x3,y3+speed,20,20);
ec4 = ellipse(x4,y4+speed,20,20);
ec5 = ellipse(x5,y5+speed,20,20);
}

function draw() {  // function draw begins
background('teal');
fill('green');
noStroke();
rect(0,450,720,320);
if (on==false) { // if (on==false) begins
translate(width/2,height/2);
translate(-150,-35);
noFill();
if(mouseX<511 && mouseX>209 && mouseY<396 && mouseY>324){ // if(mouseX,mouseY) begins
fill('brown');
} // if(mouseX,mouseY) ends

stroke('white');
rect(0,0,300,70);
translate(75,0);
textSize(60);
fill('white');
text('Start', 10, 60);
} // if (on==false) ends

if(on==true) { // if (on==true) begins
stroke('black');
fill(150);
rect(mouseX-25,500,50,120);
stroke(0);
fill(50);

if(boldnr == 1){
ec1;
}
if(boldnr == 2){
ec2;
}
if(boldnr == 3){
ec3;
}
if(boldnr == 4){
ec4;
}
if(boldnr == 5){
ec5;
}
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
ellipse(mouseX,500,50,30);

randomnr = Math.floor((Math.random() * 10) + 1);

y1 = y1 + speed;
y2 = y2 + speed;
y3 = y3 + speed;
y4 = y4 + speed;
y5 = y5 + speed;

} // if (on==true) ends

} //function draw ends

function mousePressed() { //function mousePressed begins
if(on==true){ // if (on==true) begins
x = mouseX;
y1 = 490;
y2 = 490;
y3 = 490;
y4 = 490;
y5 = 490;
farve = randomnr;
if(boldnr == 1){
  boldnr = 2;
  ec1 = ellipse(x1,y1+speed,20,20);
}
else if(boldnr == 2){
  boldnr = 3;
  ec2 = ellipse(x2,y2+speed,20,20);
}
else if(boldnr == 3){
  boldnr = 4;
  ec3 = ellipse(x3,y3+speed,20,20);
}
else if(boldnr == 4){
  boldnr = 5;
  ec4 = ellipse(x4,y4+speed,20,20);
}
else if (boldnr == 5){
  boldnr = 1;
  ec5 = ellipse(x5,y5+speed,20,20);
}
print(boldnr);
} // if (on==true) ends

if(on==false){ // if (on==false) begins
if(mouseX<511 && mouseX>209 && mouseY<396 && mouseY>324){ // if(mouseX,mouseY) begins
on = !on; // Variable "on" turns from 'false' to 'true' or from 'true' to 'false'
} //if (on==false) ends

} // if(mouseX,mouseY) ends
} //function mousePressed ends
