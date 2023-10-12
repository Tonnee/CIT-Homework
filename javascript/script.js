// let numtaNumber = 10;

// for (let i = 1; i <= 10; i++) {
//     console.log(numtaNumber + 'X' + i + '=' + 1*i);
// }

// let namtaNumber = 10;

// let ignore = 5;

// for (let i = 1; i <= namtaNumber; i++) {

//     if (i != 5) {
//         console.log("===================== Multiplication of " + i);
//         for (let j = 1; j <= 10; j++) {
//             if ((i * j) % 2 == 0) {
//                 console.log(i + 'X' + j + '=' + (i*j) + ' Even');
//             }
//             else {
//                 console.log(i + "X" + j + "=" + i * j + " Odd");
//             }
//         }
//     }
//     else {
//         console.log("===================== Multiplication of " + i + ' is missing');
//     }
// }

let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let show = document.querySelector('.show');
let namtaNumber = document.querySelector(".namtaNumber");

btn.addEventListener("click", function () {
    if (box.value == "") {
        error.innerHTML = "Please give a number";
    } else if (!(box.value - 0)) {
        error.innerHTML = "Please enter a valid number";
    } else {
        namtaNumber.innerHTML = `Multiplication of ${box.value}`;
        for (let i = 1; i <= 10; i++) {
            let result = i + " x " + box.value + " = " + i * box.value;
            show.innerHTML += `<ul class="Test${i}">${result}</ul>`;
        }
    }
});
