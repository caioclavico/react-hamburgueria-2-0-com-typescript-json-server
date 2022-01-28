import {
  Center,
  Flex,
  Icon,
  Image,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { CustomInput } from "../Form/Input";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { ModalCart } from "../Modal/ModalCart";
import { useCart } from "../../contexts/Cart/CartContext";

export const Header = () => {
  const { signOut } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useCart();

  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  return (
    <>
      <ModalCart isOpen={isOpen} onClose={onClose} />
      <Flex
        h="80px"
        alignItems="center"
        paddingX="8"
        paddingY="2"
        justifyContent="space-between"
      >
        <Image src={logo} alt="logo" w="150px" />
        <Flex gap={6} height="60px">
          {isLargerThan580 ? (
            <CustomInput
              label="Digitar pesquisa"
              name="pesquisar"
              icon={FaSearch}
              ml="auto"
            />
          ) : (
            <Center>
              <Icon as={FaSearch} color="gray.300" boxSize={6} />
            </Center>
          )}
          <Center position="relative" as="button" onClick={onOpen}>
            <Icon as={FaShoppingCart} color="gray.300" boxSize={6} />

            <Center
              as="span"
              color="white"
              position="absolute"
              bottom="32px"
              left="15px"
              fontSize="0.8rem"
              fontWeight="900"
              bgColor="primary.main"
              borderRadius="10px"
              zIndex={1}
              paddingX="6px"
              paddingY="2px"
            >
              {cart.length}
            </Center>
          </Center>
          <Center as="button" onClick={signOut}>
            <Icon as={FaSignOutAlt} color="gray.300" boxSize={6} ml="5px" />
          </Center>
        </Flex>
      </Flex>
    </>
  );
};
