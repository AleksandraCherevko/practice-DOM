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
const textarea = document.querySelector("#task");
const checkBoxForm = document.querySelector(".checkbox");

todoForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const topicInput = event.target.elements.topic.value.trim();
  const taskInput = event.target.elements.task.value.trim();
  const deadlineInput = event.target.elements.deadline.value.trim();
  const deadlineDate = new Date(deadlineInput);
  const now = new Date();
  if (topicInput === "") {
    return alert`Enter topic of your task`;
  } else if (taskInput === "") {
    return alert`Enter your task`;
  } else if (!deadlineInput) {
    return alert`Choose date and time for your deadline`;
  } else if (deadlineDate <= now) {
    return alert`check date and time correct format`;
  }

  const createMarkup = createTaskCard({
    topic: topicInput,
    task: taskInput,
    deadline: deadlineInput,
  });
  checkBoxForm.insertAdjacentHTML("beforeend", createMarkup);
  const deleteCardBtn =
    checkBoxForm.lastElementChild.querySelector(".delete-task-btn");
  deleteCardBtn.addEventListener("click", deleteTaskCard);

  todoForm.reset();
}

const createTaskCard = ({ topic, task, deadline }) => {
  return `
   <div class='task-card'> 
   <input class='checkbox-input' type="checkbox" id="vehicle1" name="vehicle1" >
     <label class='topic-label' for="vehicle1">${topic}</label><br>
     <p>My task: ${task}</p>
      <p>Deadline: ${deadline}</p>
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
