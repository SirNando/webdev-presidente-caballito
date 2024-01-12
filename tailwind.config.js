/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ffb800",
      primary_light: "#ffc81b",
      darkest: "#363434",
      dark: "#737373",
      medium: "#d9d9d9",
      light: "#fafafa",
      white: "#ffffff",
    },
    backgroundColor: {
      primary_light: "#ffc81b",
      primary: "#ffb800",
      darkest: "#363434",
      dark: "#737373",
      medium: "#d9d9d9",
      light: "#fafafa",
    },
    extend: {},
  },
  plugins: [],
};
