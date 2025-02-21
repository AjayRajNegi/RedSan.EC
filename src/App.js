import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="mx-auto w-[90%] md:w-[80%]">
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/order" element={<PlaceOrder />}></Route> */}
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
