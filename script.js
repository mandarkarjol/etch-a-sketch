// Define a function that generates a square grid inside a target html div element. Default grid size = 16
function makeSquareGrid(targetDiv, size = 16){
    const squareDiv = document.createElement("div")
    for(let i = 0; i <= (size * 2) - 1; i++ ){
        targetDiv.appendChild(squareDiv);
        console.log(`Box ${i} created.`);
    };   
};
const containerDiv = document.querySelector(".container");
makeSquareGrid(containerDiv);
