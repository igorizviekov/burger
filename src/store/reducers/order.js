import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOAD_ORDERS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        error: false,
        loading: false
      };
    case actionTypes.INIT_ORDERS_FAIL:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
