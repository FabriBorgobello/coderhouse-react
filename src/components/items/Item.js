import React from "react";
import "./Item.css";

export const Item = (props) => {
  return (
    <div className="itemCard">
      <div id="imageContainer">
        <img src={props.product.pictures[0].url} alt={props.product.title} />
      </div>

      <div id="bottom">
        <p id="title">{props.product.title}</p>
        <br />
        <p id="price">$ {props.product.price}</p>
      </div>
    </div>
  );
};
