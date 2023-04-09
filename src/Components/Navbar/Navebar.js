import React from "react";
import "./Navbar.css";

const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <div className="nav-container">
        <h1>Welcome to the Photographic Gallery</h1>
    <nav style={{ textAlign: "end", marginTop: "20px" }}>
      <Link to="/" style={{ padding: "10px", color: "white", fontSize: "20px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ padding: "10px", color: "white", fontSize: "20px" }}>
        Profile
      </Link>
     
    </nav>
    </div>
  );
};
export default Navbar;
