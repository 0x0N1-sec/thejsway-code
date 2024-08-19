/*
Circumference and area of a circle
*/

//C = 2pi(r)
function circumference(r) {
    return 2 * Math.PI * r;
}

//A = pi(r^2)
function area(r) {
    return Math.PI * (r * r);
}

console.log(circumference(3));
console.log(area(2));