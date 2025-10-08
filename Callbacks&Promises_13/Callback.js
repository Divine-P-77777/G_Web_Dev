// A callback is a function passed as an argument to another function, which is later “called back” inside the outer function.

// Synchronous Callback
// Runs immediately during the execution of the outer function.
// Useful when tasks need to happen in order

function calculate(a, b, callback) {
  // callback runs immediately after addition
  const result = a + b;
  callback(result);
}

calculate(5, 10, (sum) => {
  console.log("Sum is:", sum);
});
// Output: Sum is: 15


// Another common synchronous example:
[1, 2, 3].forEach(num => console.log(num)); //Synchronous Callback:har element ke liye immediately execute hota hai.
// 1
// 2
// 3


// 2. Asynchronous Callback

// Runs in the future, after an async task (like setTimeout, API call, events).

// Prevents blocking the main thread.

console.log("Start");

setTimeout(() => {
  console.log("This runs later (async callback)");
}, 2000);

console.log("End");

// Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())   // async callback
  .then(data => console.log(data));
