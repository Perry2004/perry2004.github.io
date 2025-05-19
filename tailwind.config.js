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
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.98)",
            filter: "blur(5px)",
          },
          "60%": {
            opacity: "1",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "float-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.98)",
            filter: "blur(5px)",
          },
          "60%": {
            opacity: "1",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "float-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px) scale(0.98)",
            filter: "blur(5px)",
          },
          "60%": {
            opacity: "1",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "float-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px) scale(0.98)",
            filter: "blur(5px)",
          },
          "60%": {
            opacity: "1",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "float-in-tilt": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) rotate(-2deg) scale(0.98)",
            filter: "blur(5px)",
          },
          "60%": {
            opacity: "1",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) rotate(0) scale(1)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        "rotate-rainbow": "rotate-rainbow 5s linear infinite",
        "autoplay-progress": "autoplay-progress linear 1",
        "spin-slow": "spin-slow 0.8s ease-in-out",
        "fade-in": "fade-in 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float-in-up": "float-in-up 3s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float-in-right":
          "float-in-right 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float-in-left":
          "float-in-left 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float-in-tilt":
          "float-in-tilt 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
