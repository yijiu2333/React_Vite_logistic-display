/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#36CFC9',
        success: '#52C41A',
        warning: '#FAAD14',
        danger: '#FF4D4F',
        info: '#8C8C8C',
        light: '#F5F7FA',
        dark: '#1D2129',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}