const createBtn = document.querySelector("[data-create]");
createBtn.classList.add("submitBtn-task-four");
const deleteBtn = document.querySelector("[data-destroy]");
deleteBtn.classList.add("deleteBtn-task-six");
const controls = document.querySelector("#controls");
const input = document.querySelector("input");
input.classList.add("input-task-four");
const boxes = document.querySelector("#boxes");
let width = 30;
let height = 30;

createBtn.addEventListener("click", checkClick);
function checkClick(event) {
  let amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    input.value = "";
    return;
  }
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const divBox = document.createElement("div");
    divBox.style.width = width + 10 * i + "px";
    divBox.style.height = width + 10 * i + "px";
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.margin = "5px";
    boxes.append(divBox);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

deleteBtn.addEventListener("click", deleteBoxes);
function deleteBoxes(event) {
  boxes.innerHTML = "";
  input.value = "";
}
