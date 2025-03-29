// Define a function that generates a square grid inside a target html div element. Default grid size = 16
function makeSquareGrid(targetDiv, size = 16){
    for(let i = 0; i <= (size * size) - 1; i++ ){
        const squareDiv = document.createElement("div");
        squareDiv.style.width = `${targetDiv.clientWidth / size}px`;
        targetDiv.append(squareDiv);
    };
    
};
const containerDiv = document.querySelector(".container");
makeSquareGrid(containerDiv);
