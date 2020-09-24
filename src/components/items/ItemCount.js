import React, { useState, useRef, useEffect } from "react";
import "./ItemCount.css";

export const ItemCount = (props) => {
  const [counter, setCounter] = useState(props.initial);
  const quantity = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setCounter(quantity.current.value);
  };
  useEffect(() => {}, [counter]);

  return (
    <form onSubmit={onSubmitHandler} id="ItemCount">
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          value={counter}
          min={props.min}
          max={props.max}
          ref={quantity}
          onChange={(event) => {
            setCounter(event.target.value);
          }}
        />
      </div>
      <button type="submit">Añadir al carrito</button>
      <button>Comprar {counter}</button>
    </form>
  );
};
