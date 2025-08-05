/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A36316",
        secondary: "#F6F0E8",
        SectionBG: "#F8F8F8",
        SectionBG2: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
