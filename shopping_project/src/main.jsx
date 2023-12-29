import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./Components/Contexts/ApiContext.jsx";
import { ProductPageProvider } from "./Components/Contexts/ProductPageContext.jsx";
import { ShoppingCardProvider } from "./Components/Contexts/ShoppingCardContext.jsx";
import { SliderProvider } from "./Components/Contexts/SliderContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ShopProvider>
    <ProductPageProvider>
      <ShoppingCardProvider>
        <SliderProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SliderProvider>
      </ShoppingCardProvider>
    </ProductPageProvider>
  </ShopProvider>
  // </React.StrictMode>
);
