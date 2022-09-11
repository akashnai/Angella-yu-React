import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.btn === "Register" && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      {/* <button type="submit">Register</button> */}
      <Button btn={props.btn} />
    </form>
  );
}

export default Form;
