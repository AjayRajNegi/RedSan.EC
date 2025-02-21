import {
  addDoc,
  doc,
  setDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState } from "react";

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

const InputForm = ({ selectedItems, bill }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleSubmit = async () => {
    if (!input1.trim()) {
      alert("Document name cannot be empty!");
      return;
    }

    try {
      await setDoc(doc(db, "orders", input1), {
        name: input1,
        apartmentNo: input2,
        mobileNo: input3,
        items: selectedItems, // Storing selected items
        bill: bill,
      });

      alert("Your order has been placed successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <b>Name</b> <br />
      <input
        type="text"
        placeholder="Enter Your Name"
        className="border-2 p-2 rounded-md md:w-[500px]"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <br />
      <b>Apartment No.</b> <br />
      <input
        type="text"
        placeholder="Enter Property Number"
        className="border-2 p-2 rounded-md md:w-[500px]"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <br />
      <b>Mobile no.</b> <br />
      <input
        type="number"
        placeholder="Enter Your Number"
        className="border-2 p-2 rounded-md md:w-[500px] mb-5"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default InputForm;
