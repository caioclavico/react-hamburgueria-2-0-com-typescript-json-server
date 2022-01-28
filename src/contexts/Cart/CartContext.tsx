import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
  userId: string;
}

interface CartProviderData {
  cart: Product[];
  loadCart: (userId: string, accessToken: string) => Promise<void>;
  addProduct: (data: Omit<Product, "id">, accessToken: string) => Promise<void>;
  removeProduct: (productId: number, accessToken: string) => Promise<void>;
  removeAll: () => Promise<void>;
  addQuantityProduct: (
    quantity: number,
    productId: number,
    userId: string,
    accessToken: string
  ) => Promise<void>;
  subQuantityProduct: (
    quantity: number,
    productId: number,
    userId: string,
    accessToken: string
  ) => Promise<void>;
}
const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an ProductProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const loadCart = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/cart?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCart(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addProduct = useCallback(
    async (data: Omit<Product, "id">, accessToken: string) => {
      api
        .post("/cart", data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response: AxiosResponse<Product>) => {
          setCart((oldCart) => [...oldCart, response.data]);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const removeProduct = useCallback(
    async (productId: number, accessToken: string) => {
      await api
        .delete(`/cart/${productId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          const filteredCart = cart.filter(
            (product) => product.id !== productId
          );
          setCart(filteredCart);
        })
        .catch((err) => console.log(err));
    },
    [cart]
  );

  const removeAll = useCallback(async () => {
    cart.forEach((product) => {
      api
        .delete(`/cart/${product.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "@BurgueKenzie:accessToken"
            )}`,
          },
        })
        .then((_) => {
          setCart([]);
        })
        .catch((err) => console.log(err));
    });
  }, [cart]);

  const addQuantityProduct = useCallback(
    async (
      quantity: number,
      productId: number,
      userId: string,
      accessToken: string
    ) => {
      await api
        .patch(
          `/cart/${productId}`,
          { quantity: quantity + 1, userId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((_) => {
          loadCart(userId, accessToken);
        })
        .catch((err) => console.log(err));
    },
    [loadCart]
  );

  const subQuantityProduct = useCallback(
    async (
      quantity: number,
      productId: number,
      userId: string,
      accessToken: string
    ) => {
      if (quantity > 1) {
        await api
          .patch(
            `/cart/${productId}`,
            { quantity: quantity - 1, userId },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((_) => {
            loadCart(userId, accessToken);
          })
          .catch((err) => console.log(err));
      } else {
        removeProduct(productId, accessToken);
      }
    },
    [loadCart, removeProduct]
  );

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cart,
        loadCart,
        removeProduct,
        removeAll,
        addQuantityProduct,
        subQuantityProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
