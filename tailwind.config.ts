import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "10": "#C9CCCF",
          "20": "#175CEE",
          "30": "#668091",
          "50": "#F1F1F1",
          "100": "#F3F3F3",
          "200": "#FFFFFF",
          "300": "#155EEF",
          "400": "#D1CFFF",
          "500": "#232531",
          "600": "#141525",
          "700": "#32302F",
          "800": "#A9A9A9",
          "900": "#2134BB",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
