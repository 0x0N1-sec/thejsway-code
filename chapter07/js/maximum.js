/*
Array maximum
*/
const values = [3, 11, 7, 2, 9, 10];

let maximum = values[0];

for (const ele of values) {
    if (ele > maximum) {
        maximum = ele;
    }
}

console.log(maximum);