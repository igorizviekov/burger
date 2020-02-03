import React from "react";
import "./BurgerMenu.css";

function BurgerMenu(props) {
  let menuClasses = ["MenuBtn"];

  if (props.show) {
    menuClasses.push("MenuBtnOpen");
  }
  return (
    <div
      onClick={props.clicked}
      className={menuClasses.join(" ")}
      role="presentation"
    >
      <div className="MenuBtnBurger" />
    </div>
  );
}

export default BurgerMenu;
