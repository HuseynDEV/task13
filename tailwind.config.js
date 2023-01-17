/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        'shadow-item':'0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
