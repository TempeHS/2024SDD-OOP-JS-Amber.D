class Shape { 
    type = "Shape";
    constructor (colour = "Transparent") {
        this.colour = colour;
    }
    describe () { 
        console.log(`A ${this.colour} ${this.type}`);
    }
}

class Square extends Shape {
    constructor (colour, sideLength){
        super (colour);
        this.sideLength = sideLength;
        this.type = "Square";
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
        this.type = "Rectangle";
    }
    area () { 
        var Area = this.width*this.height;
        return (Area);
    }
}

class Circle extends Shape {
    type = "Circle";
    constructor (colour, radius) {
        super (colour);
        this.radius = radius;
    }
    area () { 
        var Area = Math.PI*this.radius*this.radius;
        return (Area);
    }
    describe () {
        console.log(`A round an awesome ${this.colour} ${this.type}`);
    }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
const circle = new Circle ("green", 3);

console.log(square.area());
console.log(rectangle.area());
console.log(circle.area());
for  (const shape of [square, rectangle, circle]) {
    shape.describe();
}
