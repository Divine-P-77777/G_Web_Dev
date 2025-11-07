// Objects are variables too. But objects can contain many values.

// An object literal is a list of property names:values inside curly braces {}.
// Note: An object literal is also called an object initializer.
// In JavaScript objects:

// If the value of a key is a function, then it is called a method.
// If the value is anything else (like string, number, array, object, etc.), then it’s called a property.

// Create an Object
const person = {}; //Object Literal

// Add Properties
person.firstName = "John"; //this is a string property
person.lastName = "Doe";
person.age = 50; // this is a number property
person.eyeColor = "blue";
person.height = 5.8;

console.log(person);



// Create an empty JavaScript object using new Object(), and add 4 properties:

// Create an Object
const person1 = new Object(); // new Object()

// Add Properties
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

// Use {} most of the time.

// new Object() can be used, but it’s more verbose and not typically needed unless you're doing something specific with constructors or prototypes.

// Object Constructor Functions

// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.

function Person(first, last, age, eye) {
  this.firstName = first; //here  this is a string property
  this.lastName = last;   //this refers to the object that is being created (this)
  this.age = age; // equivalent to person2.age = age;
  this.eyeColor = eye;
  this.nationality = "English"; // Property Default Values
}

// Create objects using the constructor function
const person2 = new Person("John", "Doe", 50, "blue");
//   const person3 = new Person("Jane", "Doe", 45, "brown");
//   const person4 = new Person("Bob", "Smith", 30, "green");

console.log(person2);
//   console.log(person3);
//   console.log(person4);

// Note:The value of this will become the "new object" when a new object is created.

function School(standard, roll_no, subject, highest_mark) {
  // this.Student_name = "John Doe"; // Property Default Values
  this.standard = standard;
  this.roll_no = roll_no;
  this.subject = subject;
  this.highest_mark = highest_mark;
}

// prototype property allows you to add new properties to object constructors:
School.prototype.Student_name = "Davine Sha";// you can't  add a new property to an existing object constructor:
const student1 = new School(9, 123456, "Mathematics", 100);

console.log(student1); // prints object without Student_name
console.log(student1.Student_name); // Davine Sha

// Because Student_name is defined on the prototype, not directly inside the object created by the constructor.

// Own properties (declared with this) → stored inside the object itself.

// Prototype properties → shared across all objects, but not stored in the object itself.

for (let key in student1) {
  console.log(key + ": " + student1[key]);
}


//   JavaScript Object.assign():The Object.assign() method copies properties from one or more source objects to a target object.

// Create Target Object
const person4 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person3 = { firstName: "Anne", lastName: "Smith" };

//  Merge using Object.assign(target, ...sources)
let net = Object.assign({}, person4, person3); // person3 overwrites person4


console.log(net); // { firstName: "Anne", lastName: "Doe", age: 50, eyeColor: "blue" }

//   Methods
// A method is a function stored as a property.
const dog = {
  name: "Buddy",
  bark: function () {
    console.log("Woof!");
  }
};

dog.bark(); // Woof!

//   IMPORTANT: Methods can access and modify properties of the object they are called on.
const user = {
  name: "Alice",
  age: "30",
  greet() {
    console.log("Hi, I'm " + this.name + ", I'm " + this.age + " years old.");
  }
};

user.greet(); // Hi, I'm Alice


// 4. Displaying Objects
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

console.log(car.brand); // Toyota
console.log(car["year"]); // 2022


console.log(Object.keys(car));   // [ 'brand', 'year', 'color' ]
console.log(Object.values(car)); // [ 'Toyota', 2023, 'red' ]
console.log(Object.entries(car)); // [ ['brand', 'Toyota'], ... ]

for (const key of Object.keys(car)) { //Object.keys(obj) gives all the property names of obj in an array.
  console.log(key, car[key]);
}



function class_9(name, roll_no, subject, mark) {
  this.name = name
  this.roll_no = roll_no
  this.subject = subject
  this.mark = mark
}
const h = new class_9("aditya", 12, "english", 40)
class_9.prototype.gender = " male"
console.log(h);
for (let key in h) {
  console.log(key + ": " + h[key]);
}


const student = { name: "Alya", age: 20, subject: "Math" };




// ways to create objects in JavaScript:

// 1️⃣ Object literal
// 2️⃣ Object constructor (new Object())
// 3️⃣ Constructor function (custom function + new)
// 4️⃣ Class syntax (class + new)
// 5️⃣ Object.create()
// 6️⃣ Factory function (returns an object)
// 7️⃣ Using Object.assign()
// 8️⃣ JSON parse (JSON.parse)



// | Method             | Purpose                          | Output Type |
// | ------------------ | -------------------------------- | ----------- |
// | `JSON.stringify()` | Converts JS object → JSON string | `string`    |
// | `JSON.parse()`     | Converts JSON string → JS object | `object`    |

const obj = { name: "Dipu", age: 20 };

// Convert object to string
const str = JSON.stringify(obj); // '{"name":"Dipu","age":20}'

// Convert string back to object
const parsed = JSON.parse(str); // { name: "Dipu", age: 20 }


