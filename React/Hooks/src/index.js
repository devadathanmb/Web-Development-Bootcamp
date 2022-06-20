import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//This does not work coz react is rendering everything
//It has to re-render again to reflect these changes
ReactDOM.render(<App />, document.getElementById("root"));
