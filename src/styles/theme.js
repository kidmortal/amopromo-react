import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#E1E8ED",
        minHeight: "100%",
      },
    },
  },
  fonts: {
    heading: "Roboto, sans-serif;",
    body: "Roboto, sans-serif;",
  },
});
