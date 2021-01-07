import React from "react";
import { Icon } from "react-materialize";
import "./CartItem.css";

export const CartItem = ({ item, quantity, deleteItem }) => {
    return (
        <div id="CartItem">
            <div id="left">
                <img src={item.image} alt="producto" />
            </div>
            <div id="right">
                <p id="title">{item.title}</p>
                <div>
                    <p id="quantity">Cantidad: {quantity}</p>
                    {item.stock && <p>Stock disponible: {item.stock}</p>}
                </div>
                <p id="price">$ {item.price * item.quantity}</p>
                {deleteItem && (
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            fontSize: "0",
                            cursor: "pointer",
                        }}
                        onClick={() => deleteItem(item.id)}
                        children={<Icon children="delete" />}
                    />
                )}
            </div>
        </div>
    );
};
