import React from "react";
import { useSelector } from "react-redux";
import "./basket.css";

const Basket = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="basket">
      <div className="total">
        <p>Subtotal</p>
        <p>${totalAmount}</p>
      </div>
      <div className="check">Checkout</div>
    </div>
  );
};

export default Basket;
