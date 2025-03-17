import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            SHOP{" "}
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none" }} to="/men">
            MEN{" "}
          </Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none" }} to="/women">
            WOMEN
          </Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            
            KIDS
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="Cart" className="cart-icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
