import React, { useState, useRef } from "react";

export const ItemCount = (props) => {
  const [counter, setCounter] = useState(props.initial);
  const quantity = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setCounter(quantity.current.value);
  };

  return (
    <div id="ItemCount">
      <form onSubmit={onSubmitHandler}>
        <label>Cantidad:</label>
        <input
          type="number"
          defaultValue={counter}
          min={props.min}
          max={props.max}
          ref={quantity}
        ></input>
        <button type="submit">Añadir al carrito</button>
      </form>
    </div>
  );
};
