change_btn = document.getElementById("change_btn");
change_btn.onclick = function () {
  let cur_url = window.location.href;
  if (cur_url.includes("vi2en")) {
    cur_url = cur_url.replace("vi2en", "en2vi");
  } else {
    cur_url = cur_url.replace("en2vi", "vi2en");
  }
  window.location.replace(cur_url);
};
button = document.getElementById("translate_btn");
button.onclick = function () {
  // POST
  // POST message vi input from user to server
  if (window.location.href.includes("vi2en")) {
    sentence_value = "vi:" + document.getElementById("viTextarea").value;
    sentence_translated = "enTextarea";
  } else {
    sentence_value = "en:" + document.getElementById("enTextarea").value;
    sentence_translated = "viTextarea";
  }
  fetch("/translate", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    // A JSON payload

    body: JSON.stringify({
      data: sentence_value,
    }),
  })
    .then(function (response) {
      // At this point, Flask has printed our JSON
      return response.text();
    })
    .then(function (text) {
      // console.log("POST response: ");
      // Should be 'OK' if everything was successful
      //console.log(text.slice(9, -2));
      const result = JSON.parse(text)["data"];
      document.getElementById(sentence_translated).value = result;
    });
};
