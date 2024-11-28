import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from "./components/Footer/Footer.jsx";
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders.jsx'
import Verify from './pages/Verify/Verify.jsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <ToastContainer/>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/cart"  element={<Cart/>}/>
         <Route path="/order" element={<PlaceOrder/>}/>
         <Route path="/myorders" element={<MyOrders/>}/>
         <Route path="/verify" element={<Verify/>}/>
      </Routes>
       
    </div>
    <Footer/>
    </>
  );
};

export default App;
