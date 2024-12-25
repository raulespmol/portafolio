import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif']
      },
      colors: {
        primary: '#0097b2'
      }
    },
  },
  plugins: [nextui()],
}

