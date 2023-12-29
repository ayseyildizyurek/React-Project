import React from "react";
import { useShoppingCard } from "../Contexts/ShoppingCardContext";
import styles from "./ShoppingCard.module.css";
import ShoppingCardItem from "../ShoppingCardItem/ShoppingCardItem";
import { FaWindowClose } from "react-icons/fa";

const ShoppingCard = () => {
  const { cardItems, closeModal, isModalOpen } = useShoppingCard();
  return (
    <div className={`${styles.overlay} ${isModalOpen ? styles.active : ""}`}>
      <div className={styles.modal}>
        <div className={styles["basket-close-button"]}>
          <FaWindowClose onClick={closeModal} />
        </div>
        <h2>Sepetiniz</h2>

        {cardItems.length === 0 ? (
          <p>Sepetinizde ürün bulunmamaktadır.</p>
        ) : (
          <div>
            {cardItems.map((item, index) => (
              <ShoppingCardItem
                key={item.id}
                item={item}
                isLastItem={index === cardItems.length - 1 ? true : false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCard;
