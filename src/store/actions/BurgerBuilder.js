import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = id => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientId: id
  };
};

export const removeIngredient = id => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientId: id
  };
};

//async fetching ingredients from axios with Redux-Thunk
export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const setPrice = price => {
  return {
    type: actionTypes.SET_PRICE,
    price: price
  };
};

export const initIngredientsFail = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS_FAIL
  };
};

export const initIngredients = () => {
  return dispatchEvent => {
    axios
      .get("/ingredients.json")
      .then(response => {
        dispatchEvent(setIngredients(response.data));
        return axios.get("/ingredientPrice.json");
      })
      .then(response => {
        dispatchEvent(setPrice(response.data));
      })
      .catch(error => {
        dispatchEvent(initIngredientsFail());
      });
  };
};
