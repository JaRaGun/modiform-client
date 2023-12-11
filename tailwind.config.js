/** @type {import('tailwindcss').Config} */
import { colors } from "./src/themes/color";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBG: colors.PrimaryBG,
        SecondaryBG: colors.SecondaryBG,
        WhiteBG: colors.WhiteBG,
      },
    },
  },
  plugins: [],
};
