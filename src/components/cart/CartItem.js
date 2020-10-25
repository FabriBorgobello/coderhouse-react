import React from "react";
import { Icon } from "react-materialize";
import "./CartItem.css";

export const CartItem = (props) => {
  return (
    <div id="CartItem">
      <div id="left">
        <img src={props.image} alt="producto" />
      </div>
      <div id="right">
        <p id="title">{props.title}</p>
        <div>
          <p id="quantity">Cantidad: {props.quantity}</p>
          {props.stock && <p>Stock disponible: {props.stock}</p>}
        </div>
        <p id="price">$ {props.price * props.quantity}</p>
        <button
          style={{ background: "transparent", border: "none", fontSize: "0" }}
          onClick={() => props.deleteItem(props.id)}
          children={<Icon children="delete" />}
        />
      </div>
    </div>
  );
};
