/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ffffff: "#fff",
        d5d5b: "#5d5d5b",
        "ebf0f0-soft-onlight": "rgba(235, 240, 240, 0.5)",
        primary: "#000",
        "cfdbd5-outline-onlight": "rgba(207, 219, 213, 0.6)",
        "a52f4-primary": "#7a52f4",
        "without-fill": "rgba(216, 216, 216, 0)",
      },
      spacing: {},
      fontFamily: {
        "heading-h4": "Inter",
        "icons-20": "'Material Icons Outlined'",
      },
      borderRadius: {
        "4xl": "23px",
        sm: "14px",
        lg: "18px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xl: "1.25rem",
      base: "1rem",
      "5xl": "1.5rem",
      "23xl": "2.625rem",
      lg: "1.125rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
