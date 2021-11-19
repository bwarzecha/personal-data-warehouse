const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#3d68ff",
        secondary: "#1947ee",
      },
      fontFamily: {
        karla: ["Karla"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
