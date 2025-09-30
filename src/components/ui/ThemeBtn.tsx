import { useTheme } from "../../hooks/useTheme";

export default function ThemeButton() {
    const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="cursor-pointer text-xl"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
