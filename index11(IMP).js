// ---------------- OOPS ------------------

/* Yes, JavaScript does have classes, though they are more syntactic sugar over its existing prototype-based inheritance system. Classes in JavaScript were introduced in ECMAScript 6 (ES6) in 2015. They allow developers to define object templates in a more traditional object-oriented programming style, similar to languages like Java or C++.
 */

//Here’s an example of how JavaScript classes work:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create an instance of the Person class
const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.

/* Key points about JavaScript classes:
- Constructor: A special method called `constructor()` is used for initializing the object.
- Inheritance: JavaScript classes support inheritance using the `extends` keyword. */

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Calls the parent class constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`${this.name} works as a ${this.jobTitle}.`);
  }
}

const emp = new Employee("Jane", 28, "Software Engineer");
emp.greet(); // Inherited from Person
emp.describeJob(); // Output: Jane works as a Software Engineer.

//Though classes make the syntax more familiar for developers from other OOP languages, JavaScript’s underlying prototype-based model remains in place.

/*
In JavaScript, objects are one of the fundamental data types and are used to store collections of data and more complex entities. An object in JavaScript is a collection of key-value pairs where each key is a string (or symbol) and the value can be any data type (primitive or complex).
*/
