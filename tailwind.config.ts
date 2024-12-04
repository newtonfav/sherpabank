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
          "10": "#444444",
          "20": "#888888",
          "30": "#ffca05",
          "40": "#ffb201",
          "50": "#F1F1F1",
          "100": "#F3F3F3",
          "200": "#FFFFFF",
          "300": "#155EEF",
          "400": "#eeeeee",
          "500": "#7dd16d",
          "600": "#45b782",
          "700": "#fc525e",
          "800": "#e62d5a",
        },
      },
      screens: {
        desktop: {
          max: "1200px",
        },
        tabletLandscape: {
          max: "980px",
        },
        tabletPortrait: {
          max: "820px",
        },
        phone: {
          max: "620px",
        },
        smallPhone: {
          max: "460px",
        },
        smallerPhone: {
          max: "380px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
