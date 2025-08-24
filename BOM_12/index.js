// Key BOM Components
// 1️⃣ window
// The global object in browsers.

// Represents the browser window/tab.

// Example:


console.log(window.innerWidth, window.innerHeight);


// 2️⃣ navigator
// Info about the browser + device.

// Example:


console.log(navigator.userAgent);  // Browser info
console.log(navigator.language);   // e.g. "en-US"
console.log(navigator.onLine);     // true/false (online status)


// 3️⃣ screen
// Info about the user’s screen.

console.log(screen.width, screen.height);
console.log(screen.availWidth, screen.availHeight);


// 4️⃣ location
// Info about + control over the current URL.

// Example:

console.log(location.href);   // Full URL
console.log(location.hostname); 
console.log(location.pathname); 
// Redirect
location.href = "https://example.com";
// Reload
location.reload();


// 5️⃣ history
// Browser history stack (same tab).


// 6️⃣ alert, confirm, prompt

// alert("Hello!");
// const ok = confirm("Are you sure?");
// const input = prompt("Your name?");


// 7️⃣ setTimeout, setInterval, clearTimeout, clearInterval
// Timers.


const t = setTimeout(() => console.log("Run after 2 sec"), 2000);  // async function in nature
clearTimeout(t);

const i = setInterval(() => console.log("Every 1 sec"), 1000);
clearInterval(i);

// setInterval() is a browser/Web API function (not part of core JS) that executes a function repeatedly after a given time interval.

// Because it does not block the rest of the code from executing while waiting. Instead:

// JavaScript continues running the code.

// After the interval, the callback is queued in the event loop.

// When the call stack is free, the callback is executed.


// 8️⃣ open, close, print
// Control windows/tabs.


const win = window.open("https://example.com", "_blank");
win.close();
window.print();


// 9️⃣ localStorage / sessionStorage  are temporary storage
// Store data in browser.


// | Feature           | `localStorage`                                    | `sessionStorage`                               |
// | ----------------- | ------------------------------------------------- | ---------------------------------------------- |
// | **Lifespan**      | Persists even after the browser is closed         | Clears when the tab or browser is closed       |
// | **Scope**         | Shared across all tabs/windows of the same origin | Only available in the current tab              |
// | **Storage Limit** | \~5MB                                             | \~5MB                                          |
// | **Use Case**      | Long-term storage (e.g., user settings)           | Temporary data for a session (e.g., form data) |


console.log(window.localStorage);  //or  console.log(localStorage);  // Access localStorage
console.log(window.sessionStorage); // Access sessionStorage
console.log(window.cookieStore); // Access cookies


class StorageExample {  
    saveDataToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getDataFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

 clearLocalStorage() {
        localStorage.clear();
    }

    removeDataFromLocalStorage(key) {
        localStorage.removeItem(key);
    }   
}


 const l1 = new StorageExample();
  const l2 = new StorageExample();

  const now = new Date();
  l1.saveDataToLocalStorage("user", { name: "John", age: 30 });
  l2.saveDataToLocalStorage("Date", now);

  const h2 = document.createElement("h2");
  h2.innerHTML = now.toString();
  document.body.appendChild(h2);

  document.querySelector("button").addEventListener("click", () => {
      l2.removeDataFromLocalStorage("Date");
      alert("Date removed from localStorage!");
  });



localStorage.setItem("key", "value");
console.log(localStorage.getItem("key"));
localStorage.removeItem("key");

//  database  -mysql, mongodb, etc. are permanent  storage

//  

// Save data
sessionStorage.setItem("username", "Deepak");

// Retrieve data
const user = sessionStorage.getItem("username");
console.log(user); // 👉 "Deepak"

sessionStorage.removeItem("username");
// Clear all session storage
sessionStorage.clear();

// Cookies are small pieces of data (usually key-value pairs) stored in the browser by a website. They are primarily used for:

// Session management (e.g., login state)

// Tracking (e.g., analytics, ads)

// Personalization (e.g., saving user preferences)

document.cookie = "username=Deepak";  // Set a Cookie
document.cookie = "theme=dark; expires=Fri, 01 Jan 2027 12:00:00 UTC"; // Set a Cookie with Expiry
console.log(document.cookie);  // returns a single string of all cookies
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";  // Delete a Cookie       




// 1️⃣0️⃣ console
// Logging + debugging.

console.log("Info");
console.warn("Warning");
console.error("Error");
console.table([{a:1,b:2},{a:3,b:4}]);
