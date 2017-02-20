document.addEventListener("DOMContentLoaded",
  function (event) {
// We're listening for the event when all these elements have loaded, so we are able to execute these functions and get element by id, and be sure that these elements already exist in the DOM
    function sayHello (event) {
      this.textContent = "Said it!"; //"this" is pointing to the button, so this line is changing the text content of the button when the sayHello function is executed, aka, the button is clicked
      var name =
        document.getElementById("name").value;
        var message = "<h2>Hello " + name + "!</h2>";

        // document
        //  .getElementById("content")
        //  .textContent = message;

        document
          .getElementById("content")
          .innerHTML = message;

        if (name === "student") {
          var title =
            document
              .querySelector("#title")
              .textContent;
          title += " & Lovin' it!";
          document
            //.querySelector("#title") calling by the selector like in CSS
            .querySelector("h1") // will return the first h1 element
            .textContent = title;
        }
    }
    // Unobstrusive event binding Lecture 54
    // document.querySelector("button")
    //   .addEventListener("click", sayHello);

    document.querySelector("button").onclick = sayHello; //setting the VALUE of sayHello
    //whatever property of the element you have available, you can use it as a property of the object that you selected. For example document.querySelector("button").onclick
  }
);
