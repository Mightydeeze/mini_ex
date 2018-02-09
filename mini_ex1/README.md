# mini_ex1 - Alternative Abstract Solarsystem by Frederik Ditlev Christensen
#### Screenshot of mini_ex1:
![alt text](mini_ex1.3.png "Alternative Abstract Solarsystem")
#### Short introduction:
The following project is a virtual representation of floating spheres in an open space. It might look to you as a solar system of some kind - in this case my work has succeeded. The spheres are comepletely still while the camera is moving slowly in a sinus curve which makes it seem like the spheres are moving although they are not.
#
To see my work click down bellow.
#### [Space](http://rawgit.com/Mightydeeze/mini_ex/mini_ex_main/mini_ex1/Excercises/empty-example/index.html)
#
## The used code:
#### function setup() {
  
  createCanvas(1600, 1000, WEBGL);
  
  var fov = 60 / 180 * PI;
  
  var cameraZ = height / 2.0 / tan(fov / 2.0);
 
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10); }
  
#### function draw() {

  background('brown');

  for (var i = -1; i < 20; i++) {
  
  for (var j = -2; j < 20; j++) {
   
  push();
   
  translate(i * 160, 0, j * 150);
   
  c = color('#222222');
   
  fill(c); 
   
  noStroke();
   
  sphere(5, 40, 40);
   
  pop();
   
  camera(750, 10, sin(frameCount * 0.0009) * 600, 0, -200, 200, 0, 4, 0);
  
  var c = color('orange'); 
  
  fill(c); 
  
  noStroke(); 
  
sphere(150);

    }
  
  }
  #
#### My code process:
This coding process has been my first of many to come, and because of this I didn't really structurerize my steps from the beginning till the end as I did not know much about the possibilities of P5.js at this state. In the beginning I was just fascinated by the idea of working with 3D modelling in a webbrowser which led the to end result. In the beginning I searched the internet for car models in the format of objects (obj.) as this format is understandable by p5.js. Unfortunately I had a tough time finding cars so I decided to use more common shapes that would not need to be imported. 
#
#### The steps in making the program (sort of):
My next thought became to make a fully functional solar system with planets in orbit, but I simply couldn't find the right formulars so I came up with other alternatives. I began with a copy of the function ['perspective()'](https://p5js.org/reference/#/p5/perspective), changed the boxes to spheres and modified the numbers to make more rows and bigger spaces between them. Then I deleted the 'OrbitControl();' as I didn't want the viewer to control the angle of perspective

Describe your first independent coding process (in relation to thinking, reading, copying, modifying, writing, uploading, sharing, commenting code)




How your coding process is differ or similar to reading and writing text? (You may also reflect upon Annette Vee's text on coding literacy)
What might be the potential and possibility of coding practice?



First you describe what is the work, what are the elements in the work? like what you have seen, what you have experienced and what syntax he/she has used.


What is the emphasis? What does the work express? What does this work say or mean to you? How would you interpretethe work?
Do you like this program, and Why? and which aspect do you like the most?
Provide suggestion for improvement or expansion of the program





