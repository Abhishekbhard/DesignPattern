import React, { useState } from "react";
import List from "./List";
import Toggle from "./Toggle";
import { themes } from "./theme";
import "./style.css";

export const ThemeContext = React.createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <>
          <Toggle />
          <List />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
