import React, { useEffect, Fragment } from "react";
import "./Orders.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import ErrorMessage from "../../HOC/withErrorHandler/ErrorMessage";

export function Orders(props) {
  const { onInitOrders } = props;
  useEffect(() => {
    onInitOrders();
  }, [onInitOrders]);

  let order = props.ord.map(order => (
    <Order key={order.id} name={order.customer} price={+order.price} />
  ));
  // show error if orders didn't load
  if (props.error) {
    order = <ErrorMessage />;
  }
  let progressBar = <ProgressBar progress={props.ord.length} />;
  if (props.loading) {
    progressBar = <Spinner />;
    order = <Spinner />;
  }
  return (
    <Fragment>
      <h1 className="ProgressTitle">{props.ord.length}/100</h1>
      {progressBar}
      <div className="Orders">
        <br />
        <h2>Let`s collect 100 orders </h2>
        <h3>
          You can make yours
          <NavLink className="Link" to="bright-burger">
            here
          </NavLink>
        </h3>
        <br />
        <p>Below you can check who has already made one</p>
        <hr />
        {order}
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    ord: state.ord.orders,
    error: state.ord.error,
    loading: state.ord.loading
  };
};

const mapDispatchToProps = dispatchEvent => {
  return {
    onInitOrders: () => dispatchEvent(actionCreators.initOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
