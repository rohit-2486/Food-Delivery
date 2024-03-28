import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../Utils/Redux/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      {cartItem.length === 0
        ? <div className="zeroItemDiv">
        <Link to='/'> - ADD ITEMS TO CART -
        </Link></div>
        : cartItem &&
          cartItem?.map((value) => (
            <div key={value?.uid} className="itemList">
              <img src={Object.values(value.image)} alt="" />
              <div className="listCardContentDiv">
                <h2>{value?.itemName}</h2>
                <span>{value?.price} Rs/-</span>
                <button
                  className="addToCartButton"
                  onClick={() => dispatch(removeFromCart(value.uid))}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Cart;
