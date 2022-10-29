let squaresColor="black"

document.addEventListener("DOMContentLoaded", function(){
    squaresColor="black"
    createBoard(16);
})


setSizeButton = document.getElementById("change-size")
setSizeButton.addEventListener("click", setNewSize)


function setNewSize(){
    let newSize = document.getElementById("set-size").value
    if (newSize>=2 && newSize<=100){
        createBoard(newSize)
        resetBoard()
    } 
    else
        alert("size should be an integer >1 and <=100")
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
    if (newColor=="random"){
        squaresColor=`hsl(${Math.random()*2500}, 100%,50%)`
        console.log("ciao")
    }
    else{
        squaresColor=newColor
    }
}


function resetBoard (){
    let divs=document.querySelectorAll("div")
    divs.forEach((div)=>div.style.backgroundColor="white")
}

