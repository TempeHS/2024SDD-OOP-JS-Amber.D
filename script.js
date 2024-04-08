/* class Warrior {
    constructor (
        name,
        hp,
        mp,
        items,
        shield) {
            this.name = name;
            this.hp = hp;
            this.mp = mp;
            this.items = items;
            this.shield = shield;
        }
} */

//super-class
class Player {
    constructor (name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;

    }
    speak(phrase) { 
        console.log(`${this.name} says: "${phrase}`
        );
    }
}

//sub class
class Warrior extends Player { 
    constructor(name, hp, mp, items, shield){
        super(name, hp, mp, items); //take everything from player -> warrior 
      this.shield = shield;
      /*   super.speak("Rawr!");
        console.log(super.constructor);
        console.log("this", this); */
    }
    speak (phrase) {
        console.log(`${[phrase]} cfffff!`);
    }
}

class Bartender extends Player { 
    constructor(name, hp, mp, items, mug){
        super(name, hp, mp, items); //take everything from player -> warrior 
        this.mug = mug;
/*       super.speak("Rawr!");
        console.log(super.constructor);
        console.log("this", this); */
    }
    speak (phrase) {
        console.log(`${[phrase]} cfffff!`);
    }
}

const Warrior = new Warrior("Genghis Khan", 500, 50, ["Sabre"], "Leather Shield");

const player = new Player("Player", 100, 10,[]); 
const Warrior = new Warrior("Genghis Khan", 300, 50, ["Sabre"]);
console.log(player);
console.log(Warrior);

console.log(Object.getOwnPropertyNames(Plyaer.protype));
console.log(Object.getOwnPropertyNames(Player));

console.log(warrior instanceof Player);
console.log(warrior instanceof Warrior);
console.log(warrior instanceof Array);
console.log(warrior instanceof Object);

/* warrior.phrase = "hi";
console 
/*polymorphism - reduce amount of maintance and documentation (in exam)
There is two types 
- Child method overwrite parent 
- Specific to the method runs with passed in data

inhertiance - abstract class, create lower class, controls lower class through upper class */

