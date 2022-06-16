import React, { useState } from "react";
import List from "./List";
import Toggle from "./Toggle";
import { themes } from "./theme";
import "./style.css";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        <>
          <Toggle />
          <List />
        </>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
