/*
Social news program
*/
class Link {
    constructor(title, url, author) {
        this.title = title;
        this.url = url;
        this.author = author;
    }
    toString() {
        return `Title: ${this.title} | URL: ${this.url} | Author: ${this.author}`;
    }
}

let links = [];
// link is title + author & must begin with http:// or https://
let choice = 0;
// display menu
while (choice !== 4) {
    choice = Number(prompt("Choose action below:\n\t1) Show List of Links\n\t2) Add a New Link\n\t3) Remove an Existing Link\n\t4) Quit"));
    if (choice === 4) {
        break;
    } else if (choice === 1) {
        for(let i = 0; i < links.length; i++) {
            alert(links[i].toString());
        }
    } else if (choice === 2) {
        let title = prompt("Link title:");
        let url = prompt("url:");
        let author = prompt("Author:");

        if(!((url.startsWith("http://")) || (url.startsWith("https://")))) {
            url = "http://" + url;
        }

        let newLink = new Link(title, url, author);
        links.push(newLink);
    } else if (choice === 3) {
        let removal = Number(prompt(`There are ${links.length}. Which do you want removed? (Number please)`));
        links.splice(removal-1, 1);
    } else {
        choice = Number(prompt("That is not valid. Try again"));
    }
}
