import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/layout/Nav/Nav";
import AboutSpike from "./Components/AboutSpike/AboutSpike";
import Rules from "./Components/Rules/Rules";
import SpikeBallCounter from "./Components/SpikeballCounter/SpikeBallCounter";
import AboutApp from "./Components/AboutApp/AboutApp";

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
        <Router>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

          <Switch>
            <Route exact path="/" component={AboutSpike} />
            <Route exact path="/rules" component={Rules} />
            <Route
              exact
              path="/spikeball-counter"
              component={SpikeBallCounter}
              darkMode={darkMode}
            />
            <Route exact path="/about-app" component={AboutApp} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
