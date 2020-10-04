import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export const ItemCount = (props) => {
  const [quantity, setQuantity] = useState(props.min);

  useEffect(() => {
    props.handleCounter(quantity);
  }, [quantity]);

  return (
    <div id="ItemCount">
      <label>Cantidad:</label>
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
