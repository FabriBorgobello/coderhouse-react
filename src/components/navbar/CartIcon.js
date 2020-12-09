import React, { useContext, useEffect, useState } from "react";
import { Icon } from "react-materialize";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const [cart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let itemsQuantity = 0;
    cart.forEach((element) => {
      itemsQuantity += element.quantity;
    });
    setQuantity(itemsQuantity);
  }, [cart]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon left>shopping_cart</Icon>
      Mi carrito
      {cart.length !== 0 && ` (${quantity})`}
    </div>
  );
};

export default CartIcon;
