import React, { useContext } from "react";
import "./CSS/Shopcategory.css";
import { Shopcontext } from "../Context/Shopcontext";

const ShopCategory = (props) => {
  const { all_products } = useContext(Shopcontext);

  return (
    <div>
      <h1>Shop Category</h1>
     
    </div>
  );
};

export default ShopCategory;
