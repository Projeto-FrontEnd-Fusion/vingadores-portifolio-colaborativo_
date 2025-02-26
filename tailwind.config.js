/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        fusion: ["Helvetica", "Arial", "sans-serif"],
        presentation: ["Zen Dots", "sans-serif"],
      },
      screens: {
        hb: "840px",
      },
      colors: {
        "fusion-l-blue": "#26EEEF",
        "fusion-l-blue-hover": "#1AB8C8",
        "fusion-l-blue-active": "#1A9B9D",
        "fusion-d-blue": "#1A1756",
        "fusion-purple": "#646DF0",
        "fusion-purple-hover": "#5A5EDB",
        "fusion-purple-active": "#4E52C4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
