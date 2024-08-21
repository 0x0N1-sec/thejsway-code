/*
List of words
*/
let userInput = "";

let words = [];

while (true) {
    userInput = prompt("Enter a word");

    if (userInput.toLowerCase() === "stop") {
        break;
    }
    words.push(userInput);
}

for (const word of words) {
    console.log(word);
}