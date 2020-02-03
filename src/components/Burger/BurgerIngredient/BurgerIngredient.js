import React, { Component } from "react";

import Bacon from "./Bacon";
import Salad from "./Salad";
import Cheese from "./Cheese";
import Meat from "./Meat";
import BreadBottom from "./BreadBottom";
import BreadTop from "./BreadTop";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <BreadBottom />;
        break;
      case "bread-top":
        ingredient = <BreadTop />;
        break;
      case "salad":
        ingredient = <Salad />;
        break;
      case "bacon":
        ingredient = <Bacon />;
        break;
      case "cheese":
        ingredient = <Cheese />;
        break;
      case "meat":
        ingredient = <Meat />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
