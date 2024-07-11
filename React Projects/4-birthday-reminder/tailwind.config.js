/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ["JetBrains Mono", "monospace"],
        inter: ["Inter","sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
