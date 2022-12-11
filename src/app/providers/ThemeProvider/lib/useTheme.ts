import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme, toggleTheme };
}
