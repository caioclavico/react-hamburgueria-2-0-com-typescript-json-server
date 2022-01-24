import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Form } from "./components/Form";

const theme = extendTheme({
  colors: {
    primary: {
      main: "#27AE60",
    },
    secondary: {
      main: "#EB5757",
    },
    gray: {
      0: "#f5f5f5",
      50: "#999999",
      100: "#e0e0e0",
      300: "#828282",
      600: "#333333",
    },
    negative: {
      main: "#e60000",
    },
    warning: {
      main: "#ffcd07",
    },
    success: {
      main: "#168821",
    },
    information: {
      main: "#155BCB",
    },
  },
  textStyles: {
    h1: {
      fontSize: "26px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    headline: {
      fontSize: "16px",
      fontWeight: "regular",
    },
    body: {
      fontSize: "14px",
      fontWeight: "regular",
    },
    "body-600": {
      fontSize: "14px",
      fontWeight: "semibold",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "regular",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
    },
  },
  components: {
    Button,
    Form,
  },
});

export default theme;
