import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const temp_list = [
  {
    _id: "1",
    name: "KURKURE",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1863139243/display_1500/stock-photo-guwahati-assam-india-november-famous-indian-snacks-brand-kurkure-masala-munch-1863139243.jpg",
    price: 20,
    description: "Crunchy and spicy snacks packed with bold flavors.",
    category: "Snack Items",
    offers: "",
  },
  {
    _id: "2",
    name: "LAYS ASCO",
    image: "",
    price: 20,
    description: "Crispy and crunchy potato chips with a variety of flavors.",
    category: "Snack Items",
    offers: "",
  },
  {
    _id: "3",
    name: "LAYS CL",
    image: "",
    price: 20,
    description: "Crispy and crunchy potato chips with a variety of flavors.",
    category: "Snack Items",
    offers: "",
  },
];

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(category);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you.</h2>
      {/* <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div> */}
      <div className="food-display-list">
        {temp_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
