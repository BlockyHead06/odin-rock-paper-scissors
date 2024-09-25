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
    repeat
        // Prompt user to input "rock" "paper" or "scissors"
        let userChoice = prompt(`Please enter "rock" "paper" or "scissors"`).toLowerCase();
        // If user chose valid option, set isValid to true
    until (isValid)
}