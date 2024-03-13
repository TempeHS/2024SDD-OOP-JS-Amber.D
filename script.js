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


class Player {}
const hanSolo = new Player();
console.log (hanSolo);
console.long (getOwnPropertyNames(hanSolo));
console. log (getOwnPropertyNames(hansolo._proto_) );

function AnotherPlayer() {} 
const darthVader = new AnotherPlayer();
console.log (darthVader);
