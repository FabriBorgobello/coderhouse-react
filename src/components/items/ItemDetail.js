import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { Loading } from "../loading/Loading";
import { NavLink } from "react-router-dom";
import { CartContext } from "../cart/CartContext";

export const ItemDetail = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [counter, setCounter] = useState("1");

  if (!props.item.pictures) {
    return <Loading />;
  }
  const addToCart = () => {
    setCart([...cart, { product: props.item, quantity: counter }]);
    console.log(cart);
  };

  const handleCounter = (value) => {
    setCounter(value);
  };

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
        <ItemCount
          value={counter}
          initial="1"
          min="1"
          max={props.item.available_quantity}
          item={props.item}
          handleCounter={handleCounter}
        />
        <button onClick={addToCart}>Añadir {counter} al carrito</button>
        <NavLink to="/cart" children="Ir al carrito" />
      </div>
    </div>
  );
};
