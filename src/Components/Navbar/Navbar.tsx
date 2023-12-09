import React from "react";
import "./Navbar.css";
import Navlogo from "../../Images/NavLogo.png";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-pt-1">
          <img src={Navlogo} alt="" />
        </div>
        <div className="nav-pt-2">
          <div>Home</div>
          <div>Properties</div>
          <div>Agents</div>
          <div>About Us</div>
        </div>
        <div className="nav-pt-3 flex gap-8">
          <button style={{ color: "#C92028" }}>LogIn</button>
          <button className="signup">SignUp</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
