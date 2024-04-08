import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="pet-adoption-navbar">
      <img src="https://res.cloudinary.com/dyrv985gb/image/upload/v1712542121/images/pet-adoption-logo.png" alt="pet-adoption-logo" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/adopt">Adopt a Pet</NavLink>
        </li>
        <li>
          <NavLink to="/rehome">Rehome a Pet</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login/Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
