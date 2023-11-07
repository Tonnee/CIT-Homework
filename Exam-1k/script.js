let inputPlayer1 = document.querySelector(".input-player-1");
let inputPlayer2 = document.querySelector(".input-player-2");
let inputPlayer3 = document.querySelector(".input-player-3");
let inputPlayer4 = document.querySelector(".input-player-4");

let btnPlayer1 = document.querySelector(".btn-player-1");
let btnPlayer2 = document.querySelector(".btn-player-2");
let btnPlayer3 = document.querySelector(".btn-player-3");
let btnPlayer4 = document.querySelector(".btn-player-4");

let error = document.querySelector(".error");
let error1 = "Give a Number";
let error2 = "String or symbol not allowed";
let error3 = "Number should be between 1 to 10";
let typeText = "";
let toType = error.innerHTML;
let plainText = "";
let textCount = -1;
let cancel = document.querySelector(".cancelBtn");

let stop = "";
let backStop = "";

let guess = "";

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

function typeJs() {
    textCount++;
    error.innerHTML += toType.charAt(textCount);
    console.log(toType.length);
    if (textCount >= toType.length) {
        clearInterval(stop);
        cancel.style.display = "block";
    }
}

function backJs() {
    console.log(typeText);
    console.log('Function Called', textCount);
    if (typeText.length > 0) {
        textCount--;
        typeText.pop();
        error.innerHTML = typeText.join('');
        cancel.style.display = "none";
        textCount = -1;
    } else {
        clearInterval(backStop);
    }
}

function refreshPage() {
    window.location.reload();
}

btnPlayer1.addEventListener("click", function () {
    if (inputPlayer1.value == "") {
        toType = error1;
        stop = setInterval(function () {
            typeJs();
        }, 30);

        cancel.addEventListener("click", function () {
            typeText = toType.split('');
            backStop = setInterval(function () {
                backJs();
            }, 30);
        });
    } else if (inputPlayer1.value - 1 >= 0) {
        if (inputPlayer1.value <= 10 && inputPlayer1.value >= 1) {
            for (let i = 0; i <= 10; i++) {
                console.log(
                    `${inputPlayer1.value} X ${i} = ${inputPlayer1.value * i}`
                );
            }
            guess = inputPlayer1.value * 9;
            console.log(guess);
            chanceValue2.innerHTML = `${countPlayer2}`;
            field1.style.display = "none";
            field2.style.display = "block";
            field3.style.display = "none";
            field1.style.display = "none";
        } else if (inputPlayer1.value > 10 || inputPlayer1.value <= 0) {
            console.log("3");
            toType = error3;
            stop = setInterval(function () {
                typeJs();
            }, 30);
        }
    } else if (!Boolean(inputPlayer1.value - 1)) {
        console.log("2");
        toType = error2;
        stop = setInterval(function () {
            typeJs();
        }, 30);
    } else {
        console.log("4");
        toType = error1;
        stop = setInterval(function () {
            typeJs();
        }, 30);
    }
});

btnPlayer2.addEventListener("click", function () {
    console.log(countPlayer2, guess);
    if (countPlayer2 > 1) {
        countPlayer2--;
        chanceValue2.innerHTML = countPlayer2;
        if (guess == inputPlayer2.value) {
            // 2 Match
            console.log("player 2 wins");
            field2.style.display = "none";
            field3.style.display = "block";
            chanceValue3.innerHTML = countPlayer3;
            btnPlayer3.addEventListener("click", function () {
                if (countPlayer3 > 1) {
                    countPlayer3--;
                    console.log(countPlayer3, guess);
                    chanceValue3.innerHTML = countPlayer3;
                    if (guess == inputPlayer3.value) {
                        // 3 Match
                        console.log("Player 3 wins");
                        field3.style.display = "none";
                        field4.style.display = "block";
                        chanceValue4.innerHTML = countPlayer4;
                        btnPlayer4.addEventListener("click", function () {
                            if (countPlayer4 > 1) {
                                countPlayer4--;
                                chanceValue4.innerHTML = countPlayer4;
                                console.log(countPlayer4, guess);
                                if (guess == inputPlayer4.value) {
                                    // 4 Match
                                    console.log("Player 4 Wins");
                                    field4.style.display = "none";
                                    result.innerHTML = "Player 2, 3, 4 Wins!";
                                    console.log("Player 2, 3, 4 Wins!");
                                }
                            } else {
                                // 4 did not match
                                field4.style.display = "none";
                                result.innerHTML = "Player 2, 3 Wins!";
                                console.log("Player 2, 3 Wins!");
                            }
                        });
                    }
                } else {
                    console.log();
                    // 3 did not match, 2 Match
                    field3.style.display = "none";
                    field4.style.display = "block";
                    chanceValue4.innerHTML = countPlayer4;
                    btnPlayer4.addEventListener("click", function () {
                        if (countPlayer4 > 1) {
                            countPlayer4--;
                            chanceValue4.innerHTML = countPlayer4;
                            console.log(countPlayer4, guess);
                            if (guess == inputPlayer4.value) {
                                // 4 Match
                                field4.style.display = "none";
                                result.innerHTML = "Player 2, 4 Wins!";
                                console.log("Player 2, 4 Wins!");
                            }
                        } else {
                            // 4 did not match
                            field4.style.display = "none";
                            result.innerHTML = "Player 2 Wins!";
                            console.log("Player 2 Wins!");
                        }
                    });
                }
            });
        }
    } else {
        // 2 did not match
        console.log("player 2 lose");
        field2.style.display = "none";
        field3.style.display = "block";
        chanceValue3.innerHTML = countPlayer3;
        btnPlayer3.addEventListener("click", function () {
            if (countPlayer3 > 1) {
                countPlayer3--;
                chanceValue3.innerHTML = countPlayer3;
                console.log(countPlayer3, guess, "here");
                if (guess == inputPlayer3.value) {
                    // 3 Match, 2 did not match
                    console.log("Player 3 wins");
                    field3.style.display = "none";
                    field4.style.display = "block";
                    chanceValue4.innerHTML = countPlayer4;
                    btnPlayer4.addEventListener("click", function () {
                        if (countPlayer4 > 1) {
                            countPlayer4--;
                            console.log(countPlayer4, guess);
                            chanceValue4.innerHTML = countPlayer4;
                            // 4, 3 Match, 2 did not match
                            if (guess == inputPlayer4.value) {
                                field4.style.display = "none";
                                result.innerHTML = "Player 3 & 4 wins!";
                                console.log("Player 3 & 4 wins");
                            }
                        } else {
                            // 3 Match, 2, 4 did not match
                            field4.style.display = "none";
                            result.innerHTML = "Player 3 wins!";
                            console.log("Player 3 wins");
                        }
                    });
                }
            } else {
                // 3 did not match, 2 did not match
                console.log("Player 2, 3 lose");
                field3.style.display = "none";
                field4.style.display = "block";
                chanceValue4.innerHTML = countPlayer4;
                btnPlayer4.addEventListener("click", function () {
                    if (countPlayer4 > 1) {
                        countPlayer4--;
                        chanceValue4.innerHTML = countPlayer4;
                        console.log(countPlayer4, guess);
                        // 4 match
                        if (guess == inputPlayer4.value) {
                            field4.style.display = "none";
                            result.innerHTML = "Player 4 wins!";
                            console.log("Player 4 wins");
                        }
                    } else {
                        // 2, 3, 4 did not match
                        result.innerHTML = "Player 1 Wins!";
                        console.log("Player 1 Wins!");
                        field4.style.display = "none";
                    }
                });
            }
        });
    }
});

restart.addEventListener("click", function () {
    inputPlayer1.value = "";
    inputPlayer2.value = "";
    inputPlayer3.value = "";
    inputPlayer4.value = "";
    chanceValue2.innerHTML = "";
    chanceValue3.innerHTML = "";
    chanceValue4.innerHTML = "";
    field1.style.display = "block";
    field2.style.display = "none";
    field3.style.display = "none";
    field4.style.display = "none";
    result.innerHTML = "";
    countPlayer2 = 5;
    countPlayer3 = 5;
    countPlayer4 = 5;
    error.innerHTML = "";
    revealInput.innerHTML = "&#128526";
    refreshPage();
});
