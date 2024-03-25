const factory = new EnemyFactory(); 
const flying = factory.generateFLyingEnemy("batman"); //method of factory 
flying.fly(); //batman can fly!

/* const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
swimming.swim(); //aquaman can swim! */

class EnemyFactory {
constructor () {
this.flying = class {
    constructor(name) {
    } fly () {
        console.log (this)
    }
}
}
}

/* sample
class EnemyFactory {
    generateFlyingEnemy(name){
        return new (class FlywayEnemy {
        class FlyingEnemy{
            constructor(fname) {
                this.name = fname;
            } 
            fly() {
                console.log(this.name + "can fly!");
            }
            }
        }
    }) (name);
    //return new FlyingEnemy(name);
}

More Advanced
EnemyFactory.generateSwimmingEnemy = function(name) {
    class SwimmingEnemy {
        name = name;
    }
    swim() {
        console.log(this.name + "can swim!");
    }
    return new SwimmingEnemy(name);
}); 

const factory = new EnemyFactory(); 
const flying = factory.generateFLyingEnemy("batman"); //method of factory 
flying.fly(); //batman can fly!
console.log(Object.getOwnPropertyNames(EnemyFactory));
console.log(Object.getOwnPropertyNames(factory));
console.log(Object.getOwnPropertyNames(factory._proto_));
console.log(Object.getOwnPropertyNames(flying._proto_));
console.log(Object.getOwnPropertyNames(Swimming._proto_));
*/


