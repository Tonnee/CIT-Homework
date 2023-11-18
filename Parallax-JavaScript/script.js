let moon = document.querySelector(".moon");
let astronaute = document.querySelector(".astronaute");

window.addEventListener("mousemove", function (e) {
    // console.log('Ami', e.clientX, e.clientY);
    moon.style.top = `${e.clientY / 30}px`;
    moon.style.left = `${e.clientX / 30}px`;
    astronaute.style.top = `${e.clientY / 3}px`;
    astronaute.style.left = `${e.clientX / 3}px`;
});
