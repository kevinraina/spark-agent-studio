
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0B14",
        foreground: "#ffffff",
        primary: "#9B6DFF",
        secondary: "#4DCCFF",
        accent: "#FFD700",
        "gradient-from": "#1A1F2C",
        "gradient-to": "#2D1B4E",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-flow": "gradient-flow 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1A1F2C 0%, #2D1B4E 100%)",
        "accent-gradient": "linear-gradient(225deg, #9B6DFF 0%, #4DCCFF 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
