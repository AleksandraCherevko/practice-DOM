// // This script will count and log to the console the number of categories in ul#categories, i.e., the li.item elements.
// // For each li.item element in the ul#categories list, it will find and log to the console the text of the element's title
// // (the <h2> tag) and the number of elements in the category (all nested <li> elements).

// const bodyColor = document.querySelector("body");
// bodyColor.classList.add("js-body-task-first");

// const allCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${allCategories.length}`);

// allCategories.forEach((category) => {
//   category.classList.add("js-category-item-task-first");
//   categoriesName(category);
// });

// function categoriesName(element) {
//   const titleEl = element.querySelector("h2");
//   const listEl = element.querySelector("ul");
//   const categoryCount = element.querySelectorAll("li");

//   console.log(`Category: ${titleEl.textContent}`);
//   console.log(`Elements: ${categoryCount.length}`);

//   titleEl.classList.add("js-title-task-first");
//   listEl.classList.add("js-list-task-first");

//   categoryCount.forEach((item) => {
//     item.classList.add("js-item-task-first");
//   });
// }

const categories = document.querySelectorAll("li.item");
console.log(`Categories: ${categories.length}`);

categories.forEach((elements) => {
  const categoriesItems = elements.querySelectorAll("li > ul");
  const categoriesTitle = elements.querySelector("h2").textContent;
  console.log(`Elements: ${categoriesItems.length}`);
  console.log(`Category: ${categoriesTitle}`);
});
