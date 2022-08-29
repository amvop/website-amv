import { extendTheme } from "@chakra-ui/react";
import { colors } from "./global-theme";

const theme = extendTheme({
  fonts: {
    // heading: "Inter",
    body: "Poppins",
  },

  colors: colors,
});

export default theme;
