var screen = "MENU";
var button;
var img, img1, img2;

function preload() {
  img = loadImage('icon.png');
  img1 = loadImage('office.jpg');
  img2 = loadImage('MC.png');
}

function setup() {
  createCanvas(700, 750);
}

function draw() {
  background(255);
  if (screen == "MENU") {
    background(0)
    image(img, 50, 0);

    if (mouseIsPressed) {
      fill("gray");
      setTimeout(startgame, 1000)
    } else {
      fill("white");
    }
     rect(300, 500, 100, 50);
     textSize(20);
    fill("black");
     text("PLAY", 325, 535);
    
  } else {
    background(255);
    image(img1, 1, 1);
    img1.resize(700, 750);
    image(img2, 300, 70);
    img2.resize(500, 1000);

    fill(255, 255, 255, 170);
    rect(70, 550, 350, 150);
    textSize(25);
    fill("black");
    text("*Скаржиться на свою роботу*", 75, 580);

    if (mouseIsPressed) {
      setTimeout(startgame, 1000)
      img2 = null;
  } else if (screen == "GAME") {
      background(255);
      img1.resize(700, 750);
      image(img1, 1, 1);
      img2.resize(500, 1000);
      image(img2, 300, 70);

      fill(255, 255, 255, 170);
      rect(70, 550, 350, 150);
      textSize(25);
      fill("black");
      text("*Скаржитися на свою роботу*", 75, 580);
    }
}

function startgame() {
  screen = "GAME";
}