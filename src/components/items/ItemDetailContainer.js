import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";

import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [result, setResult] = useState({});
  const [load, setLoad] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    setLoad(true);
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((myProduct) => {
        setResult(myProduct);
        setLoad(false);
      });
  }, []);

  if (load) {
    return <div>Loading...</div>;
  }
  return (
    <div id="ItemDetailContainer">
      <ItemDetail item={result} />
    </div>
  );
};

// setLoad(true);
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = { id: 1, name: "Silla", price: "1000", stock: 50 };
//     resolve(data);
//   }, 1000);
// }).then((data) => {
//   setResult(data);
//   setLoad(false);
// });
