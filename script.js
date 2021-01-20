/* let playerScore = 0;
let compScore = 0;

function randInt() {
  return Math.floor(Math.random() * 100) + 1;
}

function compSelect(num) {
  if (num >= 67) {
    return "rock";
  } else if (num >= 34) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerSelect() {
  return prompt(
    "Enter one of the following: rock, paper, scissors"
  ).toLowerCase();
}

function playRound(playerSelect, compSelect) {
  console.log("The computer chose: " + compSelect);
  console.log("You chose: " + playerSelect);
  if (playerSelect == "rock") {
    if (compSelect == "rock") {
      console.log("Draw");
    } else if (compSelect == "paper") {
      compScore++;
      console.log("Defeat");
    } else {
      playerScore++;
      console.log("Victory");
    }
  } else if (playerSelect == "paper") {
    if (compSelect == "rock") {
      playerScore++;
      console.log("Victory");
    } else if (compSelect == "paper") {
      console.log("Draw");
    } else {
      compScore++;
      console.log("Defeat");
    }
  } else {
    if (compSelect == "rock") {
      compScore++;
      console.log("Defeat");
    } else if (compSelect == "paper") {
      playerScore++;
      console.log("Victory");
    } else {
      console.log("Draw");
    }
  }
}

function playGame() {
  while (playerScore < 5 && playerScore < 5) {
    playRound(playerSelect(), compSelect(randInt()));
    console.log("The score is now: " + playerScore + "-" + compScore + "!");
  }
  if (playerScore > compScore) {
    console.log(
      "Congrats, you made it to 5 first! Refresh the page to play again."
    );
  } else {
    console.log(
      "Uh-oh, the Computer made it to 5 first! Refresh the page to play again."
    );
  }
}

playGame(); */

let playerScore = 0;
let computerScore = 0;
let randInt = 0;

const scoreBoard = document.querySelector('.score');

function computerSelect(num) {
  if (num >= 67) {
    return "rock";
  } else if (num >= 34) {
    return "paper";
  } else {
    return "scissors";
  }
};

function checkWinner(playerOption, computerOption) {
  if (playerOption == "rock") {
    if (computerOption == "rock") {
      console.log("Draw");
    } else if (computerOption == "paper") {
      computerScore++;
      console.log("Defeat");
    } else {
      playerScore++;
      console.log("Victory");
    }
  } else if (playerOption == "paper") {
    if (computerOption == "rock") {
      playerScore++;
      console.log("Victory");
    } else if (computerOption == "paper") {
      console.log("Draw");
    } else {
      computerScore++;
      console.log("Defeat");
    }
  } else {
    if (computerOption == "rock") {
      computerScore++;
      console.log("Defeat");
    } else if (computerOption == "paper") {
      playerScore++;
      console.log("Victory");
    } else {
      console.log("Draw");
    }
  }
}

function playRound() {
  randInt = Math.floor(Math.random() * 100) + 1;
  checkWinner("rock", computerSelect(randInt));
  scoreBoard.textContent = `${playerScore} - ${computerScore}`;
};

const playerCards = document.querySelector('.player').querySelectorAll('.option');
playerCards.forEach(option => option.addEventListener('click', playRound));