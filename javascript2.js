let gridColumns = 16;
let gridRows = 16;

function createGridContainer() {
    let gridContainer = document.createElement("gridContainer");
    gridContainer.setAttribute("id", "gridContainer");
    gridContainer.setAttribute("class", "gridWrapper");
    document.getElementById("mainBox").appendChild(gridContainer);
}

createGridContainer();



function createBoard(gridRows, gridColumns) {
        const gridContainer = document.querySelector("gridContainer");
        gridContainer.style.setProperty("--colNum", gridColumns);
        gridContainer.style.setProperty("--rowNum", gridRows);
        let numberOfGridItems = gridRows * gridColumns;
        createGridItems(numberOfGridItems);
}

function createGridItems(numberOfGridItems) {

    for (let k = 0; k < numberOfGridItems; k++) {
        let gridItem = document.createElement("gridItem");
        gridItem.setAttribute("class", "gridItem");
        gridItem.setAttribute("id", k);
        document.getElementById("gridContainer").appendChild(gridItem);
        document.getElementById(k).addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
    }

}

createBoard(gridRows, gridColumns);

document.getElementById("resetButton").addEventListener("click", function () {
    let pleaseRemove = document.getElementById("gridContainer");
    pleaseRemove.remove();
    createGridContainer();
    let boardSize = prompt("How many squares per side?");
    createBoard(boardSize, boardSize);
});
