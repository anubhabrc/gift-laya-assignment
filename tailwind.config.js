/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shoppingCartGreen: "#0C831F",
        primaryAccentColor: "#EF4372",
      },
    },
  },
  plugins: [],
};
