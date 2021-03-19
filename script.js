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

function clearDisplay() {
    computerCards.forEach((option) => {
        option.classList.remove("selected");
    });

    playerCards.forEach((option) => {
        option.classList.remove("selected");
    });
}

function checkWinner(playerSelection, computerSelection) {
    clearDisplay();

    if (playerSelection == "rock") {
        playerCards[0].classList.add("selected");
        if (computerSelection == "rock") {
            result.textContent = "Draw!";
            computerCards[0].classList.add("selected");
        } else if (computerSelection == "paper") {
            computerScore++;
            result.textContent = "Defeat!";
            computerCards[1].classList.add("selected");
        } else {
            playerScore++;
            result.textContent = "Victory!";
            computerCards[2].classList.add("selected");
        }
    } else if (playerSelection == "paper") {
        playerCards[1].classList.add("selected");
        if (computerSelection == "rock") {
            playerScore++;
            result.textContent = "Victory!";
            computerCards[0].classList.add("selected");
        } else if (computerSelection == "paper") {
            result.textContent = "Draw!";
            computerCards[1].classList.add("selected");
        } else {
            computerScore++;
            result.textContent = "Defeat!";
            computerCards[2].classList.add("selected");
        }
    } else {
        playerCards[2].classList.add("selected");
        if (computerSelection == "rock") {
            computerScore++;
            result.textContent = "Defeat!";
            computerCards[0].classList.add("selected");
        } else if (computerSelection == "paper") {
            playerScore++;
            result.textContent = "Victory!";
            computerCards[1].classList.add("selected");
        } else {
            result.textContent = "Draw!";
            computerCards[2].classList.add("selected");
        }
    }
}

function gameEnd() {
    if (playerScore == 5 || computerScore == 5) {
        playerCards.forEach((option) =>
            option.removeEventListener("click", playRound)
        );

        setTimeout(() => {
            if (playerScore > computerScore) {
                alert(
                    "Congrats, you beat the computer! To replay, simply refresh the browser."
                );
            } else {
                alert(
                    "It looks like the computer got the best of you this time. Refresh the browser to try again."
                );
            }
        }, 100);
    }
}

function playRound() {
    checkWinner(this.dataset.key, computerSelect());
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
    gameEnd();
}

playerCards.forEach((option) => option.addEventListener("click", playRound));
