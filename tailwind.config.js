/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx}"
  ],
  theme: {
    colors: {
      primary: {
        main: '#000461',
      },
      secondary: {
        main: '#727CF5',
        dark: '#A6ADFF85'
      },
      success: {
        main: '#0ACF97',
        dark: '#09ba88',
        contrastText: '#FFF'
      },
      danger: {
        main: '#FA5C7C',
      },
      dark: {
        main: '#6C757D',
      },
      light: {
        main: '#F9FAFD',
      },
      shadow: {
        main: 'rgba(0,0,0,0.15)'
      },
      gray: {
        dark: '#000000A6',
        main: '#B3B3B3'
      }
    },
    extend: {
      backgroundImage: {
        'hero': 'url("./assets/background.png")',
      },
      boxShadow: {
        'normal': '0px 1px 10px',
        'normal-focused': '0px 1px 30px'
      }
    },
  },
  plugins: [],
}
