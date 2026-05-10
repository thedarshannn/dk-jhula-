/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Stitch Heritage Editorial — Surface Hierarchy ── */
        surface: {
          DEFAULT: "#fff8f1",
          dim: "#e1d9cd",
          bright: "#fff8f1",
          "container-lowest": "#ffffff",
          "container-low": "#fbf2e6",
          container: "#f5ede0",
          "container-high": "#efe7db",
          "container-highest": "#eae1d5",
          variant: "#eae1d5",
          tint: "#695c4e",
        },
        "on-surface": {
          DEFAULT: "#1e1b14",
          variant: "#4c463e",
        },
        "inverse-surface": "#343028",
        "inverse-on-surface": "#f8f0e3",
        outline: {
          DEFAULT: "#7e766d",
          variant: "#cfc5bb",
        },
        primary: {
          DEFAULT: "#000000",
          container: "#231a0f",
          fixed: "#f1e0cd",
          "fixed-dim": "#d4c4b2",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#8f8272",
        },
        secondary: {
          DEFAULT: "#755b00",
          container: "#fed255",
          fixed: "#ffe08e",
          "fixed-dim": "#ecc246",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#735a00",
        },
        /* ── Legacy aliases (safe removal later) ── */
        cream: "#fff8f1",
        "warm-white": "#ffffff",
        "brand-brown": {
          DEFAULT: "#1e1b14",
          dark: "#100C04",
          mid: "#4c463e",
          light: "#7e766d",
        },
        gold: {
          DEFAULT: "#755b00",
          light: "#ecc246",
          pale: "#ffe08e",
          dark: "#584400",
        },
        beige: {
          DEFAULT: "#cfc5bb",
          mid: "#cfc5bb",
          light: "#eae1d5",
        },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Newsreader", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "border-spin": {
          "0%": { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 30s) linear infinite",
        float: "float 5s ease-in-out infinite",
        shine: "shine var(--duration, 14s) infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
