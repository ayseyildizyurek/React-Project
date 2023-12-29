import React, { useContext, useState } from "react";
import styles from "./SortingDropdown.module.css";
import { ProductPageContext } from "../Contexts/ProductPageContext";

const SortingDropdown = () => {
  const { handleSortingChange, sortingOption } = useContext(ProductPageContext);

  return (
    <div className={styles["sorting-div"]}>
      <select value={sortingOption} onChange={handleSortingChange}>
        <option value="default">Varsayılan Sıralama</option>
        <option value="price-low-to-high">Fiyat - Artan</option>
        <option value="price-high-to-low">Fiyat - Azalan</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
