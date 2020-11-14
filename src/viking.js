// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `NAME has died in act of combat`;
        }
        return `${this.name} has received ${damage} points of damage`;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return this.die();
        }
        return `A Saxon has received ${damage} points of damage`;
    }
    die() {
        return `A Saxon has died in combat`;
    }
}

// // War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let battler1 = this.saxonArmy.pop();
        let battler2 = this.vikingArmy.pop();
        let attackDamage = battler1.receiveDamage(battler2.attack());
        if (battler1.health > 0) {
            this.saxonArmy.push(battler1);
        }
        this.vikingArmy.push(battler2);

        return attackDamage;
    }

    saxonAttack() {
        let battler1 = this.vikingArmy.pop();
        let battler2 = this.saxonArmy.pop();
        let attackDamage = battler1.receiveDamage(battler2.attack());
        if (battler1.health > 0) {
            this.vikingArmy.push(battler1);
        }
        this.saxonArmy.push(battler2);
        return attackDamage;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else return 'Vikings and Saxons are still in the thick of battle.';
    }
}