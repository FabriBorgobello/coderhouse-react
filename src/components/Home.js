import React from "react";
import { ItemList } from "./items/ItemList";
import { ItemDetailContainer } from "./items/ItemDetailContainer";

export const Home = () => {
  return (
    <div id="Home">
      <ItemDetailContainer />
      {/* <ItemList /> */}
    </div>
  );
};
