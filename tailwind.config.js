/** @type {import('tailwindcss').Config}  */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1080px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          main: withOpacity("--primary-main"),
        },
        background: {
          default: withOpacity("--background-default"),
          paper: withOpacity("--background-paper"),
        },
        text: {
          main: withOpacity("--text-main"),
        },
      },
    },
  },
  plugins: [],
};
