function getComputerChoice() {
    // Get a random number from 0 - 2
    let randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0: // If the number is 0, return "rock"
            return "rock"; 
        case 1: // If the number is 1, return "paper"
            return "paper";
        case 2: // If the number is 2, return "scissors"
            return "scissors";
    }
}

function getHumanChoice() {
    // Create isValid variable to tell if choice is valid
    let isValid = false;
    let userChoice
    do {
        // Prompt user to input "rock" "paper" or "scissors"
        userChoice = prompt(`Please enter "rock" "paper" or "scissors"`).toLowerCase();
        // If user chose valid option, set isValid to true
        switch (userChoice) {
            case "rock":
            case "paper":
            case "scissors":
                isValid = true;
        }
    } while (!isValid)

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Determine and output the winner
    // If human wins, increment humanScore
    // If computer wins, increment computerScore
}

// Get human choice and computer choice
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();