import React from "react";
import ReactDOM from "react-dom";

//In JSX HTML attributes are in camel case
// ReactDOM.render(
//   <h1 className="heading" contentEditable="true" spellCheck="false">
//     Hello World!
//   </h1>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <h1>My favorite food</h1>
    <img
      className="food-img"
      alt="Biriyani"
      src="https://wallpaperaccess.com/full/1972881.jpg"
    />
    <img
      className="food-img"
      alt="Burger"
      src="https://wallpaperaccess.com/full/1306253.jpg"
    />
    <img
      className="food-img"
      alt="Pizza"
      src="https://wallpaperaccess.com/full/462773.jpg"
    />
  </div>,
  document.getElementById("root")
);
