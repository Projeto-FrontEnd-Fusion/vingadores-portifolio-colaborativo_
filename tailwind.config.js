/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fusion: ["Helvetica", "Arial", "sans-serif"],
      },
      screens: {
        'mobile-nav': '840px',
      },
    },
  },
  plugins: [],
};
