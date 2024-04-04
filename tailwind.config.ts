import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
        },
        light: {
          1: '#F2F3F7',
          2: '#FFFFFF',
          3: '#FCFCFC'
        },
        blue: {
          1: '#73AEF7',
          2: '#002D6E',
          3: '#0A3C82'
        },
        sky: {
          1: '#C9DDFF',
          2: '#E4EEFF'
        },
        moss: {
          1: '#415111'
        },
        test: '#0A3C82',
      },
      backgroundImage: {
          hero: "url('/images/hero-background.jpg')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
