import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";
import { Loading } from "../loading/Loading";

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
    return <Loading />;
  }
  return (
    <div id="ItemDetailContainer">
      <ItemDetail item={result} />
    </div>
  );
};
