// API:       "https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=10"
//      "https://api.mercadolibre.com/sites/MLA/search?q=Xiaomi&limit=10"
//"https://api.mercadolibre.com/items/MLA841413632"

import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import "./ItemList.css";
import { NavLink } from "react-router-dom";
import { Loading } from "../loading/Loading";

export const ItemList = () => {
  const [result, setResult] = useState([]);
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState("true");
  const arr = [];

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=Xiaomi&limit=50")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(`https://api.mercadolibre.com/items/${item.id}`)
              .then((response) => response.json())
              .then((allProducts) => arr.push(allProducts));
            setProducts(arr);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  if (load) {
    return <Loading />;
  }

  const style = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <div id="ItemList">
      {products.map((element) => (
        <NavLink
          to={`item/${element.id}`}
          style={style}
          key={element.id}
          children={<Item product={element} />}
        />
      ))}
    </div>
  );
};
