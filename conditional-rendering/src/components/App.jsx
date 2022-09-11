import React from "react";
import Login from "./Login";
let isLoggedIn = true;

const currentTime = new Date(2022, 1, 1, 5).getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />

        // if first condition is false. then it won't check 2nd condition
        // so we put first condition and what to be executed after &&
        currentTime > 0 && currentTime < 8 && <h1>Why you working overnight</h1>
      }
    </div>
  );
}

export default App;
