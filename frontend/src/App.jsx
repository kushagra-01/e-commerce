import "./App.css";
import ResponsiveAppBar from "./componants/navbar";
import { Home, Men } from "./componants/home";
import { Routes, Route } from "react-router-dom";
import { ShoeDetail } from "./componants/shoedetail";
import { Cart } from "./componants/cart";
import { Checkout } from "./componants/checkout";
import { Payment } from "./componants/payment";
import { Thankyou } from "./componants/thankyou";
import Loginnn from "./componants/login";
import SignUpp from "./componants/signup";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="" element={<Men />}></Route>
        <Route path="/shoedetail/:id" element={<ShoeDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/thankyou" element={<Thankyou />}></Route>
        <Route path="/login" element={<Loginnn/>}></Route>
        <Route path="/register" element={<SignUpp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
