import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <nav >
      <span>
       <h1> Peppa Pig's Incredible Non Official Web Page</h1>
        </span>
      <div className="header">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;