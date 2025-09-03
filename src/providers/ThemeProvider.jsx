import { ThemeContext, themes } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const themeToggle = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
