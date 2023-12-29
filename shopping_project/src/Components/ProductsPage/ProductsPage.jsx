import FilterBox from "../FilterBox/FilterBox";
import styles from "./ProductsPage.module.css";
import ProductsPageList from "../ProductsPageList/ProductsPageList";
const ProductsPage = () => {
  return (
    <div>
      <div className={styles["product-page-div"]}>
        <FilterBox />
        <ProductsPageList />
      </div>
    </div>
  );
};

export default ProductsPage;
