/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jetBrains: ["JetBrains Mono", "monospace"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: 40,
          md: 80,
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
