import type { Config } from "tailwindcss";

const config: Config = {
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
        'sm': '600px',   // Small devices (landscape phones, 576px and up)
        'md': '768px',   // Medium devices (tablets, 768px and up)
        'lg': '1400px',  
       
      },
    },
    extend: {
      width: {
        '500px': '825px',
      },
      colors: {
        light: "#F2F4FF",
        bluee: "#4661E6",
        dark:"#3A4374",
        orangee: "#F49F85",
        pluee: "#AD1FEA",
        sky: "#62BCFA",
        deep: "#373F68",
        whitee: "#F2F4FE",
        stroke: "#979797",
        orange: "#D73737",
        peech: "#F49F85",
        greey: "#647196",
        codee: "#CDD2EE",
        redd: "#E84D70",
        plur: "#A337F6",
        skye:"#28A7ED"
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
};

export default config;
