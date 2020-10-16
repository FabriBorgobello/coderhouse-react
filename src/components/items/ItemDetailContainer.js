import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";
import { Loading } from "../loading/Loading";
import { useParams } from "react-router-dom";
import db from "../../firebase";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);

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
          setNotFound(true);
        }
      })
      .catch(function (error) {
        console.log("Error al buscar el producto", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [id]);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };

  if (load) {
    return <Loading style={style} />;
  }
  if (notFound) {
    return (
      <h3 style={style}>No se ha encontrado el producto seleccionado.</h3>
    );
  }
  return (
    <div id="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
};
