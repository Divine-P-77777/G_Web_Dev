// A Promise in JavaScript represents the eventual result of an asynchronous operation.

// Think of it like a placeholder for a value that you’ll get later (like data from an API or a delay).


// 🔸 Three States of a Promise
// State	Description
// pending	The initial state (still processing)
// fulfilled/resolved	The operation completed successfully
// rejected	The operation failed (an error occurred)


// Example:
const promise = new Promise((resolve, reject) => {
  // pending...

  if (Math.random() > 0.5) {
    resolve("Success"); // fulfilled
  } else {
    reject("Failed"); // rejected
  }
});


//  Handling Results with .then() and .catch()
promise
  .then((data) => {
    console.log("Resolved:", data);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  })
  .finally(() => {
    console.log("Always runs (cleanup)");
  });

//   🔸 Creating a Promise-Returning Function

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data loaded");
    }, 2000);
  });
}

fetchData().then(console.log);



// 🔸 Chaining Promises

new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // returns 1 after 1 sec
})
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
  });

// ✅ Promise.all([])
// Waits for all promises to complete (or fails fast if any reject).


Promise.all([
  fetchData(),
  fetchData()
]).then(console.log);



// ✅ Promise.resolve(value) / Promise.reject(error)
// Manually return a resolved or rejected promise.

Promise.resolve("Instant success").then(console.log);
Promise.reject("Instant error").catch(console.error);


// errors can be handled in the .then() block, but only if you provide a second argument to .then().
// However, the recommended way is to use .catch()
myPromise.then(
  (result) => {
    console.log("Success:", result);
  },
  (error) => {
    console.error("Error handled in then:", error);
  }
);
