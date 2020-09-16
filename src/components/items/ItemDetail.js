import React from "react";
import "./ItemDetail.css";

export const ItemDetail = (props) => {
  return (
    <div id="ItemDetail">
      <p id="name">{props.item.name}</p>
      <p id="price">$ {props.item.price}</p>
      <p id="stock">Stock: {props.item.stock}</p>
    </div>
  );
};
