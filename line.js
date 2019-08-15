let phase = 0;

function setup() {
  createCanvas(900, 900);
  background("#333");
}

function draw() {
  translate(width / 2, height / 2);
  stroke(255, 255, 255, phase * 30);
  noFill();
  let t = 0;
  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.004) {
    let r = noise(t) * 600;
    let c = noise(phase);
    let x = r * cos(i * c * 10);
    let y = r * sin(c * i * 3);
    vertex(x, y);
    t += 0.01;
  }
  endShape();
  if (phase <= 2) {
    phase += 0.5;
  }
}
