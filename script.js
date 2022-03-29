'use strict';

const selectSymbol = (function(){
    let selectedSymbol = "X";
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.addEventListener("click", selectButton));
    function selectButton(e){
        buttons.forEach(button => button.classList.remove("active-button"));
        this.classList.add("active-button");
        selectedSymbol = this.dataset.symbol;
        console.log(selectedSymbol)
    }

    const returnSymbol = () => {
        return selectedSymbol;
    }
    return {returnSymbol}
})();

const play = (function(){
    const squares = document.querySelectorAll(".game-square");
    squares.forEach(square => square.addEventListener("click", markSymbol))
    function markSymbol(){
        this.textContent = selectSymbol.returnSymbol();
    }
    let array = [];
    squares.forEach(square => {
        array.push(square.textContent);
    })
    function returnArray(){
        return array;
    }
    return {returnArray}
})();

const buildBoard = (function(){
    const squares = document.querySelector(".game-square");
})();

const checkWinner = (function(boardArray){
    if(boardArray[0] == boardArray[1] == boardArray[2]){
        alert("Wineeeeeer")
    }
})();