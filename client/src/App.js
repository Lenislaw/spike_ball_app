import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/layout/Nav/Nav";
import SpikeBallCounter from "./Components/SpikeballCounter/SpikeBallCounter";
import DarkModeToggle from "./Components/DarkModeToggle/DarkModeToggle.js";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefDark) {
      return true;
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  }

  return (
    <Provider store={store}>
      <div className={darkMode ? "App dark-mode" : "App light-mode"}>
        {/* <Nav /> */}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <SpikeBallCounter darkMode={darkMode} />
      </div>
    </Provider>
  );
}

export default App;
