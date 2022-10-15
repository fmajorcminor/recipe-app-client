import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Header.css";

function Header() {
  const activeStyle = { color: "white" };
  const navStyle = { color: "grey" };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark header">
      <NavLink
        className="nav-link header"
        navStyle={navStyle}
        activeStyle={activeStyle}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="nav-link"
        navStyle={navStyle}
        activeStyle={activeStyle}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className="nav-link"
        navStyle={navStyle}
        activeStyle={activeStyle}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Header;
