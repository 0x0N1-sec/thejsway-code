/*
Minimum of two numbers
*/

// TODO: write the min() function
let min = (x, y) => {
    if (x >= y) {
        return y;
    } else {
        return x;
    }
};

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1
