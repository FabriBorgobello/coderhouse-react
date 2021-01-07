import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";
import { UserModal } from "./UserModal";
import M from "materialize-css";
import { getFirestore } from "../../firebase/index";

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [load, setLoad] = useState(false);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        // Calculate total
        let myTotal = 0;
        cart.forEach(element => {
            myTotal += element.quantity * element.item.price;
        });
        setTotal(myTotal);
    }, [cart]);

    const deleteItem = id => {
        M.toast({ html: "Producto eliminado", displayLength: "2000" });
        setCart(cart.filter(purchase => purchase.item.id !== id));
    };

    const handlePurchase = data => {
        //Create order.
        const newOrder = {
            buyer: {
                name: data.name,
                phone: data.phone,
                email: data.email,
            },
            items: cart,
            date: Date.now(),
            status: "generated",
            total: total,
        };

        //Add order to Firebase.

        setLoad(true);
        const collection = getFirestore().collection("orders");
        collection
            .add(newOrder)
            .then(result => setOrderId(result.id))
            .catch(error => console.error("Error adding document: ", error))
            .finally(() => {
                setCart([]);
                setLoad(false);
            });
    };

    // Fetch items on cart.
    const fetchCart = () =>
        cart.map(purchase => {
            return (
                <CartItem
                    key={purchase.item.id}
                    item={purchase.item}
                    quantity={purchase.quantity}
                    deleteItem={deleteItem}
                />
            );
        });

    if (load) return <Loading />;

    return (
        <div style={{ margin: "0 10%", minHeight: "80vh" }}>
            {/* Carro vacío */}
            {cart.length === 0 && <EmptyCart />}

            {/* Show items */}
            {cart.length !== 0 && (
                <div>
                    <h3>Tu carrito:</h3>
                    {fetchCart()}
                    <div style={{ marginBottom: "15%" }}>
                        <p style={{ textAlign: "right", fontSize: "2rem" }}>Total a pagar: $ {total}</p>
                        <UserModal handlePurchase={handlePurchase} />
                    </div>
                </div>
            )}

            {/* Redirect when order is ready */}
            {orderId && <Redirect to={`/order/${orderId}`} />}
        </div>
    );
};
