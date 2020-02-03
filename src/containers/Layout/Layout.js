import React, { Fragment, useState } from "react";
import Toolbar from "../../components/Nav/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../../components/Nav/SideDrawer/SideDrawer";

function Layout(props) {
  const [show, setShow] = useState(false);

  const toggleSideDrawHandler = () => {
    setShow(!show);
  };

  const hideSideDrawHandler = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Toolbar toggleSideDraw={toggleSideDrawHandler} show={show} />
      <SideDrawer backDropShow={show} hide={hideSideDrawHandler} />
      <main className="Main">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
