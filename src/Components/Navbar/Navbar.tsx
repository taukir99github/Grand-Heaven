import React from "react";
import "./Navbar.css";
import Navlogo from "../../Images/NavLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-pt-1">
          <img src={Navlogo} alt="" />
        </div>

        <div className="nav-pt-2 ">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 ...">
            Home
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 ...">
            Properties
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 ...">
            Agents
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 ...">
            About Us
          </div>
        </div>
        <div className="nav-pt-3 flex gap-8 ">
          <button style={{ color: "#C92028" }}>LogIn</button>
          <button className="signup transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">
            SignUp
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
