import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Mon App de malaaaaade !!</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movie">movie</NavLink>
        <NavLink to="/show">show</NavLink>
        <NavLink to="/login">LogIn</NavLink>
      </nav>
    </header>
  );
}

export default Header;
