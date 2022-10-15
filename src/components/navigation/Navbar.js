import React, { useState } from "react";
import "../navigation/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggle");
  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    // ToggleIcon

    toggleIcon === "nav-toggle"
      ? setToggleIcon("nav-toggle toggle")
      : setToggleIcon("nav-toggle");
  };

  return (
    <div>
      <nav className="nav">
        <a href="#brand" className="nav-brand">
          Haddis
        </a>
        <ul className={active}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#porfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
