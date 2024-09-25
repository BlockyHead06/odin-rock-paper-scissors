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
    // Prompt user to input "rock" "paper" or "scissors"
    // If user chose "rock" return "rock"
    // If user chose "paper" return "paper"
    // If user chose "scissors" return "scissors"
    // If user choice does not match anything, prompt again
}