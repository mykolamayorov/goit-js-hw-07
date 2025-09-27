function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert("Please enter a number from 1 to 100");
    return;
  }

  destroyBoxes();

  createBoxes(amount);

  input.value = "";
}

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
