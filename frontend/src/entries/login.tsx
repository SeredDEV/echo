import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/layout/Header";
import Login from "../pages/Login";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/common/FloatingButtons";
import "../index.css";

import { CartProvider } from "../context/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Login />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </CartProvider>
  </React.StrictMode>
);
