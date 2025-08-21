import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Catalog from "./components/catalog";
import Wishlist from "./components/Wishlist";
import FilterBar from "./components/FilterBar";
import Home from "./components/Home";
import { products as allProducts } from "./data/products";
import "./style/catalog.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });
  const navigate = useNavigate();
  const location = useLocation(); // <-- Add this

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-background">
      {/* Show Wishlist button only if NOT on Home page */}
      {location.pathname !== "/" && (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "16px 32px 0 0" }}>
          <button
            style={{
              fontWeight: 600,
              fontSize: 18,
              background: "none",
              border: "none",
              color: "#e63946",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => navigate("/wishlist")}
          >
            Wishlist <span style={{ fontSize: 22, marginLeft: 6 }}>♥</span>
          </button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <>
              <FilterBar
                search={search}
                category={category}
                onSearchChange={setSearch}
                onCategoryChange={setCategory}
              />
              {/* Back button for category navigation */}
              {category !== "All" && (
                <button
                  style={{
                    margin: "10px 0 0 0",
                    padding: "8px 20px",
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                  onClick={() => setCategory("All")}
                >
                    Back 
                </button>
              )}
              <div className="catalog-container">
                <Catalog
                  products={filteredProducts}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                />
              </div>
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              products={allProducts}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;