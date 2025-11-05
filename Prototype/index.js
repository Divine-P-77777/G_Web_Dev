// Prototype Notes in JavaScript
// 1. Everything in JavaScript is an object, including functions and arrays.

// Each of them has internal links (called prototypes) that connect them to other objects — forming a prototype chain.


// 2. Example: Function as an Object

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));        // 25 → normal function call
console.log(multipleBy5.power);     // 2 → property on function object (Have their own properties (multipleBy5.power = 2))
console.log(multipleBy5.prototype); // {} → empty object (default prototype) ) which stores shared methods if used as a constructor.


// So even though multipleBy5 is a function, it also behaves like an object with its own keys and reference links.


// 3. Prototype Chain Reference

// Every object internally keeps a hidden link [[Prototype]] (can be accessed using __proto__).

// 👉 Example:
 //Object → null
// Function → Object → null
// Array → Object → null

// This means all objects finally inherit from Object.prototype, and at the end of the chain, it points to null.

//Constructor Function Example  (About  'new' keyword )
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// add methods to the prototype
createUser.prototype.increment = function () {
  this.score++; // Here this refers to the specific object (chai or tea) that called the function.
};

createUser.prototype.printMe = function () {
  console.log(`Score is: ${this.score}`);
};

// using 'new' keyword
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment();  // chai.score = 26(It executes on chai’s context, increasing only chai’s score — not tea’s.)
chai.printMe();    // Score is: 26


// When you call new createUser("chai", 25):

// A new empty object {} is created.

// this inside the function refers to that new object.

// The new object gets linked to createUser.prototype.

// The function returns the object automatically.



// Modern JavaScript "Syntactic Sugar"

// ES6 introduced class syntax — but internally it still uses prototypes!

class CreateUser {
  constructor(username, score) {
    this.username = username;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  printMe() {
    console.log(`Score is: ${this.score}`);
  }
}

const chai2 = new CreateUser("chai", 25);
chai.increment();
chai.printMe(); // Score is: 26

//✅ The class syntax is just syntactic sugar over prototype-based inheritance — it looks cleaner but works the same way behind the scenes.

//When you call a constructor function using new, JavaScript performs these 4 hidden steps:
// 1. The new keyword initiates the creation of a brand-new empty object.
// 2. The new object gets linked to the constructor's prototype.
// 3. The constructor function is called with this set to the new object.
// 4. The new object is returned automatically.

//new = Create new object + Link prototype + Bind this + Return object


//Prototype Inheritance & Extending Built-ins 

//Example 1: Extending String.prototype

let anotherUsername = "ChaiAurCode";

String.prototype.trueLength = function () {
  console.log(`"${this}"`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength(); // "ChaiAurCode" → True length is: 11
"hitesh".trueLength();        // "hitesh" → True length is: 6
"iceTea".trueLength();        // "iceTea" → True length is: 6

//Every string in JS is internally a String object, so it inherits from String.prototype.

// By adding a method to String.prototype, all string instances (literal or object) gain access to it.

// But: ⚠️ Avoid modifying built-ins like String.prototype in production — it can cause conflicts.


// Example 2: Extending Object and Array Prototypes


let heroPower = {
  thor: "hammer",
  spiderman: "web",
};

let myHeros = ["thor", "spiderman"];

// 1️⃣ Add a global method to all objects
Object.prototype.hitesh = function () {
  console.log("Hitesh is present in all objects 💪");
};

// 2️⃣ Add a method only for arrays
Array.prototype.heyHitesh = function () {
  console.log("Hitesh says hello 👋 from Array");
};

// Accessing methods
heroPower.hitesh();    // ✅ Works (inherited from Object.prototype)
myHeros.hitesh();      // ✅ Works (Array → Object)
myHeros.heyHitesh();   // ✅ Works (from Array.prototype)
heroPower.heyHitesh(); // ❌ Error (Object doesn’t inherit from Array)


// Prototype Chain Summary
// myHeros → Array.prototype → Object.prototype → null
// heroPower → Object.prototype → null



// Example 3: Inheritance Between Objects (Manual Linking)


const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,  // old way of inheritance
};

const Teacher = {
  makeVideo: true,
};

const User = {
  name: "Hitesh",
  email: "hitesh@example.com",
};

// Modern syntax for inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);
Object.setPrototypeOf(Teacher, User);

console.log(TASupport.isAvailable); // from TeachingSupport → false
console.log(TeachingSupport.makeVideo); // from Teacher → true
console.log(Teacher.name); // from User → "Hitesh"



//The chain now looks like this:

// TASupport → TeachingSupport → Teacher → User → Object.prototype → null