//push()
//Add at end

let arr = ["Deepak"]; // or let arr = ["Deepak 💖"];
arr.push("Alya 💘",124);
console.log(arr);

// pop()
// Remove from end

let arr1 = ["alya",123,145];
arr1.pop();
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
// splice(start, deleteCount, addItem1, ...)
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
console.log(join)

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



// ... (spread operator)

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

copy[1][0] = 99;

console.log(nested); // [1, [99, 3]] → affected!



//
const originalArray = [1, [2, 3], { name: "Dipu" }];
const deepCopiedArray = JSON.parse(JSON.stringify(originalArray)); // Nested array is preserved, ✅ object is preserved, ✅ values are untouched.

deepCopiedArray[1][0] = 99;
deepCopiedArray[2].name = "Alya";

console.log(originalArray); // [1, [2, 3], { name: "Dipu" }]
console.log(deepCopiedArray); // [1, [99, 3], { name: "Alya" }]



// | Method             | Purpose                          | Output Type |
// | ------------------ | -------------------------------- | ----------- |
// | `JSON.stringify()` | Converts JS object → JSON string | `string`    |
// | `JSON.parse()`     | Converts JSON string → JS object | `object`    |

const obj = { name: "Dipu", age: 20 };

// Convert object to string
const str = JSON.stringify(obj); // '{"name":"Dipu","age":20}'

// Convert string back to object
const parsed = JSON.parse(str); // { name: "Dipu", age: 20 }
