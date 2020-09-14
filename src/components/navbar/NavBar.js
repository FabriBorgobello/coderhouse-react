import React from "react";
import "./NavBar.css";

import CartIcon from './CartIcon';

export const NavBar = () => {
  return (
    <nav id="NavBar">
      <div id="brand">
        <span>Macaronería</span>
      </div>
      <ul id="options">
        <li className="option">Categorías</li>
        <li className="option">Mi cuenta</li>
        <li className="option">Mis Compras</li>
        <li className="option"><CartIcon /></li>
      </ul>
    </nav>
  );
};
