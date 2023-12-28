import React, { useState } from "react";
import "./Navbar.css";
import Navlogo from "../../Images/NavLogo.png";
import { Link } from "react-router-dom";
import LoginSignup from "../LogIn/LoginSignup";
const Navbar = () => {
 

  return (
    <div>
      <nav>
        <div className="nav-pt-1">
        <Link to="/">
          <img src={Navlogo} alt="" />
          </Link>
        </div>

        <div className="nav-pt-2 ">
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
           <Link to="/">
           Home
           </Link>
          </div>
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            <Link to={'/properties'}>
            Properties
            </Link>
          </div>
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            Agents
          </div>
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            About Us
          </div>
        </div>

        <div className="nav-pt-3 flex gap-8">
        
          <button className="signup transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">
            <Link to="/LogIn">
            LogIn
            </Link>
          </button>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
