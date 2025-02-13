const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
form.classList.add("form-task-four");

const submitBtn = document.querySelector("button");
submitBtn.classList.add("submitBtn-task-four");

const labels = document.querySelectorAll("label");
labels.forEach((label) => {
  label.classList.add("label-task-four");

  const div = document.createElement("div");
  div.classList.add("label-wrapper-task-four");

  label.parentNode.insertBefore(div, label);
  div.appendChild(label);
});

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.classList.add("input-task-four");
});

function handleSubmit(event) {
  event.preventDefault();

  const loginForm = event.target;
  const login = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (login === "" || password === "") {
    showCustomAlert("All form fields must be filled in !!!");
    return;
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

function showCustomAlert(message) {
  if (document.querySelector(".alert-task-four")) return;

  const alertBox = document.createElement("div");
  alertBox.classList.add("alert-task-four");
  alertBox.textContent = message;

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.classList.add("hide");
    setTimeout(() => alertBox.remove(), 500);
  }, 3000);
}
