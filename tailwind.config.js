/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Poppins", 'serif'],
        mono: [ "Rubik", 'serif']
      },
      screens:{
        lg: "1200px",
        md: "768px"
      }
    },
  },
  plugins: [],
}

