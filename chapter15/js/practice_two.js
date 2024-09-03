const paragraphElement = document.querySelector("p");
paragraphElement.style.color = "red";
paragraphElement.style.margin = "50px";

paragraphElement.style.fontFamily = "Arial";
paragraphElement.style.backgroundColor = "black";

const paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements[0].style.color);
console.log(paragraphElements[1].style.color);
console.log(paragraphElements[2].style.color);

const paragraphStyle = getComputedStyle(document.getElementById("para"));
console.log(paragraphStyle.fontStyle);
console.log(paragraphStyle.color);
