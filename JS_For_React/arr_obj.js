// ARRAY MANIPULATION
// .🔹  map() — Transform each item in an array

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log("")


// 🔹 filter() — Get only the items that match a condition

const ages = [12, 18, 22, 14,40,26];
const adults = ages.filter(age => age >= 18  && age<30);
console.log(adults); // [18, 22]

// 🔹 reduce() — Summarize or accumulate values

const numbers1 = [10, 20, 30];
const sum = numbers1.reduce((acc, val) => acc + val, 20);//(acc, val) => acc + val is a function that adds each value to the accumulator.
console.log(sum); // 60

// Step-by-step:
// acc = 0, val = 10 → acc = 0 + 10 = 10

// acc = 10, val = 20 → acc = 10 + 20 = 30

// acc = 30, val = 30 → acc = 30 + 30 = 60


// 🔹 find() — Find the first matching item

const users = [
  { id: 1, name: "Alice" },  //0
  { id: 2, name: {
    id:5, class:"hey",

  } } //1
];

const user = users.find(user => user.name.id === 5);
console.log(user); // { id: 2, name: "Bob" }


// 🔹 some() — Check if at least one item matches

const numbers2 = [1, 2, 3];
const hasEven = numbers2.some(num => num % 2 === 0);
console.log(hasEven); // true

// 🔹 every() — Check if all items match

const marks = [80, 85, 90];
const allPassed = marks.every(mark => mark >= 60);
console.log(allPassed); // true

// 🔹 forEach() — Loop through items (no return)

const items = ["pen", "book", "mouse"];
items.forEach(item => {
  console.log("Item:", item);
});

// forEach is not used directly in JSX — prefer map() when returning components.


// OBJECT MANIPULATION


// 🔹 A. Creating an Object

const userinfo = {
  name: "Alice",
  age: 25,
  isStudent: false
};

// B. Accessing Properties
console.log("Obejct Manipulation")
console.log(userinfo.name);     // "Alice"
console.log(userinfo["age"]);   // 25

// 🔹 C. Modifying Properties

userinfo.age = 26;
userinfo["isStudent"] = true;
console.log(userinfo)

// 🔹 D. Adding New Properties

userinfo.email = "dynamic@example.com";
console.log(userinfo)


// 🔹 E. Deleting a Property

delete user.isStudent;
console.log(userinfo)


// 🔹 F. Looping Through an Object
console.log("")
for (let key in userinfo) {
  console.log(key, userinfo[key]);
}

// 🔹 G. Object.keys(), Object.values(), Object.entries()

const keys = Object.keys(userinfo);     // ["name", "age", "email"]
const values = Object.values(userinfo); // ["Alice", 26, "dynamic@example.com"]
const entries = Object.entries(userinfo);
// [["name", "Alice"], ["age", 26], ["email", "dynamic@example.com"]]

console.log(keys)


// 🔹 H. Spread Operator (...)
// Used to clone or merge objects — very common in React for updating state immutably.

const updatedUser = { ...userinfo, age: 30, sex:"male" }; //here age is updated and sex property is created
console.log(updatedUser);

// 🔹 I. Destructuring Objects
// Extract values from objects into variables.
console.log("")
const { name, age } = userinfo;
console.log(name); // Alice


// 🔹 J. Optional Chaining (?.)
// Safely access nested properties.

const profile = {
  user: {
    name: "Dynamic"
  }
};
console.log("")
console.log(profile.user?.name); // "Alice"
console.log(profile.address?.city); // undefined (no error)


// 🔹 K. JSON Methods
// Convert between objects and strings — especially useful when working with APIs.


const jsonString = JSON.stringify(userinfo); // to JSON string
// console.log(jsonString)
const parsedUser = JSON.parse(jsonString); // back to object
// console.log(parsedUser)


// 🔹 L. Object.assign() (Merging objects)

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
// { a: 1, b: 2 }
console.log(merged)