import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbY5XvyshMyC7PZbwh-roJf1705Yjn7kI",
  authDomain: "stanza2cart.firebaseapp.com",
  projectId: "stanza2cart",
  storageBucket: "stanza2cart.firebasestorage.app",
  messagingSenderId: "234021511731",
  appId: "1:234021511731:web:b429c948d090ff2aca7946",
  measurementId: "G-WXEQNF0FEF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  // const [snackData, setSnackData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const docRef = doc(db, "food_lists", "Snack_Items");
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         console.log("Fetched Data:", docSnap.data());
  //         setSnackData(docSnap.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   };
  //   fetchData();
  //   console.log(snackData);
  // }, []);

  // useEffect(() => {
  //   console.log("Updated snackData:", snackData);
  // }, [snackData]);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes xd near you.</h2>
      <div className="food-display-list">
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
                offers={item.offers}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
