import React from "react";
import Login from "./Login";

//Logged in or not
var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {/* Condition ? Do this if True : Do this if False */}
      {/* Condition ? Do this if True : "null" to skip the false condition */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
