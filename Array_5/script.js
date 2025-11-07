//push()
//Add at end

let arr = ["Deepak"]; // or let arr = ["Deepak"];
arr.push("Alex ",124);// push is  a  method or function 
console.log(arr);

// pop()
// Remove from end

let arr1 = ["Alex",123,145];
arr1.pop();  // remove last element 
console.log(arr1);

// unshift()
// Add at start

let arr2=["Prasad","is","Hero"];
arr2.unshift("Deepak");



// shift()
// Remove from start


arr2.shift();
console.log(arr2)

// Important
// splice(start, deleteCount, addItem1,addItem2 ...)
// Add/Remove/Replace items
// deleteCount = 3: Delete 3 items → "Man", "Ultra", "Man"
let hero=["Spider","Man","Ultra","Man"]
hero.splice(1,3, "Forever 💍");
console.log(hero)

// Argument	                  Meaning
// 1	                      Start at index 1 (which is "Man")
// 1	                      Remove 1 item starting from index 1
// "Forever 💍"	              Insert this item at that place


// slice(start, end)
// Returns copy of part of array and start including and end is excluding


let fruits = ["apple", "mango", "watermelon"];
let newFruits = fruits.slice(0, 1);
console.log(newFruits); // 👉 ["apple"]

// includes()
// Checks if value exists


let result = fruits.includes("apple");
console.log(result)


// indexOf() / lastIndexOf()
// Finds position

console.log(fruits.indexOf("apple"))

// join()
// Convert array to string

let join = fruits.join(" || ");
console.log("the resultant join be",join)

// concat()
// Merge arrays

let concat = fruits.concat(newFruits);
let concat2 = newFruits.concat(fruits);
console.log(concat)
console.log(concat2)

// sort()
// Sort array (alphabetical or numeric)


let num =[234,423,45,12,104,4321,9,-4]
console.log(num.sort())

let name =["mohit", "aarab","deepak","gaurav"]
console.log(name.sort())

// ✅ reverse()
// Reverses array

console.log(name.reverse())
console.log(num.reverse())

//The .map() method is an Array method
// Loops through each element
// Returns a new array
// Doesn’t mutate the original array
const array = [1, 2, 3];
const doubled = array.map(num => num * 2);



// ... (spread operator) imp

const original = [1, 2, 3];
const copied = [...original];

console.log(copied); // [1, 2, 3]


// Here, copied is a new array with the same elements, not a reference to the original.



// const copied = original;   //It just copies the reference, not the actual elements


//You can also add elements while copying:

const arr3 = [2, 3];
const newArr = [1, ...arr3, 4,{}];

console.log(newArr); // [1, 2, 3, 4,{}]


//❗Note: Shallow copy


const nested = [1, [2, 3]];
const copy = [...nested];

copy[1][0] = 99; //phele 1 index outer wlla pe hai jo ki [2, 3] then  inner wlla pe 0 index pe 2 which overide by 99

console.log(nested); // [1, [99, 3]] → affected!

// here the nested variable  — deeply nested elements still point to the same memory address,
// even if you “copy” or “reference” only the outer structure —
// unless you explicitly create a deep copy.


//
const originalArray = [1, [2, 3], { name: "Dipu" }];
const stringifiedArray = JSON.stringify(originalArray);// /This string contains data only, not references or memory links.

console.log(`stringifiedArray: ${stringifiedArray}`) 

const deepCopiedArray = JSON.parse(stringifiedArray); // Nested array is preserved,  object is preserved,  values are untouched. and JSON.parse(...) reads that string and builds a brand-new array and brand-new nested objects in memory.

deepCopiedArray[1][0] = 99;
deepCopiedArray[2].name = "Alex";

console.log("the original array is",originalArray); // [1, [2, 3], { name: "Dipu" }]
console.log("the deep copied array is",deepCopiedArray); // [1, [99, 3], { name: "Alex" }]


// Array : some and every prototype

const numbers = [1, 2, 3, 4, 5];

// some() - checks if at least one element passes the test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every() - checks if all elements pass the test
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false