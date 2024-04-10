


class vechicle  { 
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }  
    getMaxSpeed () { 
        var speed = this.maxSpeed;
        return (speed);
    }
}

class Spaceship extends vechicle { 
constructor (name, maxSpeed, numRocketEngines) {
    super (name, maxSpeed);
    this.numRocketEngines = numRocketEngines; 
}
}

const spaceship = new Spaceship("Enterpise", 1000, 2);
console.log (spaceship.getMaxSpeed());
console.log(spaceship.numRocketEngines);