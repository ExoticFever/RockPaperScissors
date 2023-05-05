//Generate computer choice between rock, paper, and scissors
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

//Declaring the variables
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let playerSelection;
let computerSelection;
let gameWinner;

const winnerMsg = document.querySelector(".winnerMessage");
const scoreBoard = document.querySelector(".scoreBoard");
const result = document.querySelector(".result");
const playerChoicesBtn = document.querySelectorAll(".playerChoices");

//Check what button does the player choose
playerChoicesBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    //Assign playerSelection into the button that player chose
    playerChoice = btn.getAttribute("id").toUpperCase();
    playRound();
  })
);
//Function to start the game
function playRound(playerSelection, computerSelection) {
  scoreBoard.textContent = "";
  result.textContent = "";
  winnerMsg.textContent = "";
  playerSelection = playerChoice;
  computerSelection = getComputerChoice();

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === "ROCK") {
    if (computerSelection === "ROCK") {
      result.textContent = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      playerScore += 1;
      result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      computerScore += 1;
      result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "PAPER") {
      result.textContent = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      playerScore += 1;
      result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      computerScore += 1;
      result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "SCISSORS") {
      result.textContent = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      playerScore += 1;
      result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      computerScore += 1;
      result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    }
  }
  scoreBoard.textContent = `Score : ${playerScore} - ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    checkWinner();
    playerScore = 0;
    computerScore = 0;
  }
}

//Checking the winner by comparing the score
function checkWinner() {
  if (playerScore > computerScore) {
    winnerMsg.textContent = "Congratulations! You beat the computer";
  } else if (computerScore > playerScore) {
    winnerMsg.textContent = "You lose, try again next time";
  } else {
    winnerMsg.textContent = "It's a tie";
  }
}
