import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import MobileList from "./MobileList";
import List from "./List";
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";

const Nav = ({ darkMode, setDarkMode, gameBegun }) => {
  const [mobile, setMobile] = useState(false);

  const onClick = () => {
    setMobile(!mobile);
  };
  return gameBegun ? (
    <Fragment></Fragment>
  ) : (
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
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
};
const mapStateToProps = (state) => ({
  gameBegun: state.gameSettings.gameBegun,
});

export default connect(mapStateToProps, {})(Nav);
