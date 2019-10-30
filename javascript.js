let gridColumns = 16;
let gridRows = 16;


let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "gridContainer");
document.getElementById("mainBox").appendChild(gridContainer);



function createBoard(gridRows, gridColumns) {
    let z = 100000000000 + gridRows;  
    for (let k = 0; k < gridRows; k++) {
        let columnContainer = document.createElement("column");
        columnContainer.setAttribute("class", "column");
        columnContainer.setAttribute("id", k);
        document.getElementById("gridContainer").appendChild(columnContainer);

        for (let i = 0; i < gridColumns; i++) {
            var newDiv = document.createElement("row")
            newDiv.textContent = "i";
            newDiv.setAttribute("id", z);
            newDiv.setAttribute("class", "row");
            newDiv.setAttribute("name", z);
            document.getElementById(k).appendChild(newDiv);
            document.getElementById(z).addEventListener("mouseover", function(){
                this.style.backgroundColor = "black";
            });
            ++z;
        }
    }


}


createBoard(gridRows, gridColumns);

document.getElementById("resetButton").addEventListener("click", function(){
    //Need to add Remove logic
    let boardSize = prompt("How many squares per side?");
    createBoard(boardSize, boardSize);
});