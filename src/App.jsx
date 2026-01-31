import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/FooterContent";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
