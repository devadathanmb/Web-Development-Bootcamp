import React from "react";
import ReactDOM from "react-dom";

//We have to give these inline properties as Javascript objects
//where each property's value is a string
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
