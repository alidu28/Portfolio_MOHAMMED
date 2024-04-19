/* eslint-disable no-unused-vars */
import "./Navbar.css";
import { assets } from "../../assets/asset";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div>
          <h1 className="logo">MOHAMMED</h1>
        </div>

        <div className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <ul className="navlist-item" >
            <Link to="/" className="li">HOME</Link>
            <Link to="/about" className="li">ABOUT ME</Link>
            <Link to="/portfolio" className="li">PORTFOLIO</Link>
            <Link to=".services" className="li">SERVICES</Link>
            <Link to="experience" className="li">EXPERIENCE</Link>
          </ul>
        </div>
        

        <button className="btn contact-btn">CONTACT</button>
        <img src={assets.menubar} alt="" className="menu-bar" onClick={toggleMenu}/>
      </nav>
    </div>
  );
}
export default Navbar;
