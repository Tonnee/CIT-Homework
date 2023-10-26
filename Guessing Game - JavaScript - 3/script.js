let inputPlayer1 = document.querySelector(".input-player-1");
let btnPlayer1 = document.querySelector(".btn-player-1");
let error = document.querySelector(".error");
let inputPlayer2 = document.querySelector(".input-player-2");
let btnPlayer2 = document.querySelector(".btn-player-2");
let chanceValue2 = document.querySelector(".chance-value2");
let chanceValue3 = document.querySelector(".chance-value3");
let chanceField2 = document.querySelector(".chance-field2");
let inputPlayer3 = document.querySelector(".input-player-3");
let btnPlayer3 = document.querySelector(".btn-player-3");
let result = document.querySelector(".result");
let field1 = document.querySelector(".field-1");
let field2 = document.querySelector(".field-2");
let field3 = document.querySelector(".field-3");
let restart = document.querySelector(".restart");
let revealInput = document.querySelector(".reveal-input");
let countPlayer2 = 5;
let countPlayer3 = 5;

btnPlayer1.addEventListener("click", function () {
    if (inputPlayer1.value == "") {
        error.innerHTML = "Give a number";
    } else if (inputPlayer1.value - 1 >= 0) {
        if (inputPlayer1.value <= 10 && inputPlayer1.value >= 1) {
            chanceValue2.innerHTML = `${countPlayer2}`;
            field1.style.display = "none";
            field2.style.display = "block";
            field3.style.display = "none";
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
    console.log(countPlayer2);
    if (countPlayer2 > 1) {
        countPlayer2--;
        chanceValue2.innerHTML = countPlayer2;
        if (inputPlayer1.value == inputPlayer2.value) {
            // Check 2 Match
            console.log("2 Match");
            field3.style.display = "block";
            field2.style.display = "none";
            chanceValue3.innerHTML = countPlayer3;
            countPlayer3 = 6;
            btnPlayer3.addEventListener("click", function () {
                if (countPlayer3 > 1) {
                    countPlayer3--;
                    chanceValue3.innerHTML = countPlayer3;
                    console.log(countPlayer3);
                    console.log("3 Did not Match");
                    if (inputPlayer1.value == inputPlayer3.value) {
                        // Check 3 Match
                        console.log("3 Match");
                        // Both Match
                        console.log("2 & 3 Wins");
                        result.innerHTML = "Player 2 & Player 3 Wins!";
                        confetti();
                        revealInput.innerHTML = inputPlayer1.value;
                        field1.style.display = "none";
                        field2.style.display = "none";
                        field3.style.display = "none";
                    }
                } else {
                    chanceValue3.innerHTML = countPlayer3;
                    console.log("We are Here, 3 Did not Match");
                    // Only 2 Match
                    result.innerHTML = "Player 2 Wins!";
                    confetti();
                    revealInput.innerHTML = inputPlayer1.value;
                    field1.style.display = "none";
                    field2.style.display = "none";
                    field3.style.display = "none";
                }
            });
        } else {
            console.log("We are Here, 2 Did not Match");
        }
    } else {
        field3.style.display = "block";
        field2.style.display = "none";
        chanceValue3.innerHTML = countPlayer3;
        countPlayer3 = 6;
        btnPlayer3.addEventListener("click", function () {
            if (countPlayer3 > 1) {
                countPlayer3--;
                console.log(countPlayer3);
                chanceValue3.innerHTML = countPlayer3;
                console.log("We are Here, 3 Did not Match");
                if (inputPlayer1.value == inputPlayer3.value) {
                    // Check 3 Match
                    console.log("3 Wins");
                    result.innerHTML = "Player 3 Wins!";
                    confetti();
                    revealInput.innerHTML = inputPlayer1.value;
                    field1.style.display = "none";
                    field2.style.display = "none";
                    field3.style.display = "none";
                }
            } else {
                // No Match
                result.innerHTML = "Player 1 Wins!";
                confetti();
                revealInput.innerHTML = inputPlayer1.value;
                field1.style.display = "none";
                field2.style.display = "none";
                field3.style.display = "none";
            }
        });
    }
});

restart.addEventListener("click", function () {
    inputPlayer1.value = "";
    inputPlayer2.value = "";
    chanceValue2.innerHTML = "";
    chanceValue3.innerHTML = "";
    inputPlayer3.value = "";
    field1.style.display = "block";
    field2.style.display = "none";
    field3.style.display = "none";
    result.innerHTML = "";
    countPlayer3 = 5;
    countPlayer2 = 5;
    error.innerHTML = "Give a number";
    revealInput.innerHTML = "&#128526";
});
