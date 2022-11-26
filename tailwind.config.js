/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  // ],
  important: true,
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
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
