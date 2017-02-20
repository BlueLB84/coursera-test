// ajax library:

(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  }
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  }
  else {
    global.alert("Ajax is not supported!");
    return(null);
  }
}


// Makes an Ajax GET request to 'requestUrl' - setting up the parameters of the request
ajaxUtils.sendGetRequest =
  function(requestUrl, responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange =
      function() {
        handleResponse(request, responseHandler);
      };
    request.open("GET", requestUrl, true); //if set to false, makes this a synchronous request: the browswer will freeze and wait for the response from the server before doing anything else.  true makes it asynchronous
    request.send(null); // for POST only, executes the request and sends it to the server.  (null) is where you put the body of the request
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }
}


// Expose utility (local utility is ajaxUtils) to the global object
global.$ajaxUtils = ajaxUtils;


})(window);
