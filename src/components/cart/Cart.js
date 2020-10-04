import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  const [cart] = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 && <EmptyCart />}
      {cart.map((purchase) => {
        return (
          <CartItem
            key={purchase.product.id}
            id={purchase.product.id}
            title={purchase.product.title}
            price={purchase.product.price}
            stock={purchase.product.stock}
            image={purchase.product.image}
            quantity={purchase.quantity}
          />
        );
      })}
    </div>
  );
};
