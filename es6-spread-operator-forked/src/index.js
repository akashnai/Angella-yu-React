import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "orange", "lemon"];
const fruits = ["apple", "banana", "coconut", ...citrus];

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  ...fullName,
  id: 1,
  username: "james007"
};

console.log(user);
