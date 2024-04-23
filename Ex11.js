class Animal {
    static knownMammals = [];
    mammal = false;
    eyes = 2;

    static isMammal() {}
    describe() {}
}

class Monkey extends Animal { 
    static knownMonkeys = [];
    height;
    weight;

    static isCute() {}
    eatBanana() {}
}

const animal = new Animal();
console.log(Object.getOwnPropertyNames(animal));
// mammal, eyes 
console.log(Object.getOwnPropertyNames(animal.__proto__));
// constructor, describe
console.log(Object.getOwnPropertyNames(Animal));
//knownMammals, isMammal 
console.log(Object.getOwnPropertyNames(Animal.__proto__)); //Function.prototype
//


const monkey = new Monkey();
console.log(Object.getOwnPropertyNames(monkey));
// mammal, eyes, height, weight
console.log(Object.getOwnPropertyNames(monkey.__proto__));
// constructor, eatBanana
console.log(Object.getOwnPropertyNames(Monkey));
// knownMonkeys, is Cute
console.log(Object.getOwnPropertyNames(Monkey.__proto__));
// 