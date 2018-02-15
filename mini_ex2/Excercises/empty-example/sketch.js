var on = false; // Variable "on" is defined as false

function preLoad(){
  
}

function setup() {
  // put setup code here
createCanvas(720,720);
}

function draw() {  // function draw begins
background('teal');
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
else {
fill('green');
ellipse(mouseX,mouseY,20,20);
}
} //function draw ends

function mousePressed() { //function mousePressed begins
if(on==false){ // if (on==false) begins
if(mouseX<511 && mouseX>209 && mouseY<396 && mouseY>324){ // if(mouseX,mouseY) begins
on = !on; // Variable "on" turns from 'false' to 'true' or from 'true' to 'false'
print(on);
} //if (on==false) ends
} // if(mouseX,mouseY) ends
} //function mousePressed ends
