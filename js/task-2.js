const images = [
  {
    url: "https://images.pexels.com/photos/30539346/pexels-photo-30539346.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/8898066/pexels-photo-8898066.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/7222204/pexels-photo-7222204.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/8145716/pexels-photo-8145716.jpeg?dpr=2&h=750&w=1260",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://images.pexels.com/photos/14792093/pexels-photo-14792093.jpeg?dpr=2&h=750&w=1260",
    alt: "Nature Landscape",
  },
  {
    url: "https://images.pexels.com/photos/8356301/pexels-photo-8356301.jpeg?dpr=2&h=750&w=1260",
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

// const list = document.querySelector(".gallery");
// list.classList.add("list-second-task");

// const markupList = (image) => {
//   return `<li class="item-second-task">
//     <img src="${image.url}" alt="${image.alt}" />
//   </li>`;
// };

// const markup = images.map(markupList).join("");

// list.insertAdjacentHTML("beforeend", markup);

const list = document.querySelector(".gallery");

const createElement = (images) => {
  return `<li><img src="${images.url}" alt="${images.alt}"></li>`;
};

const markup = images.map(createElement).join("");
list.insertAdjacentHTML("beforeend", markup);
