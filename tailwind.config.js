/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        "icco-dark": "#2D2D2D",
        "icco-darkest": "#141414",
        "icco-white": {
          100: "rgba(255, 255, 255, 1)",
          90: "rgba(255, 255, 255, 0.9)",
        },
      },
    },
  },
  plugins: [],
};
