import React from "react";
import { render } from "react-dom";

import DogImages from "./compose/DogImages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  );
}

export default App;
