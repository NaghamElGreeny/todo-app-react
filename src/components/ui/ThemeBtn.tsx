// components/ThemeButton.tsx
"use client";
import { useEffect, useState } from "react";
import type { Theme } from "../../utils/ThemeManager";
import ThemeManager from "../../utils/ThemeManager";

export default function ThemeButton() {
  const themeManager = new ThemeManager();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = themeManager.getCurrent();
    setTheme(initial);
    themeManager.apply(initial);
  }, []);

  const handleToggle = () => {
    const newTheme = themeManager.toggle(theme);
    setTheme(newTheme);
    themeManager.apply(newTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="cursor-pointer text-xl"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
