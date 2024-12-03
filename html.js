function getComputerChoice() {
    // Generate a random number between 0 and 1
    let randomNumber = Math.random();
    
    // Use conditional statements to determine the choice
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Example usage
console.log(getComputerChoice());

function getHumanChoice() {
    // Define valid choices
    const validChoices = ['rock', 'paper', 'scissors'];
    
    // Prompt the user for input
    let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    
    // Validate input
    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors':").toLowerCase();
    }
    
    // Return the valid choice
    return userInput;
}

// Test the function
console.log("You chose:", getHumanChoice());

// Initialize global variables
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    // Normalize humanChoice to lowercase for case-insensitivity
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Define possible choices
    const choices = ["rock", "paper", "scissors"];

    // Validate inputs
    if (!choices.includes(humanChoice) || !choices.includes(computerChoice)) {
        console.log("Invalid choice! Please select Rock, Paper, or Scissors.");
        return;
    }

    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        computerScore++;
    }

    // Display updated scores
    console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
}

function playRound() {
    // Assuming playRound involves getting the player's choice and the computer's choice
    let choices = ['rock', 'paper', 'scissors'];
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Determine the winner
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      console.log(`Round ${i}:`);
      let result = playRound();
      console.log(result);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "You lose!") {
        computerScore++;
      }
    }
  
    console.log(`Final Score - You: ${playerScore} | Computer: ${computerScore}`);
  }
  
  // Call the playGame function to play 5 rounds
  playGame();