// Primitive Data Types (Immutable : doesnt make changes on value)
// These hold single values, copied by value (independent copies via doesnt point to same memory)
// Stored in stack memory

// Type      Example
// String    "Deepak"
// Number    23, 3.14
// Boolean   true, false
// Null      null
// Undefined undefined
// Symbol    Symbol("id")
// BigInt    12345678901234567890n

let a = "Deepak";   
let b = a;      // here we create a copy of  a in b     
b = "Phillic";      
console.log(a); // 👉 "Deepak"
console.log(b); // 👉 "Phillic"

// Reference Data Types (Mutable :  make changes on values)
// These hold collections, copied by reference (point to same memory)
// Stored in heap memory

// Type      Example
// Object    { name: "Deepak", age: 18 }
// Array     [1, 2, 3]
// Function  function greet() {}
// Others    Date, RegExp, etc.

let obj1 = { name: "Deepak", age: 14 };
let obj2 = obj1;
obj2.name = "Phillic";
console.log(obj1);           // 👉 { name: "Phillic", age: 14 }
console.log(Array.isArray(obj1));  // 👉 false (it's object)
console.log(obj2.name);      // 👉 "Phillic"



//  Summary
// Stack -> primitives, function calls (fast, small space)
// Heap -> reference types (flexible, large data)



// typeof Operator : Returns a string indicating the type of a value.
console.log(typeof 42);        // "number"
console.log(typeof "Alya");    // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (special case/bug in JS)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"


//  Type Conversion / Type Casting / Type Coercion

// String to Number
let abc= parseInt("42")
console.log(`the type is ${typeof abc} and the value is ${abc}`);          // 👉 42 (string to integer)
console.log(parseFloat("3.14"));      // 👉 3.14 (string to float)
console.log(Number("123"));           // 👉 123 (number conversion)

// Number to String
console.log(String(456));             // 👉 "456"
console.log((123).toString());        // 👉 "123"

// Boolean conversions
console.log(Boolean(1));              // 👉 true
console.log(Boolean(0));              // 👉 false
console.log(Boolean(""));             // 👉 false for empty string
console.log(Boolean("Hello"));        // 👉 true


// Automatic coercion (JS does implicit conversions sometimes)
console.log("5" + 2);                 // 👉 "52" (number converted to string, concatenation)
console.log("5" - 2);                 // 👉 3 (string converted to number)
console.log("5" * "2");               // 👉 10 (both converted to number)
console.log("abc" * 3);               // 👉 NaN (invalid conversion)

// BigInt
let big = 123456789012345678901234567890n;
console.log(big + 10n);               // 👉 BigInt operation

// Symbol (for unique identifiers)
const id = Symbol("id");
console.log(typeof id);               // 👉 "symbol"


//unary Plus :This operator tries to convert its operand into a number.
console.log(+"123");       // 123   (string → number)
console.log(+"3.14");      // 3.14  (string → float number)
console.log(+"");          // 0     (empty string → 0)
console.log(+" ");         // 0     (whitespace → 0)
console.log(+"0015");      // 15    (leading zeros ignored)

// Booleans
console.log(+true);        // 1
console.log(+false);       // 0

// null, undefined
console.log(+null);        // 0
console.log(+undefined);   // NaN   (not a number)

console.log(+[]);          // 0     (empty array → 0)
console.log(+[5]);         // 5     (single-element array → number)

// NaN cases
console.log(+"abc");       // NaN   (non-numeric string)
console.log(+{});          // NaN   (object can’t be converted directly)

console.log(+[1,2]);       // NaN   (multi-element array → NaN)

// Dates
console.log(+new Date("2025-01-01")); // 1735689600000 (timestamp in ms)

