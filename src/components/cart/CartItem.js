import React from "react";
import "./CartItem.css";

export const CartItem = (props) => {
  return (
    <div id="CartItem">
      <img src={props.image} alt="producto" />
      <div id="right">
        <p id="title">{props.title}</p>
        <div>
          <p id="quantity">Cantidad: {props.quantity}</p>
          <p>Stock disponible: {props.stock}</p>
        </div>
        <p id="price">
          $ {props.price} {props.quantity > 1 && "c/u"}
        </p>
      </div>
    </div>
  );
};
