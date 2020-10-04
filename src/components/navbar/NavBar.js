import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { getFirestore } from "../../firebase";

export const NavBar = () => {
  const [load, setLoad] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoad(true);
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
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  const style = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <nav id="NavBar">
      <NavLink to={`/`} style={style}>
        <div id="brand">
          <img
            src="https://img.icons8.com/color/48/000000/xiaomi.png"
            alt="Xiaomi-Logo"
          />
          <span>Xiaomería</span>
        </div>
      </NavLink>
      <ul id="options">
        {categories.map((category) => {
          return (
            <NavLink
              key={`/categories/${category.id}`}
              to={`/categories/${category.id}`}
              className="option"
              children={category.name}
              style={style}
            />
          );
        })}
        <li className="option">
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};
