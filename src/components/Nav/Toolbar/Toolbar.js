import React from "react";
import "./Toolbar.css";
import Logo from "./Logo";
import NavItems from "./NavItems/NavItems";

import Menu from "../../UI/BurgerMenu/BurgerMenu";
//in layout.js

const Toolbar = props => (
  <header className="Toolbar">
    <nav className="NavItems">
      <NavItems />
    </nav>
    <Logo />
    <Menu clicked={props.toggleSideDraw} show={props.show} />
  </header>
);

export default Toolbar;
