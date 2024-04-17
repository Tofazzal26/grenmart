/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Noto: ["Noto Sans JP", "sans-serif"],
      Roboto: ["Roboto Slab", "serif"],
      Source3: ["Source Sans 3", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
