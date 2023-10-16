let changeBtn = document.querySelector(".change-btn");
let screen = document.querySelector(".main");

changeBtn.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let colorCode = `rgb(${r}, ${g}, ${b})`;

    screen.style.backgroundColor = colorCode;
});
