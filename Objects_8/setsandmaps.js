
// | Feature        | Set                | Map                          |
// | -------------- | ------------------ | ---------------------------- |
// | Structure      | Values only        | Key-value pairs              |
// | Unique entries | Yes                | Keys are unique              |
// | Key types      | N/A                | Any data type (even objects) |
// | Use case       | Track unique items | Associate data with keys     |

const  mySet = new Set();
const  p = {
    name: "John",
    age: 30
}
mySet.add(p);   
mySet.add({...p, age: 31 }); // Adding a copy of the object


console.log(mySet); // 👉 2 (two different objects) like Set(2) { { name: 'John', age: 30 }, { name: 'John', age: 31 } }


// mySet.clear(); // Clear the set
// console.log(mySet.size); // 👉 0 (set is empty)


mySet.forEach((item) => {
    console.log(item); // 👉 { name: "John", age: 30 } and { name: "John", age: 31 }
});






const myMap = new Map([[1, "one"], [2, "two"]]);

myMap.set("name", "Alice");
myMap.set(42, "Answer");
myMap.set(true, "Yes");

console.log(myMap.get("name")); // "Alice"
console.log(myMap.has(42));     // true

// .get(key) → retrieves the value for a key.

// .has(key) → checks if key exists.

console.log("the maps representation is",myMap.entries().next());       // 3 (three key-value pairs)

// myMap.entries() returns an iterator object over [key, value] pairs.

// .next() gets the first entry in that iterator.

// one: false → means iteration is not finished.
