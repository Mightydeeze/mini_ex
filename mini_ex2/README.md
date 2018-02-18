# mini_ex2:
## Color_canon 1.0 by Frederik Ditlev Christensen
#### Screenshot of mini_ex2:
![alt text](fil_mangler.png "canon balls")
#### Short introduction:

#
#### Click to [Fire up the canon](https://cdn.rawgit.com/Mightydeeze/mini_ex/mini_ex_main/mini_ex2/Excercises/empty-example/index.html)
#
#### :

#
#### :

## My code:
// Color_canon 1.0 by Frederik Ditlev Christensen

//1. Variables
var shot;

var yay;

var shotcount = 0;


var on = false; // Variable "on" is defined as false

var randomnr; // Variable "randomnr" is declared


// Variable "c(1-5) is declared" (color for corresponding ellipses)

var c1;

var c2;

var c3;

var c4;

var c5;


// Variable "x(1-5)" is declared (x-positions)

var x1;

var x2;

var x3;

var x4;

var x5;


var xnum = x5; // xnum is defined as x5


// Variable "y(1-5)" is declared (y-positions)

var y1;

var y2;

var y3;

var y4;

var y5;


var ynum; // ynum is declared


var speed = -10; // Variable "speed" is defined as -10

// Variable "s(1-5)" is declared (speed for corresponding ellipses)

var s1 = 0;

var s2 = 0;

var s3 = 0;

var s4 = 0;

var s5 = 0;



// 2. Preload

function preload() { //function preload begins
  
  shot = loadSound('boing.wav');
  
  yay = loadSound('yay.mp3');
  
} //function preload ends



// 3. setup

function setup() { // function setup begins
  
createCanvas(1200,500);
  
noCursor();
  
} // function setup ends



// 4. draw

function draw() {  // function draw #1 begins
  
  background(100,170,200);
  

var x = 0

while(x <= width){ // while(x <= width) #2 begins
  
  noStroke();
  
  fill(200,100,200);
  
  rect(x,400,60,-400);
  
x = x + 120;
} // while(x <= width) #2 ends
  
  fill('yellow');
  
  noStroke();
  
  rect(0,400,width,320);
  
  stroke('black');
  
  fill(150);
  
  rect(mouseX-50,360,100,200);
  
  stroke(0);
  
  fill(50);
  
  ellipse(mouseX,360,100,30);
  
  randomnr = Math.floor((Math.random() * 10) + 1);
  
if (on==false) { // if (on==false) #3 begins
  
  translate(width/2,height/2);
  
  translate(-150,-35);
  
  noFill();
  
  if(mouseX<751 && mouseX>449){ // if(mouseX,mouseY)  #4 begins
    
  fill('lightgreen');
    
} // if(mouseX,mouseY) #4 ends
  
  stroke('white');
  
  rect(0,0,300,70);
  
  translate(75,0);
  
  textSize(60);
  
  fill('white');
  
  text('Fire!', 10, 60);
  
} // if (on==false) #3 ends

if (on==true) { // if (on==true) #5 begins
  
translate(30,400);
  
noStroke();
  
textSize(30);
  
fill('red');
  
text('Ballcount:  '+shotcount,10,60);

translate(0,-400);
  
// Color #6 begins
  
// #6.1 begins
  
if(c1 == 1){
  
fill ('blue'); 
}
  
if(c1 == 2){
  
fill ('red');
}
  
if(c1 == 3){
  
fill ('pink'); 
}
  
if(c1 == 4){
  
fill ('green');
}
  
if(c1 == 5){
  
fill ('yellow'); 
}
  
if(c1 == 6){
  
fill ('orange'); 
}
  
if(c1 == 7){
  
fill ('cyan'); 
}
  
if(c1 == 8){
  
fill ('purple'); 
}
  
if(c1 == 9){
  
fill (175,60,20);
}
  
if(c1 == 10){
  
fill (40,189,0);
  
}
  
ellipse(x1,y1+s1,20+randomnr*randomnr,20+randomnr*randomnr);
  
// #6.1 ends

// #6.2 begins
  
if(c2 == 1){
  
fill ('blue');
  
}
if(c2 == 2){
  
fill ('red');
}
if(c2 == 3){
  
fill ('pink');
}
  
if(c2 == 4){
  
fill ('green');
}
  
if(c2 == 5){
  
fill ('yellow');
}
  
if(c2 == 6){
  
fill ('orange');
}
  
if(c2 == 7){
  
fill ('cyan');
}
  
if(c2 == 8){
  
fill ('purple');
}
  
if(c2 == 9){
  
fill (175,60,20);
}
  
if(c2 == 10){
  
fill (40,189,0);
}
  
ellipse(x2,y2+s2,20+randomnr*randomnr,20+randomnr*randomnr);
  
// #6.2 ends

// #6.3 begins
if(c3 == 1){
  
fill ('blue');
}
  
if(c3 == 2){
  
fill ('red');
}
  
if(c3 == 3){
  
fill ('pink');
}
  
if(c3 == 4){
  
fill ('green');
}
  
if(c3 == 5){
  
fill ('yellow');
}
  
if(c3 == 6){
  
fill ('orange');
}
  
if(c3 == 7){
  
fill ('cyan');
}
  
if(c3 == 8){
  
fill ('purple');
}
  
if(c3 == 9){
  
fill (175,60,20);
}
  
if(c3 == 10){
  
fill (40,189,0);
}
  
ellipse(x3,y3+s3,20+randomnr*randomnr,20+randomnr*randomnr);
  
// #6.3 ends

// #6.4 begins
  
if(c4 == 1){
  
fill ('blue');
}
  
if(c4 == 2){
  
fill ('red');
}
  
if(c4 == 3){
  
fill ('pink');
}
  
if(c4 == 4){
  
fill ('green');
}
  
if(c4 == 5){
  
fill ('yellow');
}
  
if(c4 == 6){
  
fill ('orange');
}
  
if(c4 == 7){
  
fill ('cyan');
}
  
if(c4 == 8){
  
fill ('purple');
}
  
if(c4 == 9){
  
fill (175,60,20);
}
  
if(c4 == 10){
  
fill (40,189,0);
}
  
ellipse(x4,y4+s4,20+randomnr*randomnr,20+randomnr*randomnr);
  
// #6.4 ends

// #6.5 begins
  
if(c5 == 1){
  
fill ('blue');
}
  
if(c5 == 2){
  
fill ('red');
}
  
if(c5 == 3){
  
fill ('pink');
}
  
if(c5 == 4){
  
fill ('green');
}
  
if(c5 == 5){
  
fill ('yellow');
}
  
if(c5 == 6){
  
fill ('orange');
}
  
if(c5 == 7){
  
fill ('cyan');
}
  
if(c5 == 8){
  
fill ('purple');
}
  
if(c5 == 9){
  
fill (175,60,20);
}
  
if(c5 == 10){
  
fill (40,189,0);
}
  
ellipse(x5,y5+s5,20+randomnr*randomnr,20+randomnr*randomnr);
  
// #6.5 ends

// Speed is key
  
s1 = s1+speed;
  
s2 = s2+speed;
  
s3 = s3+speed;
  
s4 = s4+speed;
  
s5 = s5+speed;

} // if (on==true) #5 ends

} //function draw #1 ends



//5. mousepressed

function mousePressed() { //function mousePressed #7 begins
  
if(on==false){ // if (on==false) #8 begins
  
if(mouseX<751 && mouseX>449){ // if(mouseX,mouseY) #9 begins
  
on = !on; // Variable "on" turns from 'false' to 'true' or from 'true' to 'false'
  
} //if (on==false)  #8 ends
  
} // if (mouseX,mouseY) #9 ends
  

if(on==true){ // if(on==true) #10 begins
  
shot.play();
  
shotcount = shotcount +1;
  
if(shotcount % 100 == 0){
  
yay.play();
}
  
// Changing x,y,s and c-values to get multiple ellipses #11 begins
  
// #11.1 begins
  
if(xnum==x1){
  
x2 = mouseX;
  
xnum = x2;
  
s2 = 0;
  
y2 = 320;
  
ynum = y2;
  
c2 = randomnr;
  
console.log("2");
  
} // #11.1 ends
  
// #11.2 begins
  
else if(xnum==x2){
  
x3 = mouseX+1;
  
xnum = x3;
  
s3 = 0;
  
y3 = 320;
  
ynum = y3;
  
c3 = randomnr;
  
console.log("3");
  
}// #11.2 ends
  
// #11.3 begins
  
else if(xnum==x3){
  
x4 = mouseX-1;
  
xnum = x4;
  
s4 = 0;
  
y4 = 320;
  
ynum = y4;
  
c4 = randomnr;
  
console.log("4");
  
}// #11.3 ends
  
// #11.4 begins
  
else if(xnum==x4){
  
x5 = mouseX+2;
  
xnum = x5;
  
s5 = 0;
  
y5 = 320;
  
ynum = y5;
  
c5 = randomnr;
  
console.log("5");
  
}// #11.4 ends
  
// #11.5 begins
  
else if(xnum==x5){
  
x1 = mouseX-2;
  
xnum = x1;
  
s1 = 0;
  
y1 = 320;
  
ynum = y1;
  
c1 = randomnr;
  
console.log("1");
  
}// #11.5 ends
  
// #11 ends

} // if(on==true) #10 ends

} //function mousePressed #7 ends
  #
 Best regards 
#### Frederik Ditlev Christensen
