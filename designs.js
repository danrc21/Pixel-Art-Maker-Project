const color = document.getElementById("colorPicker");
const table = document.getElementById("pixelCanvas");
const submit = document.getElementById("submitButton");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
let draw = false

submit.addEventListener("click", function() {
    event.preventDefault();
    table.innerHTML = " "
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;

    makeGrid(height, width);
});

function makeGrid(x, y) {
    
    for (let i = 0; i < x; i++) {
        let row = table.insertRow();
        for (let j = 0; j < y; j++){
            let colums = row.insertCell();
                colums.addEventListener("mousedown", function(){
                    colums.style.backgroundColor = color.value;
            });
            colums.addEventListener("mouseover", function(){
                if(!draw) return;
                colums.style.backgroundColor = color.value;
            });
        }
    }
}

window.addEventListener("mousedown", function(){
    draw = true;
});

window.addEventListener("mouseup", function(){
    draw = false;
});
