import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"; // Make sure this file exists
import ProductDetail from "./components/ProductDetail.tsx"; // Import this (create file in step 2)
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Add this line */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
