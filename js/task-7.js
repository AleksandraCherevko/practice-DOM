const userForm = document.querySelector(".form");
userForm.classList.add("user-form-task-seven");
const colorInput = document.querySelector("#avatar-color");
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.classList.add("inputs-task-seven");
});

const label = document.querySelector("label");
label.classList.add("label-task-seven");
const createBtn = document.querySelector("button");
createBtn.classList.add("createCardBtn");

const userList = document.querySelector("#user-list");
userList.classList.add("user-list-task-seven");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = event.target;
  const nameInput = data.elements.name.value.trim();
  const ageInput = data.elements.age.value.trim();
  const colorInput = data.elements["avatar-color"].value;

  if (nameInput === "" || ageInput === "" || ageInput < 0) {
    showRedAlert("All form fields must be filled in !!!");
    return;
  }

  const cardMarkup = createCard({
    name: nameInput,
    age: ageInput,
    color: colorInput,
  });
  userList.insertAdjacentHTML("beforeend", cardMarkup);

  const deleteBtn = userList.lastElementChild.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteCard);

  userForm.reset();
}

const createCard = ({ name, age, color }) => {
  return `
      <li class="card">
      <div class="avatar" style="background-color: ${color}; border-radius: 50%; width: 30px; height: 30px;"></div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <button class='delete-btn'>Delete</button>
      </li>
    `;
};

const deleteCard = (event) => {
  const card = event.target.closest(".card");
  if (card) {
    card.remove();
  }
};

function showRedAlert(message) {
  if (document.querySelector(".red-alert-task-seven")) return;
  const alertRedBox = document.createElement("div");
  alertRedBox.classList.add("red-alert-task-seven");
  alertRedBox.textContent = message;
  document.body.appendChild(alertRedBox);

  setTimeout(() => {
    alertRedBox.classList.add("hide");
    setTimeout(() => alertRedBox.remove(), 500);
  }, 3000);
}

function showGreenalert(message) {
  if (document.querySelector(".green-alert-task-seven")) return;
  const alertRedBox = document.createElement("div");
  alertRedBox.classList.add("green-alert-task-seven");
  alertRedBox.textContent = message;
  document.body.appendChild(alertRedBox);

  setTimeout(() => {
    alertRedBox.classList.add("hide");
    setTimeout(() => alertRedBox.remove(), 500);
  }, 2000);
}
