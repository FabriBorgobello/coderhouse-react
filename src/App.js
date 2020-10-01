import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { CartProvider } from "./components/cart/CartContext";

function App() {
  return (
    <Router>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </CartProvider>
    </Router>
  );
}

export default App;
