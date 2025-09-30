import Cookies from "js-cookie";

export type Theme = "light" | "dark";

export default class ThemeManager {
  private key = "theme";

  private isValid(value: unknown): value is Theme {
    return value === "light" || value === "dark";
  }

  getSystemPreference(): Theme {
    if (typeof window === "undefined" || !window.matchMedia) return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  getCurrent(): Theme {
    const saved = Cookies.get(this.key);
    if (this.isValid(saved)) return saved;
    return this.getSystemPreference();
  }

  apply(theme: Theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    Cookies.set(this.key, theme, { expires: 365, sameSite: "Lax" });
  }

  toggle(current: Theme): Theme {
    return current === "light" ? "dark" : "light";
  }
}
