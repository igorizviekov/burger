import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  ingredientPrice: null,
  totalPrice: 2,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientId]: state.ingredients[action.ingredientId] + 1
        },
        totalPrice:
          state.totalPrice + state.ingredientPrice[action.ingredientId]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientId]: state.ingredients[action.ingredientId] - 1
        },
        totalPrice:
          state.totalPrice - state.ingredientPrice[action.ingredientId]
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false
      };
    case actionTypes.SET_PRICE:
      return {
        ...state,
        ingredientPrice: action.price,
        totalPrice: 2,
        error: false
      };
    case actionTypes.INIT_INGREDIENTS_FAIL:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
