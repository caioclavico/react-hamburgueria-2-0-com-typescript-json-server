import { formAnatomy } from "@chakra-ui/anatomy";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-34px) translateX(-10px)",
};

export const Form = {
  parts: formAnatomy.keys,
  baseStyle: {},
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
          {
            ...activeLabelStyles,
          },
        label: {
          top: "10px",
          left: 0,
          zIndex: 2,
          position: "absolute",
          backgroundColor: "white",
          mx: 3,
          px: 1,
          my: 2,
        },
      },
    },
  },
  defaultProps: {
    variant: "floating",
  },
};
