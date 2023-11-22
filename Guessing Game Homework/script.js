// import makeNumta from "./namta.js"

let namtaInput = document.querySelector(".namtaInput");
let namtaButton = document.querySelector(".namtaButton");
let errorMsg = document.querySelector(".error");
let clearbutton = document.querySelector(".clearbutton");
let player2 = document.querySelector(".player2");
let player2button = document.querySelector(".player2button");
let player3 = document.querySelector(".player3");
let player3button = document.querySelector(".player3button");
let chancehtml = document.querySelector(".chance");
tagHidden(clearbutton);
tagHidden(player2);
tagHidden(player2button);
tagHidden(player3);
tagHidden(player3button);
tagHidden(chancehtml);
let playerOneNumber = "";
let count = -1;
let stop = "";
let stop2 = "";
let chance = 5;
chancehtml.innerHTML = chance;
namtaButton.addEventListener("click", makeNumta);

function makeNumta() {
    if (blankBoxError(namtaInput.value)) {
        stop = setInterval(function () {
            typejs(blankBoxError(namtaInput.value));
        }, 100);
    } else {
        playerOneNumber = namtaInput.value * 9;

        tagHidden(namtaInput);
        tagHidden(namtaButton);
        tagShow(player2);
        tagShow(player2button);
        tagShow(chancehtml);
        console.log(playerOneNumber);
    }
}

function blankBoxError(text) {
    if (!text) {
        return "Please give a number";
    }
}

function tagHidden(a) {
    a.style.display = "none";
}

function tagShow(a) {
    a.style.display = "inline-block";
}

function typejs(error) {
    count++;
    errorMsg.innerHTML += error.charAt(count);
    if (error.length < count) {
        clearInterval(stop);
        tagShow(clearbutton);
    }
}

clearbutton.addEventListener("click", function () {
    stop2 = setInterval(function () {
        clearType();
    }, 100);
});

function clearType() {
    console.log(errorMsg.innerHTML);
    count--;
    console.log(count);
    let msg = errorMsg.innerHTML;
    errorMsg.innerHTML = msg.substring(0, count);
    if (count <= 0) {
        clearInterval(stop2);
        clearbutton.style.display = "none";
    }
}

player2button.addEventListener("click", matchNumber);
player3button.addEventListener("click", matchNumber2);

function matchNumber() {
    minusChange();
    chancehtml.innerHTML = chance;

    if (chance < 1) {
        tagHidden(player2);
        tagHidden(player2button);
        chance = 5;
        chancehtml.innerHTML = chance;
        tagShow(player3);
        tagShow(player3button);
    }

    if (playerOneNumber == player2.value) {
        stop = setInterval(function () {
            typejs("player 2 winner");
        }, 100);
    }
}

function matchNumber2() {
    minusChange();
    chancehtml.innerHTML = chance;

    if (chance < 1) {
        tagHidden(player3);
        tagHidden(player3button);
        chance = 5;
        chancehtml.innerHTML = chance;
    }

    if (playerOneNumber == player2.value) {
        stop = setInterval(function () {
            typejs("player 3 winner");
        }, 100);
    }
}

function minusChange() {
    chance--;
}
