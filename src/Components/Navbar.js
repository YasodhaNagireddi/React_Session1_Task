import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIHJG8xEBYFVB5KV_hSLViSYd18jAQUppsnWceR-VZoNFyKPp_KJrMpULEYhBKyCHHeg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIHJG8xEBYFVB5KV_hSLViSYd18jAQUppsnWceR-VZoNFyKPp_KJrMpULEYhBKyCHHeg&usqp=CAU"
            alt="Restaurant-Logo"
            className="img-logo"
          />
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <a href="/">
              <li className="nav-link">Home</li>
            </a>
            <a href="/about">
              <li className="nav-link">About</li>
            </a>
            <a href="/menu">
              <li className="nav-link">Menu</li>
            </a>
            <a href="/services">
              <li className="nav-link">Services</li>
            </a>
            <a href="/contact">
              <li className="nav-link">Contact</li>
            </a>
            {/* <a href="/footer">
              <li className="nav-link">Footer</li>
            </a> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
