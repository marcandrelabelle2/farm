module.exports = {
  purge: [], //remove this line
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: "Roboto",
    },
    extend: {
      colors: {
        blackpure: "#000000",
        black: "#0F0F0F",
        greydark: "#4F4F4F",
        grey: "#888888",
        greylight: "#B0B0B0",
        white: "#F0F0F0",
        whitepure: "#FFFFFF",
        orange: "#D99559",
        yellow: "#F2E394",
        greenlight: "##24A142",
        green: "#1CA63F",
        greendark: "#178733",
      },
      fontSize: {
        default: 18,
        navBar: 22,
        footerTitle: 16,
        footerText: 14,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
