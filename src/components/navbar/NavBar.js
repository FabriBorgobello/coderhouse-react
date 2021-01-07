import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { getFirestore } from "../../firebase";
import { Dropdown, Icon, Navbar } from "react-materialize";

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collection = getFirestore().collection("categories");
        collection
            .get()
            .then(result => {
                if (result.size === 0) {
                    console.log("No results!");
                }
                const data = result.docs.map(doc => doc.data());
                setCategories(data);
            })
            .catch(error => console.log("error searching items", error));
    }, []);

    const style = { backgroundColor: "hsl(10, 56%, 51%)" };

    return (
        <Navbar
            style={style}
            alignLinks="right"
            brand={
                <NavLink to={`/`} style={{ display: "flex", alignItems: "center", fontSize: "2rem" }}>
                    <img
                        style={{ marginLeft: "0.5rem" }}
                        src="https://img.icons8.com/color/48/000000/xiaomi.png"
                        alt="Xiaomi-Logo"
                    />
                    <span style={{ marginLeft: "0.5rem" }}>Xiaomería</span>
                </NavLink>
            }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: "left",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true,
            }}
        >
            <Dropdown
                id="Dropdown_6"
                options={{
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250,
                }}
                trigger={
                    <a href="#!" style={{ fontSize: "1.3rem" }}>
                        Categorías <Icon right>arrow_drop_down</Icon>
                    </a>
                }
            >
                {categories.map(category => {
                    return (
                        <NavLink
                            className="option"
                            key={`/categories/${category.key}`}
                            to={`/categories/${category.key}`}
                            children={<span style={{ color: "black" }}>{category.name}</span>}
                        />
                    );
                })}
            </Dropdown>
            <NavLink to={`/cart`} children={<CartIcon />} style={{ fontSize: "1.3rem" }} />
        </Navbar>
    );
};
