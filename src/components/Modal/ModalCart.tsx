import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaExclamation, FaTimes } from "react-icons/fa";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCart = ({ isOpen, onClose }: ModalSuccessProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="white" color="gray.800" borderRadius="5px">
      <ModalHeader display="flex" bgColor="primary.main" borderTopRadius="5px">
        <Text fontWeight="bold" ml="2" color="white">
          Carrinho de compras
        </Text>
        <Center
          onClick={onClose}
          as="button"
          ml="auto"
          w="32px"
          h="32px"
          bg="transparent"
          fontSize="lg"
          borderRadius="md"
          color="white"
        >
          <FaTimes />
        </Center>
      </ModalHeader>

      <ModalBody textAlign="center">
        <Text textStyle="h3">Sua sacola esta vazia</Text>
      </ModalBody>

      <ModalFooter flexDirection="column">
        <Text textStyle="caption" align="center" mt="4">
          Adicione itens
        </Text>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
