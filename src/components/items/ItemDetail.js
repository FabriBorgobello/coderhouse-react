import React from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = (props) => {
  if (!props.item.pictures) {
    return <span>Loading...</span>;
  }

  return (
    <div id="ItemDetail">
      <div img="containerLeft">
        <img src={props.item.pictures[0].url} alt={props.item.name} />
      </div>

      <div id="containerRight">
        <div id="productInfo">
          <div id="primaria">
            <p id="name">{props.item.title}</p>
            <p id="price">$ {props.item.price}</p>
            <hr />
          </div>
          
          <div id="secundaria">
          <p id="garantia">{props.item.warranty}</p>
          <p id="vendidos">Ventas: {props.item.sold_quantity}</p>
          <p id="stock">Stock: {props.item.available_quantity}</p>
          </div>
        </div>
        <ItemCount initial="0" min="0" max="10" />
      </div>
    </div>
  );
};
