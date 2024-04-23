
const character = {
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
    }
};


const warrior = Object.create(character, {
    name: { value: "Warrior", writable: true },
    health: { value: 100, writable: true },
    level: { value: 5, writable: true },
    weapon: { value: "Sword", writable: true },
    attack() {
        console.log(`I am attacking with ${this.weapon}!`);
    }
});


const wizard = Object.create(character, {
    name: { value: "Wizard", writable: true },
    health: { value: 80, writable: true },
    level: { value: 7, writable: true },
    spell: { value: "Fireball", writable: true },
    castSpell() {
        console.log(`I am casting ${this.spell}!`);
    }
});



warrior.introduce();
wizard.introduce();


warrior.attack();


wizard.castSpell();