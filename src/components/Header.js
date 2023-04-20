import React from "react";
import "./css/Main.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <h1>Runeterra Hub</h1>
        <p>
          A place to view your Legends of Runeterra match history and stats.
        </p>
      </div>
      <Link to="/profile">
        Profile
      </Link>
    </div>
  );
};

export default Header;
