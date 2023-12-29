import React, { useContext } from "react";
import { ApiContext } from "../Contexts/ApiContext";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductCardList.module.css";

const ProductCardList = () => {
  const { products } = useContext(ApiContext);
  const filteredProducts = products.filter((product) => product.rating > 4.5);
  return (
    <div className={styles["product-list-main"]}>
      <div className={styles["product-list-heading-div"]}>
        <h1 className={styles["product-list-heading"]}>Popüler Ürünler</h1>
      </div>
      <div className={styles["product-list-cards"]}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
