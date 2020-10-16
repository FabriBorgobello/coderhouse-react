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
  const [emailConfirm, setEmailConfirm] = useState("");
  const [total, setTotal] = useState(0);
  const [load, setLoad] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    let myTotal = 0;
    cart.forEach((element) => {
      myTotal += element.quantity * element.item.price;
    });
    setTotal(myTotal);
  }, [cart]);

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
      status: "generated",
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

    setCart([]);
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
            <p style={{ textAlign: "right" }}>Total a pagar: $ {total}</p>
            <UserModal
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              setEmailConfirm={setEmailConfirm}
              name={name}
              phone={phone}
              email={email}
              emailConfirm={emailConfirm}
              handlePurchase={handlePurchase}
            />
          </div>
        </div>
      )}
      {orderId && <Redirect to={`/order/${orderId}`} />}
    </div>
  );
};
