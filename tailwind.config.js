/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: {
    themes: ["cupcake", "dark", "cmyk"],
    extend: {
      backgroundImage: {
        'bg-image': "url('/src/assets/images/login.jpg')",
      }
  } },
  plugins: [require("daisyui")],
}

