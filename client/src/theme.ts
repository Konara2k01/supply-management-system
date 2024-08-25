import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "320px",
    sm: "480px",
    md: "768px",
    lg: "1024.1px",
    xl: "1440px",
  },
});

export default theme;
