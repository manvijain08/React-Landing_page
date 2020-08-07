import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav">
      <div className="header">
        <h1 className="header-title">Company</h1>
        <h2>We specialize in something.</h2>
      </div>
      <ul className="navbar">
        <li className="nav-element">Home</li>
        <li className="nav-element ">Card</li>
        <li className="nav-element ">Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
