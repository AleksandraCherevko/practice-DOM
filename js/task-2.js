const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// 1 variant

// images.forEach((picture) => {
//   const listEl = document.querySelector(".gallery");
//   listEl.classList.add("list-second-task");

//   const imgEl = document.createElement("img");
//   const itemEl = document.createElement("li");
//   const bodyEl = document.querySelector("body");
//   bodyEl.classList.add("body-second-task");
//   itemEl.classList.add("item-second-task");
//   imgEl.src = picture.url;
//   imgEl.alt = picture.alt;
//   imgEl.width = "300";
//   imgEl.height = "360";
//   itemEl.append(imgEl);
//   listEl.append(itemEl);
// });

// 2 variant

// function createImgList(image) {

//   const imgEl = document.createElement("img");
//   const itemEl = document.createElement("li");
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = "300";
//   imgEl.height = "360";
//   itemEl.append(imgEl);

//   const bodyEl = document.querySelector("body");
//   bodyEl.classList.add("body-second-task");
//   itemEl.classList.add("item-second-task");

//   return itemEl;
// }

// const itemEl = images.map(createImgList);
// const listEl = document.querySelector(".gallery");
// listEl.classList.add("list-second-task");
// listEl.append(...itemEl);

// 3 variant

const list = document.querySelector(".gallery");
list.classList.add("list-second-task");

const markupList = (image) => {
  return `<li class="item-second-task">
    <img src="${image.url}" alt="${image.alt}" />
  </li>`;
};

const markup = images.map(markupList).join("");

list.insertAdjacentHTML("beforeend", markup);
