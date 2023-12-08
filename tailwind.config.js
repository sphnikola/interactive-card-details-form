/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        Red: "hsl(0, 100%, 66%)",
        White: "hsl(0, 0%, 100%)",
        "Light-grayish-violet": "hsl(270, 3%, 87%)",
        "Dark-grayish-violet": "hsl(279, 6%, 55%)",
        "Very-dark-violet": "hsl(278, 68%, 11%)",
      },
      backgroundImage: {
        "bg-main-mobile": "url('/src/assets/images/bg-main-mobile.png')",
        "bg-main-desktop": "url('/src/assets/images/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
