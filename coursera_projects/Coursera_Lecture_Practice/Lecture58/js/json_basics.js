// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    // Unobstrusive event binding
    document.querySelector("button") //only "button" in the html doc, so only one that will be returned, no need for an id for the one button
      .addEventListener("click", function () {

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("/data/name.json",
            function (res) {
              var message =
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food"
              }
              message += " and uses ";
              message += res.numberOfDisplays;
              message += " displays for coding.";
            }
          //the response from the server, the response object, is called a "request" in js.  This is reason for putting request as the function arguement here
            /*function (request) {
              var name = request.responseText;  This code is from ajax basics lesson 57*/

              document.querySelector("#content")
                  .innerHTML = "<h2>" + message + "</h2>";
            }); // have to put everything handling the response from the server inside the callback function because this function is asynchronous.


      });
  }
);
