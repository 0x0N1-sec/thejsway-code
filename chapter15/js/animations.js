const counterElement = document.getElementById("counter");

// count down the counter
const decreaseCounter = () => {
    // convert counter text to a number
    const counter = Number(counterElement.textContent);
    // decrease counter by one
    counterElement.textContent = counter - 1;
};

// call the decreaseCounter function every second (1000 milliseconds);
setInterval(decreaseCounter, 1000);
