import React from "react";
import { ItemList } from "./items/ItemList";

export const Home = () => {
    return (
        <div id="Home" style={{ textAlign: "center", margin: "1rem 2rem 1rem 2rem" }}>
            <p style={{ margin: "3rem 0" }}>
                <span style={{ display: "block", fontSize: "5rem" }}>¡Bienvenido!</span>
                <span style={{ fontSize: "2rem" }}>Encontrá lo último en tecnología al mejor precio</span>
            </p>
            <ItemList />
        </div>
    );
};
