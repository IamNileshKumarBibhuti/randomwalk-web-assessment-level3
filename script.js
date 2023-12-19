console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
music.loop = true;
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isgameover = false;
let xWins = 0;
let oWins = 0;
let playerXName = "Player X";
let playerOName = "Player O";

document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('reset').addEventListener('click', resetGame);
let boxes = document.querySelectorAll(".box");

function startGame() {
    playerXName = document.getElementById('playerXName').value || "Player X";
    playerOName = document.getElementById('playerOName').value || "Player O";
    document.getElementById('playerXDisplay').textContent = `${playerXName} (X) Wins: `;
    document.getElementById('playerODisplay').textContent = `${playerOName} (O) Wins: `;
    document.querySelector('.gameContainer').style.display = 'block';
    document.querySelector('.player-inputs').style.display = 'none';
}

function resetGame() {
    boxes.forEach(box => box.innerText = '');
    turn = "X";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
}

function changeTurn() {
    return turn === "X" ? "O" : "X";
}

function checkWin() {
    // Your existing checkWin logic
    // Ensure to update this logic to handle the player names correctly
}

function updateScore(winner) {
    if (winner === "X") {
        xWins += 1;
        document.getElementById('playerXWins').innerText = xWins;
    } else if (winner === "O") {
        oWins += 1;
        document.getElementById('playerOWins').innerText = oWins;
    }
}

boxes.forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerText === '' && !isgameover) {
            element.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    try {
        music.play().catch(e => {
            console.log("Auto-play was prevented by the browser");
        });
    } catch (e) {
        console.error("There was an error trying to play the music:", e);
    }
});
