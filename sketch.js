var balloon, balloonImage, background, backgroungImage;

function preload() {
backgroundImage = loadImage("images/HotAirBalloon-01.png");
balloonImage = loadAnimation("images/HotAirBalloon-02.png","images/HotAirBalloon-03.png","images/HotAirbBalloon-04.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  balloon = createSprite(100, 400, 20, 20);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;
}

function draw() {
  background(backgroungImage);

if (keyDown(LEFT_ARROW)) {
  balloon.X = balloon.X -10;
}

if (keyDown(RIGHT_ARROW)) {
  balloon.X = balloon.X +10;
}

if (keyDown(UP_ARROW)) {
  balloon.Y = balloon.Y -10;
}

if (keyDown(DOWN_ARROW)) {
  balloon.Y = balloon.Y +10;
}

  drawSprites();
}