import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
  floating?: boolean;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  default: "gray.100",
  error: "negative.main",
  success: "success.main",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon: Icon, error = null, floating, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
    if (value.length > 1 && !error) {
      return setVariation("success");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup flexDirection="column">
        <Input
          id={name}
          name={name}
          placeholder={!!floating ? " " : label}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          borderColor={inputVariation[variation]}
          _hover={{
            borderColor: `${inputVariation[variation]}`,
          }}
          border="2px solid"
          _focus={
            variation === "default"
              ? {
                  borderColor: "gray.600",
                  _placeholder: {
                    color: "transparent",
                  },
                }
              : {
                  _placeholder: {
                    color: "transparent",
                  },
                }
          }
          h="60px"
          ref={ref}
          {...rest}
        />
        {Icon && (
          <InputRightElement
            bgColor="primary.main"
            color="white"
            borderRadius="8px"
            mt="2.5"
            mr="2.5"
            w="53px"
            h="40px"
          >
            <Icon />
          </InputRightElement>
        )}
        {!!floating && <FormLabel color="gray.300">{label}</FormLabel>}
        {!!error && (
          <FormErrorMessage color="negative.main">
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const CustomInput = forwardRef(InputBase);
