import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";
import "./cartItems.css";

const CartItems = () => {
  const { products } = useContext(CartContext);
  const navigate = useNavigate();
  const cart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <button className="cart-icon" onClick={cart}>
        <span className="basket">
          <AiOutlineShoppingCart />
        </span>
        <span className="text-cart">Cart</span>
        <span className="cart-count">
          {products.length >= 0 ? `${products.length}` : "0"}
        </span>
      </button>
    </div>
  );
};

export default CartItems;
