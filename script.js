
const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const carouselItem = carousel.children;

var width = 0;
var slide = false;

next.addEventListener("click", function() {
  slide = true;
  for (let i = 0; i < carouselItem.length; i++) {
    const item = carouselItem[i];

    if (slide) {
      width -= item.clientWidth;
      slide = false;
    }

    item.style.transform = `translateX(${width}px)`;
    console.log(width);
  }
});

prev.addEventListener("click", function() {
  slide = true;
  for (let i = 0; i < carouselItem.length; i++) {
    const item = carouselItem[i];

    if (slide) {
      width += item.clientWidth;
      slide = false;
    }

    item.style.transform = `translateX(${width}px)`;
    console.log(width);
  }
});

// console.log(carouselItem)