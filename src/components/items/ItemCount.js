import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export const ItemCount = (props) => {
  const [quantity, setQuantity] = useState(props.min);

  useEffect(() => {
    props.handleCounter(quantity);
  }, [props, quantity]);

  return (
    <div id="ItemCount">
      <label>Cantidad: (Stock: {props.item.stock})</label>
      <input
        type="number"
        min={props.min}
        max={props.max}
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
    </div>
  );
};
