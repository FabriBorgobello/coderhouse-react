import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/cart" children={<Cart />} />
          <Route path="/item/:id" children={<ItemDetailContainer />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
