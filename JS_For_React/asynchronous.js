// 🔹 JavaScript Async Overview
// JavaScript is single-threaded, but handles async tasks (e.g. fetch, timers) using the Event Loop + Callback Queue

// --------------------------------------------
// 🔹 Promises
// A Promise represents a value that may be available now, later, or never.

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) resolve("Data loaded");
      else reject("Failed to load");
    }, 1000);
  });
};

fetchData()
  .then(data => console.log("Promise result:", data)) // "Data loaded"
  .catch(err => console.error("Promise error:", err));


// --------------------------------------------
// 🔹 async / await
// Syntactic sugar over Promises — makes async code look synchronous.

const fetchData2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await response.json();
    console.log("async/await result:", json);
  } catch (err) {
    console.error("async/await error:", err);
  }
};

fetchData2(); // Call it to see result


// --------------------------------------------
// 🔹 fetch() API
// Built-in API to make HTTP requests

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log("fetch() result:", data[0])) // Log first user
  .catch(err => console.error("fetch() error:", err));


// Using async/await with fetch
const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log("getUsers async result:", users[0]);
  } catch (err) {
    console.error("getUsers error:", err);
  }
};

getUsers(); // Call it


// --------------------------------------------
// 🔹 Error Handling (sync and async)
// try...catch is used for both sync and awaited async error handling

// Synchronous error
try {
  const json = JSON.parse("{bad json}"); // Will throw
} catch (error) {
  console.log("Caught sync error:", error.message);
}

// Async error (e.g. failed fetch)
const tryBadFetch = async () => {
  try {
    const response = await fetch("https://invalid-url");
    const data = await response.json();
    console.log(data[1]);
  } catch (err) {
    console.error("Caught async error:", err);
  }
};

tryBadFetch();
