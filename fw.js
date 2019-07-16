let angle = 0;
let x = 100;
let y = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background("#f4baba");
  push();
  translate(10, 10);
  rotate(angle);
  stroke(20);
  line(x, y, 0, 0);
  translate(x, y);
  rotate(angle);
  stroke("white");
  line(0, 0, x, y);
  translate(x, y);
  rotate(angle);
  stroke("#444");
  line(0, 0, x, y);
  translate(x, y);
  rotate(angle);
  stroke("#444");
  line(0, 0, x, y);
  pop();

  angle = angle + 1;
}
