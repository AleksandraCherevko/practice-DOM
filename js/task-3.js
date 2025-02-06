const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const onInput = (event) => {
  const inputValue = inputEl.value.trim();
  console.log(inputValue);
  return (outputEl.textContent = event.currentTarget.value);
};
inputEl.addEventListener("input", onInput);
