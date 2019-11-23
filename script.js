
const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = document.getElementsByClassName("slider")[0];
const carouselItem = carousel.children;

var width = 0;
var slide = false;
var index = 0;

next.addEventListener("click", function() {
  slide = true;
  for (let i = 0; i < carouselItem.length; i++) {
    const item = carouselItem[i];

    if (slide) {
      if (index < 2){
        width -= item.clientWidth;
        slide = false;
        index++;
      }
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
      if (index > 0){
      width += item.clientWidth;
      slide = false;
      index--;
      }
    }

    item.style.transform = `translateX(${width}px)`;
    console.log(width);
  }
});

