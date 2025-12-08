import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/layout/Header";
import Shop from "./components/shop/Shop";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/common/FloatingButtons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Header />
      <Shop />
      <Footer />
      <FloatingButtons />
    </CartProvider>
  </React.StrictMode>
);
