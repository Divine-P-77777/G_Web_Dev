// 🌟 What is an Event in JavaScript?
// An event is something that happens in the browser.

// Examples:

// Clicking a button

// Typing in a text box

// Moving your mouse

// Submitting a form

// Resizing the window

// When these things happen, we say an event has occurred, and JavaScript can react to those events.


// | Property             | Description                                                |
// | -------------------- | ---------------------------------------------------------- |
// | `type`               | The type of event (e.g., `'click'`, `'keydown'`)           |
// | `target`             | The HTML element where the event happened                  |
// | `currentTarget`      | The element the event listener was attached to             |
// | `clientX`, `clientY` | The mouse position when the event occurred                 |
// | `key`                | The key pressed during a keyboard event                    |
// | `preventDefault()`   | Prevents the default browser action (like form submission) |
// | `stopPropagation()`  | Stops the event from bubbling up to parent elements        |

// When submit event triggers , browser refreshes(default behavior) the page immediately and the form may not be submitted properly.So we use preventDefault() to stop the page from refreshing.

// Select elements
const btn = document.getElementById("myBtn");
const input = document.getElementById("myInput");
const form = document.getElementById("myForm");

// Example 1: Click Event
btn.addEventListener("click", function (event) {
  console.log("👉 Event Type:", event.type); // type
  console.log("👉 Target Element:", event.target); // target
  console.log("👉 Current Target:", event.currentTarget); // currentTarget
  console.log("👉 Mouse Position:", event.clientXn  , event.clientY); // clientX, clientY
});

// Example 2: Keyboard Event
input.addEventListener("keydown", function (event) {
  console.log("👉 Key Pressed:", event.key); // key
});

// Example 3: Form Submit Event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // preventDefault()
  console.log("👉 Form submission prevented!");
});

// Example 4: Stop Propagation
document.getElementById("parent").addEventListener("click", function () {
  console.log("👉 Parent clicked!");
});

document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation(); // stopPropagation()
  console.log("👉 Child clicked, parent won’t trigger!");
});
