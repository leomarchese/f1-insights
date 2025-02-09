/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Prefixamos com "f1" para facilitar o uso das classes (ex.: bg-f1-red)
        f1: {
          red: '#E10600', // Vermelho principal (inspirado na identidade da F1)
          black: '#000000',
          dark: '#111111',
          grey: '#67676d',
          lightGrey: '#f0f0f0',
          white: '#ffffff',
          hovers: '#15151e',
          mobileMenuBorder: '#f08380',
        },
      },
    },
  },
};
