/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Vintage color palette (for Version 1)
        vintage: {
          white: "#FFFFFF",
          black: "#000000",
          gray: {
            light: "#D9D9D9",
            medium: "#BFBFBF",
            dark: "#7F7F7F",
          },
        },
        // Social media colors (for Version 2)
        github: "#333333",
        linkedin: "#0077B5",
      },
      animation: {
        // Custom bounce animation (for Version 2)
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
