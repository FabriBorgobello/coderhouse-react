import React, { useEffect, useState } from "react";
import { Item } from "../items/Item";
import "../items/ItemList.css";
import { NavLink, useParams } from "react-router-dom";
import { Loading } from "../loading/Loading";
import db from "../../firebase";

export const Category = () => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState("true");
  const { category } = useParams();

  useEffect(() => {
    setLoad(true);
    const itemCollection = db
      .collection("items")
      .where("categoryId", "==", parseInt(category));

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setItems(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [category]);

  const renderCategory = () => {
    if (load) return <Loading />;
    if (!items) return <div>No hay productos para mostrar</div>;
    return items.map((item) => (
      <NavLink
        to={`/items/${item.id}`}
        style={style}
        key={item.id}
        children={<Item item={item} />}
      />
    ));
  };

  const style = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <div
      id="ItemList"
      style={{ margin: "1rem 2rem 1rem 2rem", minHeight: "80vh" }}
    >
      {renderCategory()}
    </div>
  );
};
