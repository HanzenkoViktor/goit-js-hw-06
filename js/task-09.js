function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button");
button.addEventListener("click", changeColor);

const colorSpan = document.querySelector(".color");
function changeColor() {
  const backgraundColor = getRandomHexColor();
  colorSpan.textContent = backgraundColor;
  document.body.style.background = backgraundColor;
}
