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
function hexToRgba(hex, alpha = 1) {
  hex = hex.replace(/^#/, "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

btn.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  const rgbaColor = hexToRgba(hexColor, 0.5);

  body.style.backgroundColor = rgbaColor;
  colorSpan.textContent = rgbaColor;
});
