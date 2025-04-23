import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header>
      <h1>Mon App de malaaaaade !!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">movie</NavLink>
        <NavLink to="/shows">show</NavLink>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink to="/login">LogIn</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
