import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg">
        <div>
          <div className="nav-logo">
            <NavLink to="/">
              <strong>FOOD</strong>
              <span>HUB</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
