/*
Multiplication table
*/
let userNum = Number(prompt("Give a number:"));

while (userNum > 9 || userNum < 2) {
    userNum = Number(prompt("Give a number:"));
}

for(let i = 0; i < 13; i++) {
    console.log(`${userNum} x ${i} = ${userNum * i}`);
}
