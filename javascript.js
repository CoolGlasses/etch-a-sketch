let gridColumns = 16;
let gridRows = 16;

let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "gridContainer");
document.getElementById("mainBox").appendChild(gridContainer);

function createBoard(gridRows, gridColumns) {
    for (let k = 0; k < gridRows; k++) {
        let columnContainer = document.createElement("div");
        columnContainer.setAttribute("class", "column");
        columnContainer.setAttribute("id", k);
        document.getElementById("gridContainer").appendChild(columnContainer);

        for (let i = 0; i < gridColumns; i++) {
            var newDiv = document.createElement("div")
            newDiv.textContent = "i";
            newDiv.setAttribute("class", "row");
            document.getElementById(k).appendChild(newDiv);
        }
    }

}

createBoard(gridRows, gridColumns);