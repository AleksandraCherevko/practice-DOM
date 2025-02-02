// скрипт посчитает и выведет в консоль количество категорий в  ul#categories, то есть элементов  li.item.

const refs = {
  categoryListEl: document.querySelector("#categories"),
  listItemsEl: document.querySelectorAll(".item"),
  titleEl: document.querySelectorAll("h2"),
  categoryEl: document.querySelectorAll("ul"),
};

// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

console.log(`Number of categories: ${refs.listItemsEl.length}`);
console.log(refs.titleEl);
console.log(refs.categoryEl);

refs.titleEl.forEach((el) => {
  console.log(el);
});
