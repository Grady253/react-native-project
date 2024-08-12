/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#474448",
        secondary: "#2D232E",
        text: "#E0DDCF",
      },
    },
  },
  plugins: [],
};
