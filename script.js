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
}

//sub class
class Warrior extends Player { 
    constructor(name, hp, mp, items, shield){
        super(name, hp, mp, items); //take everything from player -> warrior 
        this.shield = shield;
    }
}
const player = new Player("Player", 100, 10,[]); 
const warrior = new Warrior("Genghis Khan", 300, 50, ["Sabre"]);
console.log(player);
console.log(warrior);

/*polymorphism - reduce amount of maintance and documentation 

inhertiance - abstract class, create lower class, controls lower class through upper class */

