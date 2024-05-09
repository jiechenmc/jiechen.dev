import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "425px", // phones 
        md: "768px", // tablets
        lg: "1024px", // small laptop
        lgp: "1440px",
        hd: "1920px",
        tv: "2560px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
};
export default config;
