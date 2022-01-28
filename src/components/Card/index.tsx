import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/Cart/CartContext";
import formatValue from "../../utils/formatvalue";

interface CardProps {
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Card = ({ name, category, price, img }: CardProps) => {
  const { accessToken, user } = useAuth();
  const { cart, addProduct } = useCart();
  const toast = useToast();

  const newProduct = {
    name,
    category,
    price,
    img,
    userId: user.id,
    quantity: 1,
  };

  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "primary.main" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      border="2px solid"
      borderColor="gray.100"
      borderRadius="5px"
      width="300px"
    >
      <Center bgColor="gray.0">
        <Image src={img} />
      </Center>
      <Flex alignItems="flex-start" flexDirection="column" gap="2" padding="7">
        <Text as="h1" textStyle="h3">
          {name}
        </Text>
        <Text textStyle="caption" color="gray.300">
          {category}
        </Text>
        <Text textStyle="body" color="primary.main" fontWeight="600">
          {formatValue(price)}
        </Text>
        <Box>
          <Button
            onClick={() => {
              if (!cart.find((product) => product.name === name)) {
                addProduct(newProduct, accessToken).then((_) => {
                  toast({
                    title: "Item adicionado ao seu carrinho!",
                    description: "Continue comprando!!",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                });
              } else {
                toast({
                  title: "Este item já está no seu carrinho",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}
          >
            Adicionar
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
