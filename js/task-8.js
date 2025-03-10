// Цель:
// Реализовать интерактивный список задач (To-Do List) с возможностью добавления, удаления и отметки выполненных задач, используя чистый JavaScript и методы работы с DOM.

// Требования к функционалу:
// Добавление задач

// Ввод задачи в текстовое поле и добавление в список по нажатию кнопки "Добавить".
// Очистка текстового поля после добавления.
// Отметка выполненных задач

// При клике на задачу она помечается как выполненная (например, через зачеркивание текста или смену цвета).
// Повторный клик снимает отметку.
// Удаление задач

// Каждая задача должна иметь кнопку удаления.
// По нажатию на кнопку задача удаляется из списка.
// Сохранение списка

// Список задач должен сохраняться в localStorage и загружаться при перезагрузке страницы.
// Требования к реализации:
// Использовать только Vanilla JavaScript, без библиотек и фреймворков.
// Реализовать манипуляции с DOM через document.createElement(), appendChild(), removeChild(), classList.add/remove, addEventListener().
// Использовать делегирование событий при работе со списком задач.
// Код должен быть чистым, читабельным и структурированным.
// Дополнительные условия (по желанию):
// Анимация появления/удаления задач.
// Фильтрация задач (все, выполненные, невыполненные).
// Поддержка drag-and-drop для изменения порядка задач.
// Результат:
// Интерактивный список задач с основными функциями, работающий без перезагрузки страницы.

const todoForm = document.querySelector("#todo-list-form");
todoForm.classList.add("form-task-eight");
const textarea = document.querySelector("#task");
textarea.classList.add("inputs-task-eight");

const topicarea = document.querySelector("#topic");
topicarea.classList.add("inputs-task-eight");

const deadlinearea = document.querySelector("#deadline");
deadlinearea.classList.add("inputs-task-eight");

const bodyTaskEight = document.querySelector("body");
bodyTaskEight.classList.add("body-task-eight");

const checkBoxForm = document.querySelector(".checkbox");

todoForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const topicInput = event.target.elements.topic.value.trim();
  const taskInput = event.target.elements.task.value.trim();
  const deadlineInput = event.target.elements.deadline.value.trim();
  const deadlineDate = new Date(deadlineInput);
  const now = new Date();
  if (!topicInput) {
    showAlert("Enter topic of your task");
    return;
  } else if (!taskInput) {
    showAlert("Enter your task");
    return;
  } else if (!deadlineInput) {
    showAlert("Choose date and time for your deadline");
    return;
  } else if (isNaN(deadlineDate.getTime()) || deadlineDate <= now) {
    showAlert("Check date and time correct format");
    return;
  }

  const createMarkup = createTaskCard({
    topic: topicInput,
    task: taskInput,
    deadline: deadlineInput,
  });

  checkBoxForm.insertAdjacentHTML("beforeend", createMarkup);

  const taskCard = checkBoxForm.lastElementChild;
  const deleteCardBtn = taskCard.querySelector(".delete-task-btn");
  deleteCardBtn.addEventListener("click", deleteTaskCard);

  todoForm.reset();
}

const createTaskCard = ({ topic, task, deadline }) => {
  return `
   <div class='task-card'> 
   <input class='checkbox-input' type="checkbox" id="vehicle1" name="vehicle1" >
     <label class='topic-label' for="vehicle1"><strong>${topic}</strong></label><br>
     <p><strong>My task:</strong> ${task}</p>
      <p><strong>Deadline:</strong> ${deadline}</p>
      <button class='delete-task-btn'>Delete task</button>
   </div>`;
};

const inlineTaskCard = (event) => {
  const checkbox = event.target;
  const labelTopic = checkbox.nextElementSibling;

  if (checkbox.checked) {
    labelTopic.style.color = "red";
    labelTopic.style.textDecoration = "line-through";
  } else {
    labelTopic.style.color = "black";
    labelTopic.style.textDecoration = "none";
  }
};

document.addEventListener("change", (event) => {
  if (event.target.classList.contains("checkbox-input")) {
    inlineTaskCard(event);
  }
});

const deleteTaskCard = (event) => {
  const taskCard = event.target.closest(".task-card");
  if (taskCard) {
    taskCard.remove();
  }
};

function showAlert(message) {
  if (document.querySelector(".red-alert-task-eight")) return;
  const alertRedBox = document.createElement("div");
  alertRedBox.classList.add("red-alert-task-eight");
  alertRedBox.textContent = message;
  document.body.appendChild(alertRedBox);

  setTimeout(() => {
    alertRedBox.classList.add("hide");
    setTimeout(() => alertRedBox.remove(), 500);
  }, 3000);
}
