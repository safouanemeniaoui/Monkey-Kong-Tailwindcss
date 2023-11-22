/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primeryColor: "#f5b205",
      },
      fontFamily: {
        RubikMono: ["Rubik Mono One", "monospace"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
        },
      },
      lineHeight: {
        0: "0.7",
        1: "3.3rem",
        2: "6.7rem",
      },
      keyframes: {
        scroll: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 1rem))",
          },
        },
        rotate: {
          from: {
            transform: "perspective(7000px) rotateY(0)",
          },
          to: {
            transform: "perspective(7000px) rotateY(360deg)",
          },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        rotate: "rotate 30s linear infinite",
      },
    },
    fontSize: {
      sm: "0.6rem",
      md: "0.8rem",
      xl: "1.3rem",
      "1xl": "1rem",
      "1.7xl": "1.7rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "11xl": "11rem",
    },
  },
  plugins: [],
};
