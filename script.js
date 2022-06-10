"use strict";

let buttons = document.querySelectorAll("button");

const getActivity = (e) => {
  console.log(e.target.id);
  let query =
    e.target.id == "random"
      ? `https://www.boredapi.com/api/activity/`
      : `https://www.boredapi.com/api/activity/?type=${e.target.id}`;

  fetch(query)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".activity").innerHTML = data.activity;
      document.querySelector(".type").innerHTML = `Type: ${data.type}`;
      document.querySelector(
        ".participants"
      ).innerHTML = `Participants (minimum): ${data.participants}`;
      document.querySelector(".result").style.opacity = "1";
    });
};

buttons.forEach((button) => {
  button.addEventListener("click", getActivity);
});
