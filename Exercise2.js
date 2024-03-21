/*class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    } 
}
const dog = new Animal("Mammal", "Dog");
const cat = new Animal("Mammal", "Cat");
console.log (dog);
console.log (Object.getOwnPropertyNames(dog));
console.log (cat);
console.log (Object.getOwnPropertyNames(cat));

cat.name = "tiger";
console.log(cat); */

class Student {
    constructor(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades; 
    }  
    AddGrade(grades) {
        this.grades.push(grades);
    }
    calcGPA() {
        var total = 0;
        var average = 0;
        for (var i = 0; i<this.grades.length; i++) {
            total += this.grades[i];
        }
        average = total/this.grades.length;
        return("Gpa:" + " " + average);
    }
}

const eva = new Student ("Eva", "Arts", [95, 75, 83]); 
console.log (eva);
console.log (Object.getOwnPropertyNames(eva));

eva.AddGrade(10);
eva.calcGPA();
console.log(eva.calcGPA());