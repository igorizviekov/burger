import React from "react";
import "./button.css";

function button(props) {
  const buttonClasses = ["Button"];

  if (props.orderClass) {
    buttonClasses.push("OrderButton");
  }
  if (props.loginClass) {
    buttonClasses.push("LoginButton");
  }
  if (props.submitClass) {
    buttonClasses.push("SubmitButton");
  }
  return (
    <button className={buttonClasses.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
}

export default button;
