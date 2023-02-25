/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#505a7e",
        pink: "#ff675c",
        cyancolor: "#06D8A7",
        yellowcolor: "#ffd93a",
      },
      fontFamily: {
        Iner: "Inter",
        Calistoga: "Calistoga",
        SpaceGrotesk: "Space Grotesk",
      },
    },
  },
  plugins: [],
};
