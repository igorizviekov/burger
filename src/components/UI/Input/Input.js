import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        onChange={props.changed}
        name={props.name}
        placeholder={props.placeholder}
        type="text"
        className="Input"
      />
    </div>
  );
}

export default Input;
