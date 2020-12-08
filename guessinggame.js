// Prompt user for maximum number
let maximum = parseInt(prompt("Enter your maximum number"));
// Check whether input is a valid number 
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

// Generate random number between 1 - maximum
let randomNum = Math.floor(Math.random() * maximum) + 1;

// Prompt user for a first guess
let guess = parseInt(prompt("Let the guessing begin:"));
// create a variable to track the number of attempts 
let attempts = 1;

// Compare guess to randomNum 
while (parseInt(guess) !== randomNum) {
    // set "q" as command to quit the game
    if (guess === "q") break;
    attempts++;
    if (guess > randomNum) {
        guess = prompt("too high. Enter a new guess:");
    } else {
        guess = prompt("too low. Enter a new guess:");
    }
}

if (guess === "q") {
    prompt("OK, YOU QUIT");
} else {
    prompt(`YAAAY, you got it!!! It took you ${attempts} guesses!!!`);
}