import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#080D16",
          surface: "#0F1724",
          surfaceSub: "#162234",
          surfaceElevated: "#1C2A40",
          text: "#F8FAFC",
          muted: "#A8B3C2",
          dim: "#64748B",
          blue: "#2563EB",
          cyan: "#06B6D4",
          border: "rgba(255, 255, 255, 0.10)",
          borderHover: "rgba(255, 255, 255, 0.20)",
          borderActive: "rgba(6, 182, 212, 0.40)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)",
        "brand-gradient-subtle": "linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, rgba(8, 13, 22, 0) 70%)",
        "radial-glow-cyan": "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.12) 0%, rgba(8, 13, 22, 0) 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
