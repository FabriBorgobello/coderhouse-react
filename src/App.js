import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { CartProvider } from "./components/cart/CartContext";
import { Category } from "./components/categories/Category";
// import { getFirestore } from "./firebase";
// import { CATEGORIES } from "./firebase/categories";
// import { SMARTPHONES, SMARTDEVICES } from "./firebase/products";

const App = () => {
  // const db = getFirestore();
  // useEffect(() => {
  //   CATEGORIES.map((category) => {
  //     console.log(category);
  //     db.collection("categories")
  //       .doc(category.id)
  //       .set(category)
  //       .then(() => {
  //         console.log("Document written");
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   });
  //   SMARTPHONES.map((smartphone) => {
  //     db.collection("items")
  //       .add(smartphone)
  //       .then(function (docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   });
  //   SMARTDEVICES.map((smart_device) => {
  //     db.collection("items")
  //       .add(smart_device)
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
          <Route exact path="/categories/:category" component={Category} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
