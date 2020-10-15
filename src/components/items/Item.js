import React from "react";
import { Divider } from "react-materialize";
import "./Item.css";

export const Item = (props) => {
  return (
    <div className="itemCard">
      <div id="imageContainer">
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div id="bottom">
        <p id="title">{props.item.title}</p>
        <Divider/>
        <p id="price">$ {props.item.price}</p>
      </div>
    </div>
  );
};
