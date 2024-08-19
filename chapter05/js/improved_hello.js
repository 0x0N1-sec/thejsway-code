/*
Say hello to the user
*/

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
// TODO: call sayHello() and show its result
alert(sayHello(firstName, lastName));
