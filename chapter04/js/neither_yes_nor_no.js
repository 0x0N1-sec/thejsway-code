/*
"Neither yes, nor no" game
*/

let userInput = prompt("Enter yes or no!");

while (userInput.toLowerCase() !== "yes" && userInput.toLowerCase() !== "no") {
    userInput = prompt("Enter yes or no");
}