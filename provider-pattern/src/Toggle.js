import React, { useContext } from "react";
import useThemeContext from "./Hooks/useThemeContext";

const Toggle = () => {
  const theme = useThemeContext();
  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  );
};
export default Toggle;
