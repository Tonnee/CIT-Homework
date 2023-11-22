let slides = document.querySelectorAll(".slide");
let slidesArray = Array.from(slides);

let prevArrow = document.querySelector(".prev");
let nextArrow = document.querySelector(".next");

let activeSlide = document.querySelector(".slide.active");
let activeIndex = slidesArray.indexOf(activeSlide);

function prevNext() {
    let prev;
    let next;

    if (activeIndex == 0) {
        prev = slidesArray[slidesArray.length - 1];
    } else {
        prev = slidesArray[activeIndex - 1];
    }

    if (activeIndex == slidesArray.length - 1) {
        next = slidesArray[0];
    } else {
        next = slidesArray[activeIndex + 1];
    }
    return [prev, next];
}

function direction() {
    let [prev, next] = prevNext();

    slidesArray.map((slide, index) => {
        if (activeIndex == index) {
            slide.style.transfrom = "translateX(0)";
        } else if (slide == prev) {
            slide.style.transfrom = "translateX(-100%)";
        } else if (slide == next) {
            slide.style.transfrom = "translateX(100%)";
        }
    });
}

nextArrow.addEventListener('click', function () {
    let next;
    if (activeIndex == slidesArray.length - 1) {
        next = slidesArray[0];
    } else {
        next = slidesArray[activeIndex + 1];
    }
    activeSlide.classList.remove("active");
    next.classList.add("active");
    direction();
    activeSlide = document.querySelector(".slide.active");
    console.log(activeSlide);
})

prevArrow.addEventListener("click", function () {
    // activeSlide = document.querySelector(".slide.active");
    // activeSlide.style.transform = "translateX(-100%)";

    // let [prev] = prevNext();

    // activeSlide.classList.remove("active");
    // prev.classList.add("active");
    // prev.style.transform = "translateX(0)";

    // direction();
});
