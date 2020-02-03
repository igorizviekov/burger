import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./NavItems.css";

function NavItems() {
  return (
    <Fragment>
      <NavLink to="/bright-burger">HOME</NavLink>
      <NavLink to="/orders">ORDERS</NavLink>
    </Fragment>
  );
}

export default NavItems;
