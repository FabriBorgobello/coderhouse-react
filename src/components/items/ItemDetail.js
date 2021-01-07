import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "./ItemCount";
import { Loading } from "../loading/Loading";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button, Icon } from "react-materialize";
import M from "materialize-css";

export const ItemDetail = ({ item }) => {
    const [cart, setCart] = useContext(CartContext);
    const [counter, setCounter] = useState("1");

    const addToCart = () => {
        const sameId = cart.some(element => element.item.id === item.id);
        M.toast({ html: "Producto añadido correctamente", displayLength: "2000" });

        // Si el producto ya está agregado al carrito, aumenta la cantidad.
        if (sameId) {
            cart.forEach(element => {
                if (element.item.id === item.id) {
                    const newCart = cart.filter(el => el.item.id !== item.id);
                    setCart([
                        ...newCart,
                        {
                            item: item,
                            quantity: element.quantity + parseInt(counter),
                        },
                    ]);
                }
            });
        } else {
            // Si el producto no está agregado al carrito, lo añade.
            setCart([...cart, { item: item, quantity: parseInt(counter) }]);
        }
    };

    const handleCounter = value => {
        setCounter(value);
    };

    if (!item.image) {
        return <Loading />;
    }

    return (
        <div id="ItemDetail">
            <div id="containerLeft">
                <img src={item.image} alt={item.title} />
            </div>
            <div id="containerRight">
                <div id="top">
                    <p id="name">{item.title}</p>
                    <p id="price">$ {item.price}</p>
                    <hr />
                </div>
                <div id="middle">
                    <p id="description">{item.description}</p>
                </div>

                <div id="bottom">
                    <ItemCount
                        value={counter}
                        initial="1"
                        min="1"
                        max={item.stock}
                        item={item}
                        handleCounter={handleCounter}
                    />
                    <Button className="bottomBtn" node="button" onClick={addToCart}>
                        {`Añadir ${counter} al carrito`}
                        <Icon left>add_shopping_cart</Icon>
                    </Button>

                    <NavLink to="/cart">
                        <Button className="bottomBtn">
                            <Icon left>shopping_cart</Icon>
                            Ver mi carrito
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
