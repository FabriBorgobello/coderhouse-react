import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "./CartContext";

export const CartItem = (props) => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div id="CartItem">
      <img src={props.thumbnail} alt="producto" />
      <div id="right">
        <p id="title">{props.title}</p>
        <div>
          <p id="quantity">Cantidad: {props.quantity}</p>
          <p>Stock disponible: {props.stock}</p>
        </div>
        <p id="price">$ {props.price}</p>
      </div>
    </div>
  );
};
