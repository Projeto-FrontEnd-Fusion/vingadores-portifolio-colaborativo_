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
        "mobile-nav": "840px",
      },
      colors: {
        "fusion-l-blue": "#26EEEF",
        "fusion-l-blue-hover": "#1AB8C8",
        "fusion-l-blue-active": "#1A9B9D",
        "fusion-d-blue": "#1A1756",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
