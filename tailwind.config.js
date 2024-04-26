/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orang: {
          DEFAULT: "#F8B42E",
        },
        green: {
          DEFAULT: "#8DB511",
          light: "#789D0E",
          dark: "#4B6A0A",
          extraLight: "#F2FFCD",
          btnText: "#047d48",
          btnBg: "#F3FFF7",
          linear: "#96CB02",
        },
        dark: {
          DEFAULT: "#4F5449",
          light: "#9EA19B",
          dark: "#1E2C33",
          dark2: "#1B270C",
        },
        light: {
          DEFAULT: "#FFFFFF",
          text: "#EBECE9",
          dark: "#B9BCB6",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
      container: {
        center: true,
        padding: 0,
        screens: {
          sm: "90vw",
          xl: "1280px",
        },
      },
      borderRadius: {
        complete: "50%",
      },
    },
  },
  plugins: [],
};
