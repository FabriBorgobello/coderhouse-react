import React from "react";
import "./CartItem.css";

export const CartItem = (props) => {
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
