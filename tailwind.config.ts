import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  lightMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "425px",
        md: "768px",
        lg: "1024px",
        lgp: "1440px",
        hd: "1920px",
        tv: "2560px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
};
export default config;
