const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
btn.classList.add("submitBtn-task-four");
const colorSpan = document.querySelector(".color");
const div = document.querySelector(".widget");
div.classList.add("div-task-five");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
