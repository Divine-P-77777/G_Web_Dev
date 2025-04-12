// Arithmetic Expressions

let sum = 5 + 3;  // 8
console.log(sum)

//  String Expressions
let greeting = "Hello" + " World!";
console.log(greeting)  //here concatination heppens

//Logical Expressions

console.log(true && false  // false
)
console.log(true && true  // true
)

//Comparison Expressions

 var a = 5 > 3  // true
var b = 4 == "4"  // false
console.log(a)
console.log(b)

//Ternary (Conditional) Expression
let age = 19;

let status = age <= 18 ? "minor" : "adult";  //  true honese minor hoga otherwise true me adult
console.log(status)



// Conditional Statements

// if / else if / else

let person_age = 9;

if (person_age > 18) {
    console.log("Avengers Movie ticket alloted");
  } else if (person_age < 18 && person_age > 10) {
    console.log("Sorry you are not allowed");
  } else   {
    console.log("Bhai  cartoon dekh tu");
  }
  
//   switch Statement

let fruit="jbcdjb";

  switch (fruit) {
    case "apple":
      console.log("Red");
      break;
    case "banana":
      console.log("Yellow");
      break;
    default:
      console.log("Unknown");
  }


//   let fruit; at top  it gives undefined
// switch(fruit) becomes switch(undefined).
// Since there is no case undefined:, and no default, nothing matches — so it just quietly does nothing.


//   The break statement stops the execution inside the switch block. Without it, JavaScript will continue checking the next cases, even if a match was found (this is called "fall-through").


//   Truthy & Falsy Values

// Truthy: "hello", 1, {}, []

// Falsy: 0, "", null, undefined, NaN(not a number), false

if (""){
    console.log("this is falsy")
} 
// else if ([]){
//     console.log("this is truthy")
// }