let slides = document.querySelectorAll('.slide');
let slidesArray = Array.from(slides);

let activeSlide = document.querySelector('.slide.active');
let activeIndex = slidesArray.indexOf(activeSlide);

console.log(activeIndex);
