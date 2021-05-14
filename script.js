var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + `;`;
}

window.onload = setGradient();

function getGradientInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomGradient() {
  let r1 = getGradientInt(256);
  let b1 = getGradientInt(256);
  let g1 = getGradientInt(256);
  let r2 = getGradientInt(256);
  let b2 = getGradientInt(256);
  let g2 = getGradientInt(256);
  let randomGradient = `linear-gradient(to right, rgb(${r1},${b1},${g1}), rgb(${r2},${b2},${g2}))`;
  body.style.background = randomGradient;
  randomBtn.style.background = randomGradient;
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", getRandomGradient);
