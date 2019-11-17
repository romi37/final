
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
//AJAX
const listContainer = document.getElementsByClassName("container2")[0];
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    json.map(item =>{
        listContainer.innerHTML += `
        <article>
        <div class="article-image">image</div>
        <div class="article-text">
            <h1>${item.title}</h1>
            <p>${item.title}</p>
            <button class="button-prymary">Baca Selengkapnya...</button>
        </div>
    </article>`
    })
  })