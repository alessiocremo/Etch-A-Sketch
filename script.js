let squaresColor="black"
let size=16

document.addEventListener("DOMContentLoaded", function(){
    squaresColor="black"
    createBoard(size);
})


setSizeButton = document.getElementById("change-size")
setSizeButton.addEventListener("click", setNewSize())


function setNewSize(){
    createBoard(document.getElementById("set-size").value)
}



function createBoard(boardSize){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`
    board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`

    let numDivs = boardSize*boardSize

    for (let i=0; i<numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover",function(){
            div.style.backgroundColor=squaresColor
        })
        // div.style.backgroundColor="black"
        board.insertAdjacentElement("beforeend",div)
    }
}

function setColor(newColor){
    squaresColor=newColor
}