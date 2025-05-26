// let, const (prefer const for most React code)

// Primitive types: string, number, boolean, null, undefined

// Reference types: array, object, function


// A. Function Declaration



function greet(name) {
  return `Hello, ${name}`;  //Template Literals
}

console.log(greet("Alice")); // Hello, Alice


function ef() {
console.log("nasoinvcioa")
}

ef()  /// call function


//  B. Function Expression

const greet2 = function(name) {
  return `Hi, ${name}`;
};

console.log(greet2("Bob")); // Hi, Bob


//  C. Arrow Functions (💡 Used Often in React)

const greet3 = (name) => {  
  return `\n Hey, ${name}`;
};


// function def(){

// }

const def = (a)=>{
  console.log(`chal gaya ${a}`)
}




def()

//   var a = (n)=>{

//   console.log(n)

// }

// a(2)

// Shorter version if one line:
const greetShort = name => `Hey, ${name} `;   /// 

// (name)=>{

// }


console.log(greet3("Charlie"));    // Hey, Charlie
console.log(greetShort("Daisy"));  // Hey, Daisy


// D. Callback Functions
// A function passed as an argument to another function.

function processUser(name, callback) {
  callback(name);  
}

processUser("Emma", 
  function(name) {
  console.log(`Processed user: ${name}`);
}
);
// Processed user: Emma



//  E. Higher-Order Functions (HOF)
// A function that takes another function as an argument or returns a function.

function higherOrder(fn) {  ///higherOrder is called higher order function 
  fn();
}

console.log("")//gap

higherOrder(() => console.log("This is a callback"));
console.log("")//gap
higherOrder(function yeah(){
    console.log("Yeah")
});
// This is a callback


function multiply(x) {  //multiply is HOF because it returns another function
  return function(y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10


//  F. Default Parameters

function greet4(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet4()); // Hello, Guest



// G. Function Scope
// Variables declared inside a function cannot be accessed outside.


function testScope() {
  let message = "Inside function";
  console.log(message); // OK
}

testScope();
// console.log(message); ❌ Error: message is not defined



//  H. Returning Values

function add(a, b) {
  return a + b;
}

let result = add(3, 4);  // 7
console.log(result);