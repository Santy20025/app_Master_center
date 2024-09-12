/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1B266B',
        secundary: {
          DEFAULT: '#a01c1c',
          100: "#FF9001",
          200: "#760404"
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        grey: {
          100: "#CDCDE0"
        },
        customBackground: '#010b1d',
        customButton: '#a01c1c',
        button: '#fff'
      },
      fontFamily:{
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-Extrabold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      }
    },
  },
  plugins: [],
}

