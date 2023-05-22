/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(212, 45%, 89%)",
        infoText: "hsl(220, 15%, 55%)",
        titleText: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
