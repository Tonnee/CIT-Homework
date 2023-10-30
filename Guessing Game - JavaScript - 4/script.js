let inputPlayer1 = document.querySelector(".input-player-1");
let inputPlayer2 = document.querySelector(".input-player-2");
let inputPlayer3 = document.querySelector(".input-player-3");
let inputPlayer4 = document.querySelector(".input-player-4");
let btnPlayer1 = document.querySelector(".btn-player-1");
let btnPlayer2 = document.querySelector(".btn-player-2");
let btnPlayer3 = document.querySelector(".btn-player-3");
let btnPlayer4 = document.querySelector(".btn-player-4");
let error = document.querySelector(".error");
let chanceField2 = document.querySelector(".chance-field2");
let chanceValue2 = document.querySelector(".chance-value2");
let chanceValue3 = document.querySelector(".chance-value3");
let chanceValue4 = document.querySelector(".chance-value4");
let field1 = document.querySelector(".field-1");
let field2 = document.querySelector(".field-2");
let field3 = document.querySelector(".field-3");
let field4 = document.querySelector(".field-4");
let countPlayer2 = 5;
let countPlayer3 = 5;
let countPlayer4 = 5;
let result = document.querySelector(".result");
let revealInput = document.querySelector(".reveal-input");
let restart = document.querySelector(".restart");

btnPlayer1.addEventListener("click", function () {
    if (inputPlayer1.value == "") {
        error.innerHTML = "Give a number";
    } else if (inputPlayer1.value - 1 >= 0) {
        if (inputPlayer1.value <= 10 && inputPlayer1.value >= 1) {
            chanceValue2.innerHTML = `${countPlayer2}`;
            field1.style.display = "none";
            field2.style.display = "block";
            field3.style.display = "none";
            field1.style.display = "none";
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
        if (inputPlayer1.value == inputPlayer2.value) {
            // 2 Match
            console.log("player 2 wins");
            field2.style.display = "none";
            field3.style.display = "block";
            btnPlayer3.addEventListener("click", function () {
                console.log(countPlayer3);
                if (countPlayer3 > 1) {
                    countPlayer3--;
                    if (inputPlayer1.value == inputPlayer3.value) {
                        // 3 Match
                        console.log("Player 3 wins");
                        field3.style.display = "none";
                        field4.style.display = "block";
                        btnPlayer4.addEventListener("click", function () {
                            console.log(countPlayer4);
                            if (countPlayer4 > 1) {
                                countPlayer4--;
                                if (inputPlayer1.value == inputPlayer4.value) {
                                    // 4 Match
                                    console.log("Player 4 Wins");
                                    console.log("Player 2, 3, 4 wins");
                                    field4.style.display = "none";
                                } else {
                                    console.log("Player 4 lose ");
                                }
                            }
                        });
                    } else {
                        // 3 did not match
                        console.log("Player 3 lose");
                    }
                }
            });
        } else {
            // 2 did not match
            console.log("player 2 lose");
            field2.style.display = "none";
            field3.style.display = "block";
            btnPlayer3.addEventListener('click', function () {
                console.log(countPlayer3);
                if (countPlayer3 > 1) {
                    countPlayer3--;
                    if (inputPlayer1.value == inputPlayer3.value) {
                        // 3 Match, 2 did not match
                        console.log('Player 3 wins');
                        btnPlayer4.addEventListener('click', function () {
                            
                        })

                    }
                    else {
                        // 3 did not match, 2 did not match
                        console.log('Player 3 lose');
                    }
                }
            });
        }
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
    field4.style.display = "none";
    result.innerHTML = "";
    countPlayer2 = 5;
    countPlayer3 = 5;
    countPlayer3 = 5;
    error.innerHTML = "Give a number";
    revealInput.innerHTML = "&#128526";
});
