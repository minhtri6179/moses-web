
button = document.getElementById("translate_btn");
button.onclick = function () {
  // POST
  // POST message vi input from user to server
  fetch("/test", {
    // Declare what type of data we're sending
    // Get vi text from user
    headers: {
      "Content-Type": "application/json",
    },

    // Specify the method
    method: "POST",

    // A JSON payload
    body: JSON.stringify({
      greeting: document.getElementById("viTextarea").value,
    }),
  })
    .then(function (response) {
      // At this point, Flask has printed our JSON
      return response.text();
    })
    .then(function (text) {
      console.log("POST response: ");
      // Should be 'OK' if everything was successful
      //console.log(text.slice(9, -2));
      const newtxt = text.slice(9, -4);
      console.log(newtxt);
      document.getElementById("enTextarea").value = newtxt;
    });

  // Receive text handle from server - receive english sentence
  // Get the reciever endpoint from Python using fetch:

  fetch("/test")
    .then(function (response) {
      return response.json();
    })
    .then(function (text) {
      console.log("GET response:");
      console.log(text.greeting);
    });
  // send same requests
  fetch("/test")
    .then(function (response) {
      return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
      console.log("GET response as JSON:");
      console.log(json); // Here’s our JSON object
    });
};
