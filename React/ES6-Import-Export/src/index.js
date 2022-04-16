import React from "react";
import ReactDOM from "react-dom";

//You could name this whatever you want in default exports
import PI from "./math";

//You have to use the same names here
import { doublePI, triplePI } from "./math";

//Importes everything as a object, here pi
import * as pi from "./math";
// pi.doublePI();
// pi.PI;
// pi.triplePI();

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePI()}</li>
    <li>{triplePI()}</li>
  </ul>,
  document.getElementById("root")
);
