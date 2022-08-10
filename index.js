const allStoreItems = [
  {
    photo: "./img/sweets-1.jpeg",
    name: "sweets",
    price: 6,
    tagname: "sweets",
  },
  {
    photo: "./img/sweets-2.jpeg",
    name: "sweets",
    price: 29,
    tagname: "sweets",
  },
  {
    photo: "./img/sweets-3.jpeg",
    name: "sweets",
    price: 61,
    tagname: "sweets",
  },
  {
    photo: "./img/doughnut-1.jpeg",
    name: "doughnut",
    price: 12,
    tagname: "doughnuts",
  },
  {
    photo: "./img/doughnut-2.jpeg",
    name: "doughnut",
    price: 10,
    tagname: "doughnuts",
  },
  {
    photo: "./img/doughnut-3.jpeg",
    name: "doughnut",
    price: 19,
    tagname: "doughnuts",
  },
  {
    photo: "./img/cupcake-1.jpeg",
    name: "cupcake",
    price: 62,
    tagname: "cupcakes",
  },
  {
    photo: "./img/cupcake-2.jpeg",
    name: "cupcake",
    price: 12,
    tagname: "cupcakes",
  },
  {
    photo: "./img/cupcake-3.jpeg",
    name: "cupcake",
    price: 18,
    tagname: "cupcakes",
  },
  {
    photo: "./img/cake-1.jpeg",
    name: "cake",
    price: 23,
    tagname: "cakes",
  },
  {
    photo: "./img/cake-2.jpeg",
    name: "cake",
    price: 20,
    tagname: "cakes",
  },
  {
    photo: "./img/cake-3.jpeg",
    name: "cake",
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
function showAll(showStoreItems) {
  ourImage.innerHTML = showStoreItems.join("");
}
showAll(showStoreItems);

function handleClick(btnValue) {
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
  showAll(display);
  observeItems(showStoreItems);
}

const storeBtn = document.querySelectorAll(".store-btn");
storeBtn.forEach((btns) => {
  btns.addEventListener("click", () => {
    const btnValue = btns.value.toLowerCase();
    if (btnValue == "all") {
      showAll(showStoreItems);
      observeItems(showStoreItems);
    } else {
      handleClick(btnValue);
    }
  });
});

const search = document.querySelector(".search");
search.addEventListener("keyup", activateSearch);

function activateSearch() {
  const searchDisplay = allStoreItems.filter((item) => {
    const searchValue = search.value.toLowerCase();
    if (item.name.includes(searchValue)) {
      return item;
    } else {
      searchValue === item.name;
    }
  });
  const finallDisplay = searchDisplay.map((v) => {
    return `<div class="overall-img">
         <div class="my-img">
           <img src="${v.photo}" class="imgs" />
         </div>
         <div class="content">
           <div class="item-nmae">${v.name}</div>
           <div class="item price">$${v.price}</div>
         </div>
       </div>`;
  });
  showAll(finallDisplay);
}

function observeItems(observe) {
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
}
observeItems();

const hambuger = document.querySelector(".icons-cont");
const mobile = document.querySelector(".mobile");
hambuger.addEventListener("click", () => {
  mobile.classList.toggle("more");
});
const timeIcon = document.querySelector(".time-icon");
timeIcon.addEventListener("click", () => {
  mobile.classList.remove("more");
});
