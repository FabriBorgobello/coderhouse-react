import React from "react";
import { Divider } from "react-materialize";
import "./Item.css";

export const Item = ({ item }) => {
    return (
        <div className="itemCard">
            <div id="imageContainer">
                <img src={item.image} alt={item.title} />
            </div>
            <div id="bottom">
                <p id="title">{item.title}</p>
                <Divider />
                <p id="price">$ {item.price}</p>
            </div>
        </div>
    );
};
