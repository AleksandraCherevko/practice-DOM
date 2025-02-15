const userForm = document.querySelector(".form");
// const nameInput = document.querySelector("#name");
// const ageInput = document.querySelector("#age");
// const colorInput = document.querySelector("#avatar-color");
// const createCardBtn = document.querySelector("button");
// const userList = document.querySelector("#user-list");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const nameInput = event.target.elements.name.value.trim();
  const ageInput = event.target.elements.age.value.trim();

  if (nameInput === " " || ageInput === " ") {
    return console.log("All form fields must be filled in !!!");
  }

  console.log(`Login: ${name}, Password: ${age}`);
  form.reset();
}


// Создай веб-страницу с формой, где пользователь вводит имя, возраст и выбирает цвет аватара. После нажатия на кнопку "Добавить", введенные данные должны отображаться в списке ниже.

// Каждый добавленный пользователь должен:
// ✅ отображаться в виде карточки (имя, возраст, цветной кружок-аватар),
// ✅ иметь кнопку "Удалить", которая удаляет конкретного пользователя,
// ✅ если возраст меньше 18, добавить стиль с красным текстом, если 18 и больше — зеленый текст.

// Требования
// Использовать document.createElement() для создания элементов.
// Реализовать обработку событий (addEventListener).
// Работать с innerHTML, append, remove().
// Подсказка (HTML-шаблон)
// html
// Zkopírovat
// Upravit
// <form id="user-form">
//   <input type="text" id="name" placeholder="Имя" required />
//   <input type="number" id="age" placeholder="Возраст" required />
//   <input type="color" id="avatar-color" />
//   <button type="submit">Добавить</button>
// </form>

// <ul id="user-list"></ul>
// Подсказка (JS-логика)
// Получить элементы формы (querySelector).
// Добавить обработчик submit для формы.
// При отправке формы создать <li> с данными пользователя и кнопкой удаления.
// Добавить цветной кружок (div с backgroundColor из input[type="color"]).
// При нажатии на "Удалить" удалять <li>.
// Дополнительное задание (если хочется сложнее)
// 🔥 Добавить валидацию:

// Имя не должно быть пустым.
// Возраст должен быть больше 0.
// Если поле не заполнено, показывать сообщение об ошибке.
// 🔥 Добавить редактирование пользователя:

// Добавить кнопку "Редактировать", чтобы можно было поменять данные