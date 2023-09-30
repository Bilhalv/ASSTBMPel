/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        principal: "#e9d985",
        secundaria: "#96ba86",
        accent: "#222e50",
        accent2: "#721832",
        accent3: "#5b595c",
        accent4: "#439a86",
      },
    },
  },
  plugins: [],
};
