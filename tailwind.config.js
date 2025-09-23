/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyellow: "#ffc107",
      },
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
