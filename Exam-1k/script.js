let numtaNumber = document.querySelector(".namtaNumber");
let namtaBtn = document.querySelector(".namtaBtn");

let namtaInput = numtaNumber.value;
let guess = namtaInput * 9;

let field1 = document.querySelector(".field1");
let field2 = document.querySelector(".field2");

let play2 = document.querySelector(".play2");

namtaBtn.addEventListener("click", function () {
    for (let i = 1; i <= 10; i++) {
        console.log(`${namtaInput} X ${i} = ${namtaInput * i}`);
    }
    field1.style.display = "none";
    field2.style.display = "block";
    console.log(guess);
});

play2.addEventListener("click", function () {});
