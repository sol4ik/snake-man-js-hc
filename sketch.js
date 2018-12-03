const a = 640;
const b = 640;
const s = 20;
let x = 120;
let y = 140;
let d = [0, 1];
const c = 20;
const r = 11; //reduce this number to make snake slower
let f = [50, 65];
let t = [
  [x - c, y],
  [x - 2 * c, y]
];


function setup() {
  createCanvas(a, b);
  frameRate(r);
  generatef();
}

function draw() {
  background('white');
  background('hsl(160, 100%, 50%)');
  const snakeColor = color('hsb(160, 100%, 50%)');

  fill(snakeColor);
  rect(x, y, s, s);
  for (let i = 0; i < t.length; i++) {
    rect(t[i][0], t[i][1], s, s);
  }

  for (let i = t.length - 1; i >= 1; i--) {
    arrayCopy(t[i - 1], t[i]);
  }
  arrayCopy([x, y],t[0]);

  x = x + d[0] * c;
  y = y + d[1] * c;

  if (x === 640 || x === 0 || y === 640 || y === 0) {
    window.location.href = "gameOver.html";
  }

  for (let i = 0; i < t.length; i++) {
    if (x === t[i][0] && y === t[i][1]) {
      window.location.href = "gameOver.html";
    }
  }

  fill("red");
  rect(f[0], f[1],s, s);

  if (t[t.length - 1][0] === f[0] && t[t.length - 1][1] === f[1]) {
    t.push(f);
    generatef();
  }
}

function generatef() {
  f = [floor(random(1, (a - 20) / c)) * c, floor(random(1, (b - 20) / c)) * c];
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    d = [-1, 0];
  }  else if (keyCode === RIGHT_ARROW) {
    d = [1, 0];
  } else if (keyCode === UP_ARROW) {
    d = [0, -1]
  } else if (keyCode === DOWN_ARROW) {
    d = [0, 1];
  }
}
