import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, offers }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <div className="max-w-[300px] max-h-[300px] object-contain flex items-center justify-center overflow-hidden">
          <img
            className="food-item-image max-h-[300px] max-w-[300px]"
            src={image}
            alt="food_img"
            loading="lazy"
          />
        </div>

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={assets.add_icon_white}
            alt="+"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="-"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="+"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="ratings" />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="flex items-center justify-between">
          <p className="food-item-price">₹{price}</p>
          {offers > 0 ? <p>{offers}%OFF</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
