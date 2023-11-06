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
        whitish: "#FAFAFA"
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
