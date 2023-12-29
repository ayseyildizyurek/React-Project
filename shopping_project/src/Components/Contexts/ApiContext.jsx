import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.status === 200) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("There was an error while fetching the products");
      }
    };
    fetchProducts();
  }, []);

  const sharedValuesAndMethods = {
    products,
  };
  return (
    <ApiContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ApiContext.Provider>
  );
};
