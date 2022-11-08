function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");

const inputChange = (e) => {
  input.setAttribute("count", Number(e.currentTarget.value));
};
input.addEventListener("input", inputChange);

let baseboxSize = 30;

function createBoxes() {
  let countBox = Number(input.getAttribute("count"));
  for (let i = 0; i < countBox; i++) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
}

function destroyBoxes() {
  const allNewBoxes = document.querySelectorAll(".new-box");

  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
}
