let gridColumns = 16;
let gridRows = 16;

let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "gridContainer");
document.body.appendChild(gridContainer);
        
for (let i = 0; i < gridColumns; i++) {
    var newDiv = document.createElement("div")
    newDiv.textContent = "I am a square div!";
    newDiv.setAttribute("id", i);
    document.getElementById("gridContainer").appendChild(newDiv);
}
