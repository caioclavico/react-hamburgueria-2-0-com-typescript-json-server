import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ModalCart } from "../../components/Modal/ModalCart";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/Products/ProductsContext";

export const Dashboard = () => {
  const { accessToken } = useAuth();
  const { products, loadProducts } = useProducts();
  const { isOpen, onClose } = useDisclosure();

  useEffect(() => {
    loadProducts(accessToken);
  });

  return (
    <Box>
      <Header />
      <ModalCart isOpen={isOpen} onClose={onClose} />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={10}
        paddingX="8"
        mt="8"
        justifyItems="center"
      >
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
          />
        ))}
      </Grid>
    </Box>
  );
};
