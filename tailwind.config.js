/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: '#050505',
        brandPurple: '#8B5CF6', // Neon purple accent
        brandDark: '#111111', // Cards background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional font
      }
    },
  },
  plugins: [],
}