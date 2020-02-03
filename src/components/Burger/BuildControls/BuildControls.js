//control panel

import React, { Fragment } from "react";
import "./BuildControls.css";
import Controls from "./Controls/Controls";
import Button from "../../UI/Button/button";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

export default function BuildControls(props) {
  return (
    //controls.map() loops through control const and render control elements

    <div className="BuildControls">
      <p>Total price: ${props.price}</p>
      {controls.map(id => (
        <Fragment key={id.label}>
          <br />
          <Controls
            label={id.label}
            plus={() => props.ingredientAdd(id.type)}
            minus={() => props.ingredientRemove(id.type)}
            disabled={props.disabled[id.type]}
          />
        </Fragment>
      ))}
      <br />
      <Button clicked={props.showModal} orderClass>
        ORDER NOW
      </Button>
    </div>
  );
}
