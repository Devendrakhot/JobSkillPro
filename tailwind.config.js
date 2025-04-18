/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#08406e',
          light: '#0a5087',
          dark: '#063154'
        },
        secondary: {
          DEFAULT: '#fb8200',
          light: '#ff9a1a',
          dark: '#e67600'
        }
      }
    },
  },
  plugins: [],
};