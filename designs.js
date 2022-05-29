//Select the color input, size input and other variables as needed
const color = document.getElementById("colorPicker");
const table = document.getElementById("pixelCanvas");
const submit = document.getElementById("submitButton");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
let draw = false;

//event listener will allow the submisson of the grid size. 
//the function will call on makeGrid() and the variables height 
//and width will be passed to make the grid
//preventDefault is used to prevent a reset when the grid is submitted
submit.addEventListener("click", function() {
    event.preventDefault();
    table.innerHTML = " ";
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;

    makeGrid(height, width);
});
// make a variable that calls the grid size, call the variable makeGrid()
function makeGrid(x, y) {
    //your code goes here!
    for (let i = 0; i < x; i++) {
        let row = table.insertRow();
        for (let j = 0; j < y; j++){
            let colums = row.insertCell();
            //this event listener allows the user to add color when the they "click" the mouse
            colums.addEventListener("mousedown", function(){
                colums.style.backgroundColor = color.value;
            });
            //this event listener prevents the user from adding 
            //in color when the mouse moves over the grid
            colums.addEventListener("mouseover", function(){
                if(!draw) return;
                colums.style.backgroundColor = color.value;
            });
        }
    }
}

//this event listener allows the user to add color to the cell that is directly clicked 
window.addEventListener("mousedown", function(){
    draw = true;
});

//this event listener prevents the user from adding color to the cells once the mouse is release
window.addEventListener("mouseup", function(){
    draw = false;
});
