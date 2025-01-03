/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorButton: '#26EEEF',
        colorTextButton: '#1A1756',
      }
    },
  },
  plugins: [],
}

