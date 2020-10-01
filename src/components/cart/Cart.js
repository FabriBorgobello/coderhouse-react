import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      {cart.map((purchase) => {
        return (
          <>
            <CartItem
              key={purchase.product.id}
              id={purchase.product.id}
              title={purchase.product.title}
              price={purchase.product.price}
              stock={purchase.product.available_quantity}
              thumbnail={purchase.product.thumbnail}
              quantity={purchase.quantity}
            />
          </>
        );
      })}
    </div>
  );
};
