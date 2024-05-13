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
    imageSize(100)
    image(img2, 10, 10);
    
  }
}

function startgame() {
  screen = "GAME";
}