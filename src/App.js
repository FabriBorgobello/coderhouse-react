import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { CartProvider } from "./components/cart/CartContext";
import { getFirestore } from "./firebase";
import { products } from "./firebase/api";

const App = () => {
  // useEffect(() => {
  //   const db = getFirestore();
  //   products.map((product) => {
  //     db.collection("items")
  //       .add(product)
  //       .then(function (docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   });
  // }, []);

  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/items/:id" component={ItemDetailContainer} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
