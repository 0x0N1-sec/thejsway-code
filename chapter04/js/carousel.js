/*
Carousel turns
*/
let turns = Number(prompt("How many times around the carousel?"));

for(let i = 1; i <= turns; i++) {
    if (i == 1) {
        alert(`${i} time around the carousel!`);
    } else {
        alert(`${i} times around the carousel!`);
    }
}