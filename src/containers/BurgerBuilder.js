import React, { useState, useEffect, Fragment } from "react";
import Burger from "../../src/components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UI/Modal/Modal";
import OrderCheckout from "../components/Burger/OrderCheckout/OrderCheckout";
import axios from "../axios-orders";
import Spinner from "../components/UI/Spinner/Spinner";
import withErrorHandler from "../HOC/withErrorHandler/withErrorHandler";
import ErrorMessage from "../HOC/withErrorHandler/ErrorMessage";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";
import { Transition } from "react-transition-group";
import { useHistory } from "react-router-dom";
export function BurgerBuilder(props) {
  const [modal, setModal] = useState(false);

  //ingredients and price data from firebase
  const { onInitIngredients } = props;
  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const history = useHistory();
  const continueHandler = () => {
    history.push("/checkout");
  };

  const showModalHandler = () => {
    setModal(true);
  };

  const hideModalHandler = () => {
    setModal(false);
  };

  // checks if the value(key) of ingredients = 0
  //returns true or false
  let disabledInfo = { ...props.ing };
  for (let key of Object.keys(disabledInfo)) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderCheckout = (
    <OrderCheckout
      ingredients={props.ing}
      price={props.ttlP.toFixed(1)}
      hideModal={hideModalHandler}
      continue={continueHandler}
    />
  );

  let burger = <Burger ingredients={props.ing} />;

  let buildControls = (
    <BuildControls
      ingredientAdd={props.addIngredientHandler}
      ingredientRemove={props.removeIngredientHandler}
      price={props.ttlP.toFixed(1)}
      disabled={disabledInfo}
      showModal={showModalHandler}
    />
  );

  // show error if price didn't load
  if (!props.ingP) {
    buildControls = props.error ? <ErrorMessage /> : <Spinner />;
  }
  //if ingredients fail to load from backend show spinner and then error message
  if (!props.ing) {
    burger = null;
    buildControls = props.error ? <ErrorMessage /> : <Spinner />;
  }
  return (
    //animate modal with transition
    <Fragment>
      <Transition mountOnEnter unmountOnExit in={modal} timeout={300}>
        {state => <Modal show={state}>{orderCheckout}</Modal>}
      </Transition>

      {burger}
      {buildControls}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    ing: state.bbd.ingredients,
    ingP: state.bbd.ingredientPrice,
    ttlP: state.bbd.totalPrice,
    error: state.bbd.error
  };
};

const mapDispatchToProps = dispatchEvent => {
  return {
    addIngredientHandler: id => dispatchEvent(actionCreators.addIngredient(id)),
    removeIngredientHandler: id =>
      dispatchEvent(actionCreators.removeIngredient(id)),
    onInitIngredients: () => dispatchEvent(actionCreators.initIngredients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
