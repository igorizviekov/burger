import axios from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const startLoadOrders = () => {
  return {
    type: actionTypes.START_LOAD_ORDERS
  };
};

export const setOrders = orders => {
  return {
    type: actionTypes.SET_ORDERS,
    orders: orders
  };
};

export const initOrdersFail = () => {
  return {
    type: actionTypes.INIT_ORDERS_FAIL
  };
};

export const initOrders = () => {
  return dispatchEvent => {
    dispatchEvent(startLoadOrders());
    axios
      .get("/orders.json")
      .then(response => {
        //turn response.data object into an array + id
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        dispatchEvent(setOrders(fetchedOrders));
      })

      .catch(error => {
        dispatchEvent(initOrdersFail());
      });
  };
};
