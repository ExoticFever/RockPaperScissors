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
const playerOneName = document.createElement("div");
const playerTwoName = document.createElement("div");
const scores = document.createElement("div");
const restartBtn = document.createElement("button");
const restartBoard = document.createElement("div");
const restartMessage = document.createElement("div");

scoreBoardContainer.classList.add("scoreContainer")

rockBtn.addEventListener('click', () => {
  playRound("rock", computerSelection);
})

paperBtn.addEventListener('click', () => {
  playRound("paper", computerSelection);
})

scissorsBtn.addEventListener('click', () => {
  playRound("scissors", computerSelection);
})

playerOneName.textContent = "Player";
playerTwoName.textContent = "CPU";

scoreBoardContainer.appendChild(playerOneName);
scoreBoardContainer.appendChild(playerTwoName);
scoreBoardContainer.appendChild(scores);
container.insertBefore(scoreBoardContainer, resultMsg);

restartBoard.appendChild(restartMessage);
restartBoard.appendChild(restartBtn);

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
  scores.textContent = `${playerScore} - ${computerScore}`;
  //Checking if one of the players already reached 5 or not
  if(playerScore == 5 || computerScore == 5) {
  checkWinner();
  }

}

//Function to check the winner
function checkWinner() {
  const winnerMessage = document.createElement("div");
  if (playerScore == 5) {
    winnerMessage.textContent = "Congratulations! You beat the computer";
    container.insertBefore(winnerMessage, scoreBoardContainer);
  } else if (computerScore == 5) {
    winnerMessage.textContent = "You lose, try again next time";
    container.insertBefore(winnerMessage, scoreBoardContainer);
  }
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  restartBtn.textContent = "Restart";
  restartBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    scores.textContent = "";
    container.removeChild(winnerMessage);
    container.removeChild(restartBoard);
    resultMsg.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
  })
  restartMessage.textContent = "Click this button to restart the game";
  container.insertBefore(restartBoard, scoreBoardContainer);
}