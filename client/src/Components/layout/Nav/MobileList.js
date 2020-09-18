import React from "react";
import { Link } from "react-router-dom";

const MobileList = ({ onClick }) => {
  return (
    <ul className="list-mobile">
      <Link to="/" className="list-item" onClick={onClick}>
        <li>
          <i className="fas fa-volleyball-ball"></i> About
        </li>
      </Link>
      <Link to="/rules" className="list-item" onClick={onClick}>
        <li>
          <i className="fas fa-book"></i> Rules
        </li>
      </Link>
      <Link to="/spikeball-counter" className="list-item" onClick={onClick}>
        <li>
          <i className="fas fa-calculator"></i> Counter
        </li>
      </Link>
      <Link to="/about-app" className="list-item" onClick={onClick}>
        <li>
          <i className="fas fa-mobile-alt"></i> About App
        </li>
      </Link>
    </ul>
  );
};

export default MobileList;
