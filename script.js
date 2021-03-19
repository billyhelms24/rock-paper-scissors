let playerScore = 0;
let computerScore = 0;
let randInt = 0;

const scoreBoard = document.querySelector(".score");
const result = document.querySelector(".result");
const playerCards = document
    .querySelector(".player")
    .querySelectorAll(".option");
const computerCards = document
    .querySelector(".computer")
    .querySelectorAll(".option");

function computerSelect() {
    const num = Math.floor(Math.random() * 99) + 1;
    if (num >= 67) {
        return "rock";
    } else if (num >= 34) {
        return "paper";
    } else {
        return "scissors";
    }
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result.textContent = "Draw!";
        } else if (computerSelection == "paper") {
            computerScore++;
            result.textContent = "Defeat!";
        } else {
            playerScore++;
            result.textContent = "Victory!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            result.textContent = "Victory!";
        } else if (computerSelection == "paper") {
            result.textContent = "Draw!";
        } else {
            computerScore++;
            result.textContent = "Defeat!";
        }
    } else {
        if (computerSelection == "rock") {
            computerScore++;
            result.textContent = "Defeat!";
        } else if (computerSelection == "paper") {
            playerScore++;
            result.textContent = "Victory!";
        } else {
            result.textContent = "Draw!";
        }
    }
}

function playRound() {
    checkWinner(this.dataset.key, computerSelect());
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
}

playerCards.forEach((option) => option.addEventListener("click", playRound));
