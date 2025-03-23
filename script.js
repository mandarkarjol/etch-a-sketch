// Define a function that generates a square grid inside a target html div element. Default grid size = 16
function makeSquareGrid(targetDiv, size = 40){
    for(let i = 0; i <= (size * size) - 1; i++ ){
        const squareDiv = document.createElement("div");
        targetDiv.append(squareDiv);
        console.log(`Box ${i} created.`);
    };
    targetDiv.style.width = `${20 * size}px`;
};
const containerDiv = document.querySelector(".container");
makeSquareGrid(containerDiv);
