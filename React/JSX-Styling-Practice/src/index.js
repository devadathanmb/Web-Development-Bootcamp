//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let message = "";
let messageColor = "";

const currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
  message = "Good Morning";
  messageColor = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  message = "Good Afternoon";
  messageColor = "green";
} else if (currentHour >= 18 && currentHour < 0) {
  message = "Good Evening";
  messageColor = "blue";
}

ReactDOM.render(
  <h1 style={{ color: `${messageColor}` }}>{message}</h1>,
  document.getElementById("root")
);
