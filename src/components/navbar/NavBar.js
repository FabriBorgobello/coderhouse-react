import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { getFirestore } from "../../firebase";
import { Dropdown, Icon, Navbar } from "react-materialize";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = db.collection("categories");
    categoriesCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setCategories(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("error searching items", error);
      });
  }, []);

  return (
    <Navbar
      alignLinks="right"
      brand={
        <NavLink to={`/`} style={{ display: "flex", alignItems: "center" }}>
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
          <a href="#!">
            Categorías <Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        {categories.map((category) => {
          return (
            <NavLink
              key={`/categories/${category.key}`}
              to={`/categories/${category.id}`}
              className="option"
              children={category.name}
            />
          );
        })}
      </Dropdown>
      <NavLink to={`/cart`} children={<CartIcon />} />
    </Navbar>
  );
};
