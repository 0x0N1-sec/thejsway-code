/*
Display the time one second later
*/
alert("Give me the time in the following format 00h00m00s");
let hours = Number(prompt("Hours:"));
let minutes = Number(prompt("Minutes:"));
let seconds = Number(prompt("Seconds:"));

if (seconds === 59) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
        minutes = 0;
        if (hours === 24) {
            hours = 0;
        } else {
            hours++;
        }
    } else {
        minutes++;
    }
} else {
    seconds++;
}

alert(`New time: ${hours}h ${minutes}m ${seconds}s`)
