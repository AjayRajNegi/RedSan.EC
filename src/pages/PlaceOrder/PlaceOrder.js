import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const selectedItems = food_list
    .filter((item) => cartItems[item._id] > 0)
    .map((item) => `${item.name}*${cartItems[item._id]}`);

  const bill = getTotalCartAmount() ?? 0;
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{0}</p>
              </div>

              <div className="cart-total-details">
                <b>Total</b>

                <b>{getTotalCartAmount()}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
