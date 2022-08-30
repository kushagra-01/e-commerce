import "./App.css";
import ResponsiveAppBar from "./componants/navbar";
import { Home, Men } from "./componants/home";
import { Routes, Route } from "react-router-dom";
import { ShoeDetail } from "./componants/shoedetail";

import Loginnn from "./componants/login";
import SignUpp from "./componants/signup";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="" element={<Men />}></Route>
        <Route path="/shoedetail/:id" element={<ShoeDetail />}></Route>
        <Route path="/login" element={<Loginnn/>}></Route>
        <Route path="/register" element={<SignUpp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
