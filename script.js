'use strict';
const selectSymbol = (function(){
    let selectedSymbol = "X";
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.addEventListener("click", selectButton));
    function selectButton(e){
        buttons.forEach(button => button.classList.remove("active-button"));
        this.classList.add("active-button");
        selectedSymbol = this.dataset.symbol;
    }

    const returnSymbol = () => {
        return selectedSymbol;
    }
    return {returnSymbol, selectedSymbol, selectButton}
})();

const players = (function(){
    function player(symbol, turn){
        return {symbol, turn}
    }
    const playerX = player("X", 1);
    const playerO = player("O", 0);

    function changeTurn(){
        if(playerX.turn == 1){
            playerX.turn = 0;
            playerO.turn = 1;
        } else {
            playerX.turn = 1;
            playerO.turn = 0;
        }
    }

    function sayTurn(){
        if(playerX.turn > playerO.turn){
            return playerX.symbol;
        } else {
            return playerO.symbol;
        }
    }

    return {changeTurn, sayTurn}
})();

const play = (function(){
    const squares = document.querySelectorAll(".game-square");
    squares.forEach(square => square.addEventListener("click", markSymbol))
    function markSymbol(){
        this.textContent = players.sayTurn();
        let array = [];
        squares.forEach(square => {
            array.push(square.textContent);
        })
        checkWinner.winner(array);
        players.changeTurn();
    }
})();

const checkWinner = (function(){
    function winner(array){
        if(array[0] + array[1] + array[2] == "XXX"
        || array[3] + array[4] + array[5] == "XXX"
        || array[6] + array[7] + array[8] == "XXX"
        || array[0] + array[3] + array[6] == "XXX"
        || array[1] + array[4] + array[7] == "XXX"
        || array[2] + array[5] + array[8] == "XXX"
        || array[0] + array[4] + array[8] == "XXX"
        || array[2] + array[4] + array[6] == "XXX"){
            alert("Wineeeeeer is player X" )
        } else if (array[0] + array[1] + array[2] == "OOO"
        || array[3] + array[4] + array[5] == "OOO"
        || array[6] + array[7] + array[8] == "OOO"
        || array[0] + array[3] + array[6] == "OOO"
        || array[1] + array[4] + array[7] == "OOO"
        || array[2] + array[5] + array[8] == "OOO"
        || array[0] + array[4] + array[8] == "OOO"
        || array[2] + array[4] + array[6] == "OOO"){
            alert("Wineeeeeer is player O" )
        }
    }
    return {winner}
})();

const changePlayer = (function(){
    function changeTheCurrentPlayer(){
        const buttons = document.querySelectorAll(".button");
        const xButton = document.querySelector(".symbol-x");
        const yButton = document.querySelector(".symbol-o")
        buttons.forEach(button => button.classList.remove("active-button"));
        if(playerXturn > playerYturn) {
            xButton.classList.add("active-button")
        } else if (playerYturn > playerXturn){
            yButton.classList.add("active-button")
        } else {
            return "Something is wrong"
        }
    }

    return {changeTheCurrentPlayer}
})();