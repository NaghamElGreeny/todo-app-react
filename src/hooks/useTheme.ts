import { useEffect, useState } from "react";
import ThemeManager, { type Theme } from "../utils/ThemeManager";

const manager = new ThemeManager();

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => manager.getCurrent());

  useEffect(() => {
    manager.apply(theme);
  }, [theme]);

  const toggle = () => setTheme((t) => manager.toggle(t));

  return { theme, setTheme, toggle };
}
