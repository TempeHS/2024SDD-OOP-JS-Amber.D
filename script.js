class Shape { 
    constructor (colour) {
        this.colour = colour;
        this.type = "Transparent";
    }
    describe () { 
        "A ${this.colour} ${this.type}";
    }
}

class Square extends Shape {
    constructor (colour, sideLength){
        super (colour);
        this.sideLength = sideLength;
    }
    area() {
        var Area = this.sideLength*this.sideLength;
        return (Area);
    }
}

class Rectangle extends Shape { 
    constructor (colour, width, height) {
        super (colour);
        this.width = width;
        this.height = height;
    }
    area () { 
        var Area = this.width*this.height;
        return (Area);
    }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);

console.log(square.area());
console.log(rectangle.area());
for  (const shape of [square, rectangle]) {
    shape.describe();
}
