import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  const handleClick = () => {
    // console.log('Clicked')
    setHeadingText("Submitted");
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
