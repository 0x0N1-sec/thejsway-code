/*
Word analysis
*/
let word = prompt("Give us a word yo!");
let vowels = 0;
let palindrome = false;

console.log(`Length: ${word.length}`);
console.log(`${word} all lowered ${word.toLowerCase()}`);
console.log(`${word} all uppered ${word.toUpperCase()}`);

for(let i = 0; i < word.length; i++) {
    if (word[i] === 'a' ||
        word[i] === 'e' || 
        word[i] === 'o' ||
        word[i] === 'u') {
            vowels++;
        }
}

console.log(`Vowels within word ${vowels}`);

let wordArr = Array.from(word);


let revWordArr = wordArr.reverse();
let revWord = "";

for(let i = 0; i < word.length; i++) {
    revWord += revWordArr[i];
}

console.log(`${word} backwards is ${revWord}`);

if (word === revWord) {
    console.log(`${word} is a palindrome of ${revWord}`);
} else {
    console.log(`${word} is not a palindrome`);
}