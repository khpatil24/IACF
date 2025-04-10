/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5E1A',
          dark: '#1E3D14' // Adding dark variant
        },
        secondary: {
          DEFAULT: '#FFC72C',
          dark: '#E6B325' // Adding dark variant
        }
      },
    },
  },
  plugins: [],
}