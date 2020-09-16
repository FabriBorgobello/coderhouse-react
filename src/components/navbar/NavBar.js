import React from "react";
import "./NavBar.css";

import { NavLink } from "react-router-dom";

import CartIcon from "./CartIcon";

export const NavBar = () => {
  const style = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <nav id="NavBar">
      <NavLink to={`/`} style={style}>
        <div id="brand">
          <span>Macaronería</span>
        </div>
      </NavLink>
      <ul id="options">
        <li className="option">Categorías</li>
        <li className="option">Mi cuenta</li>
        <li className="option">Mis Compras</li>
        <li className="option">
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};
