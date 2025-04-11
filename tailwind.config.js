/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00E5FF',
          dark: '#00B8D4',
          light: '#84FFFF'
        },
        dark: {
          DEFAULT: '#0A1929',
          light: '#132F4C',
          lighter: '#173A5E'
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};