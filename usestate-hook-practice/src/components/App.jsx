import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("en-GB");
  const [TIME, setTime] = useState(time);

  setTimeout(() => {
    setTimenow();
  }, 1000);

  const setTimenow = () => setTime(new Date().toLocaleTimeString("en-GB"));
  return (
    <div className="container">
      <h1>{TIME}</h1>
      <button onClick={setTimenow}>Get Time</button>
    </div>
  );
}

export default App;
