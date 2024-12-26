import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js",
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
  plugins: [],
})

