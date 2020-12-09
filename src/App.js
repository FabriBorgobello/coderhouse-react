import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";
import { Category } from "./components/categories/Category";
import { Order } from "./components/orders/Order";
import { Footer } from "./components/Footer";

const App = () => {

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
