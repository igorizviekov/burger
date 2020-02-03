import React from "react";
import "./Controls.css";

export default function Controls(props) {
  return (
    <div className="Controls">
      <button
        className="ControlButtons"
        onClick={props.minus}
        disabled={props.disabled}
      >
        -
      </button>
      <div className="Label">{props.label}</div>
      <button className="ControlButtons" onClick={props.plus}>
        +
      </button>
    </div>
  );
}
