import { Link } from "react-router-dom";
import "./Nav.css";
import React, { useState } from "react";
// import Hamburger from "../Menu/Hamburger";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <Link to="/">
        <h1 className="site-title">
          The ReAL Edgemere <br /> Community Land Trust
        </h1>
      </Link>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-sec-items ${isOpen ? "open" : ""}`}>
        <Link to="/mission">
          <Link to="mission">
            <p className="nav-item">Mission</p>
          </Link>
        </Link>
        <Link to="/about">
          <p className="nav-item">About</p>
        </Link>
        <Link to="/events">
          <p className="nav-item">Events</p>
        </Link>
        <Link to="/contact">
          <p className="nav-item">Contact</p>
        </Link>
        <Link to="/faq">
          <p className="nav-item">FAQ</p>
        </Link>
      </div>

      {/* <div className="hamburger">
        <Hamburger />
      </div> */}
    </nav>
  );
}

export default Nav;
