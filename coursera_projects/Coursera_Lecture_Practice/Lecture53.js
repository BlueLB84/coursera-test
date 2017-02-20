function sayHello () {
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
