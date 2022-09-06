/** @type {import('tailwindcss').Config} */


//TailWind custom config.
module.exports= {
  darkMode:'class',
  content:['./Src/**/*.{html,js,jsx}','./Src/*.{html,js,jsx}','./Src/Index.html'],
  theme: {
    extend: {
      colors:{
        'primaryColor':'#d6e6e5'
      }
    },
  },
  plugins: [],
};