/*
Arrays sum
*/

const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
let arraysSum = 0;

for(let i = 0; i < arrays.length; i++) {
    let subSum = arrays[i].reduce((acc, value) => acc + value, 0);
    arraysSum += subSum;
}

console.log(arraysSum); // 31
