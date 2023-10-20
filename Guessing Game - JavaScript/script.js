let inputPlayer1 = document.querySelector(".input-player-1");
let btnPlayer1 = document.querySelector(".btn-player-1");
let error = document.querySelector(".error");
let inputPlayer2 = document.querySelector(".input-player-2");
let btnPlayer2 = document.querySelector(".btn-player-2");
let chanceValue = document.querySelector(".chance-value");
let result = document.querySelector(".result");
let field1 = document.querySelector(".field-1");
let field2 = document.querySelector(".field-2");
let restart = document.querySelector(".restart");
let wait2 = document.querySelector(".wait2");
let revealInput = document.querySelector('.reveal-input');
let count = 5;

btnPlayer1.addEventListener("click", function () {
    if (inputPlayer1.value == "") {
        error.innerHTML = "Give a number";
    } else if (inputPlayer1.value - 1 >= 0) {
        if (inputPlayer1.value <= 10 && inputPlayer1.value >= 1) {
            chanceValue.innerHTML = `${count}`;
            field1.style.display = "none";
            field2.style.display = "block";
        } else if (inputPlayer1.value > 10 || inputPlayer1.value <= 0) {
            error.innerHTML = "Number should be between 1 to 10";
        }
    } else if (!Boolean(inputPlayer1.value - 1)) {
        error.innerHTML = "String or symbol not allowed";
    } else {
        error.innerHTML = "Number should be between 1 to 10";
    }
});

btnPlayer2.addEventListener("click", function () {
    if (count > 1) {
        count--;
        chanceValue.innerHTML = count;
        wait2.style.display = "none";
        if (inputPlayer1.value == inputPlayer2.value) {
            result.innerHTML = "Player 2 Wins!";
            field2.style.display = "none";
            confetti();
            revealInput.innerHTML = inputPlayer1.value;
        }
    } else {
        result.innerHTML = "Player 1 Wins!";
        field2.style.display = "none";
        confetti();
        revealInput.innerHTML = inputPlayer1.value;
    }
});

restart.addEventListener("click", function () {
    inputPlayer1.value = "";
    inputPlayer2.value = "";
    field1.style.display = "block";
    field2.style.display = "none";
    result.innerHTML = "";
    count = 5;
    error.innerHTML = "Give a number";
    revealInput.innerHTML = "&#128526";
});
