import fs from "fs";
import getPalette from "tailwindcss-palette-generator";
const theme = JSON.parse(fs.readFileSync("theme.json", "utf8"));

const palette = getPalette([
  {
    color: theme.primary || "#264653",
    name: "primary",
  },
  {
    color: theme.secondary || "#264653",
    name: "secondary",
  },
  {
    color: theme.tertiary || "#264653",
    name: "tertiary",
  },
  {
    color: theme.dark || "#264653",
    name: "dark",
  },
  {
    color: theme.green,
    name: "green",
  },
  {
    color: theme.yellow,
    name: "yellow",
  },
  {
    color: theme.red || "#FF2424",
    name: "red",
  },
]);

// templates\dashboard\model1\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...palette,
        title: theme.title,
        foreground: theme.foreground,
        muted: theme.muted,

        background: theme.background,

        border: theme.border,
        white: theme.white,
      },
      borderRadius: {
        lg: `14px`,
        md: `8px`,
        sm: "6px",
        xs: "4px",
      },
      height: {
        "main-page": "calc(100vh - 80px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
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
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
