
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

// console.log(carouselItem)
//AJAX
const listContainer = document.getElementsByClassName("container2")[0];
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    json.map(item =>{
        listContainer.innerHTML += `
        <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    })
  })