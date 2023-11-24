/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:'rgba(70, 66, 66, 0.603)',
        gray:'#8e8ea0',
        grays:'#2a2b32',
        svg:'#ececf1',
        head:'#565869',
        title:'#c5c5d2',
        para:'#8e8ea0',
      },
    },
  },
  plugins: [],
}