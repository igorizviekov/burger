import React from "react";
import "./Order.css";
function Order(props) {
  //extract customer name from object data
  let name = null;
  //if no user data
  if (props.name === undefined) {
    name = "Incognito";
    //if no instagram data
  } else if (props.name[1] === undefined) {
    const objectName = Object.entries(props.name);
    const arrayName = objectName[0];
    name = arrayName[1];
    //if full data
  } else {
    const objectName = Object.entries(props.name);
    const arrayName = objectName[1];
    name = arrayName[1];
  }

  return (
    <div className="OrderBackground">
      <div className="Order">
        {" "}
        <p>
          <strong>{name}</strong>
        </p>
        <p>Donated: ${props.price.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default Order;
