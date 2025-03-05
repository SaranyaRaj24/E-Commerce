import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";

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
          SHOP {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          MEN {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          WOMEN {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          KIDS {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <button className="login-btn">Login</button>
        <img src={cart_icon} alt="Cart" className="cart-icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
