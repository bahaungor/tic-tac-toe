function setTheme() {
    const root = document.documentElement;
    const themeBtn = root.querySelector(".tt");
    root.className === 'dark' ? root.removeAttribute('class') : root.className = 'dark';
    themeBtn.textContent == "☀️" ? themeBtn.textContent ="🌙" : themeBtn.textContent ="☀️"
}

document.querySelector('.tt').addEventListener('click', setTheme)

const gameBoard = document.querySelector(".gameBoard")

function refresh(){
    gameBoard.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const sqaure = document.createElement('div')
        sqaure.classList.add('square')
        gameBoard.appendChild(sqaure)
    }
}

refresh()