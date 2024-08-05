0x00. ES6 Basics
ES6, also known as ECMAScript 6 or JavaScript 2015, is a significant update to the JavaScript programming language. It introduced a plethora of new features and syntax improvements that enhance code readability, maintainability, and efficiency.

Core ES6 Concepts
1. Let and Const Keywords
let: Declares variables with block-scope.
const: Declares variables that cannot be reassigned.
JavaScript
let name = 'Alice'; // Can be reassigned
name = 'Bob';

const age = 30; // Cannot be reassigned
Use code with caution.

2. Arrow Functions
Concise syntax for writing functions.
Implicit return for single-line functions.
Lexical this binding.
JavaScript
const greet = (name) => `Hello, ${name}!`;
Use code with caution.

3. Template Literals
Multi-line strings and embedded expressions.
Backticks (`) for delimiters.
JavaScript
const message = `Hello, my name is ${name} and I am ${age} years old.`;
Use code with caution.

4. Destructuring
Extracting values from arrays and objects into variables.
JavaScript
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;
Use code with caution.

5. Default Parameters
Setting default values for function parameters.
JavaScript
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}
Use code with caution.

6. Rest and Spread Operators
Rest parameter: Collects remaining arguments into an array.
Spread operator: Expands iterable objects into individual elements.
JavaScript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
Use code with caution.

7. Classes
Object-oriented programming syntax.
Constructors, methods, inheritance.
JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is   
 ${this.name}`);
  }
}
Use code with caution.

8. Modules
Importing and exporting code between files.
JavaScript
// module.js
export const greet = (name) => `Hello, ${name}!`;

// main.js
import { greet } from './module.js';
Use code with caution.

9. Promises
Handling asynchronous operations.
JavaScript
const promise = new Promise((resolve, reject) => {
  // ...
});
