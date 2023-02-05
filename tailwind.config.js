/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
    screens: {
      'sm': '480px',
      
      'base': '640px',

      'md': '876px',
      
      'xl': '1024px',

      '2xl': '1280px',
      
      '3xl': '1500px',
    },
  },
  plugins: [],
}
