import React, { createContext, useContext, useEffect, useState } from "react";
import { ApiContext } from "./ApiContext";

export const ProductPageContext = createContext();

export const ProductPageProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filters, setFilters] = useState({});
  const [sortingOption, setSortingOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products } = useContext(ApiContext);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const uniqueCategory = Array.from(
    new Set(products.map((product) => product.category))
  );
  const uniqueBrands = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleMinPriceChange = (event) => {
    const minVal = event.target.value;
    setMinPrice(minVal);
  };

  const handleMaxPriceChange = (event) => {
    const maxVal = event.target.value;
    setMaxPrice(maxVal);
  };

  const handleFilter = () => {
    const filters = {
      selectedCategory,
      selectedBrands,
      minPrice,
      maxPrice,
    };

    const isAnyFilterSelected =
      selectedCategory.length > 0 ||
      selectedBrands.length > 0 ||
      (minPrice !== "" && maxPrice !== "");

    if (isAnyFilterSelected) {
      handleFilterChange(filters);
    } else {
      handleFilterChange({});
    }
  };

  let filteredBrands = [];
  if (selectedCategory.length > 0) {
    const brandsBySelectedCategory = products
      .filter((product) => selectedCategory.includes(product.category))
      .map((product) => product.brand);
    filteredBrands = Array.from(new Set(brandsBySelectedCategory));
  } else {
    filteredBrands = uniqueBrands;
  }

  // let filteredProducts = [];

  useEffect(() => {
    if (filters && filters.selectedCategory && filters.selectedBrands) {
      const newFilteredProducts = products.filter((product) => {
        if (
          filters.selectedCategory.length > 0 &&
          !filters.selectedCategory.includes(product.category)
        ) {
          return false;
        }

        if (
          filters.selectedBrands.length > 0 &&
          !filters.selectedBrands.includes(product.brand)
        ) {
          return false;
        }

        if (
          (filters.minPrice !== "" &&
            parseInt(product.price) < parseInt(filters.minPrice)) ||
          (filters.maxPrice !== "" &&
            parseInt(product.price) > parseInt(filters.maxPrice))
        ) {
          return false;
        }

        return true;
      });
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [filters, products]);
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
    if (event.target.value === "price-low-to-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (event.target.value === "price-high-to-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      filteredProducts.sort((a, b) => a.id - b.id);
    }
  };

  const sharedValuesAndMethods = {
    selectedCategory,
    selectedBrands,
    minPrice,
    maxPrice,
    handleCategoryChange,
    handleBrandChange,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleFilter,
    handleFilterChange,
    filters,
    uniqueCategory,
    uniqueBrands,
    filteredBrands,
    handleSortingChange,
    sortingOption,
    filteredProducts,
  };
  return (
    <ProductPageContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ProductPageContext.Provider>
  );
};
