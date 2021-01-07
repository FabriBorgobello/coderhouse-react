import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import "./ItemList.css";
import { NavLink } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { getFirestore } from "../../firebase";

export const ItemList = () => {
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
        const collection = getFirestore().collection("items");
        collection
            .get()
            .then(result => {
                if (result.size === 0) {
                    console.log("No results!");
                }
                const data = result.docs.map(doc => {
                    return { id: doc.id, ...doc.data() };
                });
                setItems(data);
            })
            .catch(error => console.log("error searching items", error))
            .finally(() => setLoad(false));
    }, []);

    if (load) {
        return <Loading />;
    }

    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    };

    return (
        <div id="ItemList">
            {!items && <div>No hay productos para mostrar</div>}
            {items.map(item => {
                return (
                    <NavLink to={`/items/${item.id}`} style={linkStyle} key={item.id} children={<Item item={item} />} />
                );
            })}
        </div>
    );
};
