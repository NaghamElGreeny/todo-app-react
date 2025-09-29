/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
 extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        border: "var(--color-border)",
      },
    },  },
  plugins: [],
};
