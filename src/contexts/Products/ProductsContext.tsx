import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../../services/api";

interface ProductsProvidersProps {
  children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ProductsProviderData {
  products: Product[];
  loadProducts: () => Promise<void>;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProvidersProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "@BurgueKenzie:accessToken"
          )}`,
        },
      });
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ loadProducts, products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
