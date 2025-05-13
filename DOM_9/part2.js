// Event Listeners

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// The addEventListener() method attaches an event handler to an element without overwriting existing handlers. It allows multiple handlers for the same event type on one element and can be used on any DOM object (e.g., the window object). It separates JavaScript from HTML, improving readability, and supports event bubbling control. Event listeners can be removed with removeEventListener().



// Syntax

// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event(https://www.w3schools.com/jsref/dom_obj_event.asp).)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.





    // Node Properties
    const navDiv = document.getElementById("navExample");
    const firstChild = navDiv.firstChild; // Might be a text node (whitespace)
    const firstElement = navDiv.firstElementChild; // First actual element
    const lastElement = navDiv.lastElementChild;

    console.log("firstChild:", firstChild);
    console.log("firstElementChild:", firstElement);
    console.log("lastElementChild:", lastElement);

    // DOM Node Types
    console.log("Node type of firstElement:", firstElement.nodeType); // 1 for Element
    console.log("Node name of firstElement:", firstElement.nodeName); // P

    // Node Relationships
    console.log("Parent Node:", firstElement.parentNode);
    console.log("Next Sibling:", firstElement.nextElementSibling);

    // NodeList vs HTMLCollection
    const nodeList = document.querySelectorAll("#nodeList li"); // NodeList
    const collection = document.getElementById("nodeList").children; // HTMLCollection

    console.log("NodeList (querySelectorAll):", nodeList);
    console.log("HTMLCollection (children):", collection);

    // Convert HTMLCollection to Array
    const collectionArray = Array.from(collection);
    collectionArray.forEach(el => console.log("HTMLCollection Item:", el.textContent));

    // Traversing Nodes
    collectionArray.forEach(el => {
      el.addEventListener("click", () => {
        alert("You clicked: " + el.textContent);
      });
    });

    // Creating and Appending Nodes
    const newItem = document.createElement("li");
    newItem.textContent = "Node D (Added)";
    document.getElementById("nodeList").appendChild(newItem);

    // Removing Node
    // document.getElementById("nodeList").removeChild(newItem);