/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          principal: "#201F24",
          secondary: "#F8F5F0",
          red: "#D60000",
          green: "#287C77"
        },
      },
    },
  },
  plugins: [],
}