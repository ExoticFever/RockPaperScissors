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

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gameWinner;

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Choose between rock, paper, and scissors!");

  while (
    playerSelection.toUpperCase() != "ROCK" &&
    playerSelection.toUpperCase() != "PAPER" &&
    playerSelection.toUpperCase() != "SCISSORS"
  ) {
    playerSelection = prompt(
      "You type in wrong answer, please choose between rock, paper, and scissors!"
    );
  }

  computerSelection = getComputerChoice();

  if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection === "ROCK") {
      return `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      playerScore += 1;
      return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      computerScore += 1;
      return `You lose, ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
  } else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection === "PAPER") {
      return `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      playerScore += 1;
      return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      computerScore += 1;
      return `You lose, ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
  } else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection === "SCISSORS") {
      return `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      playerScore += 1;
      return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      computerScore += 1;
      return `You lose, ${computerSelection} beats ${playerSelection.toUpperCase()}`;
    }
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    alert(playRound(playerSelection, computerSelection));
  }
}

function checkWinner() {
  if (playerScore > computerScore) {
    return "Congratulations! You beat the computer";
  } else if (computerScore > playerScore) {
    return "You lose, try again next time";
  } else {
    return "It's a tie";
  }
}

playGame();
alert(checkWinner());
