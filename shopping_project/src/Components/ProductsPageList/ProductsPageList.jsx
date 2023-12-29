import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsPageList.module.css";
import SortingDropdown from "../SortingDropdown/SortingDropdown";
import { ProductPageContext } from "../Contexts/ProductPageContext";

const ProductsPageList = () => {
  const { filteredProducts } = useContext(ProductPageContext);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 9;
  const pagesVisited = pageNumber * productsPerPage;

  console.log(filteredProducts);
  const displayProducts = filteredProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => <ProductCard key={product.id} product={product} />);

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles["product-list-main"]}>
      <div className={styles["sorting-dropdown"]}>
        <SortingDropdown />
      </div>

      <div className={styles["product-list-cards"]}>{displayProducts}</div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles["pagination"]}
          activeClassName={styles["active"]}
        />
      </div>
    </div>
  );
};

export default ProductsPageList;
