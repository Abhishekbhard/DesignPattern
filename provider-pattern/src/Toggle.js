import React, { useContext } from "react";
import { ThemeContext } from "./App";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  );
};
export default Toggle;
