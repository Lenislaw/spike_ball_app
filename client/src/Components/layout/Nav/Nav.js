import React, { useState } from "react";
import MobileList from "./MobileList";
import List from "./List";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  const onClick = () => {
    setMobile(!mobile);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          className="navbar-logo-image"
          src="./imgs/spike_ball_logo.png"
          alt="SpikeBall Logo"
        />
      </div>
      <div className="navbar-nav-mobile black" onClick={onClick}>
        {!mobile ? (
          <i className="fas fa-bars"> </i>
        ) : (
          <i className="far fa-times-circle"></i>
        )}
      </div>

      <div
        className={
          mobile ? "navbar-nav-mobile-side slide" : "navbar-nav-mobile-side"
        }
      >
        <MobileList onClick={onClick} />
      </div>

      <div className="navbar-nav">
        <List />
      </div>
    </nav>
  );
};

export default Nav;
