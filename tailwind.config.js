/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line tells Tailwind to scan all your React components
    "./public/index.html", // Also scan your main HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        // You can add custom fonts here if needed
        inter: ['Inter', 'sans-serif'], // Added Inter font family
      },
    },
  },
  plugins: [],
}