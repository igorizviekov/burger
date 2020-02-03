import React, { Fragment } from "react";
import "./Modal.css";
import BackDrop from "../BackDrop/backdrop";

//added in burgerBuilder.js
const Modal = props => {
  const Classes = [
    "Modal",
    props.show === "entering"
      ? "ModalOpen"
      : props.show === "exiting"
      ? "ModalClosed"
      : null
  ];
  return (
    <Fragment>
      <BackDrop show={props.show} />
      <div className={Classes.join(" ")}>{props.children}</div>
    </Fragment>
  );
};

export default Modal;
