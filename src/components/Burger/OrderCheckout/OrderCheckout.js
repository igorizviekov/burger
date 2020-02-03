import React, { Fragment } from "react";
import Button from "../../UI/Button/button";

function OrderCheckout(props) {
  //Object.keys transforms object to an array of keys
  // .map loops once for each element in an array, in order, and constructs a new array from the results
  //{iKey} is the firs value of the array(salad)
  //{props.ingredients[iKey]} is the child value (quantity in state)
  const Order = Object.keys(props.ingredients).map(iKey => {
    return (
      <li key={iKey}>
        {iKey}: {props.ingredients[iKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h2>Your order:</h2>
      <ul>{Order}</ul>
      <p>
        Total price: <strong>${props.price}</strong>
      </p>
      <Button clicked={props.hideModal}>CANCEL</Button>
      <Button clicked={props.continue}>CONTINUE</Button>
    </Fragment>
  );
}

export default OrderCheckout;
