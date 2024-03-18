/*alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Hello, world"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Hello, world"); //Output to the console (Open dev tools and look at the console) */

/*const player = {
    name: "?",
    hp: 100,
    mp: 0,
    items:[], 
};

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items =["Blaster"]
const darthVader = player;

console.log(hanSolo);
console.log(darthVader); */

/* const createPlayer = (name, hp, mp, items) => {
    return {
        name: name,
        hp: hp,
        mp: mp,
        items: items,
    };
};

const hanSolo = createPlayer (
    "Han Solo",
    100,
    10,
    ["Blaster"],
)
hanSolo.hp = 150;
console.log(hanSolo);

const darthVader = createPlayer (
    "Darth Vader",
    200,
    50,
    ["Saber"],
)
console.log(darthVader); */



class Player {
    constructor(name, hp , mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    } 
    speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
}
}
const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
hanSolo.speak("Never tell me the odds");
console.log (hanSolo);
console.log (Object.getOwnPropertyNames(hanSolo));
console.log (Object.getOwnPropertyNames(hanSolo._proto_));

//const nader = new Player("Nader", 10, 5, ["Computer"]);
//nader.speak("Monkeys are the best animal!");
//console.log (nader);
//console.log (Object.getOwnPropertyNames(nader));
//console.log (Object.getOwnPropertyNames(nader._proto_));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
} 

AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`);

}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader);
darthVader.speak("Hshfsfiihhhhhh");
console.log (Object.getOwnPropertyNames(darthVader));
console.log (Object.getOwnPropertyNames(darthVader._proto_));