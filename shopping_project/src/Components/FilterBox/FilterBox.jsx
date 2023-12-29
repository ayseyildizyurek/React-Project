import React, { useState, useContext } from "react";
import styles from "./FilterBox.module.css";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ProductPageContext } from "../Contexts/ProductPageContext";

const FilterBox = () => {
  const {
    handleFilter,
    uniqueCategory,
    filteredBrands,
    minPrice,
    maxPrice,
    handleMinPriceChange,
    handleMaxPriceChange,
    selectedCategory,
    selectedBrands,
    handleCategoryChange,
    handleBrandChange,
  } = useContext(ProductPageContext);

  const applyFilters = () => {
    handleFilter();
  };

  return (
    <div className={styles["filter-box-div"]}>
      <div className={styles["filter-category"]}>
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Kategori</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {uniqueCategory.map((category) => (
                <div key={category}>
                  <input
                    type="checkbox"
                    name={category}
                    value={category}
                    checked={selectedCategory.includes(category)}
                    onChange={handleCategoryChange}
                  />
                  <label>{category}</label>
                </div>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles["filter-brand"]}>
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Marka</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {filteredBrands.map((brand) => (
                <div key={brand}>
                  <input
                    type="checkbox"
                    name={brand}
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                  />
                  <label>{brand}</label>
                </div>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles["filter-price"]}>
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Fiyat</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                <label>Min:</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div>
                <label>Max:</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles["filter-button"]}>
        <button onClick={applyFilters}>Filtrele</button>
      </div>
    </div>
  );
};

export default FilterBox;
