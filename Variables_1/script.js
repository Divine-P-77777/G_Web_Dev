// three types of variables - var, const, and let

// Var

// this 👇 is aam jindigi
// var a; //decalre  or intialize
// a = 12 ; //assignment and here data type is number
// console.log(typeof(a))


// this 👇 is mantos jindigi


// var _b = "1";   // here data type is string

// the above is equivalent to 
// var _b;
// _b ="1"

// var data =typeof(_b)
// console.log(data)
// console.log(_b)




// Hoisting

// console.log(`here hoisting is pyare jaanu: ${c}`)  //here assign undefined by default by javascript
// var c="hoist"

// var c; it comes top of the  code  becaue it the behaviour of javascript 
// c="hoist"


var a = 10;
var a = 20;  //  Redeclaration allowed
a = 30;      //  Reassignment or Initialization allowed 
console.log(a); // 30

// global scoped or functional scoped & braces scoped

// var is functional/global scoped and const,let are braces scoped
function greet() {
    if (true) {
      var message = "Hello from var!";
    }
    console.log(message); // Accessible here
  }
  // console.log(message)  //it gives not defined
  greet();


//  Let

let b = 10;
// let b = 20;  ❌ Error: Cannot redeclare
b = 25;       // ✅ Reassignment allowed
console.log(b); // 25









  
// brace scoped
function greet1() {
    if (true) {
      let msg = "Hello from let!";
   
    console.log(msg);  }// ✅ Accessible here
    // console.log(msg)
  }
  
  greet1();


// hoisting
// The TDZ(Temporal Dead Zone) is the time between entering the scope and declaring the variable, during which access will throw a ReferenceError.

// console.log(hoist_let); //  ReferenceError: Cannot access 'b' before initialization
// let hoist_let = 20;



  // Const
const d = 50;
// // c = 60;       // Error: Assignment to constant variable
// // const c = 70; // Error: Cannot redeclare
console.log(d); // 50

// braces or  block scoped
function greet2() {
    if (true) {
      const msg = "Hello from const!";
   
    console.log(msg);  }// ✅ Accessible here
  }
  
  greet2();

// hoisting

// console.log(hoist_const); // ❌ ReferenceError: Cannot access 'c' before initialization
// const hoist_const = 30;


