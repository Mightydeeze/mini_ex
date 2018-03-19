// Babble_mouth by Frederik Ditlev Christensen
// variables borrowed from Daniel Shiffman
var xoff = 0;
var inc = 0.1;
var x;
// variables concerning text
var who = ['I', 'You','He', 'She','It','We','They'];
var does = // 50 most used english verbs according to a list I found
['ask','','become','begin','call', // the blank '' = am/is/are
'can','come','could','do', 'feel',
'find','get','give','go','ha', // 'ha' = have/has
'hear','help','keep','know','leave',
'let','like','live','look','make',
'may','mean','might','move','need',
'play','put','run','say','see',
'seem','should','show','start','take',
'talk','tell','think','try','turn',
'use','want','will','work','would'];
var w = Math.floor((Math.random() * 7)); // w like who
var d = Math.floor((Math.random()*50)); // d like does
var ending = ''; // ending of the word
var timer = 0;
var ranTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
} // function setup ends

function draw() {
  background(random(45,51));
  shapes();
  textGenerate();
} // function draw ends

function shapes(){
  //orange rectangle
  fill(250,140,random(80));
  strokeWeight(5);
  stroke(random(245,255));
  rect(0,windowHeight/5,windowWidth,windowHeight/2);
  //ellipse in middle
  xoff += inc;
  x = map(noise(xoff), 0, 1, 0, width); // using noise() to dynamicly change the size of the ellipse
  strokeWeight(5);
  stroke(random(245,255),50,50);
  fill(0);
  ellipse( random(windowWidth/2-1,windowWidth/2), random(windowHeight/2-5, windowHeight/2+5), x/4*3, 18*windowHeight/x);
} // function shapes ends

function textGenerate() {
  //text layout
  stroke(255);
  fill(40,40,random(200,220));
  strokeWeight(2);
  textSize((windowWidth*windowHeight)/10000);
  textAlign(CENTER);
// Grammar: Congruence
  if(d == 1){ // am/is/are
    if(w == 0)
    {ending = 'am';}
    else if(w == 2 || w == 3 || w == 4)
    {ending = 'is';}
    else{ending = 'are';}
  }
  else if(d == 14){ // have/has
    if(w == 0 || w == 1 || w == 5 || w == 6)
    {ending = 've';}
    else{ending = 's';}
  }
  else if(d == 5 || d == 7 || d == 25 || d == 27 || d == 36 || d == 47 || d == 49) // words with no changed endings
  {ending = '';}
  else if(d == 8 || d == 13 || d == 43){ // words with 'es' endings in third person
    if(w == 2 || w == 3 || w == 4)
    {ending = 'es';}
    else{ending = '';}
  }
  else if(w == 2 || w == 3 || w == 4)
  {ending = 's'; }
  else{ending = '';}

  timer = timer +1;
  if(timer == 35 - ranTime){
    w = Math.floor((Math.random() * 7));
    d = Math.floor((Math.random()*50));
    timer = 0;
    ranTime = Math.floor((Math.random()*20));
  }
  // the text get executed
  text(who[w] + ' ' + does[d] + ending, windowWidth/2, 2*windowHeight/3+windowHeight/5);
} // function textGenerate ends

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
} // function windowResized ends
