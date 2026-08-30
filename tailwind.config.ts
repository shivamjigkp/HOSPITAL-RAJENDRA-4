import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amrita: {
          navy: "#002d62",
          navyDark: "#001e42",
          blue: "#00548e",
          blueLight: "#0275d8",
          teal: "#00828a",
          tealLight: "#e6f4f5",
          orange: "#e87722",
          orangeLight: "#fff3eb",
          slate: "#475569",
          border: "#e2e8f0",
          bgSoft: "#f8fafc",
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#00548e",
          600: "#00477a",
          700: "#003b66",
          800: "#002d62",
          900: "#001e42",
          950: "#001228",
          DEFAULT: "#00548e",
        },
      },
      fontFamily: {
        serif: ["'IBM Plex Serif'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'IBM Plex Serif'", "Georgia", "serif"],
      },
      boxShadow: {
        amrita: "0 4px 20px -2px rgba(0, 45, 98, 0.08)",
        "amrita-lg": "0 12px 35px -5px rgba(0, 45, 98, 0.12)",
        "amrita-hover": "0 20px 40px -10px rgba(0, 84, 142, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
