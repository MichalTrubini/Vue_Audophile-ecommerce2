/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brick:"#D87D4A",
        lightBrick:"#FBAF85",
        blackish: "#101010",
        gray: "#F1F1F1",
        whitish: "#FAFAFA",
        borderHeader: "rgba(255, 255, 255, 0.1)",
      },
      fontSize: {
        mobil: "15px"
      },
      screens: {
        mdd: "821px",
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
