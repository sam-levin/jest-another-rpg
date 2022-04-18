const Potion = require('./Potion');
const Character = require('./Character')

class Enemy extends Character {
  constructor (name, weapon) {
    super(name);
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
  }

  getHealth () {
    return `The ${this.name}'s health is now ${this.health}!`;
  }

  isAlive () {
    if (this.health === 0) {
      return false;
    }
    return true;
  }

  getAttackValue () {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  }

  reduceHealth (health) {
    this.health -= health;  
  }

  getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

}

module.exports = Enemy;
