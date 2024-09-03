document.getElementById("languages").innerHTML += '<li id="c">C</li>';
document.querySelector("h3").textContent += " for programming";

// Define the id attribute of the first title
document.querySelector("h3").setAttribute("id", "title");

// Can also do this:
//document.querySelector("h3").id = "title";

const titleElement = document.querySelector("h3");
titleElement.classList.remove("beginning");
titleElement.classList.add("title");
console.log(titleElement);

const pythonElement = document.createElement("li");
pythonElement.id = "python";
pythonElement.textContent = "Python";
document.getElementById("languages").appendChild(pythonElement);

const rubyElement = document.createElement("li");
rubyElement.id = "ruby";
rubyElement.appendChild(document.createTextNode("Ruby"));
document.getElementById("languages").appendChild(rubyElement);

const perlElement = document.createElement("li");
perlElement.id = "perl";
perlElement.textContent = "Perl";
document.getElementById("languages").insertBefore(perlElement, document.getElementById("php"));

document.getElementById("languages").insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>');

const lispElement = document.createElement("li");
lispElement.id = "lisp";
lispElement.textContent = "Lisp";
document.getElementById("languages").replaceChild(lispElement, document.getElementById("perl"));

document.getElementById("languages").removeChild(document.getElementById("lisp"));

