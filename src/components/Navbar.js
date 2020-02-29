import React from "react";
import { NavLink } from "react-router-dom";

function onClick() {
  document.getElementById("searchBar").classList.toggle("show");
}

const Navbar = () => (
  <div className="nav">
    <nav className="navbar navbar-expand-lg">
      <div>
        {/* <a className="brand" href="Index.js"> */}
        <div className="nav-logo">
          <NavLink to="/">
            <strong>FOOD</strong>
            <span>HUB</span>
          </NavLink>
        </div>
        {/* </a> */}
      </div>

      <div className="search-container">
        <form
          id="searchBar"
          class="form-inline"
          action="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <svg
          class="nav-search"
          onClick={onClick}
          width="1.5em"
          height="1.5em"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </nav>
  </div>
);

export default Navbar;
