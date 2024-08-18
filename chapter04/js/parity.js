/*
Show even and odd numbers
*/
let beginState = Number(prompt("What's our start?"));
let endState = Number(prompt("Where should we end?"));

for (; beginState <= endState ; beginState++) {
    if (beginState % 2 === 0) {
      console.log(`${beginState} is even`);
    } else {
        console.log(`${beginState} is odd`);
    }
  }