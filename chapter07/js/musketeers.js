/*
Musketeers
*/
const musketeers = ["Athos", "Porthos", "Aramis"];

for(let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.unshift("D'Artagnan");

musketeers.forEach(musketeer => {
    console.log(musketeer);
});

musketeers.pop();

for (const musketeer of musketeers) {
    console.log(musketeer);
}