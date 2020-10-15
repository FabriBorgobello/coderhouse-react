import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { CartProvider } from "./components/cart/CartContext";
import { Category } from "./components/categories/Category";
import { Order } from "./components/orders/Order";
import { Footer } from "./components/Footer";
// import db from "./firebase";
// import { CATEGORIES } from "./firebase/categories";
// import { PRODUCTS } from "./firebase/products";

const App = () => {
  // const createDataBase = () => {

  //   //Categories
  //   CATEGORIES.map((category) => {
  //     db.collection("categories").doc(category.id).set(category);
  //   });

  //   //Products
  //   PRODUCTS.map((product) => {
  //     db.collection("items")
  //       .add(product)
  //       .then(function (docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   });
  // };

  // createDataBase();

  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/items/:id" component={ItemDetailContainer} />
          <Route exact path="/categories/:category" component={Category} />
          <Route exact path="/order/:orderId" component={Order} />
        </Switch>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
