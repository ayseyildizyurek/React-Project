import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Account from "./Components/Account/Account";
function App() {
  console.log("app");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
