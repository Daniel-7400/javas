let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

// Function to update the UI
function updateUI(message) {
  const scoreDiv = document.getElementById("score");
  const winnerDiv = document.getElementById("winner");

  scoreDiv.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
  winnerDiv.textContent = message;

  if (playerScore === 5 || computerScore === 5) {
    winnerDiv.textContent = playerScore === 5 ? "You are the champion!" : "Computer is the champion!";
    disableButtons();
  }
}

// Function to disable buttons when the game ends
function disableButtons() {
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const resultMessage = playRound("rock", computerSelection);
  updateUI(resultMessage);
});

document.getElementById("paper").addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const resultMessage = playRound("paper", computerSelection);
  updateUI(resultMessage);
});

document.getElementById("scissors").addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const resultMessage = playRound("scissors", computerSelection);
  updateUI(resultMessage);
});