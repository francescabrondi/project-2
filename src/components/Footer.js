import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <NavLink to="/">
        <div className="logo">
          <strong>FOOD</strong> <span>HUB</span>{" "}
        </div>
      </NavLink>

      <div className="socials">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-pinterest"></i>
        <i class="fas fa-envelope"></i>
      </div>
    </div>
  );
}

export default Footer;
