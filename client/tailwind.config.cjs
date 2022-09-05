/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#F7F6DC',
        },
        green: {
          100: '#B1D7B4',
          500: '#7FB77E',
          900: '#619560',
        },
        orange: {
          500: '#FFC090',
        },
        blue: {
          900: '#1363DF',
        },
        red: {
          500: '#E64848',
        },
      },
      borderRadius: {
        6: '6px',
        10: '10px',
        20: '20px',
      },
    },
  },
  plugins: [],
}
