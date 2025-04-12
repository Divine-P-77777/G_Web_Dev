// Primitive
// ✅ 1. Primitive Data Types (Immutable)
// These hold single values, and are copied by value.

// Type	Example
// String	"Deepak"
// Number	23, 3.14
// Boolean	true, false
// Null	null
// Undefined	undefined
// Symbol	Symbol("id")
// BigInt	12345678901234567890n
// 🔹 Stored in stack memory
// 🔹 Copying creates a new independent value


let a = "Deepak";  // data type string
let b = a;  //Copying creates a new independent value

b = "Phillic"; // b had independent value

console.log(a); // 👉 "Deepak"
console.log(b); // 👉 "Phillic"




// reference

// 🌐 2. Reference Data Types (Mutable)
// These hold collections or objects, and are copied by reference.

// Type	Example
// Object	{ name: "Deepak", age: 18 } //keys  and value dictionary in python
// Array	[1, 2, 3]
// Function	function greet() {}
// Date, RegExp, etc.	
// 🔸 Stored in heap memory
// 🔸 Copying gives a reference to the same object



let obj1 = { name: "Deepak",age:14,}; // data
let obj2 = obj1;

obj2.name = "Phillic";

console.log((obj1)); // 👉 obj1 also name changes
console.log(Array.isArray(obj1)); // 👉 

console.log(obj2.name); // 👉 Phillic



//Ayera  
let flowers = ["🌹Rose", "🌻 Sunflower", "🌸 Cherry Blossom"];
console.log(Array.isArray(flowers));


// 🔹 Stack stores primitive values and function calls in a fast, limited space.
// 🔸 Heap stores reference types like objects/arrays with more flexibility and memory.
