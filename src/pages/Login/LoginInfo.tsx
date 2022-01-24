import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from "../../assets/logo.svg";

export const LoginInfo = () => {
  return (
    <Grid>
      <Image src={logo} alt="logo" />
      <Box
        display="flex"
        flexDirection="row"
        padding="14px"
        bgColor="#FFFFFF"
        border="1px solid #E0E0E0"
        borderRadius="5px"
        mt="30px"
      >
        <Center bgColor="#27ae6019" w="60px" h="60px" borderRadius="5px">
          <MdOutlineShoppingBag color="#219653" />
        </Center>
        <Text textStyle="body" color="gray.300" ml="19px">
          A vida é como um sanduíche, é preciso
          <br /> recheá-la com os <b>melhores</b>
          <br /> ingredientes.
        </Text>
      </Box>
    </Grid>
  );
};
