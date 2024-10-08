/*
RPG character experience
*/
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points and ${this
        .strength} as strength. Current experience points at ${this.xp}`;
    }
  };

// TODO: create the character object here

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
