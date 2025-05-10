import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "great-vibes": ["Great Vibes", "cursive"],
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "rotate-rainbow": {
          "0%": {
            "--angle": "0deg",
          },
          "100%": {
            "--angle": "360deg",
          },
        },
        "autoplay-progress": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            transform: "rotate(180deg) scale(1.2)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
          },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        "rotate-rainbow": "rotate-rainbow 5s linear infinite",
        "autoplay-progress": "autoplay-progress linear 1",
        "spin-slow": "spin-slow 0.8s ease-in-out",
      },
      // Custom colors can be added here if needed
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
