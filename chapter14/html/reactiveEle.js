var clicks = 0;

function clickCounter() {
    clicks += 1;
    document.getElementById("clickCount").innerText = clicks;
}

function deactivateCount() {
    clickCounter.preventDefault();
}
