module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pale: "hsl(225, 100%, 94%)",
      bright: "hsl(245, 75%, 52%)",
      veryPale: "hsl(225, 100%, 98%)",
      desaturated: "hsl(224, 23%, 55%)",
      dark: "hsl(223, 47%, 23%)",
    },
    extend: {
      fontFamily: {
        Red: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
