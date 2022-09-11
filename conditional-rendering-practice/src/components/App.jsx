import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered && <Form btn="Login"/>} */}
      {userIsRegistered ? <Form btn="Login" /> : <Form btn="Register" />}
    </div>
  );
}

export default App;
