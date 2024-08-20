/*
Object-oriented bank account
*/
const account = {
    name: "Alex",
    balance: 0,
    credit(amount) {
        this.balance += amount;
    },
    description() {
        return `Owner: ${this.name}, balance: ${this.balance}`;
    },
};

console.log(account.description());
account.credit(250);
console.log(account.description());
account.credit(-80);
console.log(account.description());