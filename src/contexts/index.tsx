import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../theme";
import { AuthProvider } from "./AuthContext";

interface AppProviderPros {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderPros) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);
