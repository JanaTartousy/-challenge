import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hide the Navbar on the LoginPage
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="nav-container">
      <h1>Welcome to the Photographic Gallery</h1>
      <nav style={{ textAlign: "end", marginTop: "20px" }}>
        <Link
          to="/"
          style={{ padding: "10px", color: "white", fontSize: "20px" }}
        >
          Home
        </Link>
        <Link
          to="/profile"
          style={{ padding: "10px", color: "white", fontSize: "20px" }}
        >
          Profile
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
