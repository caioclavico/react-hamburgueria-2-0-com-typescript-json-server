export const Button = {
  baseStyle: {
    fontFamily: "Inter",
    fontWeight: "semibold",
    borderRadius: "8px",
    padding: "0px 20px",
    fontSize: "16px",
    w: "100%",
  },
  sizes: {
    md: {
      height: "40px",
    },
    lg: {
      height: "60px",
    },
  },
  variants: {
    default: {
      border: "2px solid",
      borderColor: "primary.main",
      bg: "primary.main",
      color: "white",
      _hover: {
        bg: "#93D7AF",
        color: "#FFFFFF",
        borderColor: "#93D7AF",
      },
    },
    disable: {
      border: "2px solid",
      borderColor: "gray.100",
      bg: "gray.100",
      color: "gray.300",
      _hover: {
        bg: "gray.300",
        color: "gray.100",
        borderColor: "gray.300",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "default",
  },
};
