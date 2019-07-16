let angle = 1;
let x = 100;
let y = 0;
let c, bgc;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
}

function cica() {
  console.log("cica");
  fill(200, 100, 30);
  ellipse(30, 40, 30);
}

function draw() {
  noFill();
  push();
  rotate(angle / 10);
  translate(-80, -100);
  bgc = color(180);
  background(bgc);
  for (i = 5; i <= 40; i++) {
    c = color(2 + i * 5, 50, 100);

    rotateX(angle / 100);
    stroke(c);
    translate(i / 80, i / 5);
    rotateY(angle / 50);
    curve(
      200,
      10 * i,
      40,
      80,
      5 * i,
      -4 * i,
      -50,
      i*4,
      200,
      60 * i,
      -600,
      -34,
      300 * i,
      40, 40, i*10
    );
  }

  console.log(x, y);
  // translate(10, 10);
  // translate(x, y);
  // rotate(angle);
  // stroke("white");
  // line(0, 0, x / 2, y / 2);
  // translate(x / 2, y / 2);
  // rotate(angle);
  // stroke("#444");
  // line(0, 0, x / 3, y / 3);
  // translate(x / 3, y / 3);
  // rotate(angle);
  // stroke("#444");
  // line(0, 0, x, y);
  pop();
  angle = angle + 1;
}
