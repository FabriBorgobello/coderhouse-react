import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { Loading } from "../loading/Loading";
import { NavLink } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import { Button, Icon } from "react-materialize";

export const ItemDetail = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [counter, setCounter] = useState("1");

  const addToCart = () => {
    const sameId = cart.some((element) => element.item.id === props.item.id);

    if (sameId) {
      cart.forEach((element) => {
        if (element.item.id === props.item.id) {
          const newCart = cart.filter((el) => el.item.id !== props.item.id);
          setCart([...newCart, { item: props.item, quantity: element.quantity + parseInt(counter) }]);
        }
      });
    } else {
      setCart([...cart, { item: props.item, quantity: parseInt(counter) }]);
    }
  };

  const handleCounter = (value) => {
    setCounter(value);
  };

  if (!props.item.image) {
    return <Loading />;
  }

  return (
    <div id="ItemDetail">
      <div id="containerLeft">
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div id="containerRight">
        <div id="top">
          <p id="name">{props.item.title}</p>
          <p id="price">$ {props.item.price}</p>
          <hr />
        </div>
        <div id="middle">
          <p id="description">{props.item.description}</p>
        </div>

        <div id="bottom">
          <ItemCount
            value={counter}
            initial="1"
            min="1"
            max={props.item.stock}
            item={props.item}
            handleCounter={handleCounter}
          />

          <Button
            node="button"
            style={{
              marginRight: "5px",
            }}
            waves="light"
            onClick={addToCart}
          >
            {`Añadir ${counter} al carrito`}
            <Icon left>add_shopping_cart</Icon>
          </Button>

          <NavLink to="/cart">
            <Button>
              <Icon left>shopping_cart</Icon>
              Ver mi carrito
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// const addToCart = () => {
//   const sameId = (value) => value === props.item.id;

//   cart.forEach((element) => {
//     if (sameId(element.id)) {
//       element.quantity = parseFloat(element.quantity) + parseFloat(counter);
//     }
//   });
//   if (!cart.some((element) => sameId(element.id))) {
//     const newItem = { ...props.item, quantity: counter };
//     setCart([...cart, newItem]);
//   }
// };
