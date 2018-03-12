//Shape_invaders by Frederik Ditlev Christensen

// Variables concerning the state of the game
var gameState;
var stateCheck;
var indeks;

// Variables concerning layout
var gameBackground;
var gameSurface;
var gameSurfaceWidth;
var gameSurfaceHeight;
var canvasWidth;
var canvasHeight;

// Variables concerning player
var player;
var playerX = 280;
var playerY = 340;
var playerSpeed = 5;
var bulletSpeed = -5;
var score = 0;
let bullets = [];


// Variables concerning obstacles
var obstacleSpeed = 3;
var obstacles = [];
var obsTimer = 0;

function setup() {
  canvasWidth = 800;
  canvasHeight = 500;
  createCanvas(canvasWidth,canvasHeight);
  gameSurfaceWidth = 600;
  gameSurfaceHeight = 400;
  indeks = 0;
  gameState = ['gameMenu', 'gameOn', 'gameOver'];
  stateCheck = gameState[indeks];

/*
  for (var i = 0; i < 40; i++) {
    obstacles[i] = new obstacle();
  }
*/

} // function setup ends

function draw() {
  background(50);
  update();

//  console.log(obsTimer);

} // function draw ends

function update() {
  middleScreen();
  if(indeks == 0) {
    gameMenu();
  }
  if(indeks == 1) {
    gameObjects();
    playerMove()
  }
  if(indeks == 2) {
    lost();
  }
} // function update ends

function middleScreen() { // Layout - middle screen
push();
  translate(canvasWidth/2-gameSurfaceWidth/2, canvasHeight/2-gameSurfaceHeight/2)
  stroke(255);
  strokeWeight(4);
// setting gameBackground depending on gameState
  if(indeks == 0) {
    gameBackground = color(100,200,200);
  }
  else if(indeks == 1) {
    gameBackground = color(100,200,200);
  }
  else if(indeks == 2) {
    gameBackground = color(0);
  }
  fill(gameBackground);
  gameSurface = rect(0,0,gameSurfaceWidth,gameSurfaceHeight);
pop();
} // function middleScreen ends

function gameMenu() {
  push();
    translate(canvasWidth/2-gameSurfaceWidth/2, canvasHeight/2-gameSurfaceHeight/2);
    stroke(255);
    strokeWeight(4);
    fill(80,180);
    rect(150,300,300,80);
    fill('red');
    textSize(40);
    text('Press Space',185,350);
  pop();
} // function gameMenu ends

class bullet {
constructor(bulx,buly,bulr) {
  this.x = bulx;
  this.y = buly;
  this.r = bulr;
  } // constuctor ends
move() {
  this.y = this.y + bulletSpeed;
  }
show() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(this.x, this.y, this.r*2);
  }
} // class bullet ends

// spacebar pressed - shoot the bullets
function keyPressed() {
  if(key == ' ') {
    if(indeks == 0) {
      indeks = indeks+1;
      stateCheck = gameState[indeks];
      playerX = 280;
      playerY = 340;
    }
    if(indeks == 1) {
      let bulr = 3;
      let b = new bullet(playerX, playerY, bulr);
      bullets.push(b);
    }
    if(indeks==2) {
      indeks = 0;
      stateCheck = gameState[indeks];
    }
    console.log(indeks);
  }
} // function keyPressed ends

class obstacle {
  constructor(obsx,obsy,obsr) {
    this.x = obsx;
    this.y = obsy;
    this.r = obsr;
    } // constuctor ends
  move() {
    this.y = this.y + obstacleSpeed;

    if (this.y > 375) {
      this.y = random(-50, -100);
      this.x = random(15,575);
    }
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(20);
    ellipse(this.x, this.y, this.r*2);
    }
} // class obstacle ends

function spawnObstacle() {
    obsTimer += 1;
  if(obsTimer % 60 == 0) {
    let obsr = random(10,20);
    let obsx = random(15,575);
    let obsy = random(-50,-100);
    let o = new obstacle(obsx,obsy,obsr);
    obstacles.push(o);
  }
} // function spawnObstacle


function gameObjects() {
push();
  translate(canvasWidth/2-gameSurfaceWidth/2, canvasHeight/2-gameSurfaceHeight/2);
  player = createSprite(playerX,playerY,40,40);
  for ( let bullet of bullets) {
    if(bullet.y > 5){
      bullet.move();
      bullet.show();
      hits();
    }
  }
  for ( let obstacle of obstacles) {
    if(obstacle.y < 375){
     obstacle.move();
     obstacle.show();
    }
  }

  drawSprite(player);
  spawnObstacle();
  text(score,20,20);
pop();
} // function gameObjects ends

function hits (obstacle) {
  for (let obstacle of obstacles){
  for (let bullet of bullets){
  for(var i = bullets.length - 1; i >= 0; i--){
  for(var j = obstacles.length - 1; j >= 0; j--){
    var d = dist(bullet.x,bullet.y,obstacle.x,obstacle.y);
      if (d < bullet.r + obstacle.r) {
        console.log('hit');
        bullets.splice(i,1);
        obstacles.splice(j,1);
        score = score + 1;
      }
  }
  }
  }
  }
} // this.hits = function ends

function playerMove() {
  if (keyIsDown(83) && playerY<375) { // 's' for down
     playerY += playerSpeed;
     }
 if (keyIsDown(87) && playerY>25) { // 'w' for up
     playerY -= playerSpeed;
     }
 if (keyIsDown(65) && playerX>25) { // 'a' d for left
     playerX -= playerSpeed;
     }
 if (keyIsDown(68) && playerX<575) { // 'd' for right
     playerX += playerSpeed;
     }
} // function playerMove ends

function lost() {
  push();
    translate(canvasWidth/2-gameSurfaceWidth/2, canvasHeight/2-gameSurfaceHeight/2);
    stroke(255);
    strokeWeight(4);
    fill('red');
    textSize(40)
    text('You lost the game!', 140,200);
  pop();
}// function lost ends
