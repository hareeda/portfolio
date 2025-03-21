import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="#/">Home</Link></li>
        <li><Link to="#/about">About</Link></li>
        <li><Link to="#/projects">Projects</Link></li>
        <li><Link to="#/experience">Experience</Link></li>
        <li><Link to="#/education">Education</Link></li>
        <li><Link to="#/contact">Contact</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
