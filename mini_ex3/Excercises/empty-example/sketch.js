//Time_is_patient by Frederik Ditlev Christensen
//Variables
var secspeed = 0;
var minspeed = 0;
var hrspeed = 0;
var i = 0;
var count = 0;
var texts = ['"Are you watching closely?"',
'"Time flies like an arrow; fruit flies like a banana."',
 '"It is the time you have wasted for your rose that makes your rose so important."',
 '"Don`t waste your time with explanations: people only hear what they want to hear."' ,
 '"Don`t spend time beating on a wall, hoping to transform it into a door."',
 '"Time is the longest distance between two places."',
 '“They always say time changes things, but you actually have to change them yourself.”',
 '“They say time heals all wounds, but that presumes the source of the grief is finite”',
 '“A man who dares to waste one hour of time has not discovered the value of life.”',
 '“Time is an illusion.”'];

function setup() {
 createCanvas(windowWidth, windowHeight);
frameRate (60);
angleMode(DEGREES);

}


function draw() {
translate(windowWidth/2,windowHeight/2);
background(200,100,100);

// Clock
push();
rotate(-hrspeed*2);
strokeWeight(8);
stroke('black');
point(0,0);
fill(230,190,110);
rect(-20,-100,40,-30)
ellipse(0,0,200,200);
noStroke();
fill(250);
ellipse(0,0,170,170)
strokeWeight(4);
stroke('black');
line (0,-100,0,-80);
line (-100,0,-80,0);
line (0,100,0,80);
line (100,0,80,0);

//Arrow - hours
push();
rotate(hrspeed);
strokeWeight(6);
stroke(200,230,230);
line(0,0,0,-60)
fill('brown');
hrspeed -= 4;
pop();

//Arrow - minutes
push();
rotate(minspeed);
strokeWeight(6);
stroke(200,230,230);
line(0,0,0,-80)
minspeed = hrspeed/1.5;
pop();

//Arrow - seconds
push();
rotate(secspeed);
strokeWeight(3);
stroke('red');
line(0,0,0,-80)
secspeed = minspeed/2;
pop();
pop();

showText();
counter();
} //function draw ends

function showText () {
  stroke(0,0,0,150);
  fill(255,255,255,150);
  textSize(20);
  text(texts[i], -windowWidth/3,windowHeight/4);
  if ( i == 11 )
  {i = 0;}
} // function showText ends

function counter () {
count = count + 1;
if(count==1000 && i < 9){
i = i + 1
count = 0;
} else if (count==1000 && i == 9) {
i = 0;
count = 0;
}

} // function counter ends

function windowResized () {
resizeCanvas(windowWidth,windowHeight);

} // function windowResized ends
