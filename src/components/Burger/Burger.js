import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

export default function Burger(props) {
  let dynamicIngredients = Object.keys(props.ingredients)
    .map(iKey => {
      return [...Array(props.ingredients[iKey])].map((_, i) => {
        return <BurgerIngredient key={iKey + i} type={iKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  //message if zero ingredients
  if (dynamicIngredients.length === 0) {
    dynamicIngredients = <p>Fill me!</p>;
  }

  //shuffle ingredients array
  for (let i = dynamicIngredients.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * 1);
    const temp = dynamicIngredients[i];
    dynamicIngredients[i] = dynamicIngredients[j];
    dynamicIngredients[j] = temp;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {dynamicIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
