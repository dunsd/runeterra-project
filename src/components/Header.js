import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      
        <ul>
          <li className="homeLink">
            <Link to="/">
              <h1>Runeterra Hub</h1>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      
      
    </div>
  );
};

export default Header;
