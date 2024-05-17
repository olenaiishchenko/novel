var screen = "MENU";
var img, img1, img2, img3;

function preload() {
  img = loadImage('icon.png');
  img1 = loadImage('office.jpg');
  img2 = loadImage('MC.png');
  img3 = loadImage('lady.png');
}

function setup() {
  createCanvas(700, 750);
}

function draw() {
  background(255);

  if (screen == "MENU") {
    background(0);
    image(img, 50, 0);

    fill(mouseIsPressed && mouseX > 300 && mouseX < 400 && mouseY > 500 && mouseY < 550 ? "gray" : "white");
    rect(300, 500, 100, 50);
    textSize(20);
    fill("black");
    text("PLAY", 325, 535);

    if (mouseIsPressed && mouseX > 300 && mouseX < 400 && mouseY > 500 && mouseY < 550) {
      setTimeout(startgame, 1000);
    }
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

    if (mouseIsPressed) {
      img2 = null;
      img3.resize(100, 1000);
      image(img3, 300, 70);
    }
  }
}

function startgame() {
  screen = "GAME";
}
