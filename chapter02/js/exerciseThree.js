const raw = Number(prompt("What is the raw price?"));
const vatRate = 20.6;
const vatTax = raw * vatRate;
const finalPrice = raw + vatTax;

alert(`Final price is: $${finalPrice}`);