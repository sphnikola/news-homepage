/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "rgb(0,0,26)",
        "light-gray": "rgb(93,95,121)",
        "light-pink": "rgb(241,94,80)",
        "light-brown": "rgb(233,171,83)",
        "dark-white": "rgb(197,198,206)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        md: "640px",
        lg: "960px",
      },
    },
  },
  plugins: [],
};
