import React from "react";
import "./App.css";
import SpikeBallCounter from "./Components/SpikeballCounter/SpikeBallCounter";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Spike ball App
        <SpikeBallCounter />
      </div>
    </Provider>
  );
}

export default App;
