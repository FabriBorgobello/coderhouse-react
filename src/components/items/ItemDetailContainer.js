import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";
import { Loading } from "../loading/Loading";
import { useParams } from "react-router-dom";
import db from "../../firebase";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    setLoad(true);
    const itemCollection = db.collection("items");

    itemCollection
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setItem({ id: doc.id, ...doc.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("El producto solicitado no existe!");
        }
      })
      .catch(function (error) {
        console.log("Error al buscar el producto", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [id]);

  if (load) {
    return <Loading />;
  }
  return (
    <div id="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
};
