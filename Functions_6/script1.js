//Function Definitions
// ✅ 1. Normal Function Syntax


function sayLove() {
  console.log(" Deepak");
}

sayLove(); 


// function kuch return kar raha h 
function sayLove1() {
  return "keep going";
}

const a = sayLove1();

console.log(a);


// Function with Parameters
function greet(name) {  //name is parameter
  return "Hello " + name + " 💖 ";
}



console.log(greet("Deepak")); //here Deepak is argument
console.log(greet("Gaurav")); //here Gaurav is argument



// Function Expression
const greet1 = function (name, age, city) {
  return `Hi I am ${name} from ${city} and Im ${age} years old  💘`;
};

console.log(greet1("Deepak", "20", "Guwahati"));
myFunction2
// Anonymous Function Expression
const x = function (a, b) { return a * b };
let y = x(10, 5);
console.log(x(2, 3)); // this gives from function
console.log(y); // this gives 50 from variable

// Constructor Function  : it returns object 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const deepak = new Person("Deepak", 20);
console.log(deepak);  // this gives object of Person class with properties name and age
//  console.log(deepak.name); // this gives Deepak from object

// new Function() JavaScript ka constructor hai jo dynamically function banata hai from strings

const myFunction = new Function("a", "b", "return a * b");
// Isme parameters aur function body dono string ke form mein likhe jaate hain.
let z = myFunction(4, 3);
console.log(z); // this gives 12 from function call

// function myFunction(a, b) //{ above expression is internally converted to this }
//   return a * b;
// }



//   Basic Arrow Function


const sayHi = () => {
  console.log("Hello Dipu"); // this gives log  from function
  return "Hi ";

};


// sayHi();
console.log(sayHi()); // this gives value which return from function

// Function Hoisting :Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

var abc = (5);
console.log(abc)

function myFunction2(y) {
  return y * y;
}
// function bhi ek object hi hai — jisme properties aur methods hote hain 

console.log(typeof myFunction2); // this gives 25 from function call



// Constructor function
function Vehicle(type) {
  this.type = type;
}

// Create an object using the constructor
let car = new Vehicle("Car");

// Check if car is an instance of Vehicle
console.log("car instanceof Vehicle:", car instanceof Vehicle); // true

// Check if car is also an instance of Object
console.log("car instanceof Object:", car instanceof Object);   // true


// car instanceof Vehicle: ✅ True because Vehicle.prototype is in car's prototype chain.

// car instanceof Object: ✅ True because all objects in JavaScript inherit from Object.

