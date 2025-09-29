import Cookies from "js-cookie";

export type Theme = "light" | "dark";

export default class ThemeManager {
  private key = "modeLayout";

  getCurrent(): Theme {
    const saved = Cookies.get(this.key) as Theme | undefined;
    return saved ?? "light";
  }

  apply(theme: Theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    Cookies.set(this.key, theme);
  }

  toggle(current: Theme): Theme {
    return current === "light" ? "dark" : "light";
  }
}
