/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        f1: {
          red: '#E10600',
          black: '#000000',
          dark: '#111111',
          grey: '#67676d',
          lightGrey: '#f0f0f0',
          white: '#ffffff',
          hovers: '#15151e',
          mobileMenuBorder: '#f08380',
          offWhite: '#f6f4f0',
          'grey-10': '#f3f3f3',
        },
      },
      fontFamily: {
        titillium: ['TitilliumLight'],
      },
    },
  },
};
