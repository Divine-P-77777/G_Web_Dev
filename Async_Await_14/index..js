// async/await is syntactic sugar introduced in ES2017 (ES8) to write asynchronous code in a cleaner, more readable way.
// It works on top of Promises, allowing you to write async code that looks like synchronous code.

// Asynchronous means the next taks depends on previous task . Synchronous hadnt depends all starts together

// Why use async/await?
// Avoids callback hell and .then() chaining.

// Easier error handling using try/catch.

// Code is more readable and structured.

// Works with any function that returns a Promise (like fetch()).


// Async function to fetch and display data
async function loadPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const postList = document.getElementById("postList");

    posts.slice(0, 10).forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postList.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to fetch posts:", err);
  } finally {
    console.log("Done fetching posts.");
  }
}

// Call the async function
loadPosts();
