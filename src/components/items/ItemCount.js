import React, { useState, useRef } from "react";
import "./ItemCount.css";

export const ItemCount = (props) => {
  const [counter, setCounter] = useState(props.initial);
  const quantity = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setCounter(quantity.current.value);
  };

  return (
    <form onSubmit={onSubmitHandler} id="ItemCount">
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          defaultValue={counter}
          min={props.min}
          max={props.max}
          ref={quantity}
        />
      </div>
      <button type="submit">Añadir al carrito</button>
      <button>Comprar</button>
    </form>
  );
};
