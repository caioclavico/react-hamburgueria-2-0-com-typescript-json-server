import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../theme";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./Cart/CartContext";
import { ProductsProvider } from "./Products/ProductsContext";

interface AppProviderPros {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderPros) => (
  <AuthProvider>
    <ProductsProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CartProvider>
    </ProductsProvider>
  </AuthProvider>
);
