//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: '#050505',
        brandPurple: '#8B5CF6', // Neon purple accent
        brandDark: '#111111', // Cards background
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'], // Updated to Scaltra's exact font
      }
    },
  },
  plugins: [],
}