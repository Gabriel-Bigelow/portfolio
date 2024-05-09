/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '1px',
      md: '900px',
      lg: '1400px',
      xl: '2000px',
    },
    extend: {
      colors: {
        blue: "hsla(217, 60%, 60%)",
        gold: "#FFBF00",
        green: "rgb(0, 255, 0)",
        satblue: "hsla(200, 100%, 60%)",
        white: "white",
      },
      fontFamily: {
        bai: ['Bai Jamjuree', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        lemonMilk: ["LemonMilk", 'sans-serif']
      },
      boxShadow: {
        small: '2px 3px 10px rgb(0,0,0,0.25)',
        smaller: '0 0 5px rgb(0,0,0,0.2)',
        inside: 'inset 0 0 15px rgb(0,0,0,0.15)',
        hot: '0px 0px 10px rgba(255, 255, 255, 0.25)',
        cool: '0px 0px 2rem hsla(217, 60%, 60%, 0.25)',
        "cool-aura": '0px 0px 3rem hsla(217, 60%, 60%, 0.25)'
      },
    },
  },
  plugins: [],
}

