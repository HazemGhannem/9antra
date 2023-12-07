/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
    },
    borderWidth: {
      DEFAULT: '2px',
      '0': '0',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '200':'200px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'red': '#DB2222',
      'orange': '#C11F1F',
      'pink': '#db2222',
      'green':{
        100:'#4AA80E',
        200:'#6EE22A',
        300:'#4aa80e',
      },
      'black': {
        100: '#303030',
        200: '#242424',
        300: '#2D2D2D',
      },
      // ...
    },
    extend: {
      height: {
        '128': '32rem',
        '126': '30rem',
      },
      fontFamily:{
        Lobster:["Lobster"]
      },
      space: {
        '5px': '5px',
        '22rem':'22rem'
      }
    },
  },
  plugins: [],
}