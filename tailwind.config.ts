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
        "navy-blue": "var(--navy-blue)",
        "champagne-gold": "var(--champagne-gold)",
        "deep-navy": "var(--deep-navy)",
        "warm-ivory": "var(--warm-ivory)",
        "pure-white": "var(--pure-white)",
        "charcoal": "var(--charcoal)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        wider: "0.16em",
        wide: "0.12em",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
      },
    },
  },
  plugins: [],
};

export default config;
