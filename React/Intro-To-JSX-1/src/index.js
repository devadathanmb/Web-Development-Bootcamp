//Old way
// var React = require("react");
// var ReactDOM = require("react-dom");

//New way
import React from "react";
import ReactDOM from "react-dom";

//JSX is an extension of JS that is like a templating language but with
//all powers of js.
//Babel is a js transpiler that converts the new JS syntax that
//JSX and React uses to convert into plain old js that browsers can understand

//Everything we render in the react goes into the root element in the index.html file
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
