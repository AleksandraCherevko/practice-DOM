const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.classList.add("input-task-three");
outputEl.classList.add("output-task-three");
const helloTitle = document.querySelector("h1");
helloTitle.classList.add("hello-title-task-three");

const inputDiv = document.createElement("div");
inputDiv.classList.add("input-container-task-three");
inputDiv.append(inputEl, helloTitle);

document.body.append(inputDiv);

const onInput = (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
};
inputEl.addEventListener("input", onInput);
