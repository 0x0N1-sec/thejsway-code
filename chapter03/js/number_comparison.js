/*
Number comparison
*/
let numOne = Number(prompt("Give me a number"));
let numTwo = Number(prompt("Give me another number"));

if (numOne > numTwo) {
    alert(`${numOne} is greater than ${numTwo}`);
} else if (numTwo > numOne) {
    alert(`${numTwo} is greater than ${numOne}`);
} else {
    alert(`You input ${numOne} in both cases so all are equal!`)
}