// Methods of String

// length Imp
// Returns the length of the string.

let str = "Deepak";
console.log(str.length); // 6

// toUpperCase() / toLowerCase()
// Converts to upper/lowercase.


console.log(str.toUpperCase()); // DEEPAK 
console.log(str.toLowerCase()); // deepak 


// charAt(index)
// Returns character at given index.
let name="DynamicPhillic" // as index 0:D,1:y,2:n,....13:c its is called positional argument
console.log(name.charAt(13)); // c 


// includes('text')
// Checks if string contains a value.

console.log(name.includes("Dy")); // true


// indexOf('text') / lastIndexOf()
// Finds the first/last position of text.

console.log(name.indexOf("a")); // 3


// slice(start, end) imp
// Extracts part of the string. and including first and excluding last index

console.log(name.slice(0, 7)); // Dynamic

// negative index slicing 
let power="Ultrasonic" 
// U:-10,l:-9,t:-8,r:-7,a:-6,s:-5......,c:-1 this is called negative indexing
console.log( "The power slice from -10 to -5 is " + power.slice(-10,-5)) 

console.log("The power slice from 1 to -1 is " + power.slice(1,-1)) //here i used both positive and negative slice

// replace('old', 'new')
// Replaces first match.

console.log("Replace of DynamicPhillic is " + name.replace("Dynamic", "Deepak")); 

//🔸 split("separator")
// Splits string into array.


console.log( name.split("a")); // it gives all character of string in array and remove "a" 


// concat()
// Combines multiple strings.

console.log("Jai","Jaai".concat(" Shri ", "Ram")); 