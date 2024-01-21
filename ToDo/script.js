let input = document.querySelector("input");
let saveBtn = document.querySelector(".save");
let updateBtn = document.querySelector(".update");
let ol = document.querySelector("ol");
let task = [];
let isEdit = false;

saveBtn.addEventListener("click", function () {
    task.push(input.value);
    display();
    edit();
});

function display() {
    ol.innerHTML = "";
    task.map(function (item) {
        ol.innerHTML += `<li>${item}<button class='edit'>Edit</button><button class='delete'>Delete</button></li>`;
    });

    let btnDelete = document.querySelectorAll(".delete");

    let deleteArr = Array.from(btnDelete);

    deleteArr.map((item, index) => {
        item.addEventListener("click", function () {
            console.log("ami delete btn", index);
            task.splice(index, 1);
            display();
        });
    });
}

function edit() {
    let edit = document.querySelectorAll(".edit");
    let editArr = Array.from(edit);
    

    editArr.map((item, index) => {
        item.addEventListener("click", function () {
            updateBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
        });
    });
}
