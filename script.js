const themeUtil = (function () {
    const root = document.documentElement;
    const themeBtn = root.querySelector(".tt");
    function toggle(){
        root.className === 'dark' ? root.removeAttribute('class') : root.className = 'dark';
        themeBtn.textContent == "☀️" ? themeBtn.textContent ="🌙" : themeBtn.textContent ="☀️"
    }
    return {toggle}
})();

document.querySelector('.tt').addEventListener('click', themeUtil.toggle)

let turn = "X"

const playRound = (function (){
    const status = document.querySelector(".status")
    return function(){
        this.textContent = turn
        this.removeEventListener("click", playRound)
        turn == "X" ? turn = "O": turn = "X";
        status.textContent = `Player ${turn}'s Turn:`
        checkWinner.check()
    }
})();

const refresh = (function (){
    function content(){
        const gameBoard = document.querySelector(".gameBoard")
        gameBoard.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            const sqaure = document.createElement('div')
            sqaure.classList.add('square')
            sqaure.addEventListener('click', playRound)
            gameBoard.appendChild(sqaure)
        }
    }
    return {content}
})();

refresh.content()

document.querySelector(".restart").onclick = () => refresh.content();

const checkWinner = (function(){
    function check(){
        const gameBoard = Array.from(document.querySelectorAll(".square"))
        let deneme = gameBoard.map(square => square.textContent)
        if (deneme[0] + deneme[1] + deneme[2] == "XXX" ||
            deneme[3] + deneme[4] + deneme[5] == "XXX" ||
            deneme[6] + deneme[7] + deneme[8] == "XXX" ||
            deneme[0] + deneme[3] + deneme[6] == "XXX" ||
            deneme[1] + deneme[4] + deneme[7] == "XXX" ||
            deneme[2] + deneme[5] + deneme[8] == "XXX" ||
            deneme[0] + deneme[4] + deneme[8] == "XXX" ||
            deneme[2] + deneme[4] + deneme[6] == "XXX"){
                declareWinner("X")
            } else if(deneme[0] + deneme[1] + deneme[2] == "OOO" ||
            deneme[3] + deneme[4] + deneme[5] == "OOO" ||
            deneme[6] + deneme[7] + deneme[8] == "OOO" ||
            deneme[0] + deneme[3] + deneme[6] == "OOO" ||
            deneme[1] + deneme[4] + deneme[7] == "OOO" ||
            deneme[2] + deneme[5] + deneme[8] == "OOO" ||
            deneme[0] + deneme[4] + deneme[8] == "OOO" ||
            deneme[2] + deneme[4] + deneme[6] == "OOO"){
                declareWinner("O")
            }
    }
    return {check}
})();

const declareWinner = (function(){
    return function(symbol){
        const gameBoard = document.querySelectorAll(".square")
        const status = document.querySelector(".status")
        gameBoard.forEach(square => square.removeEventListener("click", playRound))
        status.textContent = "GAME OVER. WINNER IS PLAYER: " + symbol
    }
})();
