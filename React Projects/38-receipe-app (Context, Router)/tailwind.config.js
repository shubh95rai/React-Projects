/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ["JetBrains Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#cbd5e1",
        secondary: "#334155",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require("daisyui")],
};
