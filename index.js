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
    tagname: "doughnuts",
  },
  {
    photo: "./img/doughnut-2.jpeg",
    name: "doughnut item",
    price: 10,
    tagname: "doughnuts",
  },
  {
    photo: "./img/doughnut-3.jpeg",
    name: "doughnut item",
    price: 19,
    tagname: "doughnuts",
  },
  {
    photo: "./img/cupcake-1.jpeg",
    name: "cupcake item",
    price: 62,
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
    price: 18,
    tagname: "cupcakes",
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

const ourImage = document.querySelector(".our-img");
ourImage.innerHTML = showStoreItems.join("");

const storeBtn = document.querySelectorAll(".store-btn");

storeBtn.forEach((btns) => {
  btns.addEventListener("click", () => {
    const btnValue = btns.value.toLowerCase();

    if (btnValue == "all") {
      ourImage.innerHTML = showStoreItems.join("");
    } else {
      const filterStore = allStoreItems.filter((items) => {
        return btnValue === items.tagname;
      });
      const display = filterStore.map((p) => {
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
      ourImage.innerHTML = display.join("");
    }
  });
});

const search = document.querySelector(".search");
search.addEventListener("keyup", activateSearch);

function activateSearch(e) {
  const searchValue = search.value.toLowerCase();
  if (e.key == "Enter" && searchValue) {
    if (searchValue == "all") {
      ourImage.innerHTML = showStoreItems.join("");
    } else {
      const filterStore = allStoreItems.filter((items) => {
        return searchValue === items.tagname;
      });
      const display = filterStore.map((p) => {
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
      ourImage.innerHTML = display.join("");
    }
  }
}

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
