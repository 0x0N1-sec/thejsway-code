
let countElements = (userParam) => {
    return document.querySelectorAll(userParam).length;
}

console.log(countElements("p"));
console.log(countElements(".adjective"));
console.log(countElements("p .adjective"));
console.log(countElements("p > .adjective"));
