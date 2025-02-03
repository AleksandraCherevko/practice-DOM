// скрипт посчитает и выведет в консоль количество категорий в  ul#categories, то есть элементов  li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const allCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
  categoriesName(category);
});

function categoriesName(element) {
  const titleEl = element.querySelector("h2");
  const listEl = element.querySelector("ul");
  const categoryCount = element.querySelectorAll("li");

  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${categoryCount.length}`);

  titleEl.classList.add("js-title-task-first");
  listEl.classList.add("js-list-task-first");

  categoryCount.forEach((item) => {
    item.classList.add("js-item-task-first");
  });
}

// styles
const bodyColor = document.querySelector("body");
bodyColor.classList.add("js-body-task-first");
