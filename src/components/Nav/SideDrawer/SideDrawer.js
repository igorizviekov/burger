import React, { Fragment } from "react";
import "./SideDrawer.css";
import Backdrop from "../../UI/BackDrop/backdrop";
import NavItems from "../Toolbar/NavItems/NavItems";

//in layout.js

function SideDrawer(props) {
  //transition classes for toggle side draw
  let Classes = ["SideDrawer", "Close"];
  if (props.backDropShow) {
    Classes = ["SideDrawer", "Open"];
  }
  return (
    <Fragment>
      <Backdrop show={props.backDropShow} clicked={props.hide} />
      <div className={Classes.join(" ")}>
        <nav
          //disable eslint error
          role="presentation"
          className="SideDrawerLinks"
          onClick={props.hide}
        >
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
}

export default SideDrawer;
