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
        background: "#F7F7F7",
        primary: "#091953",
        secondary: "#EBFF00",
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'serif'],
      },
      fontWeight: {
        400: '400',
        700: '700',
      }
    },
  },
  plugins: [],
};
export default config;
