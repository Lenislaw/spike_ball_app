import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-image">
          <img src="./imgs/spike_ball_logo.png" alt="SpikeBall Logo" />
        </div>
      </div>
      <div className="navbar-nav">
        <ul>
          <li>What's SpikeBall is?</li>
          <li>Rules</li>
          <li>Spikeball counter</li>
          <li>About App</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
