/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ltblue: "#3bcaff",
        ltpink: "#f556f9",
        ltorange: "#ffa555",
        dkblue: "#010112",
        lttorq: "#32d0ff",
      },
    },
  },
  plugins: [],
};
