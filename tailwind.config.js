/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0b112c",
        deepCard: "#10182f",
        neonBlue: "#00d0ff",
        softText: "#a0aec0",
        white: "#ffffff",
        black: "#000000",
      },
      boxShadow: {
        neon: "0 0 10px #00d0ff",
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
      },
      translate: {
        '80vh': '80vh',  // ✅ Now allows translate-y-[80vh]
        '90vh': '90vh',
        '100vh': '100vh',
      },
    },
  },
  plugins: [],
};
