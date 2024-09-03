/*
Newspaper list
*/

// Newspaper list
const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "http://www.economist.com",
];

const newList = linkList => {
  const ulElement = document.createElement("ul");
  for(link of linkList) {
    const listElement = ulElement.appendChild(document.createElement("li"));
    const linkElement = listElement.appendChild(document.createElement("a"));
    linkElement.setAttribute("href", link);
    linkElement.textContent = link;
  }
  document.getElementById("content").appendChild(ulElement);
};

newList(newspapers);


