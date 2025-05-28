/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors
        darkBlue: "#0b112c",
        deepCard: "#10182f",
        neonBlue: "#00d0ff",
        softText: "#a0aec0",
        // Override default colors
        white: "#ffffff",
        black: "#000000",
      },
      boxShadow: {
        neon: "0 0 10px #00d0ff",
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};

