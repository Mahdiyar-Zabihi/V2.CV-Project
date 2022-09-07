/** @type {import('tailwindcss').Config} */


//TailWind custom config.
module.exports= {
  darkMode:'class',
  content:['./Src/**/*.{html,js,jsx}','./Src/*.{html,js,jsx}','./Src/Index.html'],
  theme: {
    extend:
      {
        colors:
          {
            'primaryColor':{
              dark:'#198a82',
              main:'#67bcb6',
            },
            'secondaryColor':'#ca9a5f',
          },
        rotate:
          {
            full:'360deg'
          },
        boxShadow:
          {
            'CustomInset':'inset 0 0 6px lighten($color:#0e0d0d7b,$amount:3)'
          },
      },
  },
  plugins: [],
};