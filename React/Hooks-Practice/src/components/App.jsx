import React from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, setTime] = React.useState(currentTime);
  function getTime() {
    let currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(currentTime);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
