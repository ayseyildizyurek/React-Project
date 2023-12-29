import React from "react";
import styles from "./ShoppingCardItem.module.css";
import { useShoppingCard } from "../Contexts/ShoppingCardContext";

const ShoppingCardItem = ({ item, isLastItem }) => {
  const { removeFromCard, updateQuantity, cardItems, removeAllItems } =
    useShoppingCard();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCard(item.id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cardItems.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    });
    return totalPrice;
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    cardItems.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
    return totalQuantity;
  };

  const handleConfirmCart = () => {
    removeAllItems();
  };
  return (
    <div className={styles["shopping-card-main-div"]}>
      <div className={styles["shopping-card-item"]}>
        <div className={styles["shopping-card-item-image-div"]}>
          <img
            src={item.thumbnail}
            alt={item.title}
            className={styles["shopping-card-item-image"]}
          />
        </div>
        <div className={styles["shopping-card-item-details"]}>
          <h3>{item.title}</h3>
          <p>Br Fiyat: {item.price} $</p>
          <div className={styles["quantity-container"]}>
            <button onClick={handleDecrease}>-</button>
            <p className={styles["quantity"]}>{item.quantity}</p>
            <button onClick={handleIncrease}>+</button>
          </div>
          <p className={styles["total-price"]}>
            Toplam Fiyat: {item.price * item.quantity} $
          </p>
        </div>
      </div>
      {isLastItem && (
        <div className={styles["shopping-card-item-total"]}>
          <p>
            <b>Toplam Sepet Tutarı</b>
          </p>
          <label>{calculateTotalPrice()} $</label>
          <p>
            <b>Toplam Ürün Adeti</b>
          </p>
          <label>{calculateTotalQuantity()} </label>
          <button
            className={styles["shopping-card-item-total-button"]}
            onClick={handleConfirmCart}
          >
            Sepeti Onayla
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCardItem;
