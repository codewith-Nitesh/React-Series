import React from "react";
import { useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [btnname, setBtnName] = useState(true);
  return (
    <>
      <div
        className="navbar"
        style={{ backgroundColor: btnname ? "white" : "gray" }}
      >
        {/* leftPart */}
        <div className="logo">
          <h1>Ajio</h1>
        </div>
        {/* rightPart */}
        <div className="menu_item">
          <ul className="items">
            <li>
              <NavLink to="/men">MEN</NavLink>
            </li>
            <li>
              <NavLink to="/women">WOMEN</NavLink>
            </li>
            <li> 
              <NavLink to="/kid">KIDS</NavLink>
            </li>
            <li>
              <NavLink to="/cart">CART</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/grocery">GROCERY</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button
            style={{ padding: "0.5rem", fontSize: "1rem", fontWeight: "bold" }}
            onClick={() => setBtnName(!btnname)}
          >
            {btnname ? "Dark" : "light"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
