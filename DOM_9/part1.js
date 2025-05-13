// Basic DOM Access and Manipulation
    document.getElementById("demo").innerHTML = "Hello World!";
    document.getElementsByTagName("h1")[0].innerHTML = "Good Morning!";
    document.getElementsByClassName("demo")[0].innerHTML = "here h1 is changed by class DOM manipulation";

    // Styling via JS
    const para = document.getElementById("para");
    para.style.color = "blue";
    para.style.fontSize = "20px";
    para.style.backgroundColor = "yellow";

    // Query Selector and Attribute Manipulation
    document.querySelector("a").href = "https://www.w3schools.com/js/js_htmldom_document.asp";
    document.querySelectorAll("li").forEach(li => {
      li.style.color = "red";
    });
    document.getElementById("image").src = "https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp";

    // Display current date on page
    document.getElementById("demo").innerHTML = "Date : " + Date();

    // Form Validation
    function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }

    // Input Validation for numbers
    function myFunction() {
      let x = document.getElementById("numb").value;
      let text;
      if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
      } else {
        text = "Input OK";
      }
      document.getElementById("demo3").innerHTML = text;
    }

    // Show date on event trigger
    function displayDate() {
      document.getElementById("event").innerHTML = Date();
      document.getElementById("assign").innerHTML = Date();
    }

    // Convert to uppercase on input
    function upperCaseInput() {
      const x = document.getElementById("fname");
      x.value = x.value.toUpperCase();
    }

    // Convert to uppercase on change
    function upperCaseChange() {
      const x = document.getElementById("onchange");
      x.value = x.value.toUpperCase();
    }

    // Mouse events
    function mOver(obj) {
      obj.innerHTML = "Thank You";
    }

    function mOut(obj) {
      obj.innerHTML = "Mouse Over Me(leave)";
    }

    function mDown(obj) {
      obj.style.backgroundColor = "#1ec5e5";
      obj.innerHTML = "Release Me";
    }

    function mUp(obj) {
      obj.style.backgroundColor = "#D94A38";
      obj.innerHTML = "Thank You";
    }

    // Optional: example onload function
    function checkCookies() {
      alert("Page loaded - You can add cookie checks here.");
    }

    // Assign event via JavaScript
    document.getElementById("myBtn").onclick = displayDate;