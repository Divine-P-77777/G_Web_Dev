// HTTP stands for HyperText Transfer Protocol.

// It is the protocol (set of rules) used by the web to communicate between clients (like browsers) and servers.


// GET https://example.com/page
// Your browser sends an HTTP request, and the server sends back an HTTP response.



// URL (Uniform Resource Locator) is the address of a resource on the internet.
// https://www.example.com:443/products?id=10#reviews
//  └──┬──┘ └──────┬──────┘ └─┬─┘ └────┬────┘ └──┬──┘
//   Protocol   Domain      Port   Query Params  Hash


// Protocol: http or https (secure)

// Domain: Where to find the resource

// Port: (optional) e.g., 80 (http), 443 (https)

// Query Parameters: Extra data like ?id=10

// Hash: Client-side jump to a section (#reviews)

// 📬 3. What are HTTP Headers?
// Headers are key-value pairs sent along with HTTP requests and responses. They carry metadata like content type, language, length, cookies, auth, etc.


// 🟦 A. Request Headers (sent by client/browser)
// These tell the server what kind of request is being made.

// ➤ Common Request Headers:
// Header	Description
// Host	Domain name
// User-Agent	Info about browser/device
// Accept	Types of data accepted (e.g., JSON, HTML)
// Authorization	Credentials (e.g., Bearer Token)
// Content-Type	Format of request body (e.g., application/json)
// Cookie	Sends session cookies to server


// 🟩 B. Response Headers (sent by server)
// These tell the browser how to handle the response.

// ➤ Common Response Headers:
// Header	Description
// Content-Type	Format of the returned data (JSON, HTML, etc.)
// Set-Cookie	Store session info in browser
// Cache-Control	How/if the response should be cached
// Access-Control-Allow-Origin	CORS rules
// Content-Length	Size of the response
// ETag	Identifier for caching purposes


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
})
  .then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));


  // GET Request to fetch data from an API
fetch("https://jsonplaceholder.typicode.com/posts/1") // getting post with id=1
  .then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json(); // parse JSON response
  })
  .then((data) => {
    console.log("Fetched Post:", data);
  })
  .catch((err) => {
    console.error("Error fetching post:", err);
  });
