//Assign computer's choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    randomNumber = "ROCK";
  } else if (randomNumber === 2) {
    randomNumber = "PAPER";
  } else if (randomNumber === 3) {
    randomNumber = "SCISSORS";
  } else {
    randomNumber = null;
  }

  return randomNumber;
}

//Declare variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gameWinner;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const rpsBtn = document.querySelectorAll(".rps-btn");
const resultMsg = document.querySelector("#resultMsg");
const container = document.querySelector("#container");
const scoreBoardContainer = document.createElement("div");
const playerNames = document.createElement("div");
const scores = document.createElement("div");
scoreBoardContainer.appendChild(playerNames);
scoreBoardContainer.appendChild(scores);

rockBtn.addEventListener('click', () => {
  playRound("rock", computerSelection);
})

paperBtn.addEventListener('click', () => {
  playRound("paper", computerSelection);
})

scissorsBtn.addEventListener('click', () => {
  playRound("scissors", computerSelection);
})


function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection === "ROCK") {
      resultMsg.textContent = `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      playerScore += 1;
      resultMsg.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      computerScore += 1;
      resultMsg.textContent = `You lose, ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
  } else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection === "PAPER") {
      resultMsg.textContent = `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      playerScore += 1;
      resultMsg.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      computerScore += 1;
      resultMsg.textContent = `You lose, ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
  } else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection === "SCISSORS") {
      resultMsg.textContent = `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      playerScore += 1;
      resultMsg.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      computerScore += 1;
      resultMsg.textContent = `You lose, ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
  }

  container.insertBefore(scoreBoardContainer, resultMsg);
}

//Function to check the winner
function checkWinner() {
  if (playerScore == 5) {
    return "Congratulations! You beat the computer";
  } else if (computerScore == 5) {
    return "You lose, try again next time";
  }
}