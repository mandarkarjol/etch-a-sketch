// Define a function that generates a square grid inside a target html div element. Default grid size = 16
function makeSquareGrid(targetDiv, size = 16){
    for(let i = 0; i <= (size * size) - 1; i++ ){
        const squareDiv = document.createElement("div");
        squareDiv.style.width = `${targetDiv.clientWidth / size}px`;
        squareDiv.style.height = `${targetDiv.clientHeight / size}px`;
        targetDiv.append(squareDiv);
    };
    
};

// Draw square grids
const containerDiv = document.querySelector(".container");
makeSquareGrid(containerDiv);

// Toggle ink flow on / off while drawing on canvas
let hover = false;
containerDiv.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "white";
    hover = !hover;
});
containerDiv.addEventListener("mouseover", (e) => {
    if (hover){
        e.target.style.backgroundColor = "white";
    }
});

// Change grid qty based on user size
const buttonElem = document.querySelector("button");
buttonElem.onclick = () => {
    while (containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    };
    size = prompt("Enter no. of squares per side (Max limit is 100)");
    if (size <= 100){
        makeSquareGrid(containerDiv, size);
    }
    else {
        size = prompt("Enter no. of squares per side (Max limit is 100)");
    }
};