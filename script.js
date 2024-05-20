var screen = "MENU";
var scene = 1;
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
    if (scene == 1) {
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

    if (scene == 2) {

      img1.resize(700, 750);
      image(img1, 1, 1);

      img3.resize(350, 800);
      image(img3, 350, 170);

      fill(255, 255, 255, 170);
      rect(70, 550, 350, 150);
      textSize(25);
      fill("black");
      text("ДОПОМОЖІТЬ!!!", 75, 580);
    }

    if (scene == 3) {

      img1.resize(700, 750);
      image(img1, 1, 1);

      img3.resize(350, 800);
      image(img3, 350, 170);

      fill(255, 255, 255, 170);
      rect(70, 550, 350, 150);
      textSize(25);
      fill("black");
      text("У мене вкрали каблучку!", 75, 580);
    }

    if (scene == 4) {
      img1.resize(700, 750);
      image(img1, 1, 1);

      img2.resize(500, 1000);
      image(img2, 300, 70);

      fill(255, 255, 255, 170);
      rect(70, 550, 350, 150);
      textSize(25);
      fill("black");
      text("Пані, заспокойтесь.", 75, 580);
    }
    
    if (scene == 5) {
      img1.resize(700, 750);
      image(img1, 1, 1);

      fill(255, 255, 255, 170);
      rect(90, 300, 550, 300);
      textSize(25);
      fill("black");
      text("Детектив протягує жінці в червоній сукні", 100, 380);
      text("склядку з водою.", 100, 414);
    }

    if (scene == 6) {
      img1.resize(700, 750);
      image(img1, 1, 1);

      fill(255, 255, 255, 170);
      rect(90, 300, 550, 300);
      textSize(25);
      fill("black");
      text("Дівчина приймає стакан і робить кілька", 100, 380);
      text("ковтків.", 100, 414);
    }

    if (scene == 7) {
      img1.resize(700, 750);
      image(img1, 1, 1);

      img2.resize(500, 1000);
      image(img2, 300, 70);

      fill(255, 255, 255, 170);
      rect(70, 550, 350, 150);
      textSize(25);
      fill("black");
      text("Для початку скажіть", 75, 580);
      text("як вас звати.", 75, 614);
    }

    if (scene == 8) {

    img1.resize(700, 750);
    image(img1, 1, 1);

    img3.resize(350, 800);
    image(img3, 350, 170);

    fill(255, 255, 255, 170);
    rect(70, 550, 350, 150);
    textSize(25);
    fill("black");
    text("Мене звати Рейчел.", 75, 580);
    }

    if (scene == 9) {

    img1.resize(700, 750);
    image(img1, 1, 1);

    img3.resize(350, 800);
    image(img3, 350, 170);

    fill(255, 255, 255, 170);
    rect(70, 550, 350, 150);
    textSize(25);
    fill("black");
    text("Сьогодні зранку я помітила", 75, 580);
    text("що у мене зникла", 75, 614);
    text("моя улюблена каблучка.", 75, 648);
    }

    if (scene == 10) {
      img1.resize(700, 750);
      image(img1, 1, 1);

      img2.resize(500, 1000);
      image(img2, 300, 70);

      fill(255, 255, 255, 170);
      rect(70, 550, 350, 150);
      textSize(25);
      fill("black");
      text("Вибачте, Рейчел, але я не", 75, 580);
      text("займаюся пошуками", 75, 614);
      text("звичайних каблучок.", 75, 648);
    }

    if (scene == 11) {

    img1.resize(700, 750);
    image(img1, 1, 1);

    img3.resize(350, 800);
    image(img3, 350, 170);

    fill(255, 255, 255, 170);
    rect(70, 550, 350, 150);
    textSize(25);
    fill("black");
    text("АЛЕ ЦЕ СІМЕЙНА РЕЛІКВІЯ!", 75, 580);
    }

    if (scene == 12) {

    img1.resize(700, 750);
    image(img1, 1, 1);

    img3.resize(350, 800);
    image(img3, 350, 170);

    fill(255, 255, 255, 170);
    rect(70, 550, 350, 150);
    textSize(25);
    fill("black");
    text("Вона коштує", 75, 580);
    text("мільйони доларів!", 75, 614);
    }
  }
}

function startgame() {
  screen = "GAME";
}

function mousePressed() {
  print(scene);
  if (screen == "GAME") {
    scene++;
  }
}