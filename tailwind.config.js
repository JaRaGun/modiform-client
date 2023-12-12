import withMT from "@material-tailwind/react/utils/withMT";
import { colors } from "./src/themes/index";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
});
