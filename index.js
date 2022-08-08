const allStoreItems = [
  {
    photo: "./img/sweets-1.jpeg",
    name: "sweet item",
    price: 6,
    tagname: "sweets",
  },
  {
    photo: "./img/sweets-2.jpeg",
    name: "sweet item",
    price: 29,
    tagname: "sweets",
  },
  {
    photo: "./img/sweets-3.jpeg",
    name: "sweet item",
    price: 61,
    tagname: "sweets",
  },
  {
    photo: "./img/doughnut-1.jpeg",
    name: "doughnut item",
    price: 12,
    tagname: "doughnut",
  },
  {
    photo: "./img/doughnut-2.jpeg",
    name: "doughnut item",
    price: 12,
    tagname: "doughnut",
  },
  {
    photo: "./img/doughnut-3.jpeg",
    name: "doughnut item",
    price: 12,
    tagname: "doughnut",
  },
  {
    photo: "./img/cupcake-1.jpeg",
    name: "cupcake item",
    price: 12,
    tagname: "cupcakes",
  },
  {
    photo: "./img/cupcake-2.jpeg",
    name: "cupcake item",
    price: 12,
    tagname: "cupcakes",
  },
  {
    photo: "./img/cupcake-3.jpeg",
    name: "cupcake item",
    price: 12,
    tagname: "cupecakes",
  },
  {
    photo: "./img/cake-1.jpeg",
    name: "cake item",
    price: 23,
    tagname: "cakes",
  },
  {
    photo: "./img/cake-2.jpeg",
    name: "cake item",
    price: 20,
    tagname: "cakes",
  },
  {
    photo: "./img/cake-3.jpeg",
    name: "cake item",
    price: 13,
    tagname: "cakes",
  },
];
const showStoreItems = allStoreItems.map((p) => {
  return `<div class="overall-img">
   <div class="my-img">
     <img src="${p.photo}" class="imgs" />
   </div>
   <div class="content">
     <div class="item-nmae">${p.name}</div>
     <div class="item price">$${p.price}</div>
   </div>
 </div>`;
});
const ourImage = (document.querySelector(".our-img").innerHTML =
  showStoreItems.join(""));

const imgCont = document.querySelectorAll(".overall-img");

const observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((e) => {
      e.target.classList.toggle("show", e.isIntersecting);
      e.isIntersecting
        ? observer.unobserve(e.target)
        : observer.observe(e.target);
    });
  },
  {
    threshold: 1,
  }
);
imgCont.forEach((e) => {
  observer.observe(e);
});
