//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const currentYear = new Date().getFullYear();
const name = "Will";

ReactDOM.render(
  <div>
    <h1>Things I like </h1>
    <ul>
      <li>Pens</li>
      <li>Pencils</li>
      <li>Markers</li>
    </ul>
    <p>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
