/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D2D2D",
        secondary: "#535353",
        accent: "#FF6B00",
        "accent-dark": "#E65A00",
        "gray-light": "#F9F9F9"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}