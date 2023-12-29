import { createContext, useState, useContext } from "react";
const ShoppingCardContext = createContext();

export const useShoppingCard = () => {
  return useContext(ShoppingCardContext);
};
export const ShoppingCardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCard = (product) => {
    const existingItemIndex = cardItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCard = [...cardItems];
      updatedCard[existingItemIndex].quantity += 1;
      setCardItems(updatedCard);
    } else {
      const updatedCard = [...cardItems, { ...product, quantity: 1 }];
      setCardItems(updatedCard);
    }
  };

  const removeFromCard = (productId) => {
    const updatedCard = cardItems.filter((item) => item.id !== productId);
    setCardItems(updatedCard);
  };

  const clearCard = () => {
    setCardItems([]);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cardItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCardItems(updatedCart);
  };

  const removeAllItems = () => {
    setCardItems([]);
  };
  return (
    <ShoppingCardContext.Provider
      value={{
        cardItems,
        addToCard,
        removeFromCard,
        clearCard,
        isModalOpen,
        openModal,
        closeModal,
        updateQuantity,
        removeAllItems,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
