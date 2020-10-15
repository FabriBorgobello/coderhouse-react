import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import db from "../../firebase";
import { Loading } from "../loading/Loading";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";
import { UserModal } from "./UserModal";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState(0);
  const [load, setLoad] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handlePurchase = () => {
    //Create order.
    const newOrder = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: cart,
      date: Date.now(),
      total: total,
    };

    //Add order to Firebase.
    setLoad(true);
    db.collection("orders")
      .add(newOrder)
      .then(function (docRef) {
        setLoad(false);
        setOrderId(docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        setLoad(false);
      });
  };

  const fetchCart = () =>
    cart.map((purchase) => {
      return (
        <CartItem
          key={purchase.item.id}
          id={purchase.item.id}
          title={purchase.item.title}
          price={purchase.item.price}
          stock={purchase.item.stock}
          image={purchase.item.image}
          quantity={purchase.quantity}
        />
      );
    });

  const calcTotal = () => {
    let myTotal = 0;
    cart.forEach((element) => {
      myTotal += element.quantity * element.item.price;
    });
    return myTotal;
  };
  if (load) return <Loading />;

  return (
    <div style={{ margin: "0 10%" }}>
      {/* Carro vacío */}
      {cart.length === 0 && <EmptyCart />}
      {cart.length !== 0 && (
        <div>
          <h3>Tu carrito:</h3>
          {fetchCart()}
          <div style={{ marginBottom: "15%" }}>
            <p style={{ textAlign: "right" }}>Total a pagar: $ {calcTotal()}</p>
            <UserModal
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              name={name}
              phone={phone}
              email={email}
              handlePurchase={handlePurchase}
            />
          </div>
        </div>
      )}
      {/* Redirección al comprar */}
      {orderId && <Redirect to={`/order/${orderId}`} />}
    </div>
  );
};
