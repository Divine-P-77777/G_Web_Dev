// The value of this depends on how a function is called

console.log(this); // In browser: window object


// 🔹 Inside an Object Method

const person = {
  name: "Alice",
  greet() {
    console.log("Hello", this.name);
  }
};

person.greet(); // Hello Alice


// 🔹 In a Regular Function

function show() {
  console.log(this);
}
// show(); // In browser: window (not the object itself)

// 🔹 In a Class (React use case)

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const c = new Counter();
c.increment(); // 1


// 🔹 Arrow Functions Don’t Bind this

const obj = {
  name: "React",
  greet: () => {
    console.log(this.name);
  }
};

// obj.greet(); // undefined


// 11. ES Modules
// Enables code splitting and modular structure in JS/React projects.

// 🔹 Named Export
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;


// usage
// import { add, subtract } from './math';



// 🔹 Default Export

// utils.js
export default function greet(name) {
  return `Hello, ${name}`;
}

// usage
// import greet from './utils.js';


// Truthy & Falsy Values: In JavaScript, non-boolean values can behave like true or false.

if ("") console.log("Truthy"); // won't run
if ("hello") console.log("Truthy"); // will run


//🔹  Short-Circuiting (&& and ||)

const isLoggedIn = true;
{isLoggedIn && `${console.log("Logined")}`}

// 🔹 || (OR) Short-Circuit
const userName = ""; // or undefined or null
const name = userName || "Guest";
console.log(name); // "Guest"

// 🔹 Nullish Coalescing (??)
// Provides a default value if the left-hand side is null or undefined.

const user = {
  profile: {
    name: "Alice",
  },
};


const username = user.name ?? "Guest";
console.log(username);


// ❗Unlike ||, it does NOT treat 0, '', or false as fallback triggers.





// Type Conversion & Equality
// 🔸 Type Coercion
// JavaScript automatically converts types in some expressions.


console.log("5" + 1); // "51" (string)
console.log("5" - 1); // 4 (number)
console.log(true + 1); // 2



// 🔹 Explicit Conversion

const str = String(123); // "123"
console.log(str)

const num = Number("5"); // 5
console.log(num)

Boolean("")  // false
Boolean("hello") // true




//  Equality: == vs === 
// Always use === for more predictable code.


0 == false     // true
0 === false    // false
"" == false    // true
null == undefined // true
null === undefined // false


// 🔸 Avoid Bugs by Using ===

const input = "";

if (input === false) {
  console.log("Falsy"); // Won't run
} else {
  console.log("Check your types!");
}

// Better:
if (!input) {
  console.log("Empty input");
}