const Potion = require("./Potion")
const Character = require("./Character")

// function Enemy(name, weapon) {
//     this.name = name
//     this.weapon = weapon
//     this.potion = new Potion()

//     this.health = Math.floor(Math.random() * 10 + 85)
//     this.strength = Math.floor(Math.random() * 5 + 5)
//     this.agility = Math.floor(Math.random() * 5 + 5)
// }

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon
        this.potion = new Potion()
    }

    getDescription() {
        return `The ${this.name} is attacking you with a ${this.weapon}`
    }
}

// Enemy.prototype = Object.create(Character.prototype)

// Enemy.prototype.getDescription = function () {
//     return `The ${this.name} is attacking you with a ${this.weapon}`
// }

module.exports = Enemy