import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import formatValue from "../../utils/formatvalue";

interface CardProps {
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Card = ({ name, category, price, img }: CardProps) => {
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
          <Button>Adicionar</Button>
        </Box>
      </Flex>
    </Box>
  );
};
