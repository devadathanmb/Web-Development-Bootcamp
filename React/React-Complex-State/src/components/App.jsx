import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const newName = event.target.name;
    const { value, name } = event.target; //This returns the object
    setFullname((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullname.fName} {fullname.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={fullname.fname}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={fullname.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
