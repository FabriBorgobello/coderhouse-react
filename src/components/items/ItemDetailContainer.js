import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { ItemCount } from "./ItemCount";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [result, setResult] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "Silla", price: "1000", stock: 50 };
        resolve(data);
      }, 1000);
    }).then((data) => {
      setResult(data);
      setLoad(false);
    });
  }, []);

  if (load) {
    return <div>Loading...</div>;
  }
  return (
    <div id="ItemDetailContainer">
      <div id="containerLeft">
        <ItemDetail item={result} />
      </div>
      <div id="containerRight">
        <ItemCount initial="0" min="0" max="10" />
        <button>Comprar</button>
      </div>
    </div>
  );
};
