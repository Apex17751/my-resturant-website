module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {},
  },
  fontFamily: {
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // tailwind.config.js

  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  // ...


}
