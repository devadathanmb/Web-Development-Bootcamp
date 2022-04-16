import React from "react";
import ReactDOM from "react-dom";

const firstName = "Angela";
const lastName = "Yu";

//Use {JS stuff} to put js inside html in jsx
//We cannot use js expressions inside it though, like
//if else if etc..
// ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

const luckyNum = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    {/* <h1>Hello {firstName + " " + lastName}</h1> */}
    {/* ES6 new syntax */}
    <h1>Hello {`${firstName} ${lastName}`}</h1>
    <p>Your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
