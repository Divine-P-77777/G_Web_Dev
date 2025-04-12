// Methods of String

// length Imp
// Returns the length of the string.

let str = "Deepak";
console.log(str.length); // 6

// toUpperCase() / toLowerCase()
// Converts to upper/lowercase.


console.log(str.toUpperCase()); // DEEPAK 💖 ALYA
console.log(str.toLowerCase()); // deepak 💖 alya


// charAt(index)
// Returns character at given index.
let name="DynamicPhillic" // as index 0:D,1:y,2:n,....13:c its is called positional argument
console.log(name.charAt(13)); // D


// includes('text')
// Checks if string contains a value.

console.log(name.includes("Dy")); // true


// indexOf('text') / lastIndexOf()
// Finds the first/last position of text.

console.log(name.indexOf("a")); // 3


// slice(start, end) imp
// Extracts part of the string. and including first and excluding last index

console.log(name.slice(0, 7)); // Deepak

// negative index slicing 
let power="Ultrasonic" 
// U:-10,l:-9,t:-8,..,a:-5......,c:-1 this is called negative indexing
console.log(power.slice(-10,-5))

console.log(power.slice(1,-1)) //here i used both positive and negative slice

// replace('old', 'new')
// Replaces first match.

console.log(name.replace("Dynamic", "Alya")); // Jaanu 💖 Alya

//🔸 split("separator")
// Splits string into array.


console.log(name.split("a")); // it gives all character of string in array


// concat()
// Combines multiple strings.

console.log("Jai","Jaai".concat(" Shri ", "Ram")); // Alya loves Deepak