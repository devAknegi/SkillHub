/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}","./index.html"],
  theme: {
    extend: {
      colors:{
        bgdark:"#1c1c1c",
        // richtextdark:"#FF6B00",
        richtextdark:"#3b82f6",
        textdark:"#D1D1D1",
        border:"#413f45",
        hover:"#3b83f65f",
        overlay:"#ff6a002f"
      }
    },
  },
  plugins: [],
}