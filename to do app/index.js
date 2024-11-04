let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value.trim() === "") {
        alert('Please Enter Task');
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove();
        });
    }
}


