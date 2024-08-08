0x02. ES6 classes
Introduction
In JavaScript, classes were introduced in ECMAScript 6 (ES6) as syntactical sugar over the existing prototype-based inheritance model. ES6 classes provide a more intuitive and organized way to define and work with objects and their relationships.

Key Concepts
1. Class Declaration
You can declare a class using the class keyword.
javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
2. Constructor Method
The constructor method is a special method used to initialize objects created with the class.
javascript
Copy code
class Animal {
  constructor(type) {
    this.type = type;
  }
}
3. Class Methods
Methods can be defined directly within the class body and are accessible to all instances of the class.
javascript
Copy code
class Car {
  start() {
    console.log('Car started.');
  }
}
4. Creating Instances
You can create instances of a class using the new keyword.
javascript
Copy code
const person1 = new Person('Alice', 30);
person1.greet();  // Output: Hello, my name is Alice.
5. Inheritance
Classes can extend other classes, inheriting their properties and methods.
javascript
Copy code
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`I am a ${this.jobTitle}.`);
  }
}

const employee1 = new Employee('Bob', 25, 'Engineer');
employee1.greet();  // Output: Hello, my name is Bob.
employee1.describeJob();  // Output: I am an Engineer.
6. Getters and Setters
ES6 classes support getter and setter methods for encapsulating and protecting object properties.
javascript
Copy code
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width + this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area);  // Output: 15
rect.dimensions = { width: 7, height: 12 };
console.log(rect.area);  // Output: 19
7. Static Methods
Static methods are called on the class itself, not on instances of the class.
javascript
Copy code
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 10));  // Output: 15
Summary
ES6 classes provide a clean and intuitive way to define objects and work with inheritance in JavaScript. While they are essentially syntactical sugar over the existing prototype-based inheritance model, they bring a much-needed structure and readability to JavaScript code.


