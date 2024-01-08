import React, { useState } from "react";
import "./Navbar.css";
import Navlogo from "../../Images/NavLogo.png";
import { Link } from "react-router-dom";
import LoginSignup from "../LogIn/LoginSignup";
import { RxAvatar } from "react-icons/rx";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

const Navbar = () => {
  const icon = (
    <div className="flex gap-2 items-center">
      <RxAvatar className="text-[20px]" /> Md Taukir
    </div>
  );
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="nav-pt-1">
          <Link to="/">
            <img src={Navlogo} alt="" />
          </Link>
        </div>

        <div className="nav-pt-2 ">
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            <Link to="/">Home</Link>
          </div>
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            <Link to={"/properties"}>Properties</Link>
          </div>
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            <Link to={"/Agents"}>Agents</Link>
          </div>
          <div className="transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 hover:text-red-500 duration-300 ...">
            About Us
          </div>
        </div>

        <div className="nav-pt-3 flex gap-8">
          <Dropdown label={icon} style={{ color: "black" }}>
            <Dropdown.Header>
              <span className="block text-sm text-black">Md Taukir</span>
              <span className="block truncate text-sm font-medium">
                abc@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item icon={HiViewGrid}>
              <Link to="/dashboard">Dashboard</Link>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item icon={HiLogout}>Log out</Dropdown.Item>
          </Dropdown>

          <button className="signup transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">
            <Link to="/LogIn">LogIn</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
