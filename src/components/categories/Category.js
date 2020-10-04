import React, { useEffect, useState } from "react";
import { Item } from "../items/Item";
import "../items/ItemList.css";
import { NavLink, useParams } from "react-router-dom";
import { Loading } from "../loading/Loading";
import { getFirestore } from "../../firebase";

export const Category = () => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState("true");
  const { category } = useParams();

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db
      .collection("items")
      .where("categoryId", "==", parseInt(category));

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        // console.log(querySnapshot.docs[0].id);
        setItems(querySnapshot.docs.map((doc) => doc));
      })
      .catch((error) => {
        console.log("error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [category]);

  if (load) {
    return <Loading />;
  }

  const style = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <div id="ItemList">
      {!items && <div>No hay productos para mostrar</div>}

      {items.map((item) => (
        <NavLink
          to={`/items/${item.id}`}
          style={style}
          key={item.id}
          children={<Item item={item.data()} />}
        />
      ))}
    </div>
  );
};
