import React from "react";
import { ProductData } from "../../Mockdata/productData";
import "../Products/products.css";
import CartItems from "../../container/cartItems";
import EachProduct from "../Cart/eachProduct";

const Products = () => {
  return (
    <div className="main" data-testid="main">
      <div className="products-mainbox">
        <div className="cart-box">
          <h1 className="products-text">NEW ARRIVALS</h1>
          <div className="cart">
            <CartItems />
          </div>
        </div>

        <div className="products-container">
          {ProductData.map((product, i) => (
            <EachProduct key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
