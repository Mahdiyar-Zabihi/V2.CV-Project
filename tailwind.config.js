/** @type {import('tailwindcss').Config} */


//TailWind custom config.
module.exports= {
  darkMode:'class',
  content:['./Src/**/*.{html,js,jsx}','./Src/*.{html,js,jsx}','./Src/Index.html'],
  theme:{
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
            'CustomInset':'inset 0 0 6px #c3d6d5',
          },
        animation:
          {
            'ShowOnTop':'ShowOnTop 0.6s ease-out',
            'ShowOnBottom':'ShowOnBottom 0.6s ease-out',
            'ShowOnRight':'ShowOnRight 0.6s ease-out',
            'ShowOnLeft':'ShowOnLeft 0.6s ease-out',
          },
        keyframes:
          {
            'ShowOnTop':{'0%':{'opacity':'0','transform':'translateY(-30%)',},'100%':{'opacity':'1',}},
            'ShowOnBottom':{'0%':{'opacity':'0','transform':'translateY(30%)',},'100%':{'opacity':'1',}},
            'ShowOnRight':{'0%':{'opacity':'0','transform':'translateX(30%)',},'100%':{'opacity':'1',}},
            'ShowOnLeft':{'0%':{'opacity':'0','transform':'translateX(-30%)',},'100%':{'opacity':'1',},},
          },
      },
  },
  plugins:[],
};