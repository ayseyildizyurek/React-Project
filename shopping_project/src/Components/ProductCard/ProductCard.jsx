import React from "react";
import styles from "./ProductCard.module.css";
import { useShoppingCard } from "../Contexts/ShoppingCardContext";
import { CiDiscount1 } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const { addToCard } = useShoppingCard();
  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : null;
  const discountText = product.discountPercentage
    ? `${product.discountPercentage}% indirim`
    : null;
  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={styles["card-content"]}>
        <div className={styles["card-title"]}>
          <h3>{product.title}</h3>
        </div>
        <div className={styles["card-desc"]}>{product.description}</div>
      </div>
      <div className={styles["card-footer-div"]}>
        <div className={styles["card-price"]}>
          <span className={styles["product-price"]}>{product.price} $</span>
          <br />
          {discountedPrice && (
            <span className={styles["product-discounted-price"]}>
              {discountedPrice.toFixed(2)} $
            </span>
          )}
        </div>
        <div>
          <button
            onClick={() => addToCard(product)}
            className={styles["card-add-basket-button"]}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
      <div className={styles["card-discount"]}>
        {discountText && (
          <span>
            <CiDiscount1 />
            {discountText}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
