// What is an Object?
// An object is a collection of properties and methods.

const student = {
    name: "Mayank",
    age: 19,
    course: "CSE",
    introduce: function() {
        console.log(`My name is ${this.name}`);
    }
};
console.log(student.name);
console.log(student.age);
student.introduce();

// name, age, course are properties.
// introduce() is a method.
// this refers to the object on which the method is called.

// Four Pillars of OOPs
// Pillar	Meaning
// Encapsulation	Combining data and methods into a unit
// Abstraction	Hiding unnecessary implementation details
// Inheritance	Acquiring properties and methods from another class
// Polymorphism	Same interface or method name behaving differently