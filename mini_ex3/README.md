
# mini_exX:
## Time_is_patient by Frederik Ditlev Christensen
#### Screenshot of mini_ex3:
![alt text](Time.png "Are you watching closely?")
#### Short introduction:
This Project

#
#### Click to ["waste" some time](https://rawgit.com/Mightydeeze/mini_ex/mini_ex_main/mini_ex3/Excercises/empty-example/index.html)
#
#### :
"But as I argue in my book, Waiting for Word, we are looking at waiting entirely wrong. Waiting isn’t essentially a wasted in-between time; instead waiting is a core part of messages we send each other across the fiber optic lines. The time it takes to receive and interpret a message is also part of its content. We take the moment of waiting and give it meaning; it becomes a message of its own."

Taken from http://reallifemag.com/fidget-spinners/

#
#### :
Ironically, I feel like I didn't have the time to make the project the way that I wanted it to be.

Describe about your throbber design, both conceptually and technically.
What is the time-related syntax/function that you have used in your program? and why you use in this way?
Think about a throbber that you have encounted in digital culture e.g streaming video on YouTube or loading latest feeds on Facebook or waiting ticket transaction, what do you think a throbber tells us, or hide, about?
## My code:
/Time_is_patient by Frederik Ditlev Christensen

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
  #
 Best regards 
#### Frederik Ditlev Christensen


