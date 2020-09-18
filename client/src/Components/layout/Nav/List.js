import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <ul className="list">
      <Link to="/" className="list-item">
        <li>
          <i className="fas fa-volleyball-ball"></i> About
        </li>
      </Link>
      <Link to="/rules" className="list-item">
        <li>
          <i className="fas fa-book"></i> Rules
        </li>
      </Link>
      <Link to="/spikeball-counter" className="list-item">
        <li>
          <i className="fas fa-calculator"></i> Counter
        </li>
      </Link>
      <Link to="/about-app" className="list-item">
        <li>
          <i className="fas fa-mobile-alt"></i> About App
        </li>
      </Link>
    </ul>
  );
};

export default List;
