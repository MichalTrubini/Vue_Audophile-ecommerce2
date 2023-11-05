/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow:"#FCB72B",
      },
      fontSize: {
        mobil: "15px"
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
