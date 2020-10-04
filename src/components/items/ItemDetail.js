import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { Loading } from "../loading/Loading";
import { NavLink } from "react-router-dom";
import { CartContext } from "../cart/CartContext";

export const ItemDetail = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [counter, setCounter] = useState("1");

  if (!props.item.image) {
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
      <div id="containerLeft">
        <img src={props.item.image} alt={props.item.title} />
      </div>

      <div id="containerRight">
        <div id="productInfo">
          <div id="primaria">
            <p id="name">{props.item.title}</p>
            <p id="price">$ {props.item.price}</p>
            <hr />
          </div>

          <div id="secundaria">
            <p id="description">{props.item.description}</p>
            <p id="stock">Stock: {props.item.stock}</p>
          </div>
        </div>
        <ItemCount
          value={counter}
          initial="1"
          min="1"
          max={props.item.stock}
          item={props.item}
          handleCounter={handleCounter}
        />
        <div id="buttons">
          <input
            type="button"
            onClick={addToCart}
            value={`Añadir ${counter} al carrito`}
          />
          <NavLink
            to="/cart"
            children={<input type="button" value="Ir al carrito" />}
          />
        </div>
      </div>
    </div>
  );
};
