import React, { useState, useContext } from "react";
import "./ItemCount.css";
import { CartContext } from "../cart/CartContext";
import { NavLink } from "react-router-dom";

export const ItemCount = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [counter, setCounter] = useState(props.initial);

  const addToCart = () => {
    setCart([...cart, { product: props.item, quantity: counter }]);
  };

  return (
    <>
      <label>Cantidad:</label>
      <input
        type="number"
        value={counter}
        min={props.min}
        max={props.max}
        onChange={(event) => {
          setCounter(event.target.value);
        }}
      />
      <button onClick={addToCart}>Añadir {counter} al carrito</button>
      <NavLink to="/cart" children="Ir al carrito" />
    </>
  );
};
