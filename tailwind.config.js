/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        primary: "#0b132b",           // Main app background
        secondary: "#141f3c",         // Top bars, slip header etc
        deepCard: "#10182f",          // Deeper card backgrounds
        panel: "#1c2b4a",             // Panels and slips
        darkPanel: "#0f152c",         // Deeper slip body

        // Neon system
        neonBlue: "#00d0ff",          // Your original neon blue
        neonCyan: "#00ffd5",          // Slightly more electric cyan
        neonBorder: "#00c6ff",        // Border cyan pop

        // Soft UI text colors
        softText: "#a0aec0",
        mutedText: "#8895a0",

        // Gradients (for slips / cards)
        gradientStart: "#1c2b4a",
        gradientEnd: "#0b132b",

        // Default text
        white: "#ffffff",
        black: "#000000",

        // Action colors
        danger: "#ff4d4f",
        success: "#00e676",
      },

      boxShadow: {
        neon: "0 0 10px #00d0ff",
        card: "0 4px 12px rgba(0, 0, 0, 0.5)",
      },

      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
      },

      translate: {
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
    },
  },
  plugins: [],
};
